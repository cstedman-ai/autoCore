from pathlib import Path
import re

root = Path('/Users/cstedman/Workspace/autoCore/src/lib/autoCore/specialtyTools.software')

tools = [
    {
        "name": "VCDS (VAG-COM Diagnostic System)",
        "description": "A Windows-based software package that emulates the functions of the dealer's very expensive proprietary scan tools for VW/Audi group vehicles.",
        "useCase": "Dealer-level diagnostics, module coding, service resets, and data logging for VAG vehicles.",
        "interfaceUsed": ["OBD2", "USB", "Wi-Fi"],
        "toolManufacturer": "Ross-Tech",
        "brandMakeModelApplications": ["Volkswagen", "Audi", "Seat", "Skoda", "Bentley"],
        "averageCost": "$199 - $599 (depending on VIN limit and interface)",
        "whereToBuy": ["Ross-Tech Official Website", "Authorized Distributors (ECS Tuning, FCP Euro, UroTuning)"],
        "wikipedia": "https://en.wikipedia.org/wiki/VAG-COM"
    },
    {
        "name": "FORScan",
        "description": "A powerful software scanner for Ford, Mazda, Lincoln, and Mercury vehicles, designed to work over ELM327 and J2534 pass-thru compatible adapters.",
        "useCase": "Read/clear manufacturer-specific DTCs, configure module As-Built data, run service bleed procedures, and program keys.",
        "interfaceUsed": ["OBD2", "USB", "Bluetooth", "Wi-Fi"],
        "toolManufacturer": "FORScan Team",
        "brandMakeModelApplications": ["Ford", "Mazda", "Lincoln", "Mercury"],
        "averageCost": "Free (Basic PC version) / $12 (1-Year Extended License) / $50 (Lifetime)",
        "whereToBuy": ["FORScan Official Website", "Apple App Store (Lite)", "Google Play Store (Lite)"],
        "wikipedia": "https://en.wikipedia.org/wiki/On-board_diagnostics"
    },
    {
        "name": "HP Tuners VCM Suite",
        "description": "A comprehensive tuning suite featuring VCM Editor and VCM Scanner, allowing users to read, edit, and write the flash memory of control modules in real time.",
        "useCase": "Engine and transmission tuning, data logging, custom mapping, and diagnostic scanning.",
        "interfaceUsed": ["OBD2", "USB", "Bluetooth"],
        "toolManufacturer": "HP Tuners",
        "brandMakeModelApplications": ["Chevrolet", "GMC", "Ford", "Dodge", "Jeep", "RAM", "Audi", "VW", "Toyota"],
        "averageCost": "$400 (MPVI3 Hardware) + $50 per Universal Credit (varies per vehicle)",
        "whereToBuy": ["HP Tuners Official Website", "Authorized Performance Shops"],
        "wikipedia": "https://en.wikipedia.org/wiki/Car_tuning"
    },
    {
        "name": "BimmerCode",
        "description": "A mobile application that allows users to code their BMW or MINI themselves, unlocking hidden features and customizing the car to their preferences.",
        "useCase": "Coding control units, unlocking hidden features (like video in motion or folding mirrors), and registering new batteries.",
        "interfaceUsed": ["OBD2", "Bluetooth", "Wi-Fi", "ENET Cable to Ethernet/Lightning/USB-C"],
        "toolManufacturer": "Stephan Gauch (SG Software GmbH & Co. KG)",
        "brandMakeModelApplications": ["BMW", "MINI", "Toyota Supra (A90/A91)"],
        "averageCost": "$40 - $50 (App Unlock) + $30 - $80 (OBD2 Adapter)",
        "whereToBuy": ["Apple App Store", "Google Play Store", "Amazon (for recommended OBD2 adapters)"],
        "wikipedia": "https://en.wikipedia.org/wiki/BMW"
    },
    {
        "name": "Carly",
        "description": "A universal OBD2 scanner and coding app that provides deep manufacturer-specific diagnostics, coding, and live data through a proprietary adapter.",
        "useCase": "Used vehicle pre-purchase inspection, deep diagnostics, coding hidden features, and service light resets.",
        "interfaceUsed": ["OBD2", "Bluetooth", "Wi-Fi"],
        "toolManufacturer": "Carly Solutions GmbH & Co KG",
        "brandMakeModelApplications": ["BMW", "Audi", "Volkswagen", "Mercedes-Benz", "Porsche", "Toyota", "Lexus", "Renault"],
        "averageCost": "$80 (Universal Scanner Hardware) + $60 - $130 (Annual App Subscription)",
        "whereToBuy": ["Carly Official Website", "Amazon"],
        "wikipedia": "https://en.wikipedia.org/wiki/On-board_diagnostics"
    },
    {
        "name": "Techstream (TIS)",
        "description": "The official dealer-level diagnostic software utilized by Toyota technicians worldwide to communicate with Toyota, Lexus, and Scion vehicles.",
        "useCase": "Dealer-level diagnostics, module reprogramming, hybrid battery health checks, TPMS registration, and custom settings adjustment.",
        "interfaceUsed": ["OBD2", "USB", "J2534 Pass-Thru"],
        "toolManufacturer": "Toyota Motor Corporation",
        "brandMakeModelApplications": ["Toyota", "Lexus", "Scion"],
        "averageCost": "$65 (Official 2-Day TIS Access) / Aftermarket cables and software bundles vary wildly from $25 - $150+",
        "whereToBuy": ["Toyota Tech Info Website (TIS)", "Aftermarket Tool Vendors"],
        "wikipedia": "https://en.wikipedia.org/wiki/Toyota"
    },
    {
        "name": "Hondata FlashPro",
        "description": "A hardware/software tuning solution that connects to a laptop via USB and the OBD2 port, allowing full user tuning and datalogging of late-model Hondas and Acuras.",
        "useCase": "Custom tuning of engine parameters (fuel, ignition timing, VTEC crossover, rev limit) for modified Honda/Acura vehicles.",
        "interfaceUsed": ["OBD2", "USB", "Bluetooth"],
        "toolManufacturer": "Hondata, Inc.",
        "brandMakeModelApplications": ["Honda Civic", "Honda Accord", "Honda S2000", "Honda CR-Z", "Acura TSX", "Acura TLX", "Acura Integra"],
        "averageCost": "$695 - $795",
        "whereToBuy": ["Hondata Official Website", "Authorized Tuning Dealers (e.g., K-Tuned, Evasive Motorsports)"],
        "wikipedia": "https://en.wikipedia.org/wiki/Hondata"
    },
    {
        "name": "AlfaOBD",
        "description": "A diagnostic software for vehicles produced by Fiat Chrysler Automobiles (FCA), capable of reading and clearing faults, running active tests, and changing proxy configuration.",
        "useCase": "Dealer-level diagnostics, proxy alignment, key programming, and enabling factory features on FCA vehicles.",
        "interfaceUsed": ["OBD2", "Bluetooth", "USB", "Wi-Fi"],
        "toolManufacturer": "AlfaOBD",
        "brandMakeModelApplications": ["Alfa Romeo", "Fiat", "Chrysler", "Dodge", "Ram", "Jeep", "Peugeot", "Citroen"],
        "averageCost": "$49 (Android/Windows App License) + $50 - $140 (Compatible OBDLink Adapter) + $20 (Security Gateway Bypass Cable)",
        "whereToBuy": ["Google Play Store", "AlfaOBD Official Website"],
        "wikipedia": "https://en.wikipedia.org/wiki/Stellantis"
    },
    {
        "name": "COBB Accesstuner",
        "description": "Custom engine management software designed to be used in conjunction with the COBB Accessport, giving tuners granular control over factory ECU tables.",
        "useCase": "Advanced engine map editing, boost control, fuel scaling, and ignition timing optimization for Accessport-supported vehicles.",
        "interfaceUsed": ["USB"],
        "toolManufacturer": "COBB Tuning",
        "brandMakeModelApplications": ["Subaru WRX/STI", "Porsche 911/Cayman", "Ford Mustang/Focus/Fiesta/Raptor", "Mazda MAZDASPEED", "Volkswagen GTI/Golf R", "Nissan GT-R"],
        "averageCost": "$149 (Accesstuner Training Course/Software License) + $650+ (Required Accessport Hardware)",
        "whereToBuy": ["COBB Tuning Official Website"],
        "wikipedia": "https://en.wikipedia.org/wiki/Engine_control_unit"
    },
    {
        "name": "ISTA (Integrated Service Technical Application)",
        "description": "The official BMW dealer diagnostic software (ISTA-D for diagnostics, ISTA-P for programming) featuring wiring diagrams, repair instructions, and module programming.",
        "useCase": "Guided dealer-level troubleshooting, module flashing/programming, service plan generation, and reviewing electrical schematics.",
        "interfaceUsed": ["OBD2", "Ethernet (ENET)", "ICOM A/B/C/Next", "USB", "Wi-Fi"],
        "toolManufacturer": "BMW Group",
        "brandMakeModelApplications": ["BMW", "MINI", "Rolls-Royce"],
        "averageCost": "$30/day (Official BMW AOS) / Bundled with hardware packages from independent vendors ($100 - $1000+)",
        "whereToBuy": ["BMW Aftersales Online System (AOS)", "Independent diagnostic hardware specialists"],
        "wikipedia": "https://en.wikipedia.org/wiki/BMW"
    },
    {
        "name": "EcuTek ProECU",
        "description": "A high-end tuning suite allowing the recalibration of original factory engine management systems via the diagnostic port, often supporting custom Map Switching and Flex Fuel.",
        "useCase": "Performance tuning, adding Flex Fuel logic, custom map switching, and launch control on factory ECUs.",
        "interfaceUsed": ["OBD2", "USB", "Bluetooth"],
        "toolManufacturer": "EcuTek Technologies Ltd (AutoMeter Products)",
        "brandMakeModelApplications": ["Subaru BRZ/WRX", "Nissan GT-R/370Z", "Toyota GR86/Supra", "Mazda Miata", "BMW (F/G Series)", "Volkswagen", "Audi"],
        "averageCost": "$350 (Hardware/Software Kit) + $350 (Per-Vehicle Flash License)",
        "whereToBuy": ["Master Tuners", "EcuTek Dealer Network"],
        "wikipedia": "https://en.wikipedia.org/wiki/Car_tuning"
    },
    {
        "name": "JScan",
        "description": "A powerful OBD diagnostic and vehicle configuration app tailored specifically for Jeep, Chrysler, Dodge, and Ram vehicles, using a smartphone and ELM327-compatible adapter.",
        "useCase": "Changing tire size settings, altering axle gear ratios, disabling TPMS, and configuring daytime running lights.",
        "interfaceUsed": ["OBD2", "Bluetooth", "Wi-Fi"],
        "toolManufacturer": "JScan",
        "brandMakeModelApplications": ["Jeep Wrangler (JK/JL)", "Jeep Grand Cherokee", "Dodge Charger", "Dodge Challenger", "Ram 1500/2500", "Chrysler 300"],
        "averageCost": "$24 (Per-VIN License) + $30 - $140 (Compatible OBD2 Adapter)",
        "whereToBuy": ["Apple App Store", "Google Play Store", "JScan Official Website"],
        "wikipedia": "https://en.wikipedia.org/wiki/Jeep"
    }
]

