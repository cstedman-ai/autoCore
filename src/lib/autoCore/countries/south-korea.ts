import type { Country } from "./types";
import {
  daewoo,
  hyundai,
  kia,
  ssangyong,
  asiaMotors,
  genesis,
  gmKorea,
  htwo,
  hyundaiRotem,
  ioniq,
  kgMobility,
  protoMotors,
  renaultKorea,
  samsungMotors,
  tataDaewoo,
} from "../manufacturers";

const founded = [
  daewoo,
  hyundai,
  kia,
  ssangyong,
  asiaMotors,
  genesis,
  gmKorea,
  htwo,
  hyundaiRotem,
  ioniq,
  kgMobility,
  protoMotors,
  renaultKorea,
  samsungMotors,
  tataDaewoo,
];

export const southKorea: Country = {
  name: "South Korea",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
