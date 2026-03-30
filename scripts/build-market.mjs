import { mkdir, writeFile } from "node:fs/promises";
import { execSync } from "node:child_process";
import path from "node:path";

const market = (process.argv[2] ?? process.env.PUBLIC_MARKET ?? "uk").toLowerCase() === "ro" ? "ro" : "uk";
const defaults = {
  uk: {
    siteUrl: "https://www.elevoncontrols.co.uk",
    domain: "elevoncontrols.co.uk"
  },
  ro: {
    siteUrl: "https://www.elevoncontrols.ro",
    domain: "elevoncontrols.ro"
  }
};

const env = {
  ...process.env,
  PUBLIC_MARKET: market,
  SITE_URL: process.env.SITE_URL ?? defaults[market].siteUrl,
  CNAME_DOMAIN: process.env.CNAME_DOMAIN ?? defaults[market].domain
};

execSync("npm run build", {
  stdio: "inherit",
  env,
  cwd: process.cwd()
});

await mkdir(path.join(process.cwd(), "dist"), { recursive: true });
await writeFile(path.join(process.cwd(), "dist", "CNAME"), `${env.CNAME_DOMAIN}\n`, "utf8");
await writeFile(path.join(process.cwd(), "dist", ".nojekyll"), "", "utf8");
