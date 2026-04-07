import { writeFile } from "node:fs/promises";
import path from "node:path";
import { defaultMarket, normalizeMarket } from "./market-config.mjs";

const market = normalizeMarket(process.argv[2] ?? defaultMarket);
const exportLine = [
  'import { markets } from "./markets/index.ts";',
  `export const market = markets["${market}"];`,
  ""
].join("\n");

await writeFile(path.join(process.cwd(), "src", "data", "selected-market.ts"), exportLine, "utf8");
