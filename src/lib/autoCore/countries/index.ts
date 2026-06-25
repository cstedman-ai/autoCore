import type { Country } from "./types";

import { belarus } from "./belarus";
import { china } from "./china";
import { czechRepublic } from "./czech-republic";
import { eastGermany } from "./east-germany";
import { france } from "./france";
import { germany } from "./germany";
import { india } from "./india";
import { italy } from "./italy";
import { japan } from "./japan";
import { malaysia } from "./malaysia";
import { netherlands } from "./netherlands";
import { romania } from "./romania";
import { russia } from "./russia";
import { southKorea } from "./south-korea";
import { spain } from "./spain";
import { sweden } from "./sweden";
import { unitedKingdom } from "./united-kingdom";
import { unitedStates } from "./united-states";
import { uzbekistan } from "./uzbekistan";

export type { Country } from "./types";

export {
  belarus,
  china,
  czechRepublic,
  eastGermany,
  france,
  germany,
  india,
  italy,
  japan,
  malaysia,
  netherlands,
  romania,
  russia,
  southKorea,
  spain,
  sweden,
  unitedKingdom,
  unitedStates,
  uzbekistan,
};

/** All country profiles as a single array. */
export const countries: Country[] = [
  belarus,
  china,
  czechRepublic,
  eastGermany,
  france,
  germany,
  india,
  italy,
  japan,
  malaysia,
  netherlands,
  romania,
  russia,
  southKorea,
  spain,
  sweden,
  unitedKingdom,
  unitedStates,
  uzbekistan,
];

/** Look up a country profile by (case-insensitive) name. */
export function getCountry(name: string): Country | null {
  const q = name.toLowerCase();
  return countries.find((c) => c.name.toLowerCase() === q) ?? null;
}

/** Find the country where a given brand was founded. */
export function getCountryByBrand(brandName: string): Country | null {
  const q = brandName.toLowerCase();
  return (
    countries.find((c) => c.brands.some((b) => b.toLowerCase() === q)) ?? null
  );
}
