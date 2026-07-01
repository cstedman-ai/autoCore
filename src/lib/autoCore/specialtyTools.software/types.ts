/** Shared types for software automotive specialty tools. */

export type SoftwareSpecialtyTool = {
  /** Display name of the software tool. */
  name: string;
  /** Overall description of what the software is and why it exists. */
  description: string;
  /** Primary repair, diagnostic, or tuning use case. */
  useCase: string;
  /** The physical/network interfaces used to connect the software to the vehicle (e.g., OBD2, USB, Bluetooth). */
  interfaceUsed: string[];
  /** Manufacturer or developer of the software. */
  toolManufacturer: string;
  /** Typical vehicle brands, makes, models, or engine families this software is used in/on. */
  brandMakeModelApplications: string[];
  /** The estimated average cost of the software (and required proprietary adapter if applicable). */
  averageCost: string;
  /** Common places or methods to purchase the software. */
  whereToBuy: string[];
  /** Wikipedia page for the tool, company, or closest relevant automotive protocol/system. */
  wikipedia: string | null;
};
