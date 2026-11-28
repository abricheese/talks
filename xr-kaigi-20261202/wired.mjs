// Mac で動かす小さな中継（Node 18 以降、追加のインストール不要）。
// GitHub Pages の発表者画面・投影・Aura のページは、開いたままこの中継にもつながる。
//   - 有線：Aura を USB-C でつなぐと、ネットがなくてもページ送りが届く（adb reverse を自動でかける）
//   - X 投稿：トークンをブラウザに渡さずに、ハッシュタグ付きの投稿を取ってくる
//
//   node wired.mjs                      有線だけ
//   X_BEARER_TOKEN=xxxx node wired.mjs  有線と X 投稿
//   X_MOCK=1 node wired.mjs             X はテスト投稿
//
// 環境変数
//   X_BEARER_TOKEN   X API の Bearer Token（なければ X欄は出ない）
//   X_QUERY          検索条件（既定：#XRKaigi #XRm鹿児島 -is:retweet　＝両方を含む投稿だけ）
//   X_INTERVAL       Xに問い合わせる間隔（秒、既定 15）
//   X_MAX_POSTS      読み取る投稿数の上限（既定 1500。超えたら止める＝費用の上限）
//
// - Mac の 127.0.0.1:8787 だけで待ち受け、abricheese.github.io と localhost のページにだけ答える
// - 止めるときは Control + C
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { pathToFileURL } from "node:url";

export const port = Number(process.env.PORT || 8787);
const token = process.env.X_BEARER_TOKEN || "";
const query = process.env.X_QUERY || "#XRKaigi #XRm鹿児島 -is:retweet";   // 2つを両方含む投稿だけ（この講演の実況だけを拾う）
const interval = Number(process.env.X_INTERVAL || 15) * 1000;
const maxPosts = Number(process.env.X_MAX_POSTS || 1500);
const mock = process.env.X_MOCK === "1";

export const okOrigin = o => /^https:\/\/abricheese\.github\.io$/.test(o || "") || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o || "");
const cors = req => okOrigin(req.headers.origin)
  ? { "access-control-allow-origin": req.headers.origin, vary: "origin", "access-control-allow-private-network": "true", "access-control-allow-local-network": "true", "access-control-allow-headers": "content-type", "access-control-allow-methods": "GET, POST, OPTIONS" }
  : {};

// ---- X 投稿の取得（ブラウザから見られている間だけ問い合わせる）
const posts = [];
let newest = "", lastAsked = 0, lastError = "", readCount = 0, timer = null;

async function pull() {
  if (Date.now() - lastAsked > 60000) { clearInterval(timer); timer = null; return; }   // 誰も見ていなければ止める
  if (readCount >= maxPosts) { lastError = "上限に達したので取得を止めました"; return; }
  if (mock) { addMock(); return; }
  const url = new URL("https://api.x.com/2/tweets/search/recent");
  url.searchParams.set("query", query);
  url.searchParams.set("max_results", "50");
  url.searchParams.set("tweet.fields", "created_at,attachments");
  url.searchParams.set("expansions", "author_id,attachments.media_keys");
  url.searchParams.set("user.fields", "name,username,profile_image_url");
  url.searchParams.set("media.fields", "url,preview_image_url,type");
  if (newest) url.searchParams.set("since_id", newest);
  try {
    const r = await fetch(url, { headers: { authorization: "Bearer " + token } });
    if (!r.ok) { lastError = "X API " + r.status; return; }
    const data = await r.json();
    const users = new Map((data.includes?.users || []).map(u => [u.id, u]));
    const media = new Map((data.includes?.media || []).map(m => [m.media_key, m]));
    const fresh = (data.data || []).reverse().map(t => {
      const u = users.get(t.author_id) || {};
      const m = (t.attachments?.media_keys || []).map(k => media.get(k)).find(Boolean);
      return { id: t.id, name: u.name || "", user: u.username || "", icon: u.profile_image_url || "", text: t.text.replace(/\s*https:\/\/t\.co\/\S+$/g, ""), image: m ? (m.url || m.preview_image_url || "") : "" };
    });
    readCount += fresh.length;
    if (data.meta?.newest_id) newest = data.meta.newest_id;
    posts.push(...fresh);
    while (posts.length > 100) posts.shift();
    lastError = "";
    if (fresh.length) console.log(`X: ${fresh.length}件（累計 ${readCount}件、概算 $${(readCount * 0.015).toFixed(2)} 以下）`);
  } catch (e) { lastError = "X API に届かない: " + e.message; }
}

let mockN = 0;
function addMock() {
  if (Math.random() < 0.5) return;
  mockN++;
  posts.push({ id: String(Date.now()) + mockN, name: "テスト" + mockN, user: "test" + mockN, icon: "", text: `（テスト投稿 ${mockN}） #XRKaigi #XRm鹿児島`, image: "" });
  newest = posts[posts.length - 1].id;
}

