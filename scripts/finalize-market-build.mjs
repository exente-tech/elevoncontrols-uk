import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const market = (process.argv[2] ?? "uk").toLowerCase() === "ro" ? "ro" : "uk";
const domains = {
  uk: "elevoncontrols.co.uk",
  ro: "elevoncontrols.ro"
};

await mkdir(path.join(process.cwd(), "dist"), { recursive: true });
await writeFile(path.join(process.cwd(), "dist", "CNAME"), `${domains[market]}\n`, "utf8");
await writeFile(path.join(process.cwd(), "dist", ".nojekyll"), "", "utf8");
