import type { AftermarketManufacturer } from "./types";

export const valeo: AftermarketManufacturer = {
  name: "Valeo",
  address: "Paris, France",
  socialMedia: {
    twitter: null,
    linkedin: null,
    facebook: null,
    instagram: null,
  },
  website: "https://www.valeo.com",
  email: null,
  apiEndpoint: null,
  brandSpecializations: ["Most major automakers (OEM & aftermarket)"],
  primaryParts: ["AC Compressor", "AC Condenser", "Alternator", "Blower Motor", "Clutch", "Evaporator", "Expansion Valve", "Flywheel", "Fog Light", "Headlight", "Heater Core", "Intercooler", "Radiator", "Radiator Fan", "Starter Motor", "Taillight", "Windshield Wiper Motor", "Wiper Blade"],
  wikipedia: "https://en.wikipedia.org/wiki/Valeo",
  countryOfOrigin: "France",
  founders: ["Eugène Buisson"],
};
