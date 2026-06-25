import type { Country } from "./types";
import { maz } from "../manufacturers";

const founded = [maz];

export const belarus: Country = {
  name: "Belarus",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
