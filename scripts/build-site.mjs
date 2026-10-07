import { spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const run = (args) => {
 const result = spawnSync(process.execPath, args, { stdio: "inherit", env: { ...process.env, NODE_ENV: "production" } });
 if (result.status !== 0) process.exit(result.status || 1);
};
run(["scripts/build-responsive-images.mjs"]);
run(["node_modules/next/dist/bin/next", "build"]);
const detail = JSON.parse(readFileSync(".next/export-detail.json", "utf8"));
if (!detail.success || path.resolve(detail.outDirectory) !== path.resolve("out") || !existsSync("out/index.html")) {
 throw new Error("L'export statique n'est pas disponible dans le dossier de prévisualisation out.");
}
run(["scripts/verify-fr-site.mjs"]);
run(["scripts/check-catalog-schema.mjs"]);
console.log("Export validé : out est le dossier unique de prévisualisation et de publication.");
