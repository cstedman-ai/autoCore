import type { Part } from "../types";

export const brakeShoe: Part = {
  name: "Brake Shoe",
  category: "Braking",
  description: "Curved friction shoes inside a drum.",
  use: "Press outward against the drum to slow the wheel.",
  wikipedia: "https://en.wikipedia.org/wiki/Brake_shoe",
  connectsTo: ["Brake Drum"],
  connectedFrom: ["Brake Drum"],
  averageCostUsd: 40,
  notableManufacturers: ["Raybestos", "Bosch", "ACDelco", "Wagner"],
  usedIn: "all",
};
