import type { Country } from "./types";
import { proton } from "../manufacturers";

const founded = [proton];

export const malaysia: Country = {
  name: "Malaysia",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
