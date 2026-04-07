import { deMarket } from "./de";
import { roMarket } from "./ro";
import { ukMarket } from "./uk";
import type { MarketDefinition } from "./types";

export const markets = {
  uk: ukMarket,
  ro: roMarket,
  de: deMarket
} satisfies Record<string, MarketDefinition>;

export type MarketKey = keyof typeof markets;

export const defaultMarket: MarketKey = "uk";
export const marketKeys = Object.keys(markets) as MarketKey[];
