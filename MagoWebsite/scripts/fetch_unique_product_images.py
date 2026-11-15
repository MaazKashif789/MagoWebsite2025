#!/usr/bin/env python3
import urllib.request, json, re, urllib.parse, os, time
from PIL import Image

OUT_DIR = '/Users/maazkashif/Documents/GitHub/MagoWebsite2025/MagoWebsite/src/assets/products/items'
os.makedirs(OUT_DIR, exist_ok=True)

# Specific product search queries designed to find real industrial raw material sample macro photography (not packaging)
PRODUCT_QUERIES = {
    # Engineering Plastics
    'ep-1': 'ABS raw material granules black pellets injection molding',
    'ep-2': 'SAN plastic resin raw material clear granules',
    'ep-3': 'polycarbonate raw material transparent resin pellets macro',
    'ep-4': 'Nylon 6 PA6 raw material granules pellets off-white',
    'ep-5': 'POM polyoxymethylene white resin pellets raw material',
    'ep-6': 'PMMA acrylic raw material transparent resin beads',

    # Bio-Plastics
    'bp-1': 'PLA polylactic acid biodegradable resin pellets clear',
    'bp-2': 'PHA polyhydroxyalkanoates biopolymer resin granules',

    # Rubbers & Elastomers
    're-1': 'natural rubber RSS3 ribbed smoked sheet raw rubber',
    're-2': 'styrene butadiene rubber SBR synthetic rubber crumb tan',
    're-3': 'SSBR solution styrene butadiene rubber slab',
    're-4': 'NBR nitrile butadiene rubber raw polymer bale',
    're-5': 'HNBR hydrogenated nitrile butadiene rubber compound black',
    're-6': 'EPDM ethylene propylene diene monomer rubber raw material',
    're-7': 'silicone mold release agent liquid clear laboratory',
    're-8': 'rice rubber roller agro dehusking rubber roll cast',
    're-9': 'chloroprene rubber neoprene raw chips',
    're-10': 'FKM fluorocarbon viton rubber slab dark raw material',
    're-11': 'TPE thermoplastic elastomer transparent granules',
    're-12': 'reclaimed rubber sheet black vulcanized',
    're-13': 'butyl rubber raw synthetic elastomer block',
    're-14': 'polybutadiene rubber BR golden raw rubber slab',
    're-15': 'liquid rubber polybutadiene viscous resin liquid',
    're-16': 'XNBR carboxylated nitrile rubber raw material',
    're-17': 'TPV thermoplastic vulcanizate black pellets',
    're-18': 'silicone rubber translucent elastomer raw compound',

    # PU & PU Raw Materials
    'pu-1': '1,4-butanediol BDO chemical liquid laboratory flask',
    'pu-2': 'dimethylolpropionic acid DMPA white powder chemical',
    'pu-3': 'trimethylolpropane TMP white flake chemical',
    'pu-4': 'isophorone diisocyanate IPDI clear liquid chemical',
    'pu-5': 'hexamethylene diisocyanate HDI clear chemical liquid',
    'pu-6': 'N-methylpyrrolidone NMP clear solvent liquid in beaker',
    'pu-7': 'polyurethane dispersion PUD aqueous white liquid',
    'pu-8': 'polyurethane shoe sole liquid polyol system amber',
    'pu-9': 'polyurethane synthetic leather resin liquid coating',
    'pu-10': 'polyurethane coating resin liquid clear glossy',
    'pu-11': 'thermoplastic polyurethane TPU transparent pellets',
    'pu-12': 'methylene diphenyl diisocyanate pure MDI flakes',
    'pu-13': 'polymeric MDI PMDI dark brown viscous liquid',
    'pu-14': 'toluene diisocyanate TDI clear liquid chemical flask',
    'pu-15': 'polyether polyol clear viscous resin liquid in beaker',
    'pu-16': 'polyester polyol honey viscous resin chemical liquid',
    'pu-17': 'polycaprolactone polyol white waxy chemical',
    'pu-18': 'adipic acid pure white crystalline powder chemical',

    # Plasticizers
    'pl-1': 'dioctyl phthalate DOP clear oily plasticizer liquid in glass',
    'pl-2': 'diisononyl phthalate DINP plasticizer clear liquid',
    'pl-3': 'diisodecyl phthalate DIDP viscous clear plasticizer',
    'pl-4': 'dioctyl terephthalate DOTP non phthalate plasticizer liquid',
    'pl-5': 'dibutyl phthalate DBP clear chemical plasticizer',
    'pl-6': 'dioctyl adipate DOA low temperature plasticizer liquid',
    'pl-7': 'dioctyl sebacate DOS plasticizer clear oily liquid',
    'pl-8': 'epoxidized soybean oil ESBO golden bio plasticizer oil',
    'pl-9': 'acetyl tributyl citrate ATBC bio plasticizer clear liquid',
    'pl-10': 'trioctyl trimellitate TOTM high temperature plasticizer',
    'pl-11': 'DINCH non phthalate medical plasticizer liquid clear',
    'pl-12': 'tributyl citrate TBC bio plasticizer liquid',
    'pl-13': 'polymeric plasticizer polyester viscous liquid',
    'pl-14': 'chlorinated paraffin CP 52 pale yellow viscous chemical',
    'pl-15': 'acetylated monoglycerides ACETEM bio chemical liquid',
    'pl-16': 'triethyl citrate TEC clear plasticizer liquid',
    'pl-17': 'butyl benzyl phthalate BBP plasticizer clear liquid',
    'pl-18': 'dicapryl phthalate DCP plasticizer liquid',

    # Blowing Agents & Crosslinkers
    'ba-1': 'sodium bicarbonate fine white powder chemical sample',
    'ba-2': 'p-toluenesulfonyl semicarbazide TSS foaming agent powder',
    'ba-3': 'azodicarbonamide yellow blowing agent powder macro',
    'ba-4': 'triallyl cyanurate TAC crosslinking agent chemical',
    'ba-5': 'triallyl isocyanurate TAIC liquid crosslinker',
    'ba-6': 'organic peroxide crosslinker chemical liquid beaker',
    'ba-7': 'dicumyl peroxide DCP white crystalline flakes chemical',
    'ba-8': 'sulfur powder rubber vulcanization bright yellow',
    'ba-9': 'mercaptobenzothiazole MBT rubber accelerator cream powder',
    'ba-10': 'TBBS rubber vulcanization accelerator granules',

    # Stabilizers, Additives & Processing Aids
    'st-1': 'zinc stearate silky white powder chemical lubricant',
    'st-2': 'calcium stearate white powder chemical stabilizer',
    'st-3': 'lead stearate heavy white chemical powder',
    'st-4': 'calcium zinc PVC stabilizer one pack white pastilles',
    'st-5': 'stearic acid white crystalline flakes beads chemical',
    'st-6': 'phenolic resin tackifier amber flakes chemical',
    'st-7': 'tribasic lead sulfate TBLS white powder PVC stabilizer',
    'st-8': 'silane coupling agent chemical liquid in glass beaker',
    'st-9': 'antioxidant 1010 white crystalline powder polymer additive',
    'st-10': 'UV stabilizer HALS polymer additive white powder',
    'st-11': 'acrylic processing aid ACR white polymer powder',
    'st-12': 'MBS impact modifier white resin powder',
    'st-13': 'epoxidized soybean oil stabilizer golden liquid',
    'st-14': 'precipitated calcium carbonate coated fine white powder',
    'st-15': 'methyl tin stabilizer clear liquid PVC',
    'st-16': 'optical brightener OB-1 fluorescent yellow-green powder',

    # Fillers & Reinforcements
    'fr-1': 'calcium carbonate heavy ground white mineral powder',
    'fr-2': 'precipitated silica fine white powder rubber filler',
    'fr-3': 'fumed silica ultra light white fluffy powder chemical',
    'fr-4': 'talc powder micronized super fine white mineral',
    'fr-5': 'barium sulfate blanc fixe high purity white powder',
    'fr-6': 'kaolin clay china clay fine white powder mineral',
    'fr-7': 'magnesium oxide MgO fine calcined white powder',
    'fr-8': 'wollastonite needle-like white mineral powder',
    'fr-9': 'glass beads reflective micro glass spheres powder',
    'fr-10': 'micronized mica shimmering silvery mineral powder',
    'fr-11': 'silane treated silica reinforced white filler powder',

    # Pigments & Colorants
    'pc-1': 'titanium dioxide rutile pure white pigment powder',
    'pc-2': 'iron oxide red pigment powder terracotta rust',
    'pc-3': 'phthalocyanine blue pigment powder cobalt electric blue',
    'pc-4': 'phthalocyanine green pigment powder emerald viridian',
    'pc-5': 'carbon black pigment powder jet black furnace',
    'pc-6': 'chrome yellow pigment powder deep yellow orange',
    'pc-7': 'azo red pigment powder organic scarlet crimson',
    'pc-8': 'ultramarine blue pigment powder intense lapis royal blue',
    'pc-9': 'pearlescent pigment shimmering silver white mica powder',
    'pc-10': 'fluorescent pigment neon yellow green chartreuse powder',
    'pc-11': 'bismuth vanadate yellow pigment bright greenish yellow',
    'pc-12': 'lithopone white pigment powder chemical',

    # Solvents
    'sol-1': '2-ethylhexanol 2EH clear liquid chemical in beaker',
    'sol-2': 'toluene aromatic solvent clear liquid in glass flask',
    'sol-3': 'xylene solvent water clear liquid in laboratory beaker',
    'sol-4': 'acetone volatile solvent clear liquid pouring beaker',
    'sol-5': 'methyl ethyl ketone MEK clear solvent chemical liquid',
    'sol-6': 'methyl isobutyl ketone MIBK clear ketone solvent',
    'sol-7': 'cyclohexanone clear chemical solvent liquid laboratory',
    'sol-8': 'butyl acetate clear solvent liquid fruity ester',
    'sol-9': 'naphthalene white crystalline flakes pure chemical',
    'sol-10': 'chloroform dense clear chemical solvent liquid',
    'sol-11': 'ethylene dichloride EDC clear solvent liquid in beaker',
    'sol-12': 'phenol chloroform laboratory extraction solution liquid',
    'sol-13': 'isopropyl alcohol IPA high purity clear solvent laboratory',
    'sol-14': 'dimethylformamide DMF clear solvent chemical liquid',
    'sol-15': 'methylene chloride dichloromethane DCM clear heavy solvent',
    'sol-16': 'ethyl acetate clear ester solvent liquid in glassware',
    'sol-17': 'white mineral oil crystal clear pharmaceutical oil',
    'sol-18': 'cyclohexane solvent clear liquid in glass flask',
    'sol-19': 'n-butanol normal butyl alcohol clear solvent liquid',
    'sol-20': 'isobutanol branched alcohol clear solvent liquid',
    'sol-21': 'glycerin glycerol viscous clear syrup liquid laboratory',

    # Specialty Chemicals
    'sc-1': 'glacial acetic acid clear liquid crystallization laboratory',
    'sc-2': 'citric acid white crystals translucent tartaric acid',
    'sc-3': 'formic acid clear pungent liquid chemical in beaker',
    'sc-4': 'petroleum resin C9 hydrocarbon tackifier amber flakes',
    'sc-5': 'phenolic novolac resin ruby red amber flakes',
    'sc-6': 'paraffin wax white translucent crystalline solid slabs',
    'sc-7': 'coconut oil pure white solidified refined natural oil',
    'sc-8': 'benzoic acid white needle crystalline flakes chemical',
    'sc-9': 'monoethylene glycol MEG clear syrupy liquid in flask',
    'sc-10': 'diethylene glycol DEG clear viscous diol liquid',
    'sc-11': 'USP glycerin pharmaceutical high purity clear syrup',

    # Anhydrides & Oxides
    'ao-1': 'phthalic anhydride white needle crystals pure chemical',
    'ao-2': 'maleic anhydride white crystalline briquettes pastilles',
    'ao-3': 'zinc oxide active white powder french process',
    'ao-4': 'magnesium oxide calcined white oxide powder',
    'ao-5': 'titanium dioxide anatase white pigmentary oxide powder',
    'ao-6': 'calcium oxide quicklime white lumps calcined powder',
    'ao-7': 'silicon dioxide amorphous white synthetic silica powder',
    'ao-8': 'aluminum oxide calcined white alumina ceramic powder',
    'ao-9': 'boron trioxide boric anhydride vitreous glassy oxide granules',
    'ao-10': 'antimony trioxide white synergist flame retardant powder'
}

