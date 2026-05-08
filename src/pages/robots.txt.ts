import type { APIRoute } from "astro";
import { market } from "../data/current-market";

export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${market.site.url}/sitemap-index.xml`,
    ""
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
