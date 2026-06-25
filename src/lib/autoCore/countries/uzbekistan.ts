import type { Country } from "./types";
import { ravon } from "../manufacturers";

const founded = [ravon];

export const uzbekistan: Country = {
  name: "Uzbekistan",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
