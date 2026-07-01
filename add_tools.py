from pathlib import Path
import re

root = Path('/Users/cstedman/Workspace/autoCore/src/lib/autoCore/specialtyTools.physical')

new_tools = [
  {
    'name': 'Slide Hammer Puller Set',
    'description': 'A heavy steel weight that slides along a shaft to strike a stop, applying a sudden impact force to pull out dented sheet metal, bearings, seals, or axles.',
    'useCase': 'Extract blind bearings, seals, axles, or dented body panels.',
    'partsUsedOn': ['Wheel bearings', 'Axle shafts', 'Oil seals', 'Body panels'],
    'toolManufacturer': 'OTC Tools',
    'brandMakeModelApplications': ['Universal automotive applications', 'Solid rear axle trucks', 'Front-wheel-drive hub assemblies'],
    'wikipedia': 'https://en.wikipedia.org/wiki/Slide_hammer',
  },
  {
    'name': 'Brake Line Flaring Tool',
    'description': 'A clamping block and forming yoke used to create single, double, or bubble flares on the ends of metal brake, transmission, and fuel lines to ensure a leak-free seal with compression fittings.',
    'useCase': 'Create secure flares on replacement metal brake lines or fuel lines.',
    'partsUsedOn': ['Brake lines', 'Fuel lines', 'Transmission cooler lines', 'Compression fittings'],
    'toolManufacturer': 'Mastercool',
    'brandMakeModelApplications': ['Universal vehicle applications requiring inverted double flares', 'European vehicles requiring ISO bubble flares', 'Asian vehicles with metric brake lines'],
    'wikipedia': 'https://en.wikipedia.org/wiki/Flare_fitting',
  },
  {
    'name': 'Piston Ring Compressor',
    'description': 'A ratcheting or fixed cylindrical band that tightly compresses piston rings into their grooves so the piston and connecting rod assembly can be inserted into the engine cylinder.',
    'useCase': 'Compress piston rings during engine block assembly to prevent ring damage when installing pistons.',
    'partsUsedOn': ['Piston rings', 'Pistons', 'Engine blocks', 'Cylinders'],
    'toolManufacturer': 'Lisle Corporation',
    'brandMakeModelApplications': ['Internal combustion engine assembly', 'Small block V8s', 'Inline 4-cylinder engines'],
    'wikipedia': 'https://en.wikipedia.org/wiki/Piston_ring',
  },
  {
    'name': 'Valve Spring Compressor',
    'description': 'A C-clamp style tool or an overhead lever tool used to compress engine valve springs, relieving pressure on the valve retainers/keepers so the valve can be removed or installed.',
    'useCase': 'Compress valve springs to remove or install valve keepers, valve seals, and valves during cylinder head service.',
    'partsUsedOn': ['Valve springs', 'Valves', 'Valve retainers', 'Valve stem seals', 'Cylinder heads'],
    'toolManufacturer': 'OTC Tools',
    'brandMakeModelApplications': ['Overhead valve (OHV) engines', 'Overhead cam (OHC) engines', 'GM LS engines', 'Ford Modular V8s'],
    'wikipedia': 'https://en.wikipedia.org/wiki/Poppet_valve',
  },
  {
    'name': 'Torque Angle Gauge',
    'description': 'A dial or digital meter that attaches to a breaker bar or ratchet to measure the exact degree of rotation applied to a fastener after an initial torque setting is reached, necessary for Torque-To-Yield (TTY) bolts.',
    'useCase': 'Tighten Torque-To-Yield (TTY) head bolts, main bearing cap bolts, and other critical fasteners to specific rotational angles.',
    'partsUsedOn': ['Cylinder head bolts', 'Main bearing cap bolts', 'Connecting rod bolts', 'Crankshaft pulley bolts'],
    'toolManufacturer': 'Lisle Corporation',
    'brandMakeModelApplications': ['Modern aluminum engine blocks', 'Subaru head gasket replacement', 'GM LS engine assembly', 'European manufacturers using TTY fasteners'],
    'wikipedia': 'https://en.wikipedia.org/wiki/Torque_wrench',
  },
  {
    'name': 'Hand Vacuum Pump and Brake Bleeder Kit',
    'description': 'A hand-operated pistol-grip pump that creates negative pressure (vacuum) or positive pressure, used to bleed hydraulic systems or test vacuum-actuated components.',
    'useCase': 'Bleed brake and clutch hydraulic lines or diagnose vacuum leaks and sensor functionality.',
    'partsUsedOn': ['Brake calipers', 'Wheel cylinders', 'Clutch slave cylinders', 'EGR valves', 'MAP sensors', 'Vacuum lines'],
    'toolManufacturer': 'Mityvac',
    'brandMakeModelApplications': ['Universal hydraulic brake systems', 'Universal vacuum systems', 'Motorcycle hydraulic brakes'],
    'wikipedia': 'https://en.wikipedia.org/wiki/Brake_bleeding',
  }
]

def slugify(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')

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
    (root / f'{slug}.ts').write_text(f'''import type {{ PhysicalSpecialtyTool }} from "./types";

export const {var}: PhysicalSpecialtyTool = {{
  name: {q(tool['name'])},
  description: {q(tool['description'])},
  useCase: {q(tool['useCase'])},
  partsUsedOn: {arr(tool['partsUsedOn'])},
  toolManufacturer: {q(tool['toolManufacturer'])},
  brandMakeModelApplications: {arr(tool['brandMakeModelApplications'])},
  wikipedia: {q(tool['wikipedia'])},
}};
''')

# 2. Update index.ts to include ALL tools
# First, find all .ts files in the directory except types.ts and index.ts
all_slugs = []
for file_path in root.glob('*.ts'):
    if file_path.name not in ['types.ts', 'index.ts']:
        all_slugs.append(file_path.stem)

all_records = []
for slug in all_slugs:
    var = camel(slug)
    # Read the file to get the exact name (optional, but we can just use the slug for sorting)
    all_records.append((slug, var, slug.replace('-', ' ')))

all_records.sort(key=lambda r: r[2].lower())

lines = ['export * from "./types";', '']
for slug, var, _ in all_records:
    lines.append(f'export {{ {var} }} from "./{slug}";')
lines += ['', 'import type { PhysicalSpecialtyTool } from "./types";']
for slug, var, _ in all_records:
    lines.append(f'import {{ {var} }} from "./{slug}";')
lines += ['', '/** Physical specialty tools used for automotive repair and service. */', 'export const physicalSpecialtyTools: PhysicalSpecialtyTool[] = [']
for _, var, _ in all_records:
    lines.append(f'  {var},')
lines += ['];', '', '/** Look up a physical specialty tool by its case-insensitive name. */', 'export function getPhysicalSpecialtyTool(', '  name: string,', '): PhysicalSpecialtyTool | undefined {', '  const normalized = name.toLowerCase();', '  return physicalSpecialtyTools.find(', '    (tool) => tool.name.toLowerCase() === normalized,', '  );', '}', '']

(root / 'index.ts').write_text('\n'.join(lines))
print(f"Added {len(new_tools)} new tools and updated index.ts.")
