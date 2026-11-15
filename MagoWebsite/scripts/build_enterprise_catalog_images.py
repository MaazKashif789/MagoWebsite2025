#!/usr/bin/env python3
import os
import json
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

BASE_DIR = '/Users/maazkashif/Documents/GitHub/MagoWebsite2025/MagoWebsite/src/assets/products'
OUT_DIR = '/Users/maazkashif/Documents/GitHub/MagoWebsite2025/MagoWebsite/src/assets/products/items'
PRODUCTS_FILE = '/tmp/products_list.json'

os.makedirs(OUT_DIR, exist_ok=True)

# Cache base plates
base_cache = {}
def get_base(filename):
    if filename not in base_cache:
        path = os.path.join(BASE_DIR, filename)
        base_cache[filename] = Image.open(path).convert('RGB')
    return base_cache[filename].copy()

def add_crystal_sparkle(img, intensity=0.15, scale=4):
    arr = np.array(img).astype(np.float32)
    h, w, c = arr.shape
    # generate high-frequency micro sparkles on highlights
    lum = (arr[:, :, 0] * 0.299 + arr[:, :, 1] * 0.587 + arr[:, :, 2] * 0.114) / 255.0
    sparkles = np.random.RandomState(42).rand(h, w)
    mask = (sparkles > 0.985) & (lum > 0.35)
    for ch in range(3):
        arr[:, :, ch] += mask * 255.0 * intensity
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))

def color_grade(img, r=1.0, g=1.0, b=1.0, br=1.0, co=1.0, sa=1.0, grayscale=False):
    if grayscale:
        img = ImageOps.grayscale(img).convert('RGB')
    arr = np.array(img).astype(np.float32)
    arr[:, :, 0] *= r
    arr[:, :, 1] *= g
    arr[:, :, 2] *= b
    arr = np.clip(arr * br, 0, 255).astype(np.uint8)
    res = Image.fromarray(arr)
    if co != 1.0:
        res = ImageEnhance.Contrast(res).enhance(co)
    if sa != 1.0 and not grayscale:
        res = ImageEnhance.Color(res).enhance(sa)
    return res

def process_product(spec):
    base_file = spec.get('base', 'pvc-powder.jpg')
    img = get_base(base_file)
    w, h = img.size

    # Crop
    crop = spec.get('crop', (0.1, 0.1, 0.9, 0.9))
    box = (int(crop[0] * w), int(crop[1] * h), int(crop[2] * w), int(crop[3] * h))
    cropped = img.crop(box)

    # Flips / Rotations
    if spec.get('hflip'):
        cropped = ImageOps.mirror(cropped)
    if spec.get('vflip'):
        cropped = ImageOps.flip(cropped)
    rot = spec.get('rot', 0)
    if rot != 0:
        cropped = cropped.rotate(rot, expand=True)

    # Resize to clean 16:9 (800x450)
    cropped = cropped.resize((800, 450), Image.Resampling.LANCZOS)

    # Color grading
    cropped = color_grade(
        cropped,
        r=spec.get('r', 1.0),
        g=spec.get('g', 1.0),
        b=spec.get('b', 1.0),
        br=spec.get('br', 1.0),
        co=spec.get('co', 1.0),
        sa=spec.get('sa', 1.0),
        grayscale=spec.get('grayscale', False)
    )

    # Crystal sparkle if applicable
    if spec.get('sparkle'):
        cropped = add_crystal_sparkle(cropped, spec['sparkle'])

    # Micro-sharpness
    sharpness = spec.get('sharpness', 1.1)
    if sharpness != 1.0:
        cropped = ImageEnhance.Sharpness(cropped).enhance(sharpness)

    return cropped

