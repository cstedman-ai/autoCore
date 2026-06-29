export * from "./types";

export { autotrader } from "./autotrader";
export { bringATrailer } from "./bring-a-trailer";
export { cargurus } from "./cargurus";
export { carmax } from "./carmax";
export { carsAndBids } from "./cars-and-bids";
export { carvana } from "./carvana";
export { carwow } from "./carwow";
export { craigslist } from "./craigslist";
export { edmunds } from "./edmunds";
export { facebookMarketplace } from "./facebook-marketplace";
export { keysavvy } from "./keysavvy";
export { peddle } from "./peddle";

import type { OnlineMarketplace } from "./types";
import { autotrader } from "./autotrader";
import { bringATrailer } from "./bring-a-trailer";
import { cargurus } from "./cargurus";
import { carmax } from "./carmax";
import { carsAndBids } from "./cars-and-bids";
import { carvana } from "./carvana";
import { carwow } from "./carwow";
import { craigslist } from "./craigslist";
import { edmunds } from "./edmunds";
import { facebookMarketplace } from "./facebook-marketplace";
import { keysavvy } from "./keysavvy";
import { peddle } from "./peddle";

/** All automotive online-marketplace profiles. */
export const onlineMarketplaces: OnlineMarketplace[] = [
  autotrader,
  bringATrailer,
  cargurus,
  carmax,
  carsAndBids,
  carvana,
  carwow,
  craigslist,
  edmunds,
  facebookMarketplace,
  keysavvy,
  peddle,
];

/** Look up a marketplace by its (case-insensitive) name. */
export function getOnlineMarketplace(
  name: string,
): OnlineMarketplace | undefined {
  const n = name.toLowerCase();
  return onlineMarketplaces.find((m) => m.name.toLowerCase() === n);
}
