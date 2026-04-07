export const defaultMarket = "uk";

export const marketDomains = {
  uk: "www.elevoncontrols.co.uk",
  ro: "www.elevoncontrols.ro",
  de: "elevoncontrols.de"
};

export const marketSiteUrls = {
  uk: "https://www.elevoncontrols.co.uk",
  ro: "https://www.elevoncontrols.ro",
  de: "https://www.elevoncontrols.de"
};

export const supportedMarkets = Object.keys(marketDomains);

export function normalizeMarket(input) {
  const candidate = String(input ?? defaultMarket).toLowerCase();
  return supportedMarkets.includes(candidate) ? candidate : defaultMarket;
}
