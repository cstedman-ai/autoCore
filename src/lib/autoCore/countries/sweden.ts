import type { Country } from "./types";
import { saab, scania, volvo } from "../manufacturers";

const founded = [saab, scania, volvo];

export const sweden: Country = {
  name: "Sweden",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
