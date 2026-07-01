import type { PhysicalSpecialtyTool } from "./types";

export const handVacuumPumpAndBrakeBleederKit: PhysicalSpecialtyTool = {
  name: "Hand Vacuum Pump and Brake Bleeder Kit",
  description: "A hand-operated pistol-grip pump that creates negative pressure (vacuum) or positive pressure, used to bleed hydraulic systems or test vacuum-actuated components.",
  useCase: "Bleed brake and clutch hydraulic lines or diagnose vacuum leaks and sensor functionality.",
  partsUsedOn: ["Brake calipers", "Wheel cylinders", "Clutch slave cylinders", "EGR valves", "MAP sensors", "Vacuum lines"],
  toolManufacturer: "Mityvac",
  brandMakeModelApplications: ["Universal hydraulic brake systems", "Universal vacuum systems", "Motorcycle hydraulic brakes"],
  averageCost: "$40 - $80",
  wikipedia: "https://en.wikipedia.org/wiki/Brake_bleeding",
};
