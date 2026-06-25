export * from "./types";

// Engine
export { camshaft } from "./engine/camshaft";
export { connectingRod } from "./engine/connecting-rod";
export { crankshaft } from "./engine/crankshaft";
export { cylinderHead } from "./engine/cylinder-head";
export { engineBlock } from "./engine/engine-block";
export { engineControlUnitEcu } from "./engine/engine-control-unit-ecu";
export { engineMount } from "./engine/engine-mount";
export { flywheel } from "./engine/flywheel";
export { harmonicBalancer } from "./engine/harmonic-balancer";
export { headGasket } from "./engine/head-gasket";
export { oilFilter } from "./engine/oil-filter";
export { oilPan } from "./engine/oil-pan";
export { oilPump } from "./engine/oil-pump";
export { piston } from "./engine/piston";
export { serpentineBelt } from "./engine/serpentine-belt";
export { timingBelt } from "./engine/timing-belt";
export { timingChain } from "./engine/timing-chain";
export { valveCover } from "./engine/valve-cover";
export { valves } from "./engine/valves";

// Fuel System
export { carburetor } from "./fuel-system/carburetor";
export { dieselInjectionPump } from "./fuel-system/diesel-injection-pump";
export { evaporativeCanister } from "./fuel-system/evaporative-canister";
export { fuelFilter } from "./fuel-system/fuel-filter";
export { fuelInjector } from "./fuel-system/fuel-injector";
export { fuelPump } from "./fuel-system/fuel-pump";
export { fuelRail } from "./fuel-system/fuel-rail";
export { fuelTank } from "./fuel-system/fuel-tank";
export { glowPlug } from "./fuel-system/glow-plug";
export { throttleBody } from "./fuel-system/throttle-body";

// Air Intake & Exhaust
export { airFilter } from "./air-intake-and-exhaust/air-filter";
export { catalyticConverter } from "./air-intake-and-exhaust/catalytic-converter";
export { defTank } from "./air-intake-and-exhaust/def-tank";
export { dieselParticulateFilter } from "./air-intake-and-exhaust/diesel-particulate-filter";
export { egrValve } from "./air-intake-and-exhaust/egr-valve";
export { exhaustManifold } from "./air-intake-and-exhaust/exhaust-manifold";
export { exhaustPipe } from "./air-intake-and-exhaust/exhaust-pipe";
export { intakeManifold } from "./air-intake-and-exhaust/intake-manifold";
export { intercooler } from "./air-intake-and-exhaust/intercooler";
export { massAirFlowSensor } from "./air-intake-and-exhaust/mass-air-flow-sensor";
export { muffler } from "./air-intake-and-exhaust/muffler";
export { oxygenSensor } from "./air-intake-and-exhaust/oxygen-sensor";
export { supercharger } from "./air-intake-and-exhaust/supercharger";
export { turbocharger } from "./air-intake-and-exhaust/turbocharger";

// Cooling System
export { coolantReservoir } from "./cooling-system/coolant-reservoir";
export { radiator } from "./cooling-system/radiator";
export { radiatorFan } from "./cooling-system/radiator-fan";
export { thermostat } from "./cooling-system/thermostat";
export { waterPump } from "./cooling-system/water-pump";

// Transmission & Drivetrain
export { automaticTransmission } from "./transmission-and-drivetrain/automatic-transmission";
export { clutch } from "./transmission-and-drivetrain/clutch";
export { clutchMasterCylinder } from "./transmission-and-drivetrain/clutch-master-cylinder";
export { cvAxle } from "./transmission-and-drivetrain/cv-axle";
export { cvJoint } from "./transmission-and-drivetrain/cv-joint";
export { differential } from "./transmission-and-drivetrain/differential";
export { driveshaft } from "./transmission-and-drivetrain/driveshaft";
export { gearSelector } from "./transmission-and-drivetrain/gear-selector";
export { manualTransmission } from "./transmission-and-drivetrain/manual-transmission";
export { torqueConverter } from "./transmission-and-drivetrain/torque-converter";
export { transferCase } from "./transmission-and-drivetrain/transfer-case";
export { transmissionControlUnit } from "./transmission-and-drivetrain/transmission-control-unit";
export { universalJoint } from "./transmission-and-drivetrain/universal-joint";

