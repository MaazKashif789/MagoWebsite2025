#!/usr/bin/env python3
import os
import json
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

BASE_DIR = '/Users/maazkashif/Documents/GitHub/MagoWebsite2025/MagoWebsite/src/assets/products'
OUT_DIR = '/Users/maazkashif/Documents/GitHub/MagoWebsite2025/MagoWebsite/src/assets/products/items'
PRODUCTS_FILE = '/tmp/products_list.json'

os.makedirs(OUT_DIR, exist_ok=True)

# Cache base images
base_cache = {}
def get_base(filename):
    if filename not in base_cache:
        path = os.path.join(BASE_DIR, filename)
        base_cache[filename] = Image.open(path).convert('RGB')
    return base_cache[filename].copy()

def color_shift(img, r_mult=1.0, g_mult=1.0, b_mult=1.0, brightness=1.0, contrast=1.0):
    arr = np.array(img, dtype=np.float32)
    arr[:, :, 0] *= r_mult
    arr[:, :, 1] *= g_mult
    arr[:, :, 2] *= b_mult
    arr = np.clip(arr * brightness, 0, 255).astype(np.uint8)
    res = Image.fromarray(arr)
    if contrast != 1.0:
        res = ImageEnhance.Contrast(res).enhance(contrast)
    return res

def process_image(spec):
    base_file = spec.get('base', 'pvc-powder.jpg')
    img = get_base(base_file)
    w, h = img.size

    # Crop
    crop = spec.get('crop', (0.1, 0.1, 0.9, 0.9)) # relative (x1, y1, x2, y2)
    box = (int(crop[0] * w), int(crop[1] * h), int(crop[2] * w), int(crop[3] * h))
    cropped = img.crop(box)

    # Flips / Rotations
    if spec.get('hflip'):
        cropped = ImageOps.mirror(cropped)
    if spec.get('vflip'):
        cropped = ImageOps.flip(cropped)
    if spec.get('rot'):
        cropped = cropped.rotate(spec['rot'], expand=True)

    # Resize to target 800x450
    cropped = cropped.resize((800, 450), Image.Resampling.LANCZOS)

    # Color shift
    r_m = spec.get('r', 1.0)
    g_m = spec.get('g', 1.0)
    b_m = spec.get('b', 1.0)
    br = spec.get('br', 1.0)
    co = spec.get('co', 1.0)
    sa = spec.get('sa', 1.0)

    # Grayscale conversion for pure blacks or neutral greys
    if spec.get('grayscale'):
        cropped = ImageOps.grayscale(cropped).convert('RGB')

    if (r_m, g_m, b_m, br, co) != (1.0, 1.0, 1.0, 1.0, 1.0):
        cropped = color_shift(cropped, r_m, g_m, b_m, br, co)

    if sa != 1.0:
        cropped = ImageEnhance.Color(cropped).enhance(sa)

    if spec.get('sharpness', 1.0) != 1.0:
        cropped = ImageEnhance.Sharpness(cropped).enhance(spec['sharpness'])

    return cropped

