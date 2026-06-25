import type { Country } from "./types";
import {
  acura,
  daihatsu,
  datsun,
  honda,
  infiniti,
  isuzu,
  komatsu,
  lexus,
  mazda,
  mitsubishi,
  nissan,
  subaru,
  suzuki,
  toyota,
} from "../manufacturers";

const founded = [
  acura,
  daihatsu,
  datsun,
  honda,
  infiniti,
  isuzu,
  komatsu,
  lexus,
  mazda,
  mitsubishi,
  nissan,
  subaru,
  suzuki,
  toyota,
];

export const japan: Country = {
  name: "Japan",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
