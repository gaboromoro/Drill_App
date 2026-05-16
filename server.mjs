import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const port = 8137;
const koren = fileURLToPath(new URL(".", import.meta.url));

const typy = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav"
};

const server = createServer(async (poziadavka, odpoved) => {
  const url = new URL(poziadavka.url, `http://127.0.0.1:${port}`);
  const cesta = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname.slice(1));
  const subor = normalize(join(koren, cesta));

  if (!subor.startsWith(normalize(koren))) {
    odpoved.writeHead(403);
    odpoved.end("Zakazany pristup");
    return;
  }

  try {
    const obsah = await readFile(subor);
    odpoved.writeHead(200, { "Content-Type": typy[extname(subor)] || "application/octet-stream" });
    odpoved.end(obsah);
  } catch {
    odpoved.writeHead(404);
    odpoved.end("Subor sa nenasiel");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Mini drill bezi na http://127.0.0.1:${port}`);
});
