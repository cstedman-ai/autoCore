export * from "./types";

export { autohausaz } from "./autohausaz";
export { bimmerworld } from "./bimmerworld";
export { buyeuroparts } from "./buyeuroparts";
export { ecsTuning } from "./ecs-tuning";
export { eeuroparts } from "./eeuroparts";
export { fcpEuro } from "./fcp-euro";
export { partsavatar } from "./partsavatar";
export { partsgeek } from "./partsgeek";
export { pelicanParts } from "./pelican-parts";
export { rmeuropean } from "./rmeuropean";
export { rockauto } from "./rockauto";
export { turnerMotorsport } from "./turner-motorsport";

import type { PartsDistributor } from "./types";
import { autohausaz } from "./autohausaz";
import { bimmerworld } from "./bimmerworld";
import { buyeuroparts } from "./buyeuroparts";
import { ecsTuning } from "./ecs-tuning";
import { eeuroparts } from "./eeuroparts";
import { fcpEuro } from "./fcp-euro";
import { partsavatar } from "./partsavatar";
import { partsgeek } from "./partsgeek";
import { pelicanParts } from "./pelican-parts";
import { rmeuropean } from "./rmeuropean";
import { rockauto } from "./rockauto";
import { turnerMotorsport } from "./turner-motorsport";

/** All automotive parts distributors. */
export const partsDistributors: PartsDistributor[] = [
  autohausaz,
  bimmerworld,
  buyeuroparts,
  ecsTuning,
  eeuroparts,
  fcpEuro,
  partsavatar,
  partsgeek,
  pelicanParts,
  rmeuropean,
  rockauto,
  turnerMotorsport,
];

/** Look up a parts distributor by its (case-insensitive) name. */
export function getPartsDistributor(
  name: string,
): PartsDistributor | undefined {
  const n = name.toLowerCase();
  return partsDistributors.find((r) => r.name.toLowerCase() === n);
}
