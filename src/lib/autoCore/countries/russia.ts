import type { Country } from "./types";
import { gaz, lada, uaz } from "../manufacturers";

const founded = [gaz, lada, uaz];

export const russia: Country = {
  name: "Russia",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