def build_specs():
    specs = {}

    # === 1. General Plastics (Polymers) ===
    specs['gp-1'] = {'base': 'pvc-powder.jpg', 'crop': (0.1, 0.15, 0.85, 0.9), 'co': 1.15, 'br': 1.05} # PVC suspension powder
    specs['gp-2'] = {'base': 'pp-pellets.jpg', 'crop': (0.05, 0.1, 0.88, 0.92), 'co': 1.1, 'sa': 0.9} # PP pellets milky
    specs['gp-3'] = {'base': 'polymer-pellets.jpg', 'crop': (0.12, 0.12, 0.92, 0.88), 'co': 1.05, 'sa': 0.95} # PE pellets translucent
    specs['gp-4'] = {'base': 'recycled-mixed-pellets.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'co': 1.1, 'sa': 1.1, 'hflip': True} # EVA beads
    specs['gp-5'] = {'base': 'recycled-mixed-pellets.jpg', 'crop': (0.05, 0.05, 0.95, 0.95), 'co': 1.25, 'sa': 1.4} # Recycled mixed flakes
    specs['gp-6'] = {'base': 'engineering-plastics.jpg', 'crop': (0.05, 0.1, 0.55, 0.85), 'co': 1.15, 'br': 1.05, 'b': 1.05} # POE elastomer
    specs['gp-7'] = {'base': 'engineering-plastics.jpg', 'crop': (0.1, 0.15, 0.6, 0.9), 'co': 1.2, 'br': 1.1, 'sharpness': 1.3} # PS crystals
    specs['gp-8'] = {'base': 'polymer-pellets.jpg', 'crop': (0.08, 0.2, 0.88, 0.95), 'co': 1.12, 'hflip': True} # PET chips
    specs['gp-9'] = {'base': 'mineral-fillers.jpg', 'crop': (0.05, 0.1, 0.55, 0.9), 'co': 1.2, 'br': 1.08} # PTA crystalline powder

    # === 2. Engineering Plastics ===
    specs['ep-1'] = {'base': 'engineering-plastics.jpg', 'crop': (0.5, 0.15, 0.95, 0.9), 'grayscale': True, 'br': 0.6, 'co': 1.4} # ABS black pellets
    specs['ep-2'] = {'base': 'engineering-plastics.jpg', 'crop': (0.1, 0.08, 0.6, 0.82), 'co': 1.15, 'b': 1.08, 'sa': 0.8} # SAN clear
    specs['ep-3'] = {'base': 'engineering-plastics.jpg', 'crop': (0.05, 0.12, 0.58, 0.88), 'co': 1.25, 'br': 1.12, 'sharpness': 1.4} # PC optical
    specs['ep-4'] = {'base': 'pp-pellets.jpg', 'crop': (0.15, 0.12, 0.9, 0.88), 'r': 1.04, 'g': 1.02, 'b': 0.92, 'co': 1.1} # Nylon PA6 ivory
    specs['ep-5'] = {'base': 'pp-pellets.jpg', 'crop': (0.08, 0.15, 0.85, 0.92), 'br': 1.1, 'co': 1.2, 'hflip': True} # POM acetal crisp white
    specs['ep-6'] = {'base': 'engineering-plastics.jpg', 'crop': (0.08, 0.1, 0.55, 0.8), 'co': 1.3, 'br': 1.15, 'b': 1.04} # PMMA diamond clear

    # === 3. Bio-Plastics ===
    specs['bp-1'] = {'base': 'polymer-pellets.jpg', 'crop': (0.15, 0.1, 0.88, 0.9), 'r': 1.05, 'g': 1.03, 'b': 0.95, 'co': 1.08} # PLA clear bio
    specs['bp-2'] = {'base': 'pp-pellets.jpg', 'crop': (0.1, 0.18, 0.85, 0.92), 'r': 1.06, 'g': 1.04, 'b': 0.92, 'co': 1.05} # PHA natural cream

    # === 4. Rubbers & Elastomers (18 items) ===
    specs['re-1'] = {'base': 'natural-rubber.jpg', 'crop': (0.05, 0.1, 0.9, 0.9), 'co': 1.15, 'sa': 1.2} # Natural Rubber RSS3 amber
    specs['re-2'] = {'base': 'natural-rubber.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'r': 1.05, 'g': 0.98, 'b': 0.85, 'co': 1.1, 'hflip': True} # SBR tan crumb
    specs['re-3'] = {'base': 'natural-rubber.jpg', 'crop': (0.2, 0.1, 0.95, 0.85), 'r': 1.1, 'g': 1.02, 'b': 0.88, 'co': 1.2} # SSBR golden slab
    specs['re-4'] = {'base': 'natural-rubber.jpg', 'crop': (0.1, 0.1, 0.88, 0.9), 'grayscale': True, 'br': 0.5, 'co': 1.35} # NBR dark synthetic
    specs['re-5'] = {'base': 'natural-rubber.jpg', 'crop': (0.15, 0.08, 0.85, 0.92), 'grayscale': True, 'br': 0.38, 'co': 1.45, 'hflip': True} # HNBR graphite black
    specs['re-6'] = {'base': 'natural-rubber.jpg', 'crop': (0.08, 0.15, 0.92, 0.88), 'grayscale': True, 'br': 0.45, 'co': 1.3} # EPDM charcoal
    specs['re-7'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.1, 0.9, 0.9), 'co': 1.1, 'br': 1.05} # Release Agents silicone fluid
    specs['re-8'] = {'base': 'natural-rubber.jpg', 'crop': (0.0, 0.2, 0.8, 0.95), 'r': 1.2, 'g': 0.9, 'b': 0.7, 'co': 1.3, 'rot': 90} # Rice Rubber Roll grooved
    specs['re-9'] = {'base': 'engineering-plastics.jpg', 'crop': (0.2, 0.1, 0.8, 0.85), 'grayscale': True, 'br': 0.7, 'co': 1.2} # Chloroprene CR grey
    specs['re-10'] = {'base': 'natural-rubber.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'grayscale': True, 'br': 0.3, 'co': 1.5} # FKM Viton dark brown-black
    specs['re-11'] = {'base': 'recycled-mixed-pellets.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'sa': 0.7, 'co': 1.1, 'br': 1.05} # TPE/SEBS translucent
    specs['re-12'] = {'base': 'natural-rubber.jpg', 'crop': (0.1, 0.2, 0.9, 0.9), 'grayscale': True, 'br': 0.35, 'co': 1.4, 'hflip': True} # Reclaimed Rubber
    specs['re-13'] = {'base': 'natural-rubber.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'grayscale': True, 'br': 0.65, 'co': 1.15} # Butyl Rubber IIR grey
    specs['re-14'] = {'base': 'natural-rubber.jpg', 'crop': (0.08, 0.1, 0.88, 0.9), 'r': 1.15, 'g': 1.05, 'b': 0.8, 'co': 1.2} # Polybutadiene BR golden
    specs['re-15'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.1, 0.15, 0.85, 0.9), 'r': 1.1, 'g': 0.95, 'b': 0.75, 'co': 1.2} # Liquid Rubber amber
    specs['re-16'] = {'base': 'natural-rubber.jpg', 'crop': (0.15, 0.12, 0.9, 0.85), 'r': 0.9, 'g': 0.8, 'b': 0.7, 'br': 0.6, 'co': 1.3} # XNBR dark amber
    specs['re-17'] = {'base': 'engineering-plastics.jpg', 'crop': (0.45, 0.1, 0.95, 0.85), 'grayscale': True, 'br': 0.55, 'co': 1.3} # TPV black pellets
    specs['re-18'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'br': 1.1, 'co': 1.15, 'sa': 0.8} # Silicone Rubber clear

    # === 5. PU & PU Raw Materials (18 items) ===
    specs['pu-1'] = {'base': 'chemical-solvents.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.1} # 1,4-BDO clear liquid
    specs['pu-2'] = {'base': 'pvc-powder.jpg', 'crop': (0.15, 0.12, 0.88, 0.88), 'co': 1.15} # DMPA white crystal powder
    specs['pu-3'] = {'base': 'mineral-fillers.jpg', 'crop': (0.1, 0.1, 0.7, 0.85), 'co': 1.2} # TMP crystalline flakes
    specs['pu-4'] = {'base': 'chemical-solvents.jpg', 'crop': (0.05, 0.15, 0.88, 0.9), 'co': 1.15, 'hflip': True} # IPDI clear isocyanate
    specs['pu-5'] = {'base': 'chemical-solvents.jpg', 'crop': (0.12, 0.1, 0.9, 0.88), 'co': 1.1, 'b': 1.05} # HDI water-clear
    specs['pu-6'] = {'base': 'chemical-solvents.jpg', 'crop': (0.1, 0.2, 0.85, 0.95), 'co': 1.12} # NMP clear solvent
    specs['pu-7'] = {'base': 'pvc-powder.jpg', 'crop': (0.08, 0.15, 0.9, 0.85), 'br': 1.1, 'co': 1.1} # PUDs milky dispersion
    specs['pu-8'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.1, 0.1, 0.88, 0.88), 'co': 1.2, 'sa': 1.25} # PU Shoe golden resin
    specs['pu-9'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.15, 0.15, 0.9, 0.9), 'r': 1.1, 'g': 0.92, 'b': 0.75, 'co': 1.25, 'hflip': True} # PU Leather amber
    specs['pu-10'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.08, 0.12, 0.85, 0.88), 'co': 1.15, 'br': 1.05} # PU Coating clear resin
    specs['pu-11'] = {'base': 'polymer-pellets.jpg', 'crop': (0.1, 0.1, 0.88, 0.9), 'co': 1.18, 'br': 1.08} # TPU clear pellets
    specs['pu-12'] = {'base': 'mineral-fillers.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'co': 1.2, 'br': 1.05} # Pure MDI white flakes
    specs['pu-13'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.1, 0.1, 0.9, 0.9), 'r': 0.65, 'g': 0.45, 'b': 0.25, 'br': 0.55, 'co': 1.35} # PMDI dark brown
    specs['pu-14'] = {'base': 'chemical-solvents.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'r': 1.08, 'g': 1.05, 'b': 0.88, 'co': 1.1} # TDI straw clear
    specs['pu-15'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.2, 0.1, 0.9, 0.85), 'sa': 0.9, 'br': 1.05, 'co': 1.15} # Polyether Polyol
    specs['pu-16'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.05, 0.1, 0.85, 0.9), 'r': 1.15, 'g': 1.02, 'b': 0.8, 'co': 1.22} # Polyester Polyol honey
    specs['pu-17'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'co': 1.12, 'br': 1.05} # Polycaprolactone
    specs['pu-18'] = {'base': 'pvc-powder.jpg', 'crop': (0.1, 0.1, 0.9, 0.9), 'co': 1.15, 'br': 1.08} # Adipic Acid white crystals

    # === 6. Plasticizers (18 items) ===
    specs['pl-1'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.08, 0.9, 0.9), 'co': 1.15} # DOP clear oil
    specs['pl-2'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'co': 1.18, 'hflip': True} # DINP clear phthalate
    specs['pl-3'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.15, 0.1, 0.92, 0.85), 'co': 1.2} # DIDP heavy clear
    specs['pl-4'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.05, 0.15, 0.85, 0.92), 'co': 1.2, 'br': 1.05} # DOTP non-phthalate
    specs['pl-5'] = {'base': 'chemical-solvents.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.12} # DBP low-viscosity
    specs['pl-6'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.15, 0.88, 0.88), 'co': 1.15, 'b': 1.04} # DOA low-temp
    specs['pl-7'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.15, 0.08, 0.9, 0.85), 'co': 1.18} # DOS cold-resistant
    specs['pl-8'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'r': 1.15, 'g': 1.05, 'b': 0.75, 'co': 1.2} # ESBO golden bio-oil
    specs['pl-9'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.1, 0.88, 0.9), 'co': 1.12, 'br': 1.06} # ATBC bio-citrate
    specs['pl-10'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'co': 1.22} # TOTM high-viscosity
    specs['pl-11'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.05, 0.08, 0.9, 0.88), 'co': 1.16, 'b': 1.05} # DINCH medical-grade
    specs['pl-12'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.12, 0.1, 0.88, 0.85), 'co': 1.14} # TBC tributyl citrate
    specs['pl-13'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'r': 1.05, 'g': 0.98, 'b': 0.85, 'co': 1.18} # Polymeric plasticizer
    specs['pl-14'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.08, 0.1, 0.9, 0.88), 'r': 1.18, 'g': 1.08, 'b': 0.8, 'co': 1.2} # CP 52 chlorinated paraffin
    specs['pl-15'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'r': 1.12, 'g': 1.05, 'b': 0.85, 'co': 1.15} # ACETEM
    specs['pl-16'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.12, 0.9, 0.88), 'co': 1.15} # TEC triethyl citrate
    specs['pl-17'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.08, 0.15, 0.88, 0.88), 'co': 1.2} # BBP benzyl phthalate
    specs['pl-18'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.15, 0.1, 0.85, 0.85), 'co': 1.15} # DCP capryl phthalate

    # === 7. Blowing Agents & Crosslinkers (10 items) ===
    specs['ba-1'] = {'base': 'pvc-powder.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'co': 1.12, 'br': 1.05} # Sodium Bicarbonate white
    specs['ba-2'] = {'base': 'metal-oxides.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.15} # TSS white semicarbazide
    specs['ba-3'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.05, 0.1, 0.65, 0.9), 'r': 1.2, 'g': 1.15, 'b': 0.6, 'sa': 1.35, 'co': 1.2} # Azodicarbonamide canary yellow
    specs['ba-4'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.15} # TAC
    specs['ba-5'] = {'base': 'chemical-solvents.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'co': 1.15} # TAIC
    specs['ba-6'] = {'base': 'chemical-solvents.jpg', 'crop': (0.08, 0.1, 0.9, 0.85), 'co': 1.12} # Peroxyketals
    specs['ba-7'] = {'base': 'mineral-fillers.jpg', 'crop': (0.1, 0.1, 0.8, 0.85), 'co': 1.2, 'sharpness': 1.25} # DCP peroxide white crystals
    specs['ba-8'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.08, 0.08, 0.68, 0.88), 'r': 1.25, 'g': 1.25, 'b': 0.45, 'sa': 1.45, 'co': 1.25} # Sulfur lemon yellow
    specs['ba-9'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.35, 0.15, 0.95, 0.85), 'r': 1.05, 'g': 1.02, 'b': 0.9, 'co': 1.15} # MBT buff powder
    specs['ba-10'] = {'base': 'pp-pellets.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'r': 1.06, 'g': 1.02, 'b': 0.88, 'co': 1.12} # TBBS tan granules

    # === 8. Stabilizers, Additives & Processing Aids (16 items) ===
    specs['st-1'] = {'base': 'pvc-powder.jpg', 'crop': (0.08, 0.1, 0.88, 0.88), 'co': 1.15, 'br': 1.05} # Zinc Stearate silky white
    specs['st-2'] = {'base': 'metal-oxides.jpg', 'crop': (0.12, 0.12, 0.88, 0.88), 'co': 1.15} # Calcium Stearate
    specs['st-3'] = {'base': 'mineral-fillers.jpg', 'crop': (0.1, 0.15, 0.85, 0.85), 'co': 1.18} # Lead Stearate
    specs['st-4'] = {'base': 'pp-pellets.jpg', 'crop': (0.05, 0.1, 0.88, 0.9), 'r': 1.04, 'g': 1.02, 'b': 0.95, 'co': 1.1} # One Pack Ca/Zn pastilles
    specs['st-5'] = {'base': 'mineral-fillers.jpg', 'crop': (0.15, 0.1, 0.85, 0.85), 'co': 1.22, 'sharpness': 1.2} # Stearic Acid flakes
    specs['st-6'] = {'base': 'natural-rubber.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'r': 1.2, 'g': 0.85, 'b': 0.65, 'co': 1.25} # Phenolic Resin amber
    specs['st-7'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.15, 0.9, 0.9), 'co': 1.2} # TBLS white
    specs['st-8'] = {'base': 'chemical-solvents.jpg', 'crop': (0.1, 0.12, 0.88, 0.88), 'co': 1.15} # Silane Coupling Agent
    specs['st-9'] = {'base': 'pp-pellets.jpg', 'crop': (0.12, 0.1, 0.88, 0.88), 'co': 1.15, 'sharpness': 1.2} # Antioxidants Irganox
    specs['st-10'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.35, 0.1, 0.95, 0.85), 'r': 1.08, 'g': 1.06, 'b': 0.9, 'co': 1.15} # UV Stabilizers HALS
    specs['st-11'] = {'base': 'pvc-powder.jpg', 'crop': (0.15, 0.1, 0.9, 0.85), 'co': 1.18, 'br': 1.05} # ACR acrylic aid
    specs['st-12'] = {'base': 'pvc-powder.jpg', 'crop': (0.08, 0.12, 0.85, 0.88), 'co': 1.15} # MBS modifier
    specs['st-13'] = {'base': 'polyurethane-liquid.jpg', 'crop': (0.1, 0.12, 0.88, 0.88), 'r': 1.15, 'g': 1.05, 'b': 0.75, 'co': 1.2} # ESBO
    specs['st-14'] = {'base': 'mineral-fillers.jpg', 'crop': (0.08, 0.08, 0.85, 0.88), 'co': 1.15} # Calcium Carbonate additive
    specs['st-15'] = {'base': 'chemical-solvents.jpg', 'crop': (0.15, 0.15, 0.85, 0.85), 'co': 1.15} # Methyl Tin liquid
    specs['st-16'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.1, 0.1, 0.7, 0.9), 'r': 0.95, 'g': 1.35, 'b': 0.65, 'sa': 1.4, 'co': 1.3} # OB-1 fluorescent

    # === 9. Fillers & Reinforcements (11 items) ===
    specs['fr-1'] = {'base': 'mineral-fillers.jpg', 'crop': (0.05, 0.1, 0.6, 0.85), 'co': 1.15} # Calcium Carbonate
    specs['fr-2'] = {'base': 'mineral-fillers.jpg', 'crop': (0.35, 0.1, 0.95, 0.85), 'co': 1.2, 'br': 1.08} # Precipitated Silica
    specs['fr-3'] = {'base': 'pvc-powder.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'br': 1.12, 'co': 1.1} # Fumed Silica fluffy
    specs['fr-4'] = {'base': 'mineral-fillers.jpg', 'crop': (0.2, 0.15, 0.8, 0.9), 'co': 1.15, 'sa': 0.8} # Talc powder silky
    specs['fr-5'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.1, 0.88, 0.88), 'co': 1.25, 'br': 1.08} # Barium Sulfate dense white
    specs['fr-6'] = {'base': 'pvc-powder.jpg', 'crop': (0.12, 0.15, 0.88, 0.85), 'r': 1.04, 'g': 1.02, 'b': 0.96, 'co': 1.1} # Kaolin clay
    specs['fr-7'] = {'base': 'metal-oxides.jpg', 'crop': (0.15, 0.12, 0.85, 0.88), 'co': 1.18} # MgO magnesium oxide
    specs['fr-8'] = {'base': 'mineral-fillers.jpg', 'crop': (0.12, 0.1, 0.88, 0.85), 'co': 1.22, 'sharpness': 1.3} # Wollastonite needle-like
    specs['fr-9'] = {'base': 'polymer-pellets.jpg', 'crop': (0.08, 0.15, 0.88, 0.88), 'co': 1.3, 'br': 1.15, 'sharpness': 1.4} # Glass beads
    specs['fr-10'] = {'base': 'metal-oxides.jpg', 'crop': (0.1, 0.15, 0.85, 0.85), 'co': 1.2, 'sharpness': 1.35} # Mica powder shimmering
    specs['fr-11'] = {'base': 'mineral-fillers.jpg', 'crop': (0.15, 0.1, 0.9, 0.85), 'co': 1.15} # Silane-treated fillers

    # === 10. Pigments & Colorants (12 items) ===
    specs['pc-1'] = {'base': 'pigment-powders.jpg', 'crop': (0.6, 0.1, 0.98, 0.85), 'co': 1.25, 'br': 1.12} # TiO2 ultra-white pigment
    specs['pc-2'] = {'base': 'pigment-powders.jpg', 'crop': (0.28, 0.1, 0.72, 0.88), 'co': 1.3, 'sa': 1.35} # Iron Oxide Red terracotta
    specs['pc-3'] = {'base': 'pigment-powders.jpg', 'crop': (0.02, 0.1, 0.45, 0.88), 'co': 1.3, 'sa': 1.35} # Phthalo Blue electric
    specs['pc-4'] = {'base': 'pigment-powders.jpg', 'crop': (0.02, 0.1, 0.45, 0.88), 'r': 0.15, 'g': 1.35, 'b': 0.55, 'sa': 1.4, 'co': 1.3} # Phthalo Green
    specs['pc-5'] = {'base': 'pigment-powders.jpg', 'crop': (0.5, 0.1, 0.95, 0.85), 'grayscale': True, 'br': 0.35, 'co': 1.5} # Carbon Black jet black
    specs['pc-6'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.05, 0.08, 0.65, 0.88), 'r': 1.35, 'g': 1.1, 'b': 0.45, 'sa': 1.4, 'co': 1.25} # Chrome Yellow
    specs['pc-7'] = {'base': 'pigment-powders.jpg', 'crop': (0.28, 0.1, 0.72, 0.88), 'r': 1.35, 'g': 0.75, 'b': 0.85, 'sa': 1.45, 'co': 1.3} # Organic Azo Red
    specs['pc-8'] = {'base': 'pigment-powders.jpg', 'crop': (0.02, 0.1, 0.45, 0.88), 'r': 0.45, 'g': 0.65, 'b': 1.45, 'sa': 1.4, 'co': 1.3} # Ultramarine Blue
    specs['pc-9'] = {'base': 'metal-oxides.jpg', 'crop': (0.1, 0.1, 0.88, 0.88), 'br': 1.15, 'co': 1.25, 'sharpness': 1.35} # Pearlescent shimmer
    specs['pc-10'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.05, 0.1, 0.65, 0.88), 'r': 0.95, 'g': 1.45, 'b': 0.5, 'sa': 1.5, 'co': 1.3} # Fluorescent neon
    specs['pc-11'] = {'base': 'blowing-agent-powder.jpg', 'crop': (0.08, 0.12, 0.68, 0.85), 'r': 1.15, 'g': 1.35, 'b': 0.55, 'sa': 1.35, 'co': 1.25} # Bismuth Vanadate
    specs['pc-12'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.12, 0.9, 0.85), 'co': 1.2, 'br': 1.08} # Lithopone white

    # === 11. Solvents (21 items) ===
    # Each solvent gets a unique crop coordinate, angle, and subtle optical grading
    sol_crops = [
        (0.05, 0.05, 0.8, 0.8), (0.1, 0.1, 0.85, 0.85), (0.15, 0.08, 0.9, 0.82), (0.08, 0.15, 0.88, 0.88),
        (0.2, 0.1, 0.95, 0.85), (0.05, 0.18, 0.85, 0.95), (0.12, 0.12, 0.92, 0.88), (0.18, 0.15, 0.88, 0.85),
        (0.08, 0.08, 0.78, 0.78), (0.15, 0.15, 0.85, 0.85), (0.05, 0.12, 0.9, 0.9), (0.12, 0.05, 0.88, 0.82),
        (0.1, 0.18, 0.9, 0.92), (0.18, 0.1, 0.92, 0.85), (0.08, 0.12, 0.85, 0.88), (0.15, 0.12, 0.88, 0.85),
        (0.05, 0.1, 0.85, 0.88), (0.12, 0.15, 0.92, 0.9), (0.1, 0.08, 0.85, 0.82), (0.18, 0.15, 0.95, 0.88),
        (0.12, 0.12, 0.88, 0.88)
    ]
    for idx, i in enumerate(range(1, 22)):
        sid = f'sol-{i}'
        c = sol_crops[idx]
        if i == 9: # Naphthalene crystalline flakes
            specs[sid] = {'base': 'mineral-fillers.jpg', 'crop': (0.1, 0.1, 0.8, 0.85), 'co': 1.25, 'sharpness': 1.3}
        elif i == 17: # White Oil pharmaceutical
            specs[sid] = {'base': 'plasticizer-liquid.jpg', 'crop': c, 'co': 1.15, 'br': 1.05}
        elif i == 21: # Glycerin viscous triol
            specs[sid] = {'base': 'plasticizer-liquid.jpg', 'crop': c, 'co': 1.2, 'br': 1.08, 'hflip': True}
        else:
            specs[sid] = {
                'base': 'chemical-solvents.jpg',
                'crop': c,
                'co': 1.08 + (i % 5) * 0.03,
                'br': 1.0 + (i % 3) * 0.03,
                'b': 1.0 + ((i % 4) - 1) * 0.02,
                'hflip': (i % 2 == 1)
            }

    # === 12. Specialty Chemicals (11 items) ===
    specs['sc-1'] = {'base': 'chemical-solvents.jpg', 'crop': (0.1, 0.08, 0.88, 0.85), 'co': 1.15, 'b': 1.04} # Glacial Acetic Acid
    specs['sc-2'] = {'base': 'mineral-fillers.jpg', 'crop': (0.08, 0.12, 0.85, 0.88), 'co': 1.22, 'sharpness': 1.3} # Citric Acid crystals
    specs['sc-3'] = {'base': 'chemical-solvents.jpg', 'crop': (0.15, 0.12, 0.9, 0.88), 'co': 1.12} # Formic Acid
    specs['sc-4'] = {'base': 'natural-rubber.jpg', 'crop': (0.1, 0.1, 0.88, 0.88), 'r': 1.25, 'g': 0.95, 'b': 0.65, 'co': 1.25} # Petroleum Resin C9 amber
    specs['sc-5'] = {'base': 'natural-rubber.jpg', 'crop': (0.15, 0.12, 0.85, 0.85), 'r': 1.28, 'g': 0.82, 'b': 0.62, 'co': 1.3} # Phenolic Resin ruby amber
    specs['sc-6'] = {'base': 'polymer-pellets.jpg', 'crop': (0.1, 0.1, 0.85, 0.85), 'co': 1.15, 'br': 1.08} # Paraffin wax
    specs['sc-7'] = {'base': 'pp-pellets.jpg', 'crop': (0.12, 0.15, 0.88, 0.88), 'r': 1.05, 'g': 1.04, 'b': 0.95, 'co': 1.1} # Coconut Oil
    specs['sc-8'] = {'base': 'mineral-fillers.jpg', 'crop': (0.12, 0.08, 0.88, 0.85), 'co': 1.25, 'sharpness': 1.35} # Benzoic Acid needles
    specs['sc-9'] = {'base': 'chemical-solvents.jpg', 'crop': (0.08, 0.15, 0.85, 0.9), 'co': 1.14} # MEG
    specs['sc-10'] = {'base': 'chemical-solvents.jpg', 'crop': (0.15, 0.1, 0.9, 0.85), 'co': 1.15, 'hflip': True} # DEG
    specs['sc-11'] = {'base': 'plasticizer-liquid.jpg', 'crop': (0.1, 0.1, 0.88, 0.88), 'co': 1.18, 'br': 1.06} # Glycerin USP

    # === 13. Anhydrides & Oxides (10 items) ===
    specs['ao-1'] = {'base': 'mineral-fillers.jpg', 'crop': (0.05, 0.1, 0.8, 0.85), 'co': 1.22, 'sharpness': 1.3} # Phthalic Anhydride flakes
    specs['ao-2'] = {'base': 'mineral-fillers.jpg', 'crop': (0.15, 0.12, 0.9, 0.88), 'co': 1.25, 'sharpness': 1.25, 'hflip': True} # Maleic Anhydride briquettes
    specs['ao-3'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.08, 0.88, 0.88), 'co': 1.2, 'br': 1.06} # Zinc Oxide active
    specs['ao-4'] = {'base': 'metal-oxides.jpg', 'crop': (0.12, 0.12, 0.9, 0.9), 'co': 1.18} # Magnesium Oxide
    specs['ao-5'] = {'base': 'metal-oxides.jpg', 'crop': (0.05, 0.15, 0.85, 0.9), 'co': 1.25, 'br': 1.1} # Titanium Dioxide
    specs['ao-6'] = {'base': 'mineral-fillers.jpg', 'crop': (0.1, 0.15, 0.85, 0.85), 'r': 1.05, 'g': 1.03, 'b': 0.96, 'co': 1.15} # Quicklime CaO
    specs['ao-7'] = {'base': 'pvc-powder.jpg', 'crop': (0.1, 0.1, 0.88, 0.88), 'co': 1.16, 'br': 1.08} # Silicon Dioxide
    specs['ao-8'] = {'base': 'metal-oxides.jpg', 'crop': (0.15, 0.1, 0.85, 0.85), 'co': 1.22} # Aluminum Oxide
    specs['ao-9'] = {'base': 'polymer-pellets.jpg', 'crop': (0.1, 0.12, 0.88, 0.88), 'co': 1.25, 'br': 1.12} # Boric Anhydride
    specs['ao-10'] = {'base': 'metal-oxides.jpg', 'crop': (0.08, 0.12, 0.9, 0.88), 'co': 1.24, 'br': 1.08, 'hflip': True} # Antimony Trioxide

    return specs

def main():
    with open(PRODUCTS_FILE) as f:
        products = json.load(f)

    specs = build_specs()
    print(f'Generating images for {len(products)} products...')

    generated_count = 0
    for p in products:
        pid = p['id']
        spec = specs.get(pid, {'base': 'pvc-powder.jpg'})
        img = process_image(spec)
        out_path = os.path.join(OUT_DIR, f'{pid}.jpg')
        img.save(out_path, 'JPEG', quality=88, optimize=True)
        generated_count += 1

    print(f'Successfully generated {generated_count} unique product images in {OUT_DIR}!')

if __name__ == '__main__':
    main()

