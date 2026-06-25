import type { Part } from "../types";

export const absModule: Part = {
  name: "ABS Module",
  category: "Braking",
  description: "The anti-lock braking control and pump unit.",
  use: "Modulates brake pressure to prevent wheel lockup during hard braking.",
  connectsTo: ["Brake Line", "Wheel Speed Sensor", "Body Control Module"],
  connectedFrom: ["Wheel Speed Sensor"],
  averageCostUsd: 500,
  notableManufacturers: ["Bosch", "Continental", "ATE", "TRW"],
  usedIn: "all",
};
