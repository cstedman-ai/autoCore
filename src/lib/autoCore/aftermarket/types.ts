/**
 * Shared types for autoCore aftermarket / OE parts-manufacturer profiles.
 *
 * Each file in this directory exports an `AftermarketManufacturer` object.
 * Fields that are not publicly published by the company (e.g. a general
 * contact email or a public API endpoint) are set to `null` rather than
 * guessed. `address` holds the company's headquarters location.
 */

export type SocialMedia = {
  twitter: string | null;
  linkedin: string | null;
  facebook: string | null;
  instagram: string | null;
};

export type AftermarketManufacturer = {
  /** Company / brand name. */
  name: string;
  /** Headquarters location, or null if unknown. */
  address: string | null;
  socialMedia: SocialMedia;
  /** Primary corporate website, or null. */
  website: string | null;
  /** Public contact email, or null if not published. */
  email: string | null;
  /** Public API endpoint (e.g. catalog/parts API), or null if none published. */
  apiEndpoint: string | null;
  /** Vehicle brands this company typically makes parts for. */
  brandSpecializations: string[];
  /** Part types this company primarily manufactures. */
  primaryParts: string[];
  /** Wikipedia article URL, or null. */
  wikipedia: string | null;
  /** Country where the company originated. */
  countryOfOrigin: string;
  /** Founder(s) of the company, where known. */
  founders: string[];
};
