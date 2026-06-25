import type { Country } from "./types";
import { wartburg } from "../manufacturers";

const founded = [wartburg];

export const eastGermany: Country = {
  name: "East Germany",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
