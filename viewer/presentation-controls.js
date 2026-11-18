// A deck supplies its ordered slide IDs, current index and renderer.
function installPresentationControls(deck) {
  const bar = document.querySelector(".status-strip");
  const stage = document.querySelector(".stage");
  const previous = bar.querySelector("[data-prev]");
  const next = bar.querySelector("[data-next]");
  const fullscreen = bar.querySelector("[data-fullscreen]");
  const root = document.documentElement;
  const storageKey = "presentation-position:" + location.pathname;
  let gesture;
  let hideTimer;

  function resolve(value) {
    const index = deck.slides().findIndex(slide => slide.id === value);
    if (index >= 0) return index;
    if (value && /^\d+$/.test(value)) return Number(value) - 1;
    return -1;
  }

  function readHash() {
    try { return decodeURIComponent(location.hash.slice(1)); } catch { return ""; }
  }

  function restore() {
    let value = readHash();
    if (!value) {
      try { value = localStorage.getItem(storageKey); } catch {}
    }
    deck.go(Math.max(0, resolve(value)));
  }

  function update() {
    const index = deck.index();
    const slides = deck.slides();
    const id = slides[index].id || String(index + 1);
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    try { localStorage.setItem(storageKey, id); } catch {}
    if (readHash() !== id) {
      try { history.replaceState(history.state, "", "#" + encodeURIComponent(id)); }
      catch { location.replace("#" + encodeURIComponent(id)); }
    }
  }

  const isNativeFull = () => Boolean(document.fullscreenElement || document.webkitFullscreenElement);
  function wakeControls() {
    root.classList.remove("quiet");
    clearTimeout(hideTimer);
    if (root.classList.contains("projecting")) {
      hideTimer = setTimeout(() => root.classList.add("quiet"), 2400);
    }
  }
  function syncFull() {
    const projecting = isNativeFull() || root.classList.contains("expanded");
    root.classList.toggle("projecting", projecting);
    fullscreen.setAttribute("aria-pressed", String(projecting));
    fullscreen.textContent = projecting ? "全画面を終了" : "全画面";
    wakeControls();
  }
  async function toggleFull() {
    if (root.classList.contains("expanded")) {
      root.classList.remove("expanded");
    } else if (isNativeFull()) {
      await (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
    } else {
      const request = root.requestFullscreen || root.webkitRequestFullscreen;
      try {
        if (request) await request.call(root);
        else root.classList.add("expanded");
      } catch { root.classList.add("expanded"); }
    }
    syncFull();
  }

  function move(step) { deck.go(deck.index() + step); }
  previous.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));
  fullscreen.addEventListener("click", () => void toggleFull());
  for (const event of ["fullscreenchange", "webkitfullscreenchange"]) document.addEventListener(event, syncFull);
  for (const event of ["pointermove", "pointerdown", "focusin"]) document.addEventListener(event, wakeControls, {passive: true});
  addEventListener("hashchange", restore);
  document.addEventListener("keydown", event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.isComposing || event.defaultPrevented) return;
    const key = event.key.toLowerCase();
    if (event.target.closest("input, textarea, select, [contenteditable=true]")) return;
    if (key === " " && event.target.closest("button, a")) return;
    if (["arrowright", "arrowdown", "pagedown", " "].includes(key)) move(1);
    else if (["arrowleft", "arrowup", "pageup"].includes(key)) move(-1);
    else if (key === "home") deck.go(0);
    else if (key === "end") deck.go(deck.slides().length - 1);
    else if (key === "f" && !event.repeat) void toggleFull();
    else if (key === "escape" && root.classList.contains("expanded")) void toggleFull();
    else return;
    event.preventDefault();
  });
  stage.addEventListener("pointerdown", event => {
    if (event.button !== 0 || !event.isPrimary || event.target.closest("button, a, input, video, select")) return;
    gesture = {id: event.pointerId, x: event.clientX, y: event.clientY};
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener("pointerup", event => {
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    gesture = null;
    if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      move(dx < 0 ? 1 : -1);
    } else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      const box = stage.getBoundingClientRect();
      move(event.clientX - box.left < box.width * .3 ? -1 : 1);
    }
  });
  stage.addEventListener("pointercancel", () => { gesture = null; });
  syncFull();
  return {restore, update};
}

// Hosted slide edits are applied in place. A new viewer program needs a full reload.
function followPresentationUpdates(applyManifest) {
  let version = document.querySelector('meta[name="viewer-version"]')?.content;
  const viewer = document.querySelector('meta[name="viewer-revision"]')?.content;
  if (!version) return;
  const local = location.protocol === "file:";
  let checking = false;
  window.onDeckVersion = incoming => {
    if (typeof incoming === "string" && incoming !== version) location.reload();
  };
  async function check() {
    if (document.hidden || checking) return;
    checking = true;
    try {
      if (local) {
        // A standalone copy without its optional companion still projects offline.
        await new Promise(resolve => {
          const script = document.createElement("script");
          script.onload = script.onerror = () => { script.remove(); resolve(); };
          script.src = "viewer-update.js?t=" + Date.now();
          document.head.append(script);
        });
        return;
      }
      const response = await fetch("version.json", {cache: "no-store"});
      if (!response.ok) return;
      const update = await response.json();
      if (!update.version || update.version === version) return;
      if (update.viewer !== viewer) { location.reload(); return; }
      const manifest = await fetch(update.manifest, {cache: "no-store"});
      if (!manifest.ok) return;
      const revised = await manifest.json();
      if (revised.version !== update.version || revised.viewer !== viewer) return;
      applyManifest(revised);
      version = update.version;
    } catch {
      // The current slide remains usable during a dropped connection or deployment.
    } finally { checking = false; }
  }
  setInterval(check, 5000);
  document.addEventListener("visibilitychange", check);
  window.addEventListener("focus", check);
}
