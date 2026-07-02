import { copyFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(scriptDir, "..", "dist", "public");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");

await access(indexPath);
await copyFile(indexPath, fallbackPath);