def slugify(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower().split('(')[0]).strip('-')

def camel(slug):
    parts = slug.split('-')
    return parts[0] + ''.join(p.capitalize() for p in parts[1:])

def q(value):
    if value is None:
        return 'null'
    return '"' + value.replace('\\', '\\\\').replace('"', '\\"') + '"'

def arr(values):
    return '[' + ', '.join(q(v) for v in values) + ']'

records = []
for tool in tools:
    slug = slugify(tool['name'])
    var = camel(slug)
    records.append((slug, var, tool['name']))
    (root / f'{slug}.ts').write_text(f'''import type {{ SoftwareSpecialtyTool }} from "./types";

export const {var}: SoftwareSpecialtyTool = {{
  name: {q(tool['name'])},
  description: {q(tool['description'])},
  useCase: {q(tool['useCase'])},
  interfaceUsed: {arr(tool['interfaceUsed'])},
  toolManufacturer: {q(tool['toolManufacturer'])},
  brandMakeModelApplications: {arr(tool['brandMakeModelApplications'])},
  averageCost: {q(tool['averageCost'])},
  whereToBuy: {arr(tool['whereToBuy'])},
  wikipedia: {q(tool['wikipedia'])},
}};
''')

records.sort(key=lambda r: r[2].lower())

lines = ['export * from "./types";', '']
for slug, var, _ in records:
    lines.append(f'export {{ {var} }} from "./{slug}";')
lines += ['', 'import type { SoftwareSpecialtyTool } from "./types";']
for slug, var, _ in records:
    lines.append(f'import {{ {var} }} from "./{slug}";')
lines += ['', '/** Software specialty tools used for automotive repair and tuning. */', 'export const softwareSpecialtyTools: SoftwareSpecialtyTool[] = [']
for _, var, _ in records:
    lines.append(f'  {var},')
lines += ['];', '', '/** Look up a software specialty tool by its case-insensitive name. */', 'export function getSoftwareSpecialtyTool(', '  name: string,', '): SoftwareSpecialtyTool | undefined {', '  const normalized = name.toLowerCase();', '  return softwareSpecialtyTools.find(', '    (tool) => tool.name.toLowerCase() === normalized,', '  );', '}', '']

(root / 'index.ts').write_text('\n'.join(lines))
print('Generated', len(records), 'software specialty tools.')
