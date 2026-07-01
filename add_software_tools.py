from pathlib import Path
import re
import json

root = Path('/Users/cstedman/Workspace/autoCore/src/lib/autoCore/specialtyTools.software')

new_tools = [
    {
        "name": "XENTRY Diagnostics",
        "description": "The official OEM diagnostic software used by Mercedes-Benz dealerships to perform deep diagnostics, coding, and programming.",
        "useCase": "Dealer-level diagnostics, module flashing, SCN coding, and service routines for Mercedes-Benz.",
        "interfaceUsed": ["OBD2", "USB", "Wi-Fi", "Mercedes Star Diagnosis C4/C5/C6 multiplexers"],
        "toolManufacturer": "Mercedes-Benz Group",
        "brandMakeModelApplications": ["Mercedes-Benz", "Smart", "Maybach"],
        "averageCost": "$100 - $300 (Independent diagnostic clone setups) / Official licensing is highly restricted and subscription-based",
        "whereToBuy": ["Mercedes-Benz B2B Connect", "Independent Diagnostic Hardware Vendors"],
        "wikipedia": "https://en.wikipedia.org/wiki/Mercedes-Benz"
    },
    {
        "name": "ODIS Service",
        "description": "Offis Diagnostics Information System (ODIS) is the official OEM diagnostic software used by Volkswagen Group dealerships.",
        "useCase": "Guided fault finding, control module flashing, SVM (Software Version Management) coding, and key programming.",
        "interfaceUsed": ["OBD2", "USB", "Wi-Fi", "VAS 6154/VAS 5054A interface"],
        "toolManufacturer": "Volkswagen Group",
        "brandMakeModelApplications": ["Volkswagen", "Audi", "Seat", "Skoda", "Bentley", "Lamborghini", "Porsche"],
        "averageCost": "Varies by subscription (Hourly/Daily/Yearly via erWin) / Hardware interfaces $100 - $1000+",
        "whereToBuy": ["VW/Audi erWin Portals", "Specialty Diagnostic Vendors"],
        "wikipedia": "https://en.wikipedia.org/wiki/Volkswagen_Group"
    },
    {
        "name": "MHD Tuning",
        "description": "A highly popular mobile app-based flash tuning platform for BMW and VAG vehicles, allowing users to flash OTS (Off The Shelf) maps and custom tunes.",
        "useCase": "Engine ECU flashing, datalogging, reading/clearing codes, and exhaust burble customization.",
        "interfaceUsed": ["OBD2", "Wi-Fi (MHD Wi-Fi Adapter)", "ENET to Lightning/USB-C"],
        "toolManufacturer": "MHD Tuning",
        "brandMakeModelApplications": ["BMW (N54, N55, S55, B58, S58)", "Toyota Supra (A90)", "Volkswagen/Audi (EA888, EA888.3)"],
        "averageCost": "$250 - $400 (Flasher License + Map Pack) + $80 (Wi-Fi Adapter)",
        "whereToBuy": ["MHD Tuning Official Website", "Apple App Store", "Google Play Store", "Burger Motorsports / Aftermarket vendors"],
        "wikipedia": "https://en.wikipedia.org/wiki/Car_tuning"
    },
    {
        "name": "Bootmod3 (BM3)",
        "description": "A cloud-based flash tuning platform primarily for BMWs, known for a massive user base, Off The Shelf maps, custom tuning, and an active community.",
        "useCase": "ECU flash tuning, custom map management, transmission tuning integration, datalogging, and exhaust tuning.",
        "interfaceUsed": ["OBD2", "ENET Cable", "Wi-Fi (BM3 Wi-Fi Adapter)"],
        "toolManufacturer": "ProTuning Freaks",
        "brandMakeModelApplications": ["BMW (N20, N55, S55, B48, B58, S58, S63)", "Toyota Supra (A90)"],
        "averageCost": "$595 (Software License incl. one OTS map) + $80 (Wi-Fi Adapter)",
        "whereToBuy": ["ProTuning Freaks Website", "Authorized Retailers (Kies Motorsports, X-PH)"],
        "wikipedia": "https://en.wikipedia.org/wiki/Car_tuning"
    },
    {
        "name": "xHP Flashtool",
        "description": "The worldwide leading solution for tuning BMW and VAG automatic transmissions (ZF6, ZF8, and DSG), offering faster shifts, removed torque limiters, and customized shift points.",
        "useCase": "Transmission Control Unit (TCU) flash tuning, adjusting shift points, line pressure, and launch control.",
        "interfaceUsed": ["OBD2", "Wi-Fi (MHD or Thor Adapter)", "ENET Cable"],
        "toolManufacturer": "RBT-Tuning GmbH",
        "brandMakeModelApplications": ["BMW (ZF 6HP, ZF 8HP, 7-speed DCT)", "Audi/VW (DSG, ZF 8HP)", "Toyota Supra (A90)"],
        "averageCost": "$150 (Flash License) + $80 - $120 (Map Pack) + $80 (Wi-Fi Adapter)",
        "whereToBuy": ["xHP Flashtool Website", "Apple App Store", "Google Play Store"],
        "wikipedia": "https://en.wikipedia.org/wiki/Automatic_transmission"
    },
    {
        "name": "Porsche PIWIS",
        "description": "The Porsche Integrated Workshop Information System (PIWIS) is the official diagnostic software and hardware suite used by Porsche dealerships.",
        "useCase": "Deep dealer-level diagnostics, component protection removal, module coding, and guided fault finding.",
        "interfaceUsed": ["OBD2", "USB", "Wi-Fi", "PIWIS VCI (Vehicle Communication Interface)"],
        "toolManufacturer": "Porsche AG",
        "brandMakeModelApplications": ["Porsche 911", "Porsche Cayman/Boxster", "Porsche Cayenne", "Porsche Macan", "Porsche Panamera", "Porsche Taycan"],
        "averageCost": "$800 - $2,500+ (Aftermarket PIWIS 3/4 Clones and Laptops) / Official subscriptions are tightly restricted",
        "whereToBuy": ["Independent Diagnostic Hardware Vendors"],
        "wikipedia": "https://en.wikipedia.org/wiki/Porsche"
    },
    {
        "name": "Volvo VIDA",
        "description": "Volvo Information and Diagnostics for Aftersales (VIDA) is the proprietary software used for diagnosing, troubleshooting, and downloading software to Volvo cars.",
        "useCase": "OEM-level diagnostics, wiring diagrams, parts cataloging, and module software downloads.",
        "interfaceUsed": ["OBD2", "USB", "Bluetooth", "Volvo DiCE interface", "J2534 Pass-Thru"],
        "toolManufacturer": "Volvo Cars",
        "brandMakeModelApplications": ["Volvo"],
        "averageCost": "$80 (3-day subscription via Volvo TechInfo) / $100 - $300 (DiCE clone and cracked VIDA 2014D for older cars)",
        "whereToBuy": ["Volvo Cars Technical Information Shop (TIS)", "Independent Diagnostic Hardware Vendors"],
        "wikipedia": "https://en.wikipedia.org/wiki/Volvo_Cars"
    },
    {
        "name": "EFILive",
        "description": "A powerful custom tuning software suite that lets users read, edit, and write the calibration of engine and transmission control modules, particularly known in the diesel community.",
        "useCase": "Custom ECU/TCU tuning, data logging, and performance modifications for domestic V8s and diesel trucks.",
        "interfaceUsed": ["OBD2", "USB", "FlashScan/AutoCal hardware"],
        "toolManufacturer": "EFILive Limited",
        "brandMakeModelApplications": ["Chevrolet/GMC (Duramax, LS/LT V8s)", "Dodge/Ram (Cummins)"],
        "averageCost": "$900+ (FlashScan V3 Hardware) + $125 per VIN License",
        "whereToBuy": ["EFILive Official Website", "Authorized Diesel & Performance Shops"],
        "wikipedia": "https://en.wikipedia.org/wiki/Car_tuning"
    },
    {
        "name": "FDRS (Ford Diagnostic & Repair System)",
        "description": "The next-generation factory Ford diagnostic software, replacing the older IDS (Integrated Diagnostic System), used for all newer Ford and Lincoln vehicles.",
        "useCase": "Dealer-level module programming, key programming, parameter resets, and diagnosing complex vehicle networks.",
        "interfaceUsed": ["OBD2", "USB", "VCM II / VCM 3 / J2534 compatible devices"],
        "toolManufacturer": "Ford Motor Company",
        "brandMakeModelApplications": ["Ford", "Lincoln", "Mercury"],
        "averageCost": "$50 (2-day license) + compatible J2534 or VCM3 hardware ($500 - $1500+)",
        "whereToBuy": ["Motorcraft Service Website"],
        "wikipedia": "https://en.wikipedia.org/wiki/Ford_Motor_Company"
    },
    {
        "name": "wiTECH 2.0",
        "description": "The current cloud-based OEM diagnostic system utilized by Stellantis (FCA) dealerships for modern Chrysler, Dodge, Jeep, Ram, Fiat, and Alfa Romeo vehicles.",
        "useCase": "Flashing modules, bypassing the Security Gateway Module (SGW), deep diagnostics, and ECU updates.",
        "interfaceUsed": ["OBD2", "Wi-Fi", "USB", "microPod II / MDP (Mopar Diagnostic Pod)"],
        "toolManufacturer": "Stellantis / Mopar",
        "brandMakeModelApplications": ["Chrysler", "Dodge", "Jeep", "Ram", "Fiat", "Alfa Romeo"],
        "averageCost": "$55 (3-day TechAuthority subscription) + Hardware ($500+)",
        "whereToBuy": ["TechAuthority", "Stellantis Service Portals"],
        "wikipedia": "https://en.wikipedia.org/wiki/Stellantis"
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

# 1. Create files for new tools
for tool in new_tools:
    slug = slugify(tool['name'])
    var = camel(slug)
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

# 2. Update index.ts
all_slugs = []
for file_path in root.glob('*.ts'):
    if file_path.name not in ['types.ts', 'index.ts']:
        all_slugs.append(file_path.stem)

all_records = []
for slug in all_slugs:
    var = camel(slug)
    all_records.append((slug, var, slug.replace('-', ' ')))

all_records.sort(key=lambda r: r[2].lower())

lines = ['export * from "./types";', '']
for slug, var, _ in all_records:
    lines.append(f'export {{ {var} }} from "./{slug}";')
lines += ['', 'import type { SoftwareSpecialtyTool } from "./types";']
for slug, var, _ in all_records:
    lines.append(f'import {{ {var} }} from "./{slug}";')
lines += ['', '/** Software specialty tools used for automotive repair and tuning. */', 'export const softwareSpecialtyTools: SoftwareSpecialtyTool[] = [']
for _, var, _ in all_records:
    lines.append(f'  {var},')
lines += ['];', '', '/** Look up a software specialty tool by its case-insensitive name. */', 'export function getSoftwareSpecialtyTool(', '  name: string,', '): SoftwareSpecialtyTool | undefined {', '  const normalized = name.toLowerCase();', '  return softwareSpecialtyTools.find(', '    (tool) => tool.name.toLowerCase() === normalized,', '  );', '}', '']

(root / 'index.ts').write_text('\n'.join(lines))
print(f"Added {len(new_tools)} new software tools and updated index.ts.")
