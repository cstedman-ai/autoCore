import type { Country } from "./types";
import {
  eicher,
  ashokLeyland,
  atherEnergy,
  bajajAuto,
  forceMotors,
  heroMotoCorp,
  mahindra,
  marutiSuzuki,
  olaElectric,
  royalEnfield,
  tataMotors,
  tvsMotor,
} from "../manufacturers";

const founded = [
  eicher,
  ashokLeyland,
  atherEnergy,
  bajajAuto,
  forceMotors,
  heroMotoCorp,
  mahindra,
  marutiSuzuki,
  olaElectric,
  royalEnfield,
  tataMotors,
  tvsMotor,
];

export const india: Country = {
  name: "India",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
