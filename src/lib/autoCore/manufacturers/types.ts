/**
 * Shared types for autoCore manufacturer profiles.
 *
 * Each manufacturer file in this directory exports a `Manufacturer` object.
 * Many numeric fields (production volumes, average/most/least costs) are
 * approximate, public-domain estimates and are expressed in USD unless noted.
 */

export type SocialMedia = {
  twitter: string | null;
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
};

/** A representative vehicle with an approximate new price in USD. */
export type Vehicle = {
  name: string;
  approxPriceUsd: number | null;
};

/** Public stock listing, including the exchange the company trades on. */
export type StockListing = {
  /** Ticker symbol, e.g. "TSLA". */
  ticker: string;
  /** Exchange the ticker trades on, e.g. "NASDAQ", "NYSE", "TYO", "XETRA". */
  exchange: string;
};

export type Manufacturer = {
  /** Display name of the manufacturer. */
  name: string;
  /** Year the company/brand was founded. */
  yearFounded: number;
  /** Country where the brand originated. */
  countryOfOrigin: string;
  /** Primary corporate/brand website, or null if none. */
  website: string | null;
  socialMedia: SocialMedia;
  /** Founder(s) of the company/brand. */
  founders: string[];
  /** Brands/companies owned by this manufacturer. */
  subsidiaries: string[];
  /** Parent company, or null if independent. */
  parentCompany: string | null;
  /**
   * Approximate number of vehicles manufactured per year (most recent
   * representative year). Null when not meaningfully measurable
   * (e.g. defunct brands or non-vehicle parents).
   */
  annualVehicleProduction: number | null;
  /** Industries the company is involved in. */
  industries: string[];
  /** Approximate average new-vehicle price in USD. */
  averageVehicleCostUsd: number | null;
  /** Best-selling / most iconic model. */
  mostPopularVehicle: string | null;
  /** Least expensive vehicle currently/typically offered. */
  leastExpensiveVehicle: Vehicle | null;
  /** Most expensive vehicle currently/typically offered. */
  mostExpensiveVehicle: Vehicle | null;
  /** Public stock listing, or null if private/subsidiary. */
  stock: StockListing | null;
  /** Countries/regions where the brand sells vehicles. */
  countriesSold: string[];
  /** Whether the brand is still actively producing/selling vehicles. */
  active: boolean;
};
