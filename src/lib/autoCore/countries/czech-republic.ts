import type { Country } from "./types";
import { skoda } from "../manufacturers";

const founded = [skoda];

export const czechRepublic: Country = {
  name: "Czech Republic",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
