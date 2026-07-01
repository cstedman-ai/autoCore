export * from "./types";

export { alfaobd } from "./alfaobd";
export { bimmercode } from "./bimmercode";
export { bootmod3 } from "./bootmod3";
export { carly } from "./carly";
export { cobbAccesstuner } from "./cobb-accesstuner";
export { ecutekProecu } from "./ecutek-proecu";
export { efilive } from "./efilive";
export { fdrs } from "./fdrs";
export { forscan } from "./forscan";
export { hondataFlashpro } from "./hondata-flashpro";
export { hpTunersVcmSuite } from "./hp-tuners-vcm-suite";
export { ista } from "./ista";
export { jscan } from "./jscan";
export { mhdTuning } from "./mhd-tuning";
export { odisService } from "./odis-service";
export { porschePiwis } from "./porsche-piwis";
export { techstream } from "./techstream";
export { vcds } from "./vcds";
export { volvoVida } from "./volvo-vida";
export { witech20 } from "./witech-2-0";
export { xentryDiagnostics } from "./xentry-diagnostics";
export { xhpFlashtool } from "./xhp-flashtool";

import type { SoftwareSpecialtyTool } from "./types";
import { alfaobd } from "./alfaobd";
import { bimmercode } from "./bimmercode";
import { bootmod3 } from "./bootmod3";
import { carly } from "./carly";
import { cobbAccesstuner } from "./cobb-accesstuner";
import { ecutekProecu } from "./ecutek-proecu";
import { efilive } from "./efilive";
import { fdrs } from "./fdrs";
import { forscan } from "./forscan";
import { hondataFlashpro } from "./hondata-flashpro";
import { hpTunersVcmSuite } from "./hp-tuners-vcm-suite";
import { ista } from "./ista";
import { jscan } from "./jscan";
import { mhdTuning } from "./mhd-tuning";
import { odisService } from "./odis-service";
import { porschePiwis } from "./porsche-piwis";
import { techstream } from "./techstream";
import { vcds } from "./vcds";
import { volvoVida } from "./volvo-vida";
import { witech20 } from "./witech-2-0";
import { xentryDiagnostics } from "./xentry-diagnostics";
import { xhpFlashtool } from "./xhp-flashtool";

/** Software specialty tools used for automotive repair and tuning. */
export const softwareSpecialtyTools: SoftwareSpecialtyTool[] = [
  alfaobd,
  bimmercode,
  bootmod3,
  carly,
  cobbAccesstuner,
  ecutekProecu,
  efilive,
  fdrs,
  forscan,
  hondataFlashpro,
  hpTunersVcmSuite,
  ista,
  jscan,
  mhdTuning,
  odisService,
  porschePiwis,
  techstream,
  vcds,
  volvoVida,
  witech20,
  xentryDiagnostics,
  xhpFlashtool,
];

/** Look up a software specialty tool by its case-insensitive name. */
export function getSoftwareSpecialtyTool(
  name: string,
): SoftwareSpecialtyTool | undefined {
  const normalized = name.toLowerCase();
  return softwareSpecialtyTools.find(
    (tool) => tool.name.toLowerCase() === normalized,
  );
}
