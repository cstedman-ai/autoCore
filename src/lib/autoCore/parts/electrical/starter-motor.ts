import type { Part } from "../types";

export const starterMotor: Part = {
  name: "Starter Motor",
  category: "Electrical",
  description: "An electric motor that cranks the engine.",
  use: "Spins the flywheel to start the internal-combustion engine.",
  wikipedia: "https://en.wikipedia.org/wiki/Starter_(engine)",
  connectsTo: ["Battery (12V)", "Flywheel"],
  connectedFrom: ["Battery (12V)"],
  averageCostUsd: 180,
  notableManufacturers: ["Bosch", "Denso", "Valeo", "ACDelco"],
  usedIn: "all",
};
