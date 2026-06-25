import type { Country } from "./types";
import {
  alfaRomeo,
  fiat,
  iveco,
  lamborghini,
  lancia,
  maserati,
  pagani,
} from "../manufacturers";

const founded = [alfaRomeo, fiat, iveco, lamborghini, lancia, maserati, pagani];

export const italy: Country = {
  name: "Italy",
  manufacturers: founded,
  brands: founded.map((m) => m.name),
};