def fetch_and_save(pid, query):
    target_path = os.path.join(OUT_DIR, f'{pid}.jpg')
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'}
    url = f'https://duckduckgo.com/?q={urllib.parse.quote(query)}&iar=images&iax=images&ia=images'
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=5) as r:
            html = r.read().decode('utf-8', errors='ignore')
            vqd = re.search(r'vqd=([0-9\-]+)', html) or re.search(r'vqd=\"([0-9\-]+)\"', html)
            if not vqd: return False
            token = vqd.group(1)
            api_url = f'https://duckduckgo.com/i.js?l=us-en&o=json&q={urllib.parse.quote(query)}&vqd={token}&f=,,,&p=1'
            req_api = urllib.request.Request(api_url, headers=headers)
            with urllib.request.urlopen(req_api, timeout=5) as ar:
                data = json.loads(ar.read().decode('utf-8'))
                for item in data.get('results', [])[:6]:
                    img_url = item.get('image')
                    if not img_url: continue
                    # skip bad formats
                    if any(bad in img_url.lower() for bad in ['.gif', '.svg', '.webp']): continue
                    try:
                        img_req = urllib.request.Request(img_url, headers=headers)
                        with urllib.request.urlopen(img_req, timeout=5) as ir:
                            tmp_path = target_path + '.tmp'
                            with open(tmp_path, 'wb') as f:
                                f.write(ir.read())
                            with Image.open(tmp_path) as im:
                                im = im.convert('RGB')
                                w, h = im.size
                                if w < 200 or h < 150:
                                    os.remove(tmp_path)
                                    continue
                                target_aspect = 16.0 / 9.0
                                if w / h > target_aspect:
                                    new_w = int(h * target_aspect)
                                    left = (w - new_w) // 2
                                    im = im.crop((left, 0, left + new_w, h))
                                else:
                                    new_h = int(w / target_aspect)
                                    top = (h - new_h) // 2
                                    im = im.crop((0, top, w, top + new_h))
                                im = im.resize((800, 450), Image.Resampling.LANCZOS)
                                im.save(target_path, 'JPEG', quality=88, optimize=True)
                            os.remove(tmp_path)
                            print(f'[{pid}] SAVED from {img_url[:60]}...')
                            return True
                    except Exception:
                        if os.path.exists(tmp_path): os.remove(tmp_path)
                        continue
    except Exception as e:
        print(f'[{pid}] Query error: {e}')
        return False
    return False

def main():
    total = len(PRODUCT_QUERIES)
    print(f'Starting batch download for {total} chemical products...')
    success = 0
    for i, (pid, query) in enumerate(PRODUCT_QUERIES.items(), 1):
        if fetch_and_save(pid, query):
            success += 1
        time.sleep(0.4) # respectful delay
    print(f'Done! Successfully updated {success}/{total} unique product images.')

if __name__ == '__main__':
    main()

