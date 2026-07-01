import type { PhysicalSpecialtyTool } from "./types";

export const ballJointPress: PhysicalSpecialtyTool = {
  name: "Ball Joint Press",
  description: "A C-frame press with receiving cups and adapters that pushes press-fit ball joints out of, or into, control arms and steering knuckles without removing the control arm from many vehicles.",
  useCase: "Remove and install press-fit upper or lower ball joints during suspension repair.",
  partsUsedOn: ["Ball joints", "Control arms", "Steering knuckles", "Universal joints", "Wheel studs"],
  toolManufacturer: "OTC Tools",
  brandMakeModelApplications: ["Most domestic and import cars/light trucks with press-fit ball joints", "GM pickups and SUVs", "Ford pickups and SUVs", "Dodge/Ram pickups and SUVs", "Honda CR-V", "Honda Odyssey", "Toyota 4Runner"],
  averageCost: "$70 - $150",
  wikipedia: "https://en.wikipedia.org/wiki/Ball_joint",
};
