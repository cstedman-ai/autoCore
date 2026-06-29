export * from "./types";

export { aBetterBid } from "./a-better-bid";
export { adesa } from "./adesa";
export { autoAuctionMall } from "./auto-auction-mall";
export { autobidmaster } from "./autobidmaster";
export { autonationAutoAuctions } from "./autonation-auto-auctions";
export { barrettJackson } from "./barrett-jackson";
export { carsAndBids } from "./cars-and-bids";
export { copart } from "./copart";
export { dashub } from "./dashub";
export { ebayMotors } from "./ebay-motors";
export { erepairables } from "./erepairables";
export { gsaAutoAuctions } from "./gsa-auto-auctions";
export { iaai } from "./iaai";
export { insuranceAuctionsUsaInc } from "./insurance-auctions-usa-inc";
export { manheim } from "./manheim";
export { mecumAuctions } from "./mecum-auctions";
export { oveCom } from "./ove-com";
export { purpleWave } from "./purple-wave";
export { ridesafely } from "./ridesafely";
export { salvagebid } from "./salvagebid";
export { scaAuctions } from "./sca-auctions";

import type { AuctionSite } from "./types";
import { aBetterBid } from "./a-better-bid";
import { adesa } from "./adesa";
import { autoAuctionMall } from "./auto-auction-mall";
import { autobidmaster } from "./autobidmaster";
import { autonationAutoAuctions } from "./autonation-auto-auctions";
import { barrettJackson } from "./barrett-jackson";
import { carsAndBids } from "./cars-and-bids";
import { copart } from "./copart";
import { dashub } from "./dashub";
import { ebayMotors } from "./ebay-motors";
import { erepairables } from "./erepairables";
import { gsaAutoAuctions } from "./gsa-auto-auctions";
import { iaai } from "./iaai";
import { insuranceAuctionsUsaInc } from "./insurance-auctions-usa-inc";
import { manheim } from "./manheim";
import { mecumAuctions } from "./mecum-auctions";
import { oveCom } from "./ove-com";
import { purpleWave } from "./purple-wave";
import { ridesafely } from "./ridesafely";
import { salvagebid } from "./salvagebid";
import { scaAuctions } from "./sca-auctions";

/** All autoCore auction and salvage sites. */
export const auctionSites: AuctionSite[] = [
  aBetterBid,
  adesa,
  autoAuctionMall,
  autobidmaster,
  autonationAutoAuctions,
  barrettJackson,
  carsAndBids,
  copart,
  dashub,
  ebayMotors,
  erepairables,
  gsaAutoAuctions,
  iaai,
  insuranceAuctionsUsaInc,
  manheim,
  mecumAuctions,
  oveCom,
  purpleWave,
  ridesafely,
  salvagebid,
  scaAuctions,
];

/** Look up an auction site by its (case-insensitive) name. */
export function getAuctionSite(
  name: string,
): AuctionSite | undefined {
  const n = name.toLowerCase();
  return auctionSites.find((r) => r.name.toLowerCase() === n);
}
