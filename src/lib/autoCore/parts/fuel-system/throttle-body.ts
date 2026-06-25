import type { Part } from "../types";

export const throttleBody: Part = {
  name: "Throttle Body",
  category: "Fuel System",
  description: "A valve housing controlling intake airflow.",
  use: "Regulates the volume of air entering the intake manifold based on pedal input.",
  wikipedia: "https://en.wikipedia.org/wiki/Throttle_body",
  connectsTo: ["Intake Manifold", "Engine Control Unit (ECU)", "Air Filter"],
  connectedFrom: ["Air Filter"],
  averageCostUsd: 180,
  notableManufacturers: ["Bosch", "Hitachi", "Denso", "ACDelco"],
  usedIn: "all",
};
