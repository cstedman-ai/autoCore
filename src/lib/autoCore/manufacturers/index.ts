import type { Manufacturer } from "./types";

import { acura } from "./acura";
import { aeolus } from "./aeolus";
import { aion } from "./aion";
import { aito } from "./aito";
import { alfaRomeo } from "./alfa-romeo";
import { amc } from "./amc";
import { arcfox } from "./arcfox";
import { ariel } from "./ariel";
import { ashokLeyland } from "./ashok-leyland";
import { asiaMotors } from "./asia-motors";
import { astonMartin } from "./aston-martin";
import { atherEnergy } from "./ather-energy";
import { audi } from "./audi";
import { austin } from "./austin";
import { avatr } from "./avatr";
import { bac } from "./bac";
import { baic } from "./baic";
import { bajajAuto } from "./bajaj-auto";
import { baojun } from "./baojun";
import { beijingOffRoad } from "./beijing-off-road";
import { beijing } from "./beijing";
import { bentley } from "./bentley";
import { bestune } from "./bestune";
import { bmw } from "./bmw";
import { buick } from "./buick";
import { byd } from "./byd";
import { cadillac } from "./cadillac";
import { canoo } from "./canoo";
import { caterham } from "./caterham";
import { changan } from "./changan";
import { chery } from "./chery";
import { chevrolet } from "./chevrolet";
import { chrysler } from "./chrysler";
import { citroen } from "./citroen";
import { dacia } from "./dacia";
import { daewoo } from "./daewoo";
import { daf } from "./daf";
import { daihatsu } from "./daihatsu";
import { daimlerUk } from "./daimler-uk";
import { datsun } from "./datsun";
import { davidBrownAutomotive } from "./david-brown-automotive";
import { deepal } from "./deepal";
import { delorean } from "./delorean";
import { denza } from "./denza";
import { dfsk } from "./dfsk";
import { dodge } from "./dodge";
import { dongfengNammi } from "./dongfeng-nammi";
import { dongfeng } from "./dongfeng";
import { eicher } from "./eicher";
import { exeed } from "./exeed";
import { fangchengbao } from "./fangchengbao";
import { faradayFuture } from "./faraday-future";
import { farizon } from "./farizon";
import { faw } from "./faw";
import { fengon } from "./fengon";
import { fiat } from "./fiat";
import { fisker } from "./fisker";
import { forceMotors } from "./force-motors";
import { ford } from "./ford";
import { forthing } from "./forthing";
import { foton } from "./foton";
import { freightliner } from "./freightliner";
import { gac } from "./gac";
import { gaz } from "./gaz";
import { geely } from "./geely";
import { genesis } from "./genesis";
import { ginetta } from "./ginetta";
import { gmKorea } from "./gm-korea";
import { gmc } from "./gmc";
import { greatWall } from "./great-wall";
import { hanomag } from "./hanomag";
import { harleyDavidson } from "./harley-davidson";
import { haval } from "./haval";
import { heroMotoCorp } from "./hero-motocorp";
import { hillman } from "./hillman";
import { honda } from "./honda";
import { hongqi } from "./hongqi";
import { htwo } from "./htwo";
import { hummer } from "./hummer";
import { hyptec } from "./hyptec";
import { hyundaiRotem } from "./hyundai-rotem";
import { hyundai } from "./hyundai";
import { iCar } from "./icar";
import { im } from "./im";
import { indianMotorcycle } from "./indian-motorcycle";
import { ineosAutomotive } from "./ineos-automotive";
import { infiniti } from "./infiniti";
import { international } from "./international";
import { ioniq } from "./ioniq";
import { isuzu } from "./isuzu";
import { iveco } from "./iveco";
import { jacRefine } from "./jac-refine";
import { jacYiwei } from "./jac-yiwei";
import { jac } from "./jac";
import { jaecoo } from "./jaecoo";
import { jaguar } from "./jaguar";
import { jeep } from "./jeep";
import { jensen } from "./jensen";
import { jetour } from "./jetour";
import { jetta } from "./jetta";
import { jiefang } from "./jiefang";
import { johnDeere } from "./john-deere";
import { karmaAutomotive } from "./karma-automotive";
import { kenworth } from "./kenworth";
import { kgMobility } from "./kg-mobility";
import { kia } from "./kia";
import { kogel } from "./kogel";
import { komatsu } from "./komatsu";
import { krone } from "./krone";
import { lada } from "./lada";
import { lagonda } from "./lagonda";
import { lamborghini } from "./lamborghini";
import { lancia } from "./lancia";
import { landRover } from "./land-rover";
import { ldv } from "./ldv";
import { leapmotor } from "./leapmotor";
import { levc } from "./levc";
import { lexus } from "./lexus";
import { liAuto } from "./li-auto";
import { lifan } from "./lifan";
import { lincoln } from "./lincoln";
import { livan } from "./livan";
import { lordstownMotors } from "./lordstown-motors";
import { lotus } from "./lotus";
import { lucid } from "./lucid";
import { luxeed } from "./luxeed";
import { lynkAndCo } from "./lynk-and-co";
import { mHero } from "./m-hero";
import { mackTrucks } from "./mack-trucks";
import { mahindra } from "./mahindra";
import { man } from "./man";
import { marutiSuzuki } from "./maruti-suzuki";
import { maserati } from "./maserati";
import { maxus } from "./maxus";
import { maz } from "./maz";
import { mazda } from "./mazda";
import { mclaren } from "./mclaren";
import { mercedesBenz } from "./mercedes-benz";
import { mercury } from "./mercury";
import { mg } from "./mg";
import { mini } from "./mini";
import { mitsubishi } from "./mitsubishi";
import { morgan } from "./morgan";
import { morris } from "./morris";
import { navistar } from "./navistar";
import { neta } from "./neta";
import { nio } from "./nio";
import { nissan } from "./nissan";
import { noble } from "./noble";
import { olaElectric } from "./ola-electric";
import { oldsmobile } from "./oldsmobile";
import { omoda } from "./omoda";
import { opel } from "./opel";
import { ora } from "./ora";
import { packard } from "./packard";
import { pagani } from "./pagani";
import { peterbilt } from "./peterbilt";
import { peugeot } from "./peugeot";
import { plymouth } from "./plymouth";
import { polaris } from "./polaris";
import { pontiac } from "./pontiac";
import { porsche } from "./porsche";
import { protoMotors } from "./proto-motors";
import { proton } from "./proton";
import { radical } from "./radical";
import { ram } from "./ram";
import { ravon } from "./ravon";
import { reliant } from "./reliant";
import { renaultKorea } from "./renault-korea";
import { renault } from "./renault";
import { risingAuto } from "./rising-auto";
import { rivian } from "./rivian";
import { roewe } from "./roewe";
import { rollsRoyce } from "./rolls-royce";
import { roush } from "./roush";
import { rover } from "./rover";
import { royalEnfield } from "./royal-enfield";
import { saab } from "./saab";
import { saic } from "./saic";
import { saleen } from "./saleen";
import { samsungMotors } from "./samsung-motors";
import { saturn } from "./saturn";
import { scania } from "./scania";
import { schmitz } from "./schmitz";
import { scion } from "./scion";
import { seat } from "./seat";
import { seres } from "./seres";
import { setra } from "./setra";
import { singer } from "./singer";
import { skoda } from "./skoda";
import { smart } from "./smart";
import { ssangyong } from "./ssangyong";
import { sscNorthAmerica } from "./ssc-north-america";
import { studebaker } from "./studebaker";
import { subaru } from "./subaru";
import { sunbeam } from "./sunbeam";
import { suzuki } from "./suzuki";
import { tank } from "./tank";
import { tataDaewoo } from "./tata-daewoo";
import { tataMotors } from "./tata-motors";
import { tesla } from "./tesla";
import { toyota } from "./toyota";
import { triumph } from "./triumph";
import { trumpchi } from "./trumpchi";
import { tvr } from "./tvr";
import { tvsMotor } from "./tvs-motor";
import { uaz } from "./uaz";
import { vauxhall } from "./vauxhall";
import { vectorMotors } from "./vector-motors";
import { volkswagen } from "./volkswagen";
import { volvo } from "./volvo";
import { voyah } from "./voyah";
import { wartburg } from "./wartburg";
import { westernStar } from "./western-star";
import { wey } from "./wey";
import { wolseley } from "./wolseley";
import { wuling } from "./wuling";
import { xiaomiAuto } from "./xiaomi-auto";
import { xpeng } from "./xpeng";
import { yangwang } from "./yangwang";
import { yuejin } from "./yuejin";
import { yueyi } from "./yueyi";
import { zeekr } from "./zeekr";

