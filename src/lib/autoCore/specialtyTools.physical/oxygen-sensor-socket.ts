import type { PhysicalSpecialtyTool } from "./types";

export const oxygenSensorSocket: PhysicalSpecialtyTool = {
  name: "Oxygen Sensor Socket",
  description: "A slotted 22 mm specialty socket or wrench that clears the oxygen sensor wire harness while gripping the sensor hex.",
  useCase: "Remove and install exhaust oxygen sensors without cutting or twisting the wiring pigtail.",
  partsUsedOn: ["Oxygen sensors", "Exhaust manifolds", "Catalytic converters", "Exhaust pipes"],
  toolManufacturer: "Lisle Corporation",
  brandMakeModelApplications: ["Most domestic vehicles with threaded O2 sensors", "Many import vehicles with 22 mm oxygen sensors", "Volvo and Saab applications historically associated with early lambda sensors"],
  averageCost: "$10 - $30",
  wikipedia: "https://en.wikipedia.org/wiki/Oxygen_sensor",
};
