import type { Country } from "./types";
import { citroen, peugeot, renault } from "../manufacturers";

const founded = [citroen, peugeot, renault];

export const france: Country = {
  name: "France",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