export type {
  Manufacturer,
  SocialMedia,
  StockListing,
  Vehicle,
} from "./types";

export {
  acura,
  aeolus,
  aion,
  aito,
  alfaRomeo,
  amc,
  arcfox,
  ariel,
  ashokLeyland,
  asiaMotors,
  astonMartin,
  atherEnergy,
  audi,
  austin,
  avatr,
  bac,
  baic,
  bajajAuto,
  baojun,
  beijingOffRoad,
  beijing,
  bentley,
  bestune,
  bmw,
  buick,
  byd,
  cadillac,
  canoo,
  caterham,
  changan,
  chery,
  chevrolet,
  chrysler,
  citroen,
  dacia,
  daewoo,
  daf,
  daihatsu,
  daimlerUk,
  datsun,
  davidBrownAutomotive,
  deepal,
  delorean,
  denza,
  dfsk,
  dodge,
  dongfengNammi,
  dongfeng,
  eicher,
  exeed,
  fangchengbao,
  faradayFuture,
  farizon,
  faw,
  fengon,
  fiat,
  fisker,
  forceMotors,
  ford,
  forthing,
  foton,
  freightliner,
  gac,
  gaz,
  geely,
  genesis,
  ginetta,
  gmKorea,
  gmc,
  greatWall,
  hanomag,
  harleyDavidson,
  haval,
  heroMotoCorp,
  hillman,
  honda,
  hongqi,
  htwo,
  hummer,
  hyptec,
  hyundaiRotem,
  hyundai,
  iCar,
  im,
  indianMotorcycle,
  ineosAutomotive,
  infiniti,
  international,
  ioniq,
  isuzu,
  iveco,
  jacRefine,
  jacYiwei,
  jac,
  jaecoo,
  jaguar,
  jeep,
  jensen,
  jetour,
  jetta,
  jiefang,
  johnDeere,
  karmaAutomotive,
  kenworth,
  kgMobility,
  kia,
  kogel,
  komatsu,
  krone,
  lada,
  lagonda,
  lamborghini,
  lancia,
  landRover,
  ldv,
  leapmotor,
  levc,
  lexus,
  liAuto,
  lifan,
  lincoln,
  livan,
  lordstownMotors,
  lotus,
  lucid,
  luxeed,
  lynkAndCo,
  mHero,
  mackTrucks,
  mahindra,
  man,
  marutiSuzuki,
  maserati,
  maxus,
  maz,
  mazda,
  mclaren,
  mercedesBenz,
  mercury,
  mg,
  mini,
  mitsubishi,
  morgan,
  morris,
  navistar,
  neta,
  nio,
  nissan,
  noble,
  olaElectric,
  oldsmobile,
  omoda,
  opel,
  ora,
  packard,
  pagani,
  peterbilt,
  peugeot,
  plymouth,
  polaris,
  pontiac,
  porsche,
  protoMotors,
  proton,
  radical,
  ram,
  ravon,
  reliant,
  renaultKorea,
  renault,
  risingAuto,
  rivian,
  roewe,
  rollsRoyce,
  roush,
  rover,
  royalEnfield,
  saab,
  saic,
  saleen,
  samsungMotors,
  saturn,
  scania,
  schmitz,
  scion,
  seat,
  seres,
  setra,
  singer,
  skoda,
  smart,
  ssangyong,
  sscNorthAmerica,
  studebaker,
  subaru,
  sunbeam,
  suzuki,
  tank,
  tataDaewoo,
  tataMotors,
  tesla,
  toyota,
  triumph,
  trumpchi,
  tvr,
  tvsMotor,
  uaz,
  vauxhall,
  vectorMotors,
  volkswagen,
  volvo,
  voyah,
  wartburg,
  westernStar,
  wey,
  wolseley,
  wuling,
  xiaomiAuto,
  xpeng,
  yangwang,
  yuejin,
  yueyi,
  zeekr,
};

