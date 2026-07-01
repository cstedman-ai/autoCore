/** Shared types for autoCore automotive news-site profiles. */

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

export type NewsSite = {
  /** Display name of the automotive news site or news vertical. */
  name: string;
  /** Description of the site and its automotive coverage. */
  description: string;
  /** Primary website or automotive news URL, or null. */
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
  /** Public stock listing, or null if private/subsidiary/non-profit. */
  stock: StockListing | null;
  /** Notable subsidiaries/brands. */
  subsidiaries: string[];
  /** Parent company, or null if independent. */
  parentCompany: string | null;
};
