/** Shared types for physical automotive specialty tools. */

export type PhysicalSpecialtyTool = {
  /** Display name of the tool. */
  name: string;
  /** Overall description of what the tool is and why it exists. */
  description: string;
  /** Primary repair or service use case. */
  useCase: string;
  /** Vehicle part(s), assemblies, or systems the tool is used on. */
  partsUsedOn: string[];
  /** Manufacturer or common supplier of the physical tool. */
  toolManufacturer: string;
  /** Typical vehicle brands, makes, models, or engine families this tool is used in/on. */
  brandMakeModelApplications: string[];
  /** The estimated average cost of the tool. */
  averageCost: string;
  /** Wikipedia page for the tool or closest relevant automotive part/system. */
  wikipedia: string | null;
};
