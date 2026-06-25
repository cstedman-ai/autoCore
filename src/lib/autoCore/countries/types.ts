import type { Manufacturer } from "../manufacturers/types";

/**
 * A country profile listing the car/vehicle brands (from the autoCore
 * manufacturers dataset) that were founded there.
 */
export type Country = {
  /** Display name of the country. */
  name: string;
  /** Manufacturer profiles founded in this country. */
  manufacturers: Manufacturer[];
  /** Convenience list of brand names founded in this country. */
  brands: string[];
};
