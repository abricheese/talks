// ネットが全くない時の最終手段：ページも Mac から配る（Node 18以降、追加のインストール不要）。
// ふだんは GitHub Pages のページ＋ wired.mjs（中継）だけでよい。
//   node server.mjs   → http://localhost:8787/xr-kaigi-20261202/presenter.html
// - talks リポジトリ直下をそのまま配信する（共通ビューアを ../viewer から読むため）
// - 有線の同期と X 投稿は wired.mjs と同じもの（環境変数も同じ）
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { handleApi, keepAdbReverse, xStatus, port } from "./wired.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = normalize(join(here, ".."));

const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".svg": "image/svg+xml", ".mp4": "video/mp4", ".webm": "video/webm", ".wasm": "application/wasm", ".tflite": "application/octet-stream", ".glb": "model/gltf-binary" };

createServer(async (req, res) => {
  if (handleApi(req, res)) return;
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = normalize(join(root, path));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  try {
    if ((await stat(file)).isDirectory()) file = join(file, "index.html");
    const body = await readFile(file), type = types[extname(file)] || "application/octet-stream";
    // 動画の好きな位置に飛べるよう、範囲指定の読み込みに応える
    const m = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || "");
    if (m && (m[1] || m[2])) {
      const size = body.length;
      let a = m[1] ? +m[1] : size - +m[2], b = m[1] && m[2] ? Math.min(+m[2], size - 1) : size - 1;
      if (a >= size || a > b) { res.writeHead(416, { "content-range": `bytes */${size}` }); return res.end(); }
      res.writeHead(206, { "content-type": type, "content-range": `bytes ${a}-${b}/${size}`, "accept-ranges": "bytes", "content-length": b - a + 1, "cache-control": "no-cache" });
      return res.end(body.subarray(a, b + 1));
    }
    res.writeHead(200, { "content-type": type, "accept-ranges": "bytes", "cache-control": "no-cache" });
    res.end(body);
  } catch { res.writeHead(404); res.end("not found"); }
}).listen(port, "127.0.0.1", () => {
  console.log(`ネットなしの最終手段：Mac の Chrome で http://localhost:${port}/xr-kaigi-20261202/presenter.html`);
  console.log(`Aura は USB-C でつなぎ、Aura の Chrome で http://localhost:${port}/xr-kaigi-20261202/aura.html`);
  console.log(xStatus());
  keepAdbReverse();
});
