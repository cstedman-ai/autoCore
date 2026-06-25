import type { Country } from "./types";
import { daf } from "../manufacturers";

const founded = [daf];

export const netherlands: Country = {
  name: "Netherlands",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
