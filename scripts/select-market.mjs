import { writeFile } from "node:fs/promises";
import path from "node:path";

const market = (process.argv[2] ?? "uk").toLowerCase() === "ro" ? "ro" : "uk";
const exportLine = market === "ro"
  ? 'export { roMarket as market } from "./markets/ro.ts";\n'
  : 'export { ukMarket as market } from "./markets/uk.ts";\n';

await writeFile(path.join(process.cwd(), "src", "data", "selected-market.ts"), exportLine, "utf8");
