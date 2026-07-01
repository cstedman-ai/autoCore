import type { PhysicalSpecialtyTool } from "./types";

export const fuelLineQuickDisconnectTool: PhysicalSpecialtyTool = {
  name: "Fuel Line Quick Disconnect Tool",
  description: "A small color-coded plastic or aluminum release tool that slides into quick-connect fuel fittings to release the internal retainer without damaging the line.",
  useCase: "Disconnect quick-connect fuel, EVAP, and some air-conditioning line fittings during fuel filter, fuel rail, fuel pump, and line service.",
  partsUsedOn: ["Fuel lines", "Fuel rails", "Fuel filters", "EVAP lines", "Quick-connect fittings"],
  toolManufacturer: "Lisle Corporation",
  brandMakeModelApplications: ["GM LS engine fuel lines", "Chevrolet Suburban 5.3L", "Chevrolet Tahoe", "GMC Yukon", "Chevrolet Silverado", "GMC Sierra", "Ford 5/16 inch fuel line fittings", "Chrysler quick-connect fittings", "Toyota and Nissan main fuel rail fittings"],
  averageCost: "$10 - $25",
  wikipedia: "https://en.wikipedia.org/wiki/Fuel_line",
};
