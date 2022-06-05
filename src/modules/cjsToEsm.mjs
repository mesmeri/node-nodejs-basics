import path from "path";
import url from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { readFile } from "fs/promises";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

const a = JSON.parse(
  await readFile(new URL("./files/a.json", import.meta.url))
);

const b = JSON.parse(
  await readFile(new URL("./files/b.json", import.meta.url))
);

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

console.log({ unknownObject });

export default {
  unknownObject,
  createMyServer,
};