def build_all_specs():
    s = {}

    # === 1. General Plastics (Polymers) ===
    # PVC: Pure white powder drift on dark slate
    s['gp-1'] = {'base': 'pvc-powder.jpg', 'crop': (0.08, 0.1, 0.88, 0.88), 'co': 1.18, 'br': 1.05, 'sharpness': 1.25}
    # PP: Milky-white polymer cylindrical pellets
    s['gp-2'] = {'base': 'pp-pellets.jpg', 'crop': (0.05, 0.08, 0.88, 0.9), 'co': 1.12, 'sa': 0.85, 'sharpness': 1.2}
    # PE: Translucent waxy oval beads
    s['gp-3'] = {'base': 'polymer-pellets.jpg', 'crop': (0.1, 0.1, 0.9, 0.88), 'co': 1.08, 'sa': 0.95, 'sharpness': 1.15}
    # EVA: Virgin translucent copolymer pellets with soft elastomeric sheen (NOT candy beads!)
    s['gp-4'] = {'base': 'polymer-pellets.jpg', 'crop': (0.05, 0.15, 0.85, 0.92), 'hflip': True, 'co': 1.14, 'br': 1.03, 'sharpness': 1.2}
    # Recycled Plastic: Clean multi-color regrind flakes & shredded polymer chips
    s['gp-5'] = {'base': 'recycled-mixed-pellets.jpg', 'crop': (0.1, 0.1, 0.9, 0.9), 'co': 1.25, 'sa': 1.35, 'sharpness': 1.3}
    # POE: Crystal-clear rubbery elastomer pellets
    s['gp-6'] = {'base': 'engineering-plastics.jpg', 'crop': (0.02, 0.08, 0.52, 0.82), 'co': 1.22, 'br': 1.08, 'b': 1.04, 'sharpness': 1.3}
    # PS: Sparkling crystal GPPS transparent beads
    s['gp-7'] = {'base': 'engineering-plastics.jpg', 'crop': (0.1, 0.15, 0.58, 0.88), 'co': 1.3, 'br': 1.12, 'b': 1.06, 'sparkle': 0.25, 'sharpness': 1.4}
    # PET: Clear cylindrical bottle-grade resin chips
    s['gp-8'] = {'base': 'polymer-pellets.jpg', 'crop': (0.15, 0.05, 0.95, 0.82), 'rot': 180, 'co': 1.15, 'br': 1.06, 'sharpness': 1.25}
    # PTA: Sparkling pure white terephthalic acid micro-crystals
    s['gp-9'] = {'base': 'mineral-fillers.jpg', 'crop': (0.05, 0.08, 0.55, 0.85), 'co': 1.24, 'br': 1.08, 'sparkle': 0.2, 'sharpness': 1.3}

    # === 2. Engineering Plastics ===
    # ABS: Sleek piano-black and dark graphite engineering granules
    s['ep-1'] = {'base': 'engineering-plastics.jpg', 'crop': (0.5, 0.1, 0.98, 0.9), 'grayscale': True, 'br': 0.45, 'co': 1.45, 'sharpness': 1.3}
    # SAN: Clear rigid glossy granules with cool glass sheen
    s['ep-2'] = {'base': 'engineering-plastics.jpg', 'crop': (0.05, 0.05, 0.55, 0.8), 'b': 1.08, 'co': 1.18, 'br': 1.06, 'sharpness': 1.25}
    # PC: Optical clarity transparent polycarbonate granules
    s['ep-3'] = {'base': 'engineering-plastics.jpg', 'crop': (0.08, 0.12, 0.58, 0.88), 'b': 1.05, 'co': 1.28, 'br': 1.12, 'sparkle': 0.2, 'sharpness': 1.35}
    # Nylon PA6/66: Bone/ivory off-white cylindrical polyamide granules
    s['ep-4'] = {'base': 'pp-pellets.jpg', 'crop': (0.12, 0.1, 0.88, 0.88), 'r': 1.08, 'g': 1.04, 'b': 0.92, 'co': 1.12, 'sharpness': 1.2}
    # POM Acetal: Crisp opaque snow-white acetal pellets
    s['ep-5'] = {'base': 'pp-pellets.jpg', 'crop': (0.08, 0.15, 0.85, 0.92), 'hflip': True, 'br': 1.12, 'co': 1.22, 'sa': 0.7, 'sharpness': 1.25}
    # PMMA Acrylic: Diamond-clear acrylic transparent beads
    s['ep-6'] = {'base': 'engineering-plastics.jpg', 'crop': (0.06, 0.15, 0.54, 0.85), 'co': 1.32, 'br': 1.15, 'b': 1.06, 'sparkle': 0.22, 'sharpness': 1.35}

    # === 3. Bio-Plastics ===
    # PLA: Bio-based transparent polylactic acid pellets
    s['bp-1'] = {'base': 'polymer-pellets.jpg', 'crop': (0.12, 0.08, 0.88, 0.85), 'r': 1.06, 'g': 1.03, 'b': 0.94, 'co': 1.12, 'sharpness': 1.2}
    # PHA: Natural bio-polymer cream/ivory granules
    s['bp-2'] = {'base': 'pp-pellets.jpg', 'crop': (0.15, 0.12, 0.9, 0.88), 'r': 1.08, 'g': 1.05, 'b': 0.9, 'co': 1.08, 'sharpness': 1.15}

    # === 4. Rubbers & Elastomers ===
    # Natural Rubber: Ribbed smoked sheet RSS3 amber caramel grooves
    s['re-1'] = {'base': 'natural-rubber.jpg', 'crop': (0.05, 0.1, 0.9, 0.9), 'co': 1.2, 'sa': 1.25, 'sharpness': 1.25}
    # SBR: Golden-tan elastomeric synthetic rubber crumb
    s['re-2'] = {'base': 'natural-rubber.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'hflip': True, 'r': 1.08, 'g': 0.96, 'b': 0.82, 'co': 1.15}
    # SSBR: Solution SBR smooth amber synthetic rubber slab
    s['re-3'] = {'base': 'natural-rubber.jpg', 'crop': (0.2, 0.08, 0.92, 0.82), 'r': 1.12, 'g': 1.02, 'b': 0.84, 'co': 1.22}
    # NBR: Synthetic nitrile rubber dark elastomeric bale
    s['re-4'] = {'base': 'natural-rubber.jpg', 'crop': (0.08, 0.1, 0.88, 0.9), 'grayscale': True, 'br': 0.48, 'co': 1.38}
    # HNBR: Graphite-black hydrogenated nitrile block
    s['re-5'] = {'base': 'natural-rubber.jpg', 'crop': (0.12, 0.08, 0.88, 0.92), 'hflip': True, 'grayscale': True, 'br': 0.36, 'co': 1.45}
    # EPDM: Dense matte charcoal-black terpolymer rubber
    s['re-6'] = {'base': 'natural-rubber.jpg', 'crop': (0.1, 0.15, 0.9, 0.88), 'grayscale': True, 'br': 0.42, 'co': 1.32}
    # Release Agents: Clear silicone release fluid in optical glassware
    s['re-7'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.08, 0.88, 0.88), 'co': 1.15, 'br': 1.05}
    # Rice Rubber Roll: Heavy-duty amber cast rubber roller texture with grooved ribs
    s['re-8'] = {'base': 'natural-rubber.jpg', 'crop': (0.0, 0.18, 0.82, 0.92), 'rot': 90, 'r': 1.22, 'g': 0.88, 'b': 0.65, 'co': 1.32}
    # Chloroprene CR: Silvery-grey neoprene chips
    s['re-9'] = {'base': 'engineering-plastics.jpg', 'crop': (0.15, 0.1, 0.85, 0.85), 'grayscale': True, 'br': 0.68, 'co': 1.25}
    # Fluorocarbon FKM: Dense dark brown-black Viton rubber slab
    s['re-10'] = {'base': 'natural-rubber.jpg', 'crop': (0.1, 0.1, 0.88, 0.88), 'grayscale': True, 'br': 0.28, 'co': 1.55}
    # TPE/SEBS: Translucent clear rubbery elastomer pellets
    s['re-11'] = {'base': 'polymer-pellets.jpg', 'crop': (0.1, 0.12, 0.88, 0.88), 'co': 1.15, 'br': 1.06, 'sharpness': 1.2}
    # Reclaimed Rubber: Dense black vulcanized rubber sheet
    s['re-12'] = {'base': 'natural-rubber.jpg', 'crop': (0.15, 0.18, 0.88, 0.88), 'hflip': True, 'grayscale': True, 'br': 0.32, 'co': 1.4}
    # Butyl Rubber IIR: Light grey synthetic butyl rubber slab
    s['re-13'] = {'base': 'natural-rubber.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'grayscale': True, 'br': 0.62, 'co': 1.18}
    # Polybutadiene BR: Golden translucent cis-polybutadiene slab
    s['re-14'] = {'base': 'natural-rubber.jpg', 'crop': (0.06, 0.08, 0.85, 0.88), 'r': 1.18, 'g': 1.06, 'b': 0.78, 'co': 1.24}
    # Liquid Rubber: Viscous golden-amber polybutadiene fluid
    s['re-15'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.1, 0.12, 0.88, 0.88), 'r': 1.12, 'g': 0.94, 'b': 0.72, 'co': 1.22}
    # XNBR: Tough dark amber carboxylated nitrile rubber sheet
    s['re-16'] = {'base': 'natural-rubber.jpg', 'crop': (0.18, 0.1, 0.9, 0.85), 'r': 0.92, 'g': 0.78, 'b': 0.65, 'br': 0.58, 'co': 1.35}
    # TPV: Dense black vulcanized thermoplastic elastomer pellets
    s['re-17'] = {'base': 'engineering-plastics.jpg', 'crop': (0.48, 0.12, 0.95, 0.88), 'grayscale': True, 'br': 0.5, 'co': 1.35}
    # Silicone Rubber: High-clarity translucent silicone elastomer
    s['re-18'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.12, 0.12, 0.85, 0.85), 'hflip': True, 'br': 1.12, 'co': 1.18, 'sa': 0.8}

    # === 5. PU & PU Raw Materials ===
    # 1,4-BDO: Clear colorless diol liquid in laboratory glassware
    s['pu-1'] = {'base': 'chemical-solvents.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'co': 1.12, 'br': 1.02}
    # DMPA: Pure white crystalline powder
    s['pu-2'] = {'base': 'pvc-powder.jpg', 'crop': (0.12, 0.1, 0.88, 0.88), 'co': 1.16, 'sparkle': 0.15}
    # TMP: White crystalline flakes
    s['pu-3'] = {'base': 'mineral-fillers.jpg', 'crop': (0.08, 0.08, 0.65, 0.82), 'co': 1.22, 'sparkle': 0.18}
    # IPDI: Clear cycloaliphatic isocyanate liquid
    s['pu-4'] = {'base': 'chemical-solvents.jpg', 'crop': (0.05, 0.12, 0.85, 0.88), 'hflip': True, 'co': 1.14}
    # HDI: Water-clear hexamethylene diisocyanate
    s['pu-5'] = {'base': 'chemical-solvents.jpg', 'crop': (0.12, 0.08, 0.9, 0.85), 'b': 1.05, 'co': 1.12}
    # NMP: High-purity clear solvent liquid
    s['pu-6'] = {'base': 'chemical-solvents.jpg', 'crop': (0.1, 0.18, 0.85, 0.92), 'co': 1.14}
    # PUDs: Aqueous milky-white polyurethane dispersion
    s['pu-7'] = {'base': 'pvc-powder.jpg', 'crop': (0.05, 0.12, 0.88, 0.85), 'br': 1.12, 'co': 1.1, 'sa': 0.6}
    # PU System For Shoes: Thick golden liquid polyol resin
    s['pu-8'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.08, 0.08, 0.85, 0.85), 'co': 1.22, 'sa': 1.28}
    # PU System For Leather: Viscous amber polyurethane coating resin
    s['pu-9'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.15, 0.12, 0.9, 0.88), 'hflip': True, 'r': 1.12, 'g': 0.94, 'b': 0.74, 'co': 1.26}
    # PU System For Coating: Clear gloss polyurethane resin
    s['pu-10'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.06, 0.1, 0.82, 0.85), 'co': 1.16, 'br': 1.06}
    # TPU: Transparent elastomeric polyurethane granules
    s['pu-11'] = {'base': 'polymer-pellets.jpg', 'crop': (0.08, 0.08, 0.85, 0.88), 'co': 1.2, 'br': 1.1, 'sharpness': 1.25}
    # Pure MDI: White crystalline flake isocyanate
    s['pu-12'] = {'base': 'mineral-fillers.jpg', 'crop': (0.12, 0.12, 0.82, 0.82), 'co': 1.22, 'br': 1.06, 'sparkle': 0.18}
    # Polymeric MDI (PMDI): Deep rich dark-brown viscous aromatic isocyanate
    s['pu-13'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.08, 0.08, 0.88, 0.88), 'r': 0.6, 'g': 0.4, 'b': 0.22, 'br': 0.52, 'co': 1.4}
    # TDI: Pale straw clear liquid diisocyanate
    s['pu-14'] = {'base': 'chemical-solvents.jpg', 'crop': (0.12, 0.12, 0.85, 0.85), 'r': 1.1, 'g': 1.06, 'b': 0.86, 'co': 1.12}
    # Polyether Polyols: Water-white to pale clear viscous polyol
    s['pu-15'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.18, 0.08, 0.88, 0.82), 'sa': 0.85, 'br': 1.06, 'co': 1.16}
    # Polyester Polyols: Honey-colored thick viscous polyester polyol
    s['pu-16'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.04, 0.08, 0.82, 0.88), 'r': 1.16, 'g': 1.04, 'b': 0.78, 'co': 1.24}
    # Polycaprolactone Polyol: Translucent waxy solid/liquid diol
    s['pu-17'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.14, 'br': 1.06}
    # Adipic Acid: Pure white crystalline dicarboxylic acid powder
    s['pu-18'] = {'base': 'pvc-powder.jpg', 'crop': (0.08, 0.08, 0.88, 0.88), 'co': 1.18, 'br': 1.08, 'sparkle': 0.16}

    # === 6. Plasticizers ===
    # DOP: Crystal-clear oily plasticizer in optical Petri dish
    s['pl-1'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.06, 0.06, 0.88, 0.88), 'co': 1.16}
    # DINP: High-purity clear viscous phthalate
    s['pl-2'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.1, 0.86, 0.86), 'hflip': True, 'co': 1.18}
    # DIDP: Heavy clear oily plasticizer
    s['pl-3'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.14, 0.08, 0.9, 0.84), 'co': 1.2}
    # DOTP: High-clarity non-phthalate terephthalate clear liquid
    s['pl-4'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.04, 0.12, 0.84, 0.9), 'co': 1.22, 'br': 1.06}
    # DBP: Low-viscosity clear solvent-like plasticizer
    s['pl-5'] = {'base': 'chemical-solvents.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'co': 1.14}
    # DOA: Water-clear cold-flex adipate liquid
    s['pl-6'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.12, 0.86, 0.86), 'b': 1.04, 'co': 1.16}
    # DOS: Clear cold-resistant sebacate liquid
    s['pl-7'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.12, 0.06, 0.88, 0.84), 'co': 1.18}
    # ESBO: Rich golden vegetable-derived epoxidized soybean oil
    s['pl-8'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'r': 1.18, 'g': 1.08, 'b': 0.72, 'co': 1.22}
    # ATBC: Bio-compatible crystal-clear citrate plasticizer
    s['pl-9'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.06, 0.08, 0.85, 0.88), 'co': 1.14, 'br': 1.08}
    # TOTM: Thick high-viscosity trimellitate oil
    s['pl-10'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.12, 0.12, 0.82, 0.82), 'co': 1.24}
    # DINCH: Medical-grade crystal-clear non-phthalate liquid
    s['pl-11'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.04, 0.06, 0.88, 0.86), 'b': 1.05, 'co': 1.18}
    # TBC: Clear tributyl citrate ester
    s['pl-12'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.08, 0.85, 0.84), 'co': 1.15}
    # Polymeric Plasticizer: Viscous pale amber polymeric polyester
    s['pl-13'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'r': 1.08, 'g': 0.98, 'b': 0.82, 'co': 1.2}
    # Chlorinated Paraffin (CP 52): Dense pale-amber viscous chlorinated fluid
    s['pl-14'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.06, 0.08, 0.88, 0.85), 'r': 1.2, 'g': 1.1, 'b': 0.78, 'co': 1.22}
    # ACETEM: Pale golden acetylated monoglyceride
    s['pl-15'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.12, 0.12, 0.82, 0.82), 'r': 1.14, 'g': 1.06, 'b': 0.82, 'co': 1.16}
    # TEC: Clean water-white triethyl citrate
    s['pl-16'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.1, 0.88, 0.86), 'co': 1.16}
    # BBP: Clear dense benzyl phthalate
    s['pl-17'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.06, 0.12, 0.85, 0.86), 'co': 1.22}
    # DCP: Clear branched phthalate
    s['pl-18'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.12, 0.08, 0.82, 0.82), 'co': 1.16}

    # === 7. Blowing Agents & Crosslinkers ===
    # Sodium Bicarbonate: Fine soft white mineral powder
    s['ba-1'] = {'base': 'pvc-powder.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.14, 'br': 1.06}
    # TSS: White crystalline semicarbazide powder
    s['ba-2'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'co': 1.18, 'sparkle': 0.15}
    # Modified Azodicarbonamide: Intense vivid canary-yellow blowing agent powder
    s['ba-3'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.04, 0.08, 0.62, 0.88), 'r': 1.22, 'g': 1.16, 'b': 0.58, 'sa': 1.38, 'co': 1.22}
    # TAC: Clear crosslinker compound
    s['ba-4'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'co': 1.16}
    # TAIC: Viscous clear crosslinker liquid
    s['ba-5'] = {'base': 'chemical-solvents.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.16}
    # Peroxyketals: Clear specialized peroxide solution
    s['ba-6'] = {'base': 'chemical-solvents.jpg', 'crop': (0.06, 0.08, 0.88, 0.82), 'co': 1.14}
    # DCP: White crystalline peroxide flakes
    s['ba-7'] = {'base': 'mineral-fillers.jpg', 'crop': (0.08, 0.08, 0.75, 0.82), 'co': 1.22, 'sparkle': 0.22, 'sharpness': 1.3}
    # Sulfur: Brilliant radiant lemon-yellow vulcanization sulfur powder
    s['ba-8'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.06, 0.06, 0.65, 0.85), 'r': 1.28, 'g': 1.28, 'b': 0.42, 'sa': 1.48, 'co': 1.28}
    # MBT: Cream-buff accelerator powder
    s['ba-9'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.32, 0.12, 0.92, 0.82), 'r': 1.06, 'g': 1.03, 'b': 0.88, 'co': 1.16}
    # TBBS: Light tan vulcanization accelerator granules
    s['ba-10'] = {'base': 'pp-pellets.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'r': 1.08, 'g': 1.03, 'b': 0.86, 'co': 1.14}

    # === 8. Stabilizers, Additives & Processing Aids ===
    s['st-1'] = {'base': 'pvc-powder.jpg', 'crop': (0.06, 0.08, 0.85, 0.85), 'co': 1.16, 'br': 1.06} # Zinc Stearate
    s['st-2'] = {'base': 'metal-oxides.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.16} # Calcium Stearate
    s['st-3'] = {'base': 'mineral-fillers.jpg', 'crop': (0.08, 0.12, 0.82, 0.82), 'co': 1.2} # Lead Stearate
    s['st-4'] = {'base': 'pp-pellets.jpg', 'crop': (0.04, 0.08, 0.85, 0.88), 'r': 1.05, 'g': 1.03, 'b': 0.94, 'co': 1.12} # One Pack Ca/Zn
    s['st-5'] = {'base': 'mineral-fillers.jpg', 'crop': (0.12, 0.08, 0.82, 0.82), 'co': 1.24, 'sparkle': 0.2, 'sharpness': 1.25} # Stearic Acid
    s['st-6'] = {'base': 'natural-rubber.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'r': 1.22, 'g': 0.86, 'b': 0.62, 'co': 1.28} # Phenolic Resin
    s['st-7'] = {'base': 'metal-oxides.jpg', 'crop': (0.06, 0.12, 0.88, 0.88), 'co': 1.22} # TBLS
    s['st-8'] = {'base': 'chemical-solvents.jpg', 'crop': (0.08, 0.1, 0.85, 0.85), 'co': 1.16} # Silane Coupling Agent
    s['st-9'] = {'base': 'pp-pellets.jpg', 'crop': (0.1, 0.08, 0.85, 0.85), 'co': 1.16, 'sparkle': 0.18} # Antioxidant Irganox
    s['st-10'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.32, 0.08, 0.92, 0.82), 'r': 1.09, 'g': 1.07, 'b': 0.88, 'co': 1.16} # HALS
    s['st-11'] = {'base': 'pvc-powder.jpg', 'crop': (0.12, 0.08, 0.88, 0.82), 'co': 1.2, 'br': 1.06} # ACR
    s['st-12'] = {'base': 'pvc-powder.jpg', 'crop': (0.06, 0.1, 0.82, 0.85), 'co': 1.16} # MBS
    s['st-13'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.08, 0.1, 0.85, 0.85), 'r': 1.16, 'g': 1.06, 'b': 0.74, 'co': 1.22} # ESBO
    s['st-14'] = {'base': 'mineral-fillers.jpg', 'crop': (0.06, 0.06, 0.82, 0.85), 'co': 1.16} # Calcium Carbonate Additive
    s['st-15'] = {'base': 'chemical-solvents.jpg', 'crop': (0.12, 0.12, 0.82, 0.82), 'co': 1.16} # Methyl Tin
    s['st-16'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.08, 0.08, 0.65, 0.88), 'r': 0.94, 'g': 1.38, 'b': 0.62, 'sa': 1.45, 'co': 1.32} # OB-1

    # === 9. Fillers & Reinforcements ===
    s['fr-1'] = {'base': 'mineral-fillers.jpg', 'crop': (0.04, 0.08, 0.58, 0.82), 'co': 1.16} # Calcium Carbonate
    s['fr-2'] = {'base': 'mineral-fillers.jpg', 'crop': (0.32, 0.08, 0.92, 0.82), 'co': 1.22, 'br': 1.08} # Precipitated Silica
    s['fr-3'] = {'base': 'pvc-powder.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'br': 1.14, 'co': 1.12} # Fumed Silica
    s['fr-4'] = {'base': 'mineral-fillers.jpg', 'crop': (0.18, 0.12, 0.78, 0.88), 'co': 1.16, 'sa': 0.8} # Talc Powder
    s['fr-5'] = {'base': 'metal-oxides.jpg', 'crop': (0.06, 0.08, 0.85, 0.85), 'co': 1.26, 'br': 1.08} # Barium Sulfate
    s['fr-6'] = {'base': 'pvc-powder.jpg', 'crop': (0.1, 0.12, 0.85, 0.82), 'r': 1.05, 'g': 1.03, 'b': 0.95, 'co': 1.12} # Kaolin Clay
    s['fr-7'] = {'base': 'metal-oxides.jpg', 'crop': (0.12, 0.1, 0.82, 0.85), 'co': 1.2} # MgO
    s['fr-8'] = {'base': 'mineral-fillers.jpg', 'crop': (0.1, 0.08, 0.85, 0.82), 'co': 1.24, 'sparkle': 0.18, 'sharpness': 1.3} # Wollastonite
    s['fr-9'] = {'base': 'polymer-pellets.jpg', 'crop': (0.06, 0.12, 0.85, 0.85), 'co': 1.32, 'br': 1.16, 'sparkle': 0.24, 'sharpness': 1.4} # Glass Beads
    s['fr-10'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.12, 0.82, 0.82), 'co': 1.22, 'sparkle': 0.22, 'sharpness': 1.38} # Mica Powder
    s['fr-11'] = {'base': 'mineral-fillers.jpg', 'crop': (0.12, 0.08, 0.88, 0.82), 'co': 1.16} # Silane-treated Fillers

    # === 10. Pigments & Colorants ===
    s['pc-1'] = {'base': 'pigment-powders.jpg', 'crop': (0.58, 0.08, 0.96, 0.82), 'co': 1.28, 'br': 1.14} # TiO2 Rutile
    s['pc-2'] = {'base': 'pigment-powders.jpg', 'crop': (0.26, 0.08, 0.7, 0.86), 'co': 1.32, 'sa': 1.38} # Iron Oxide Red
    s['pc-3'] = {'base': 'pigment-powders.jpg', 'crop': (0.01, 0.08, 0.42, 0.86), 'co': 1.32, 'sa': 1.38} # Phthalo Blue
    s['pc-4'] = {'base': 'pigment-powders.jpg', 'crop': (0.01, 0.08, 0.42, 0.86), 'r': 0.12, 'g': 1.38, 'b': 0.52, 'sa': 1.45, 'co': 1.32} # Phthalo Green
    s['pc-5'] = {'base': 'pigment-powders.jpg', 'crop': (0.48, 0.08, 0.92, 0.82), 'grayscale': True, 'br': 0.32, 'co': 1.55} # Carbon Black
    s['pc-6'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.04, 0.06, 0.62, 0.85), 'r': 1.38, 'g': 1.08, 'b': 0.42, 'sa': 1.45, 'co': 1.28} # Chrome Yellow
    s['pc-7'] = {'base': 'pigment-powders.jpg', 'crop': (0.26, 0.08, 0.7, 0.86), 'r': 1.38, 'g': 0.72, 'b': 0.82, 'sa': 1.48, 'co': 1.32} # Organic Azo Red
    s['pc-8'] = {'base': 'pigment-powders.jpg', 'crop': (0.01, 0.08, 0.42, 0.86), 'r': 0.42, 'g': 0.62, 'b': 1.48, 'sa': 1.45, 'co': 1.32} # Ultramarine Blue
    s['pc-9'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.08, 0.85, 0.85), 'br': 1.18, 'co': 1.28, 'sparkle': 0.28, 'sharpness': 1.4} # Pearlescent
    s['pc-10'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.04, 0.08, 0.62, 0.85), 'r': 0.92, 'g': 1.48, 'b': 0.48, 'sa': 1.55, 'co': 1.35} # Fluorescent
    s['pc-11'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.06, 0.1, 0.65, 0.82), 'r': 1.18, 'g': 1.38, 'b': 0.52, 'sa': 1.4, 'co': 1.28} # Bismuth Vanadate
    s['pc-12'] = {'base': 'metal-oxides.jpg', 'crop': (0.06, 0.1, 0.88, 0.82), 'co': 1.22, 'br': 1.1} # Lithopone

    # === 11. Solvents (21 distinct items) ===
    sol_configs = [
        (0.04, 0.04, 0.78, 0.78, False, 0.0, 1.08, 1.0),
        (0.08, 0.08, 0.82, 0.82, True, 0.0, 1.12, 1.04),
        (0.12, 0.06, 0.88, 0.80, False, 0.0, 1.14, 1.06),
        (0.06, 0.12, 0.85, 0.85, True, 0.0, 1.18, 1.02),
        (0.16, 0.08, 0.92, 0.82, False, 0.0, 1.15, 1.05),
        (0.04, 0.15, 0.82, 0.92, True, 0.0, 1.12, 1.03),
        (0.10, 0.10, 0.88, 0.85, False, 0.0, 1.16, 1.04),
        (0.15, 0.12, 0.85, 0.82, True, 0.0, 1.14, 1.02),
        (0.06, 0.06, 0.75, 0.75, False, 0.0, 1.24, 1.08), # Naphthalene
        (0.12, 0.12, 0.82, 0.82, True, 0.0, 1.18, 1.04),
        (0.04, 0.10, 0.88, 0.88, False, 0.0, 1.15, 1.03),
        (0.10, 0.04, 0.85, 0.80, True, 0.0, 1.14, 1.05),
        (0.08, 0.15, 0.88, 0.90, False, 0.0, 1.18, 1.08),
        (0.15, 0.08, 0.90, 0.82, True, 0.0, 1.15, 1.04),
        (0.06, 0.10, 0.82, 0.85, False, 0.0, 1.16, 1.02),
        (0.12, 0.10, 0.85, 0.82, True, 0.0, 1.18, 1.05),
        (0.04, 0.08, 0.82, 0.85, False, 0.0, 1.15, 1.04), # White Oil
        (0.10, 0.12, 0.88, 0.88, True, 0.0, 1.14, 1.03),
        (0.08, 0.06, 0.82, 0.80, False, 0.0, 1.12, 1.02),
        (0.15, 0.12, 0.92, 0.85, True, 0.0, 1.15, 1.04),
        (0.10, 0.10, 0.85, 0.85, False, 0.0, 1.2, 1.08)   # Glycerin
    ]
    for idx, i in enumerate(range(1, 22)):
        sid = f'sol-{i}'
        cfg = sol_configs[idx]
        if i == 9: # Naphthalene crystalline flakes
            s[sid] = {'base': 'mineral-fillers.jpg', 'crop': (0.08, 0.08, 0.78, 0.82), 'co': 1.25, 'sparkle': 0.22, 'sharpness': 1.35}
        elif i == 17: # White Oil
            s[sid] = {'base': 'plasticizer-liquid.jpg', 'crop': (cfg[0], cfg[1], cfg[2], cfg[3]), 'co': 1.16, 'br': 1.06}
        elif i == 21: # Glycerin
            s[sid] = {'base': 'plasticizer-liquid.jpg', 'crop': (cfg[0], cfg[1], cfg[2], cfg[3]), 'hflip': True, 'co': 1.22, 'br': 1.08}
        else:
            s[sid] = {
                'base': 'chemical-solvents.jpg',
                'crop': (cfg[0], cfg[1], cfg[2], cfg[3]),
                'hflip': cfg[4],
                'co': cfg[6],
                'b': cfg[7]
            }

    # === 12. Specialty Chemicals ===
    s['sc-1'] = {'base': 'chemical-solvents.jpg', 'crop': (0.08, 0.06, 0.85, 0.82), 'b': 1.05, 'co': 1.16} # Glacial Acetic Acid
    s['sc-2'] = {'base': 'mineral-fillers.jpg', 'crop': (0.06, 0.1, 0.82, 0.85), 'co': 1.24, 'sparkle': 0.22, 'sharpness': 1.32} # Citric Acid
    s['sc-3'] = {'base': 'chemical-solvents.jpg', 'crop': (0.12, 0.1, 0.88, 0.85), 'co': 1.14} # Formic Acid
    s['sc-4'] = {'base': 'natural-rubber.jpg', 'crop': (0.08, 0.08, 0.85, 0.85), 'r': 1.26, 'g': 0.96, 'b': 0.62, 'co': 1.26} # Petroleum Resin C9
    s['sc-5'] = {'base': 'natural-rubber.jpg', 'crop': (0.12, 0.1, 0.82, 0.82), 'r': 1.3, 'g': 0.8, 'b': 0.58, 'co': 1.32} # Phenolic Resin
    s['sc-6'] = {'base': 'polymer-pellets.jpg', 'crop': (0.08, 0.08, 0.82, 0.82), 'co': 1.16, 'br': 1.08} # Paraffin Wax
    s['sc-7'] = {'base': 'pp-pellets.jpg', 'crop': (0.1, 0.12, 0.85, 0.85), 'r': 1.06, 'g': 1.04, 'b': 0.94, 'co': 1.12} # Coconut Oil
    s['sc-8'] = {'base': 'mineral-fillers.jpg', 'crop': (0.1, 0.06, 0.85, 0.82), 'co': 1.26, 'sparkle': 0.24, 'sharpness': 1.38} # Benzoic Acid
    s['sc-9'] = {'base': 'chemical-solvents.jpg', 'crop': (0.06, 0.12, 0.82, 0.88), 'co': 1.15} # MEG
    s['sc-10'] = {'base': 'chemical-solvents.jpg', 'crop': (0.12, 0.08, 0.88, 0.82), 'hflip': True, 'co': 1.16} # DEG
    s['sc-11'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.08, 0.85, 0.85), 'co': 1.2, 'br': 1.08} # USP Glycerin

    # === 13. Anhydrides & Oxides ===
    s['ao-1'] = {'base': 'mineral-fillers.jpg', 'crop': (0.04, 0.08, 0.78, 0.82), 'co': 1.24, 'sparkle': 0.22, 'sharpness': 1.32} # Phthalic Anhydride
    s['ao-2'] = {'base': 'mineral-fillers.jpg', 'crop': (0.12, 0.1, 0.88, 0.85), 'hflip': True, 'co': 1.26, 'sparkle': 0.2, 'sharpness': 1.28} # Maleic Anhydride
    s['ao-3'] = {'base': 'metal-oxides.jpg', 'crop': (0.06, 0.06, 0.85, 0.85), 'co': 1.22, 'br': 1.08} # Zinc Oxide Active
    s['ao-4'] = {'base': 'metal-oxides.jpg', 'crop': (0.1, 0.1, 0.88, 0.88), 'co': 1.2} # Magnesium Oxide
    s['ao-5'] = {'base': 'metal-oxides.jpg', 'crop': (0.04, 0.12, 0.82, 0.88), 'co': 1.26, 'br': 1.12} # Titanium Dioxide Anatase
    s['ao-6'] = {'base': 'mineral-fillers.jpg', 'crop': (0.08, 0.12, 0.82, 0.82), 'r': 1.06, 'g': 1.04, 'b': 0.95, 'co': 1.16} # Quicklime CaO
    s['ao-7'] = {'base': 'pvc-powder.jpg', 'crop': (0.08, 0.08, 0.85, 0.85), 'co': 1.18, 'br': 1.1} # Silicon Dioxide
    s['ao-8'] = {'base': 'metal-oxides.jpg', 'crop': (0.12, 0.08, 0.82, 0.82), 'co': 1.24} # Aluminum Oxide
    s['ao-9'] = {'base': 'polymer-pellets.jpg', 'crop': (0.08, 0.1, 0.85, 0.85), 'co': 1.26, 'br': 1.14} # Boric Anhydride
    s['ao-10'] = {'base': 'metal-oxides.jpg', 'crop': (0.06, 0.1, 0.88, 0.85), 'hflip': True, 'co': 1.25, 'br': 1.1} # Antimony Trioxide

    return s

def main():
    with open(PRODUCTS_FILE) as f:
        products = json.load(f)

    specs = build_all_specs()
    print(f'Building enterprise-grade visual assets for {len(products)} products...')

    built = 0
    for p in products:
        pid = p['id']
        spec = specs.get(pid, {'base': 'pvc-powder.jpg'})
        im = process_product(spec)
        out_path = os.path.join(OUT_DIR, f'{pid}.jpg')
        im.save(out_path, 'JPEG', quality=92, optimize=True)
        built += 1

    print(f'Successfully built {built} enterprise-grade visual assets in {OUT_DIR}!')

if __name__ == '__main__':
    main()

