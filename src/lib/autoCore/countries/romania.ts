import type { Country } from "./types";
import { dacia } from "../manufacturers";

const founded = [dacia];

export const romania: Country = {
  name: "Romania",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