/** All manufacturer profiles as a single array. */
export const manufacturers: Manufacturer[] = [
  acura,
  aeolus,
  aion,
  aito,
  alfaRomeo,
  amc,
  arcfox,
  ariel,
  ashokLeyland,
  asiaMotors,
  astonMartin,
  atherEnergy,
  audi,
  austin,
  avatr,
  bac,
  baic,
  bajajAuto,
  baojun,
  beijingOffRoad,
  beijing,
  bentley,
  bestune,
  bmw,
  buick,
  byd,
  cadillac,
  canoo,
  caterham,
  changan,
  chery,
  chevrolet,
  chrysler,
  citroen,
  dacia,
  daewoo,
  daf,
  daihatsu,
  daimlerUk,
  datsun,
  davidBrownAutomotive,
  deepal,
  delorean,
  denza,
  dfsk,
  dodge,
  dongfengNammi,
  dongfeng,
  eicher,
  exeed,
  fangchengbao,
  faradayFuture,
  farizon,
  faw,
  fengon,
  fiat,
  fisker,
  forceMotors,
  ford,
  forthing,
  foton,
  freightliner,
  gac,
  gaz,
  geely,
  genesis,
  ginetta,
  gmKorea,
  gmc,
  greatWall,
  hanomag,
  harleyDavidson,
  haval,
  heroMotoCorp,
  hillman,
  honda,
  hongqi,
  htwo,
  hummer,
  hyptec,
  hyundaiRotem,
  hyundai,
  iCar,
  im,
  indianMotorcycle,
  ineosAutomotive,
  infiniti,
  international,
  ioniq,
  isuzu,
  iveco,
  jacRefine,
  jacYiwei,
  jac,
  jaecoo,
  jaguar,
  jeep,
  jensen,
  jetour,
  jetta,
  jiefang,
  johnDeere,
  karmaAutomotive,
  kenworth,
  kgMobility,
  kia,
  kogel,
  komatsu,
  krone,
  lada,
  lagonda,
  lamborghini,
  lancia,
  landRover,
  ldv,
  leapmotor,
  levc,
  lexus,
  liAuto,
  lifan,
  lincoln,
  livan,
  lordstownMotors,
  lotus,
  lucid,
  luxeed,
  lynkAndCo,
  mHero,
  mackTrucks,
  mahindra,
  man,
  marutiSuzuki,
  maserati,
  maxus,
  maz,
  mazda,
  mclaren,
  mercedesBenz,
  mercury,
  mg,
  mini,
  mitsubishi,
  morgan,
  morris,
  navistar,
  neta,
  nio,
  nissan,
  noble,
  olaElectric,
  oldsmobile,
  omoda,
  opel,
  ora,
  packard,
  pagani,
  peterbilt,
  peugeot,
  plymouth,
  polaris,
  pontiac,
  porsche,
  protoMotors,
  proton,
  radical,
  ram,
  ravon,
  reliant,
  renaultKorea,
  renault,
  risingAuto,
  rivian,
  roewe,
  rollsRoyce,
  roush,
  rover,
  royalEnfield,
  saab,
  saic,
  saleen,
  samsungMotors,
  saturn,
  scania,
  schmitz,
  scion,
  seat,
  seres,
  setra,
  singer,
  skoda,
  smart,
  ssangyong,
  sscNorthAmerica,
  studebaker,
  subaru,
  sunbeam,
  suzuki,
  tank,
  tataDaewoo,
  tataMotors,
  tesla,
  toyota,
  triumph,
  trumpchi,
  tvr,
  tvsMotor,
  uaz,
  vauxhall,
  vectorMotors,
  volkswagen,
  volvo,
  voyah,
  wartburg,
  westernStar,
  wey,
  wolseley,
  wuling,
  xiaomiAuto,
  xpeng,
  yangwang,
  yuejin,
  yueyi,
  zeekr,
];

/** Look up a manufacturer profile by (case-insensitive) name. */
export function getManufacturer(name: string): Manufacturer | null {
  const q = name.toLowerCase();
  return manufacturers.find((m) => m.name.toLowerCase() === q) ?? null;
}
