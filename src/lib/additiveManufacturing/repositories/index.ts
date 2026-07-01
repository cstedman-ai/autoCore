export * from "./types";

export { cgtrader } from "./cgtrader";
export { cults3d } from "./cults3d";
export { grabcad } from "./grabcad";
export { makerworld } from "./makerworld";
export { myminifactory } from "./myminifactory";
export { nih3d } from "./nih-3d";
export { pinshape } from "./pinshape";
export { printables } from "./printables";
export { thangs } from "./thangs";
export { thingiverse } from "./thingiverse";
export { yeggi } from "./yeggi";
export { youmagine } from "./youmagine";

import type { AdditiveManufacturingRepository } from "./types";
import { cgtrader } from "./cgtrader";
import { cults3d } from "./cults3d";
import { grabcad } from "./grabcad";
import { makerworld } from "./makerworld";
import { myminifactory } from "./myminifactory";
import { nih3d } from "./nih-3d";
import { pinshape } from "./pinshape";
import { printables } from "./printables";
import { thangs } from "./thangs";
import { thingiverse } from "./thingiverse";
import { yeggi } from "./yeggi";
import { youmagine } from "./youmagine";

/** Major additive manufacturing model repositories and marketplaces. */
export const additiveManufacturingRepositories: AdditiveManufacturingRepository[] = [
  cgtrader,
  cults3d,
  grabcad,
  makerworld,
  myminifactory,
  nih3d,
  pinshape,
  printables,
  thangs,
  thingiverse,
  yeggi,
  youmagine,
];

/** Look up an additive manufacturing repository by its case-insensitive name. */
export function getAdditiveManufacturingRepository(
  name: string,
): AdditiveManufacturingRepository | undefined {
  const normalized = name.toLowerCase();
  return additiveManufacturingRepositories.find(
    (repository) => repository.name.toLowerCase() === normalized,
  );
}
