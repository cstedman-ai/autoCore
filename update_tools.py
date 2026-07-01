import os
import glob

# Update types.ts
types_file = "/Users/cstedman/Workspace/autoCore/src/lib/autoCore/specialtyTools.physical/types.ts"
with open(types_file, "r") as f:
    content = f.read()

if "averageCost" not in content:
    content = content.replace("  /** Wikipedia page", "  /** The estimated average cost of the tool. */\n  averageCost: string;\n  /** Wikipedia page")
    with open(types_file, "w") as f:
        f.write(content)
    print("Updated types.ts")

# Define costs mapping (using stem of filename)
costs = {
    "ball-joint-press": '"$70 - $150"',
    "brake-line-flaring-tool": '"$30 - $80"',
    "clutch-alignment-tool": '"$10 - $25"',
    "ford-camshaft-holding-tool-303-1248": '"$50 - $100"',
    "fuel-line-quick-disconnect-tool": '"$10 - $25"',
    "gm-ecotec-cam-phaser-retainer-en-48953": '"$25 - $60"',
    "hand-vacuum-pump-and-brake-bleeder-kit": '"$40 - $80"',
    "harmonic-balancer-puller-and-installer": '"$60 - $120"',
    "hub-grappler-wheel-bearing-service-kit": '"$300 - $500"',
    "macpherson-strut-spring-compressor": '"$40 - $100"',
    "oxygen-sensor-socket": '"$10 - $30"',
    "piston-ring-compressor": '"$15 - $35"',
    "ratcheting-serpentine-belt-tool": '"$30 - $60"',
    "rear-disc-brake-caliper-wind-back-tool": '"$25 - $50"',
    "slide-hammer-puller-set": '"$60 - $120"',
    "torque-angle-gauge": '"$15 - $30"',
    "toyota-64-3-mm-14-flute-oil-filter-wrench": '"$15 - $25"',
    "valve-spring-compressor": '"$30 - $80"'
}

directory = "/Users/cstedman/Workspace/autoCore/src/lib/autoCore/specialtyTools.physical"
for filepath in glob.glob(f"{directory}/*.ts"):
    filename = os.path.basename(filepath)
    stem = filename.replace('.ts', '')
    
    if stem in costs:
        with open(filepath, "r") as f:
            content = f.read()
            
        if "averageCost:" not in content:
            # insert before wikipedia:
            insert_str = f"  averageCost: {costs[stem]},\n"
            content = content.replace("  wikipedia:", f"{insert_str}  wikipedia:")
            with open(filepath, "w") as f:
                f.write(content)
            print(f"Updated {filename}")
