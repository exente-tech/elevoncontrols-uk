import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { defaultMarket, marketDomains, normalizeMarket } from "./market-config.mjs";

const market = normalizeMarket(process.argv[2] ?? defaultMarket);

await mkdir(path.join(process.cwd(), "dist"), { recursive: true });
await writeFile(path.join(process.cwd(), "dist", "CNAME"), `${marketDomains[market]}\n`, "utf8");
await writeFile(path.join(process.cwd(), "dist", ".nojekyll"), "", "utf8");
