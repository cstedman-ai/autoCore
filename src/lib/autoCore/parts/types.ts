/**
 * Shared types for autoCore car-part profiles.
 *
 * Each part file in this directory exports a `Part` object describing a
 * distinct automotive component. Cost figures are approximate, public-domain
 * estimates for a typical replacement unit (new, mainstream passenger
 * vehicle) expressed in USD, and exclude labor unless noted.
 */

/**
 * Which powertrain types a part is found in.
 * - "all": common across gas, diesel and electric vehicles
 * - "gas": petrol/gasoline internal-combustion vehicles
 * - "diesel": diesel internal-combustion vehicles
 * - "electric": battery-electric vehicles
 */
export type DriveType = "all" | "gas" | "diesel" | "electric";

/** High-level system a part belongs to. */
export type PartCategory =
  | "Engine"
  | "Fuel System"
  | "Air Intake & Exhaust"
  | "Cooling System"
  | "Transmission & Drivetrain"
  | "Suspension"
  | "Steering"
  | "Braking"
  | "Wheels & Tires"
  | "Electrical"
  | "Ignition"
  | "HVAC"
  | "Body & Exterior"
  | "Interior & Safety"
  | "Lighting"
  | "Electric Vehicle";

export type Part = {
  /** Display name of the part. */
  name: string;
  /** System/category the part belongs to. */
  category: PartCategory;
  /** What the part is. */
  description: string;
  /** What the part does / its function. */
  use: string;
  /** Parts/systems this part connects to (outgoing connections). */
  connectsTo: string[];
  /** Parts/systems that connect into this part (incoming connections). */
  connectedFrom: string[];
  /** Approximate replacement cost of the part in USD (parts only), or null. */
  averageCostUsd: number | null;
  /** Notable manufacturers/suppliers of this part. */
  notableManufacturers: string[];
  /** Powertrain type(s) the part is used in. */
  usedIn: DriveType;
};
