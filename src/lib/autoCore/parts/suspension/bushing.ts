import type { Part } from "../types";

export const bushing: Part = {
  name: "Bushing",
  category: "Suspension",
  description: "A rubber or polyurethane pivot insert.",
  use: "Cushions and locates suspension links while absorbing vibration.",
  wikipedia: "https://en.wikipedia.org/wiki/Bushing_(isolator)",
  connectsTo: ["Control Arm", "Sway Bar"],
  connectedFrom: ["Control Arm"],
  averageCostUsd: 25,
  notableManufacturers: ["Moog", "Energy Suspension", "Lemforder", "Prothane"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["low-load bushing", "sway-bar test bushing", "dust boot", "fitment spacer"],
    idealMaterials: ["TPU 95A", "TPE", "polyurethane casting from printed mold", "PA-CF (nylon carbon fiber)"],
    notes: "Small low-load bushings can be printed in TPU for experimentation; road-use suspension bushings need tested elastomer properties.",
  },
};
