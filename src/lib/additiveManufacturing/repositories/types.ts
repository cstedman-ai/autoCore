/** Shared types for additive manufacturing model repositories. */

export type SocialMedia = {
  twitter: string | null;
  facebook: string | null;
  linkedin: string | null;
  instagram: string | null;
  bluesky: string | null;
  telegram: string | null;
  discord: string | null;
};

export type AdditiveManufacturingRepository = {
  /** Display name of the repository or model marketplace. */
  name: string;
  /** Primary website, or null when no active official site could be verified. */
  website: string | null;
  /** Wikipedia page for the repository, or null if no suitable page exists. */
  wikipedia: string | null;
  /** Public contact email, or null if not published. */
  email: string | null;
  /** Headquarters or operating location, or null if not published. */
  location: string | null;
  socialMedia: SocialMedia;
  /** Public or documented API endpoints; empty when no official public API exists. */
  apiEndpoints: string[];
  /** Founding or launch date, where known. */
  foundingDate: string | null;
  /** Model categories or communities the repository is known for. */
  modelsSpecializeIn: string[];
  /** Commonly supported model or source file formats. */
  fileTypeSupport: string[];
  /** Membership, subscription, or platform-cost summary. */
  membershipCost: string | null;
};
