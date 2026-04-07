import { mkdir, writeFile } from "node:fs/promises";
import { execSync } from "node:child_process";
import path from "node:path";
import { defaultMarket, marketDomains, marketSiteUrls, normalizeMarket } from "./market-config.mjs";

const market = normalizeMarket(process.argv[2] ?? process.env.PUBLIC_MARKET ?? defaultMarket);

const env = {
  ...process.env,
  PUBLIC_MARKET: market,
  SITE_URL: process.env.SITE_URL ?? marketSiteUrls[market],
  CNAME_DOMAIN: process.env.CNAME_DOMAIN ?? marketDomains[market]
};

execSync("npm run build", {
  stdio: "inherit",
  env,
  cwd: process.cwd()
});

await mkdir(path.join(process.cwd(), "dist"), { recursive: true });
await writeFile(path.join(process.cwd(), "dist", "CNAME"), `${env.CNAME_DOMAIN}\n`, "utf8");
await writeFile(path.join(process.cwd(), "dist", ".nojekyll"), "", "utf8");
