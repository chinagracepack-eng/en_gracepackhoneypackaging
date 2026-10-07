import { createReadStream, existsSync, statSync, readFileSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8"
};

function resolveFile(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  const safePath = normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  const directPath = join(root, safePath);

  if (existsSync(directPath) && statSync(directPath).isFile()) return directPath;
  if (existsSync(join(directPath, "index.html"))) return join(directPath, "index.html");
  return join(root, "404.html");
}

createServer((request, response) => {
  const incoming = new URL(request.url || "/", "http://localhost");
  const redirects = JSON.parse(readFileSync(join(root, "../vercel.json"), "utf8")).redirects || [];
  const redirect = redirects.find(item => item.source.replace(/\/$/, "") === incoming.pathname.replace(/\/$/, ""));
  if (redirect) { response.writeHead(308, {Location: redirect.destination + incoming.search}); response.end(); return; }
  const filePath = resolveFile(request.url || "/");
  const is404 = filePath.endsWith("404.html") && !request.url?.startsWith("/404");
  response.writeHead(is404 ? 404 : 200, {
    "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream"
  });
  const stream = createReadStream(filePath);
  stream.on("error", () => response.destroy());
  stream.pipe(response);
}).listen(port, () => {
  console.log(`Gracepack static preview ready: http://127.0.0.1:${port}`);
});
