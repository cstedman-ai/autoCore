import type { Country } from "./types";
import {
  audi,
  bmw,
  hanomag,
  kogel,
  krone,
  man,
  mercedesBenz,
  opel,
  porsche,
  schmitz,
  setra,
  smart,
  volkswagen,
} from "../manufacturers";

const founded = [
  audi,
  bmw,
  hanomag,
  kogel,
  krone,
  man,
  mercedesBenz,
  opel,
  porsche,
  schmitz,
  setra,
  smart,
  volkswagen,
];

export const germany: Country = {
  name: "Germany",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
