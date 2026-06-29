import type { Part } from "../types";

export const relay: Part = {
  name: "Relay",
  category: "Electrical",
  description: "An electrically operated switch.",
  use: "Lets a low-current signal switch a high-current circuit.",
  wikipedia: "https://en.wikipedia.org/wiki/Relay",
  connectsTo: ["Fuse Box", "Wiring Harness"],
  connectedFrom: ["Fuse Box"],
  averageCostUsd: 15,
  notableManufacturers: ["Bosch", "Tyco", "Omron", "Hella"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["electronics enclosure", "relay holder", "fuse-box cover", "mounting bracket"],
    idealMaterials: ["ASA", "PETG", "PC", "flame-retardant ABS/PC"],
    notes: "Enclosures and holders are printable; use heat/flame-resistant material near electrical loads.",
  },
};
