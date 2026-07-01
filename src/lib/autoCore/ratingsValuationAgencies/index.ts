export * from "./types";

export { blackBook } from "./black-book";
export { carAndDriver } from "./car-and-driver";
export { carfax } from "./carfax";
export { cargurus } from "./cargurus";
export { carmax } from "./carmax";
export { consumerReports } from "./consumer-reports";
export { edmunds } from "./edmunds";
export { euroNcap } from "./euro-ncap";
export { insuranceInstituteForHighwaySafety } from "./insurance-institute-for-highway-safety";
export { jDPower } from "./j-d-power";
export { kelleyBlueBook } from "./kelley-blue-book";
export { motortrend } from "./motortrend";
export { nhtsa } from "./nhtsa";
export { roadAndTrack } from "./road-and-track";
export { truecar } from "./truecar";
export { whatCar } from "./what-car";

import type { RatingValuationAgency } from "./types";
import { blackBook } from "./black-book";
import { carAndDriver } from "./car-and-driver";
import { carfax } from "./carfax";
import { cargurus } from "./cargurus";
import { carmax } from "./carmax";
import { consumerReports } from "./consumer-reports";
import { edmunds } from "./edmunds";
import { euroNcap } from "./euro-ncap";
import { insuranceInstituteForHighwaySafety } from "./insurance-institute-for-highway-safety";
import { jDPower } from "./j-d-power";
import { kelleyBlueBook } from "./kelley-blue-book";
import { motortrend } from "./motortrend";
import { nhtsa } from "./nhtsa";
import { roadAndTrack } from "./road-and-track";
import { truecar } from "./truecar";
import { whatCar } from "./what-car";

/** All automotive rating/valuation agency profiles. */
export const ratingsValuationAgencies: RatingValuationAgency[] = [
  blackBook,
  carAndDriver,
  carfax,
  cargurus,
  carmax,
  consumerReports,
  edmunds,
  euroNcap,
  insuranceInstituteForHighwaySafety,
  jDPower,
  kelleyBlueBook,
  motortrend,
  nhtsa,
  roadAndTrack,
  truecar,
  whatCar,
];

/** Look up an agency by its (case-insensitive) name. */
export function getRatingValuationAgency(
  name: string,
): RatingValuationAgency | undefined {
  const n = name.toLowerCase();
  return ratingsValuationAgencies.find((a) => a.name.toLowerCase() === n);
}
