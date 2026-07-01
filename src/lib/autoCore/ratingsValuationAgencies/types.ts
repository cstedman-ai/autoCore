/**
 * Shared types for autoCore automotive rating / valuation agency profiles.
 *
 * Each file in this directory exports a `RatingValuationAgency` object for an
 * organization that rates, reviews, or values vehicles. Fields that are not
 * publicly published (e.g. a general contact email or private API) are set to
 * `null`/empty rather than guessed.
 */

export type SocialMedia = {
  youtube: string | null;
  linkedin: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  reddit: string | null;
};

/** Public stock listing, including the exchange the company trades on. */
export type StockListing = {
  ticker: string;
  exchange: string;
};

export type RatingValuationAgency = {
  /** Display name of the agency. */
  name: string;
  /** What the agency does. */
  description: string;
  /** Primary website, or null. */
  website: string | null;
  /** Wikipedia page for the agency, or null if no suitable page exists. */
  wikipedia: string | null;
  /** Public contact email, or null if not published. */
  email: string | null;
  /** Headquarters location, or null if unknown. */
  headquarters: string | null;
  socialMedia: SocialMedia;
  /** Public API endpoint(s), or empty if none published. */
  apiEndpoints: string[];
  /** Founder(s), where known. */
  founders: string[];
  /** Current chief executive (or equivalent), or null. */
  ceo: string | null;
  /** Founding year/date as a string, or null. */
  foundingDate: string | null;
  /** Public stock listing, or null if private/subsidiary/non-profit. */
  stock: StockListing | null;
  /** Notable subsidiaries/brands. */
  subsidiaries: string[];
  /** Parent company, or null if independent. */
  parentCompany: string | null;
};