// Suspension
export { ballJoint } from "./suspension/ball-joint";
export { bushing } from "./suspension/bushing";
export { coilSpring } from "./suspension/coil-spring";
export { controlArm } from "./suspension/control-arm";
export { leafSpring } from "./suspension/leaf-spring";
export { shockAbsorber } from "./suspension/shock-absorber";
export { steeringKnuckle } from "./suspension/steering-knuckle";
export { strut } from "./suspension/strut";
export { swayBar } from "./suspension/sway-bar";
export { wheelBearing } from "./suspension/wheel-bearing";
export { wheelHub } from "./suspension/wheel-hub";

// Steering
export { powerSteeringPump } from "./steering/power-steering-pump";
export { steeringColumn } from "./steering/steering-column";
export { steeringRack } from "./steering/steering-rack";
export { steeringWheel } from "./steering/steering-wheel";
export { tieRod } from "./steering/tie-rod";

// Braking
export { absModule } from "./braking/abs-module";
export { brakeBooster } from "./braking/brake-booster";
export { brakeCaliper } from "./braking/brake-caliper";
export { brakeDisc } from "./braking/brake-disc";
export { brakeDrum } from "./braking/brake-drum";
export { brakeLine } from "./braking/brake-line";
export { brakeMasterCylinder } from "./braking/brake-master-cylinder";
export { brakePad } from "./braking/brake-pad";
export { brakeShoe } from "./braking/brake-shoe";
export { parkingBrake } from "./braking/parking-brake";

// Wheels & Tires
export { lugNut } from "./wheels-and-tires/lug-nut";
export { tire } from "./wheels-and-tires/tire";
export { tpmsSensor } from "./wheels-and-tires/tpms-sensor";
export { valveStem } from "./wheels-and-tires/valve-stem";
export { wheelRim } from "./wheels-and-tires/wheel-rim";

// Electrical
export { alternator } from "./electrical/alternator";
export { battery12v } from "./electrical/battery-12v";
export { bodyControlModule } from "./electrical/body-control-module";
export { fuseBox } from "./electrical/fuse-box";
export { horn } from "./electrical/horn";
export { relay } from "./electrical/relay";
export { starterMotor } from "./electrical/starter-motor";
export { washerPump } from "./electrical/washer-pump";
export { windshieldWiperMotor } from "./electrical/windshield-wiper-motor";
export { wiringHarness } from "./electrical/wiring-harness";

// Ignition
export { distributor } from "./ignition/distributor";
export { ignitionCoil } from "./ignition/ignition-coil";
export { sparkPlug } from "./ignition/spark-plug";

// HVAC
export { acCompressor } from "./hvac/ac-compressor";
export { acCondenser } from "./hvac/ac-condenser";
export { blowerMotor } from "./hvac/blower-motor";
export { cabinAirFilter } from "./hvac/cabin-air-filter";
export { evaporator } from "./hvac/evaporator";
export { expansionValve } from "./hvac/expansion-valve";
export { heaterCore } from "./hvac/heater-core";

// Body & Exterior
export { bumper } from "./body-and-exterior/bumper";
export { bumperAbsorber } from "./body-and-exterior/bumper-absorber";
export { door } from "./body-and-exterior/door";
export { fender } from "./body-and-exterior/fender";
export { grille } from "./body-and-exterior/grille";
export { hood } from "./body-and-exterior/hood";
export { hoodGasStrut } from "./body-and-exterior/hood-gas-strut";
export { sideMirror } from "./body-and-exterior/side-mirror";
export { windshield } from "./body-and-exterior/windshield";
export { wiperBlade } from "./body-and-exterior/wiper-blade";

// Interior & Safety
export { airbag } from "./interior-and-safety/airbag";
export { airbagControlUnit } from "./interior-and-safety/airbag-control-unit";
export { dashboard } from "./interior-and-safety/dashboard";
export { instrumentCluster } from "./interior-and-safety/instrument-cluster";
export { seat } from "./interior-and-safety/seat";
export { seatbelt } from "./interior-and-safety/seatbelt";

// Lighting
export { fogLight } from "./lighting/fog-light";
export { headlight } from "./lighting/headlight";
export { taillight } from "./lighting/taillight";
export { turnSignal } from "./lighting/turn-signal";

