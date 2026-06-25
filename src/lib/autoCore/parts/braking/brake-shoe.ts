import type { Part } from "../types";

export const brakeShoe: Part = {
  name: "Brake Shoe",
  category: "Braking",
  description: "Curved friction shoes inside a drum.",
  use: "Press outward against the drum to slow the wheel.",
  connectsTo: ["Brake Drum"],
  connectedFrom: ["Brake Drum"],
  averageCostUsd: 40,
  notableManufacturers: ["Raybestos", "Bosch", "ACDelco", "Wagner"],
  usedIn: "all",
};
