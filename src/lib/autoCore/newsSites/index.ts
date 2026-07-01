export * from "./types";

export { autoTimesNews } from "./auto-times-news";
export { autocar } from "./autocar";
export { automotiveNews } from "./automotive-news";
export { automotiveNewsEurope } from "./automotive-news-europe";
export { automotiveToday } from "./automotive-today";
export { automotiveWorld } from "./automotive-world";
export { autoweek } from "./autoweek";
export { carAndDriver } from "./car-and-driver";
export { carbuzz } from "./carbuzz";
export { carscoops } from "./carscoops";
export { greenCarReports } from "./green-car-reports";
export { hemmings } from "./hemmings";
export { indiaCarNews } from "./india-car-news";
export { insideevs } from "./insideevs";
export { jalopnik } from "./jalopnik";
export { justAuto } from "./just-auto";
export { kelleyBlueBook } from "./kelley-blue-book";
export { leGuideDeLauto } from "./le-guide-de-lauto";
export { motor1 } from "./motor1";
export { motorbiscuit } from "./motorbiscuit";
export { motortrend } from "./motortrend";
export { motorward } from "./motorward";
export { paulTan } from "./paul-tan";
export { reuters } from "./reuters";
export { roadAndTrack } from "./road-and-track";
export { rushlane } from "./rushlane";
export { teamBhp } from "./team-bhp";
export { theDrive } from "./the-drive";
export { theStarAutos } from "./the-star-autos";
export { theTorqueReport } from "./the-torque-report";
export { theTruthAboutCars } from "./the-truth-about-cars";
export { topGear } from "./top-gear";
export { topSpeed } from "./top-speed";
export { wardsAuto } from "./wards-auto";
export { yahooAutos } from "./yahoo-autos";
export { zero2turbo } from "./zero2turbo";

import type { NewsSite } from "./types";
import { autoTimesNews } from "./auto-times-news";
import { autocar } from "./autocar";
import { automotiveNews } from "./automotive-news";
import { automotiveNewsEurope } from "./automotive-news-europe";
import { automotiveToday } from "./automotive-today";
import { automotiveWorld } from "./automotive-world";
import { autoweek } from "./autoweek";
import { carAndDriver } from "./car-and-driver";
import { carbuzz } from "./carbuzz";
import { carscoops } from "./carscoops";
import { greenCarReports } from "./green-car-reports";
import { hemmings } from "./hemmings";
import { indiaCarNews } from "./india-car-news";
import { insideevs } from "./insideevs";
import { jalopnik } from "./jalopnik";
import { justAuto } from "./just-auto";
import { kelleyBlueBook } from "./kelley-blue-book";
import { leGuideDeLauto } from "./le-guide-de-lauto";
import { motor1 } from "./motor1";
import { motorbiscuit } from "./motorbiscuit";
import { motortrend } from "./motortrend";
import { motorward } from "./motorward";
import { paulTan } from "./paul-tan";
import { reuters } from "./reuters";
import { roadAndTrack } from "./road-and-track";
import { rushlane } from "./rushlane";
import { teamBhp } from "./team-bhp";
import { theDrive } from "./the-drive";
import { theStarAutos } from "./the-star-autos";
import { theTorqueReport } from "./the-torque-report";
import { theTruthAboutCars } from "./the-truth-about-cars";
import { topGear } from "./top-gear";
import { topSpeed } from "./top-speed";
import { wardsAuto } from "./wards-auto";
import { yahooAutos } from "./yahoo-autos";
import { zero2turbo } from "./zero2turbo";

/** All automotive news-site profiles. */
export const newsSites: NewsSite[] = [
  autoTimesNews,
  autocar,
  automotiveNews,
  automotiveNewsEurope,
  automotiveToday,
  automotiveWorld,
  autoweek,
  carAndDriver,
  carbuzz,
  carscoops,
  greenCarReports,
  hemmings,
  indiaCarNews,
  insideevs,
  jalopnik,
  justAuto,
  kelleyBlueBook,
  leGuideDeLauto,
  motor1,
  motorbiscuit,
  motortrend,
  motorward,
  paulTan,
  reuters,
  roadAndTrack,
  rushlane,
  teamBhp,
  theDrive,
  theStarAutos,
  theTorqueReport,
  theTruthAboutCars,
  topGear,
  topSpeed,
  wardsAuto,
  yahooAutos,
  zero2turbo,
];

/** Look up a news site by its (case-insensitive) name. */
export function getNewsSite(name: string): NewsSite | undefined {
  const n = name.toLowerCase();
  return newsSites.find((site) => site.name.toLowerCase() === n);
}
