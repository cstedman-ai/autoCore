import type { Part } from "../types";

export const grille: Part = {
  name: "Grille",
  category: "Body & Exterior",
  description: "A front opening cover ahead of the radiator.",
  use: "Allows cooling airflow while protecting and styling the front end.",
  connectsTo: ["Bumper", "Radiator"],
  connectedFrom: ["Bumper"],
  averageCostUsd: 120,
  notableManufacturers: ["Toyota", "Ford", "TYC", "Replace"],
  usedIn: "all",
};
