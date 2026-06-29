export * from "./types";

export { advanceAutoParts } from "./advance-auto-parts";
export { apw } from "./apw";
export { autoPartsOutlet } from "./auto-parts-outlet";
export { autozone } from "./autozone";
export { carpartsWarehouse } from "./carparts-warehouse";
export { carpartsCom } from "./carparts-com";
export { factoryMotorParts } from "./factory-motor-parts";
export { jegs } from "./jegs";
export { lkqCorporation } from "./lkq-corporation";
export { napaAutoParts } from "./napa-auto-parts";
export { oreillyAutoParts } from "./oreilly-auto-parts";
export { partsAuthority } from "./parts-authority";
export { partsgeek } from "./partsgeek";
export { rockauto } from "./rockauto";
export { summitRacing } from "./summit-racing";
export { thePartsHouse } from "./the-parts-house";
export { worldpac } from "./worldpac";

import type { PartsRetailer } from "./types";
import { advanceAutoParts } from "./advance-auto-parts";
import { apw } from "./apw";
import { autoPartsOutlet } from "./auto-parts-outlet";
import { autozone } from "./autozone";
import { carpartsWarehouse } from "./carparts-warehouse";
import { carpartsCom } from "./carparts-com";
import { factoryMotorParts } from "./factory-motor-parts";
import { jegs } from "./jegs";
import { lkqCorporation } from "./lkq-corporation";
import { napaAutoParts } from "./napa-auto-parts";
import { oreillyAutoParts } from "./oreilly-auto-parts";
import { partsAuthority } from "./parts-authority";
import { partsgeek } from "./partsgeek";
import { rockauto } from "./rockauto";
import { summitRacing } from "./summit-racing";
import { thePartsHouse } from "./the-parts-house";
import { worldpac } from "./worldpac";

/** All automotive parts retailers and distributors. */
export const partsRetailers: PartsRetailer[] = [
  advanceAutoParts,
  apw,
  autoPartsOutlet,
  autozone,
  carpartsWarehouse,
  carpartsCom,
  factoryMotorParts,
  jegs,
  lkqCorporation,
  napaAutoParts,
  oreillyAutoParts,
  partsAuthority,
  partsgeek,
  rockauto,
  summitRacing,
  thePartsHouse,
  worldpac,
];

/** Look up a parts retailer by its (case-insensitive) name. */
export function getPartsRetailer(
  name: string,
): PartsRetailer | undefined {
  const n = name.toLowerCase();
  return partsRetailers.find((r) => r.name.toLowerCase() === n);
}