// Electric Vehicle
export { batteryManagementSystem } from "./electric-vehicle/battery-management-system";
export { chargingPort } from "./electric-vehicle/charging-port";
export { dcDcConverter } from "./electric-vehicle/dc-dc-converter";
export { electricTractionMotor } from "./electric-vehicle/electric-traction-motor";
export { highVoltageBatteryPack } from "./electric-vehicle/high-voltage-battery-pack";
export { inverter } from "./electric-vehicle/inverter";
export { onboardCharger } from "./electric-vehicle/onboard-charger";
export { reductionGearbox } from "./electric-vehicle/reduction-gearbox";

import type { Part } from "./types";
import { camshaft } from "./engine/camshaft";
import { connectingRod } from "./engine/connecting-rod";
import { crankshaft } from "./engine/crankshaft";
import { cylinderHead } from "./engine/cylinder-head";
import { engineBlock } from "./engine/engine-block";
import { engineControlUnitEcu } from "./engine/engine-control-unit-ecu";
import { engineMount } from "./engine/engine-mount";
import { flywheel } from "./engine/flywheel";
import { harmonicBalancer } from "./engine/harmonic-balancer";
import { headGasket } from "./engine/head-gasket";
import { oilFilter } from "./engine/oil-filter";
import { oilPan } from "./engine/oil-pan";
import { oilPump } from "./engine/oil-pump";
import { piston } from "./engine/piston";
import { serpentineBelt } from "./engine/serpentine-belt";
import { timingBelt } from "./engine/timing-belt";
import { timingChain } from "./engine/timing-chain";
import { valveCover } from "./engine/valve-cover";
import { valves } from "./engine/valves";
import { carburetor } from "./fuel-system/carburetor";
import { dieselInjectionPump } from "./fuel-system/diesel-injection-pump";
import { evaporativeCanister } from "./fuel-system/evaporative-canister";
import { fuelFilter } from "./fuel-system/fuel-filter";
import { fuelInjector } from "./fuel-system/fuel-injector";
import { fuelPump } from "./fuel-system/fuel-pump";
import { fuelRail } from "./fuel-system/fuel-rail";
import { fuelTank } from "./fuel-system/fuel-tank";
import { glowPlug } from "./fuel-system/glow-plug";
import { throttleBody } from "./fuel-system/throttle-body";
import { airFilter } from "./air-intake-and-exhaust/air-filter";
import { catalyticConverter } from "./air-intake-and-exhaust/catalytic-converter";
import { defTank } from "./air-intake-and-exhaust/def-tank";
import { dieselParticulateFilter } from "./air-intake-and-exhaust/diesel-particulate-filter";
import { egrValve } from "./air-intake-and-exhaust/egr-valve";
import { exhaustManifold } from "./air-intake-and-exhaust/exhaust-manifold";
import { exhaustPipe } from "./air-intake-and-exhaust/exhaust-pipe";
import { intakeManifold } from "./air-intake-and-exhaust/intake-manifold";
import { intercooler } from "./air-intake-and-exhaust/intercooler";
import { massAirFlowSensor } from "./air-intake-and-exhaust/mass-air-flow-sensor";
import { muffler } from "./air-intake-and-exhaust/muffler";
import { oxygenSensor } from "./air-intake-and-exhaust/oxygen-sensor";
import { supercharger } from "./air-intake-and-exhaust/supercharger";
import { turbocharger } from "./air-intake-and-exhaust/turbocharger";
import { coolantReservoir } from "./cooling-system/coolant-reservoir";
import { radiator } from "./cooling-system/radiator";
import { radiatorFan } from "./cooling-system/radiator-fan";
import { thermostat } from "./cooling-system/thermostat";
import { waterPump } from "./cooling-system/water-pump";
import { automaticTransmission } from "./transmission-and-drivetrain/automatic-transmission";
import { clutch } from "./transmission-and-drivetrain/clutch";
import { clutchMasterCylinder } from "./transmission-and-drivetrain/clutch-master-cylinder";
import { cvAxle } from "./transmission-and-drivetrain/cv-axle";
import { cvJoint } from "./transmission-and-drivetrain/cv-joint";
import { differential } from "./transmission-and-drivetrain/differential";
import { driveshaft } from "./transmission-and-drivetrain/driveshaft";
import { gearSelector } from "./transmission-and-drivetrain/gear-selector";
import { manualTransmission } from "./transmission-and-drivetrain/manual-transmission";
import { torqueConverter } from "./transmission-and-drivetrain/torque-converter";
import { transferCase } from "./transmission-and-drivetrain/transfer-case";
import { transmissionControlUnit } from "./transmission-and-drivetrain/transmission-control-unit";
import { universalJoint } from "./transmission-and-drivetrain/universal-joint";
import { ballJoint } from "./suspension/ball-joint";
import { bushing } from "./suspension/bushing";
import { coilSpring } from "./suspension/coil-spring";
import { controlArm } from "./suspension/control-arm";
import { leafSpring } from "./suspension/leaf-spring";
import { shockAbsorber } from "./suspension/shock-absorber";
import { steeringKnuckle } from "./suspension/steering-knuckle";
import { strut } from "./suspension/strut";
import { swayBar } from "./suspension/sway-bar";
import { wheelBearing } from "./suspension/wheel-bearing";
import { wheelHub } from "./suspension/wheel-hub";
import { powerSteeringPump } from "./steering/power-steering-pump";
import { steeringColumn } from "./steering/steering-column";
import { steeringRack } from "./steering/steering-rack";
import { steeringWheel } from "./steering/steering-wheel";
import { tieRod } from "./steering/tie-rod";
import { absModule } from "./braking/abs-module";
import { brakeBooster } from "./braking/brake-booster";
import { brakeCaliper } from "./braking/brake-caliper";
import { brakeDisc } from "./braking/brake-disc";
import { brakeDrum } from "./braking/brake-drum";
import { brakeLine } from "./braking/brake-line";
import { brakeMasterCylinder } from "./braking/brake-master-cylinder";
import { brakePad } from "./braking/brake-pad";
import { brakeShoe } from "./braking/brake-shoe";
import { parkingBrake } from "./braking/parking-brake";
import { lugNut } from "./wheels-and-tires/lug-nut";
import { tire } from "./wheels-and-tires/tire";
import { tpmsSensor } from "./wheels-and-tires/tpms-sensor";
import { valveStem } from "./wheels-and-tires/valve-stem";
import { wheelRim } from "./wheels-and-tires/wheel-rim";
import { alternator } from "./electrical/alternator";
import { battery12v } from "./electrical/battery-12v";
import { bodyControlModule } from "./electrical/body-control-module";
import { fuseBox } from "./electrical/fuse-box";
import { horn } from "./electrical/horn";
import { relay } from "./electrical/relay";
import { starterMotor } from "./electrical/starter-motor";
import { washerPump } from "./electrical/washer-pump";
import { windshieldWiperMotor } from "./electrical/windshield-wiper-motor";
import { wiringHarness } from "./electrical/wiring-harness";
import { distributor } from "./ignition/distributor";
import { ignitionCoil } from "./ignition/ignition-coil";
import { sparkPlug } from "./ignition/spark-plug";
import { acCompressor } from "./hvac/ac-compressor";
import { acCondenser } from "./hvac/ac-condenser";
import { blowerMotor } from "./hvac/blower-motor";
import { cabinAirFilter } from "./hvac/cabin-air-filter";
import { evaporator } from "./hvac/evaporator";
import { expansionValve } from "./hvac/expansion-valve";
import { heaterCore } from "./hvac/heater-core";
import { bumper } from "./body-and-exterior/bumper";
import { bumperAbsorber } from "./body-and-exterior/bumper-absorber";
import { door } from "./body-and-exterior/door";
import { fender } from "./body-and-exterior/fender";
import { grille } from "./body-and-exterior/grille";
import { hood } from "./body-and-exterior/hood";
import { hoodGasStrut } from "./body-and-exterior/hood-gas-strut";
import { sideMirror } from "./body-and-exterior/side-mirror";
import { windshield } from "./body-and-exterior/windshield";
import { wiperBlade } from "./body-and-exterior/wiper-blade";
import { airbag } from "./interior-and-safety/airbag";
import { airbagControlUnit } from "./interior-and-safety/airbag-control-unit";
import { dashboard } from "./interior-and-safety/dashboard";
import { instrumentCluster } from "./interior-and-safety/instrument-cluster";
import { seat } from "./interior-and-safety/seat";
import { seatbelt } from "./interior-and-safety/seatbelt";
import { fogLight } from "./lighting/fog-light";
import { headlight } from "./lighting/headlight";
import { taillight } from "./lighting/taillight";
import { turnSignal } from "./lighting/turn-signal";
import { batteryManagementSystem } from "./electric-vehicle/battery-management-system";
import { chargingPort } from "./electric-vehicle/charging-port";
import { dcDcConverter } from "./electric-vehicle/dc-dc-converter";
import { electricTractionMotor } from "./electric-vehicle/electric-traction-motor";
import { highVoltageBatteryPack } from "./electric-vehicle/high-voltage-battery-pack";
import { inverter } from "./electric-vehicle/inverter";
import { onboardCharger } from "./electric-vehicle/onboard-charger";
import { reductionGearbox } from "./electric-vehicle/reduction-gearbox";

