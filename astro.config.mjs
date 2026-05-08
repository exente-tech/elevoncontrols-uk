import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";
import { marketSiteUrls, defaultMarket } from "./scripts/market-config.mjs";

// Derive current market from the generated selected-market.ts
let currentMarket = defaultMarket;
try {
  const src = readFileSync("src/data/selected-market.ts", "utf8");
  const match = src.match(/markets\["(\w+)"\]/);
  if (match) currentMarket = match[1];
} catch {}

const siteUrl = marketSiteUrls[currentMarket] ?? marketSiteUrls[defaultMarket];

export default defineConfig({
  output: "static",
  site: siteUrl,
  integrations: [sitemap()]
});
