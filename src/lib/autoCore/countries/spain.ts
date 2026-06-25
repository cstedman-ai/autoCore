import type { Country } from "./types";
import { seat } from "../manufacturers";

const founded = [seat];

export const spain: Country = {
  name: "Spain",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