/** All car-part profiles in the autoCore dataset. */
export const parts: Part[] = [
  camshaft,
  connectingRod,
  crankshaft,
  cylinderHead,
  engineBlock,
  engineControlUnitEcu,
  engineMount,
  flywheel,
  harmonicBalancer,
  headGasket,
  oilFilter,
  oilPan,
  oilPump,
  piston,
  serpentineBelt,
  timingBelt,
  timingChain,
  valveCover,
  valves,
  carburetor,
  dieselInjectionPump,
  evaporativeCanister,
  fuelFilter,
  fuelInjector,
  fuelPump,
  fuelRail,
  fuelTank,
  glowPlug,
  throttleBody,
  airFilter,
  catalyticConverter,
  defTank,
  dieselParticulateFilter,
  egrValve,
  exhaustManifold,
  exhaustPipe,
  intakeManifold,
  intercooler,
  massAirFlowSensor,
  muffler,
  oxygenSensor,
  supercharger,
  turbocharger,
  coolantReservoir,
  radiator,
  radiatorFan,
  thermostat,
  waterPump,
  automaticTransmission,
  clutch,
  clutchMasterCylinder,
  cvAxle,
  cvJoint,
  differential,
  driveshaft,
  gearSelector,
  manualTransmission,
  torqueConverter,
  transferCase,
  transmissionControlUnit,
  universalJoint,
  ballJoint,
  bushing,
  coilSpring,
  controlArm,
  leafSpring,
  shockAbsorber,
  steeringKnuckle,
  strut,
  swayBar,
  wheelBearing,
  wheelHub,
  powerSteeringPump,
  steeringColumn,
  steeringRack,
  steeringWheel,
  tieRod,
  absModule,
  brakeBooster,
  brakeCaliper,
  brakeDisc,
  brakeDrum,
  brakeLine,
  brakeMasterCylinder,
  brakePad,
  brakeShoe,
  parkingBrake,
  lugNut,
  tire,
  tpmsSensor,
  valveStem,
  wheelRim,
  alternator,
  battery12v,
  bodyControlModule,
  fuseBox,
  horn,
  relay,
  starterMotor,
  washerPump,
  windshieldWiperMotor,
  wiringHarness,
  distributor,
  ignitionCoil,
  sparkPlug,
  acCompressor,
  acCondenser,
  blowerMotor,
  cabinAirFilter,
  evaporator,
  expansionValve,
  heaterCore,
  bumper,
  bumperAbsorber,
  door,
  fender,
  grille,
  hood,
  hoodGasStrut,
  sideMirror,
  windshield,
  wiperBlade,
  airbag,
  airbagControlUnit,
  dashboard,
  instrumentCluster,
  seat,
  seatbelt,
  fogLight,
  headlight,
  taillight,
  turnSignal,
  batteryManagementSystem,
  chargingPort,
  dcDcConverter,
  electricTractionMotor,
  highVoltageBatteryPack,
  inverter,
  onboardCharger,
  reductionGearbox,
];

/** Look up a part by its (case-insensitive) name. */
export function getPart(name: string): Part | undefined {
  const n = name.toLowerCase();
  return parts.find((p) => p.name.toLowerCase() === n);
}

/** All parts belonging to a given category. */
export function getPartsByCategory(category: Part["category"]): Part[] {
  return parts.filter((p) => p.category === category);
}

/** All parts used in a given powertrain type (includes "all"). */
export function getPartsByDriveType(driveType: Part["usedIn"]): Part[] {
  return parts.filter((p) => p.usedIn === driveType || p.usedIn === "all");
}
