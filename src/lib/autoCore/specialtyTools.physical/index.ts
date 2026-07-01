export * from "./types";

export { ballJointPress } from "./ball-joint-press";
export { brakeLineFlaringTool } from "./brake-line-flaring-tool";
export { clutchAlignmentTool } from "./clutch-alignment-tool";
export { fordCamshaftHoldingTool3031248 } from "./ford-camshaft-holding-tool-303-1248";
export { fuelLineQuickDisconnectTool } from "./fuel-line-quick-disconnect-tool";
export { gmEcotecCamPhaserRetainerEn48953 } from "./gm-ecotec-cam-phaser-retainer-en-48953";
export { handVacuumPumpAndBrakeBleederKit } from "./hand-vacuum-pump-and-brake-bleeder-kit";
export { harmonicBalancerPullerAndInstaller } from "./harmonic-balancer-puller-and-installer";
export { hubGrapplerWheelBearingServiceKit } from "./hub-grappler-wheel-bearing-service-kit";
export { macphersonStrutSpringCompressor } from "./macpherson-strut-spring-compressor";
export { oxygenSensorSocket } from "./oxygen-sensor-socket";
export { pistonRingCompressor } from "./piston-ring-compressor";
export { ratchetingSerpentineBeltTool } from "./ratcheting-serpentine-belt-tool";
export { rearDiscBrakeCaliperWindBackTool } from "./rear-disc-brake-caliper-wind-back-tool";
export { slideHammerPullerSet } from "./slide-hammer-puller-set";
export { torqueAngleGauge } from "./torque-angle-gauge";
export { toyota643Mm14FluteOilFilterWrench } from "./toyota-64-3-mm-14-flute-oil-filter-wrench";
export { valveSpringCompressor } from "./valve-spring-compressor";

import type { PhysicalSpecialtyTool } from "./types";
import { ballJointPress } from "./ball-joint-press";
import { brakeLineFlaringTool } from "./brake-line-flaring-tool";
import { clutchAlignmentTool } from "./clutch-alignment-tool";
import { fordCamshaftHoldingTool3031248 } from "./ford-camshaft-holding-tool-303-1248";
import { fuelLineQuickDisconnectTool } from "./fuel-line-quick-disconnect-tool";
import { gmEcotecCamPhaserRetainerEn48953 } from "./gm-ecotec-cam-phaser-retainer-en-48953";
import { handVacuumPumpAndBrakeBleederKit } from "./hand-vacuum-pump-and-brake-bleeder-kit";
import { harmonicBalancerPullerAndInstaller } from "./harmonic-balancer-puller-and-installer";
import { hubGrapplerWheelBearingServiceKit } from "./hub-grappler-wheel-bearing-service-kit";
import { macphersonStrutSpringCompressor } from "./macpherson-strut-spring-compressor";
import { oxygenSensorSocket } from "./oxygen-sensor-socket";
import { pistonRingCompressor } from "./piston-ring-compressor";
import { ratchetingSerpentineBeltTool } from "./ratcheting-serpentine-belt-tool";
import { rearDiscBrakeCaliperWindBackTool } from "./rear-disc-brake-caliper-wind-back-tool";
import { slideHammerPullerSet } from "./slide-hammer-puller-set";
import { torqueAngleGauge } from "./torque-angle-gauge";
import { toyota643Mm14FluteOilFilterWrench } from "./toyota-64-3-mm-14-flute-oil-filter-wrench";
import { valveSpringCompressor } from "./valve-spring-compressor";

/** Physical specialty tools used for automotive repair and service. */
export const physicalSpecialtyTools: PhysicalSpecialtyTool[] = [
  ballJointPress,
  brakeLineFlaringTool,
  clutchAlignmentTool,
  fordCamshaftHoldingTool3031248,
  fuelLineQuickDisconnectTool,
  gmEcotecCamPhaserRetainerEn48953,
  handVacuumPumpAndBrakeBleederKit,
  harmonicBalancerPullerAndInstaller,
  hubGrapplerWheelBearingServiceKit,
  macphersonStrutSpringCompressor,
  oxygenSensorSocket,
  pistonRingCompressor,
  ratchetingSerpentineBeltTool,
  rearDiscBrakeCaliperWindBackTool,
  slideHammerPullerSet,
  torqueAngleGauge,
  toyota643Mm14FluteOilFilterWrench,
  valveSpringCompressor,
];

/** Look up a physical specialty tool by its case-insensitive name. */
export function getPhysicalSpecialtyTool(
  name: string,
): PhysicalSpecialtyTool | undefined {
  const normalized = name.toLowerCase();
  return physicalSpecialtyTools.find(
    (tool) => tool.name.toLowerCase() === normalized,
  );
}
