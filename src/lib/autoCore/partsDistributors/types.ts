/** Shared types for autoCore automotive parts distributors. */

export type SocialMedia = {
  youtube: string | null;
  linkedin: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  reddit: string | null;
};

export type StockListing = {
  ticker: string;
  exchange: string;
};

export type PartsDistributor = {
  /** Display name of the parts distributor. */
  name: string;
  /** Description of the distributor and what it offers. */
  description: string;
  /** Primary website, or null. */
  website: string | null;
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
  /** Public stock listing, or null if private/subsidiary. */
  stock: StockListing | null;
  /** Notable subsidiaries/brands. */
  subsidiaries: string[];
  /** Parent company, or null if independent. */
  parentCompany: string | null;
  /** Automotive brands they primarily cater to (e.g., 'All', 'European', 'BMW', 'Import', etc.). */
  brandsCateredTo: string[];
  /** Types of parts they specialize in or distribute. */
  typeOfParts: string[];
};
