import urllib.request
import re

urls = [
    "https://en.wikipedia.org/wiki/Ball_joint",
    "https://en.wikipedia.org/wiki/Clutch",
    "https://en.wikipedia.org/wiki/Ford_EcoBoost_engine",
    "https://en.wikipedia.org/wiki/Fuel_line",
    "https://en.wikipedia.org/wiki/GM_Ecotec_engine",
    "https://en.wikipedia.org/wiki/Harmonic_balancer",
    "https://en.wikipedia.org/wiki/Wheel_hub_assembly",
    "https://en.wikipedia.org/wiki/MacPherson_strut",
    "https://en.wikipedia.org/wiki/Oxygen_sensor",
    "https://en.wikipedia.org/wiki/Serpentine_belt",
    "https://en.wikipedia.org/wiki/Disc_brake",
    "https://en.wikipedia.org/wiki/Oil_filter"
]

for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        urllib.request.urlopen(req)
        print(f"OK: {url}")
    except Exception as e:
        print(f"FAIL: {url} - {e}")
