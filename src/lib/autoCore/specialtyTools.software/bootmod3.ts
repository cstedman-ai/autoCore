import type { SoftwareSpecialtyTool } from "./types";

export const bootmod3: SoftwareSpecialtyTool = {
  name: "Bootmod3 (BM3)",
  description: "A cloud-based flash tuning platform primarily for BMWs, known for a massive user base, Off The Shelf maps, custom tuning, and an active community.",
  useCase: "ECU flash tuning, custom map management, transmission tuning integration, datalogging, and exhaust tuning.",
  interfaceUsed: ["OBD2", "ENET Cable", "Wi-Fi (BM3 Wi-Fi Adapter)"],
  toolManufacturer: "ProTuning Freaks",
  brandMakeModelApplications: ["BMW (N20, N55, S55, B48, B58, S58, S63)", "Toyota Supra (A90)"],
  averageCost: "$595 (Software License incl. one OTS map) + $80 (Wi-Fi Adapter)",
  whereToBuy: ["ProTuning Freaks Website", "Authorized Retailers (Kies Motorsports, X-PH)"],
  wikipedia: "https://en.wikipedia.org/wiki/Car_tuning",
};