function feed(req, res) {
  lastAsked = Date.now();
  const since = new URL(req.url, "http://x").searchParams.get("since_id") || "";
  if (!token && !mock) return json(res, 503, { ok: false, error: "X_BEARER_TOKEN がありません" }, req);
  if (!timer) { pull(); timer = setInterval(pull, interval); }
  if (lastError && !posts.length) return json(res, 502, { ok: false, error: lastError }, req);
  const list = since ? posts.filter(p => BigInt(p.id) > BigInt(since)) : posts.slice(-20);
  json(res, 200, { ok: true, posts: list, newest: posts.length ? posts[posts.length - 1].id : since, warning: lastError || undefined }, req);
}

function json(res, status, body, req) {
  res.writeHead(status, { ...cors(req), "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
  res.end(JSON.stringify(body));
}


// ---- 有線の同期（発表者画面と Aura のあいだ）
const clients = new Set();
let auraSeen = 0;
function busEvents(req, res) {
  res.writeHead(200, { ...cors(req), "content-type": "text/event-stream; charset=utf-8", "cache-control": "no-store", connection: "keep-alive" });
  res.write("retry: 1000\n\n");
  clients.add(res);
  const ping = setInterval(() => res.write(": ping\n\n"), 15000);
  req.on("close", () => { clearInterval(ping); clients.delete(res); });
}
function busSend(req, res) {
  let body = "";
  req.setEncoding("utf8");
  req.on("data", c => { body += c; if (body.length > 2e6) req.destroy(); });
  req.on("end", () => {
    let m;
    try { m = JSON.parse(body); } catch { res.writeHead(400); return res.end(); }
    if (m && m.type === "aura-hello") auraSeen = Date.now();
    const line = "data: " + body.replace(/\n/g, " ") + "\n\n";
    for (const c of clients) c.write(line);
    res.writeHead(204, { ...cors(req), "cache-control": "no-store" }); res.end();
  });
}

// /api/ で始まる道を受け持つ。受け持ったら true
export function handleApi(req, res) {
  const path = new URL(req.url, "http://x").pathname;
  if (!path.includes("/api/")) return false;
  if (req.headers.origin && !okOrigin(req.headers.origin)) { res.writeHead(403); res.end(); return true; }
  if (req.method === "OPTIONS") { res.writeHead(204, cors(req)); res.end(); return true; }
  if (path.endsWith("/api/x")) { feed(req, res); return true; }
  if (path.endsWith("/api/bus/events")) { busEvents(req, res); return true; }
  if (path.endsWith("/api/bus") && req.method === "POST") { busSend(req, res); return true; }
  return false;
}

// adb reverse を数秒ごとにかけ直す（抜き差ししても戻る）
export function keepAdbReverse() {
  let state = "";
  const run = () => execFile("adb", ["reverse", `tcp:${port}`, `tcp:${port}`], { timeout: 4000 }, (err, _out, errOut) => {
    let s;
    if (err && err.code === "ENOENT") s = "adb が見つかりません（Aura を有線でつなぐなら brew install --cask android-platform-tools）";
    else if (err) s = /unauthorized/.test(errOut) ? "Aura で「USB デバッグを許可」を押してください" : /no devices|not found/.test(errOut) ? "Aura はまだ USB でつながっていません" : "adb：" + (errOut || err.message).trim().split("\n")[0];
    else s = "Aura と USB でつながっています";
    if (s !== state) { state = s; console.log(s); }
    if (!(err && err.code === "ENOENT")) setTimeout(run, 3000);
  });
  run();
  let shown = "";
  setInterval(() => {
    const s = Date.now() - auraSeen < 10000 ? "Aura のページ：届いています" : "Aura のページ：まだ届いていません";
    if (s !== shown) { shown = s; console.log(s); }
  }, 2000);
}

export function xStatus() { return token ? "X投稿：取得する" : mock ? "X投稿：テスト投稿" : "X投稿：トークンがないので出さない"; }

// 直接動かした時だけ待ち受ける（server.mjs から読み込まれた時は何もしない）
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  createServer((req, res) => {
    if (handleApi(req, res)) return;
    res.writeHead(200, { ...cors(req), "content-type": "text/plain; charset=utf-8" });
    res.end("XR Kaigi の中継：動いています\n");
  }).on("error", e => {
    console.log(e.code === "EADDRINUSE" ? "8787 番がもう使われています。server.mjs か、もう一つの wired.mjs が動いていないか確認してください。" : "止まりました：" + e.message);
    process.exit(1);
  }).listen(port, "127.0.0.1", () => {
    console.log("中継：動いています（このウィンドウは閉じずに置いておく。止めるときは Control + C）");
    console.log(xStatus());
    console.log("Mac：Chrome で https://abricheese.github.io/talks/xr-kaigi-20261202/presenter.html");
    console.log("Aura：Aura の Chrome で https://abricheese.github.io/talks/xr-kaigi-20261202/aura.html");
    keepAdbReverse();
  });
}
