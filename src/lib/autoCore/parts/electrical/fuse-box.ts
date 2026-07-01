import type { Part } from "../types";

export const fuseBox: Part = {
  name: "Fuse Box",
  category: "Electrical",
  description: "A panel of fuses and relays.",
  use: "Protects circuits and distributes power to electrical systems.",
  wikipedia: "https://en.wikipedia.org/wiki/Fuse_(automotive)",
  connectsTo: ["Wiring Harness", "Relay", "Battery (12V)"],
  connectedFrom: ["Battery (12V)"],
  averageCostUsd: 120,
  notableManufacturers: ["Littelfuse", "Bosch", "Eaton", "TE Connectivity"],
  usedIn: "all",
  threeDPrinting: {
    possible: true,
    printableItems: ["electronics enclosure", "relay holder", "fuse-box cover", "mounting bracket"],
    idealMaterials: ["ASA", "PETG", "PC", "flame-retardant ABS/PC"],
    notes: "Enclosures and holders are printable; use heat/flame-resistant material near electrical loads.",
  },
};
