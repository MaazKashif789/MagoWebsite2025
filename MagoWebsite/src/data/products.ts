import pvcPowderImg from '../assets/products/pvc-powder.jpg';
import ppPelletsImg from '../assets/products/pp-pellets.jpg';
import pePelletsImg from '../assets/products/polymer-pellets.jpg';
import evaBeadsImg from '../assets/products/recycled-mixed-pellets.jpg';
import recycledFlakesImg from '../assets/polymers.jpg';
import poePelletsImg from '../assets/products/engineering-plastics.jpg';
import psCrystalsImg from '../assets/products/plasticizer-liquid.jpg';
import petChipsImg from '../assets/products/chemical-solvents.jpg';
import ptaPowderImg from '../assets/products/mineral-fillers.jpg';

import naturalRubberImg from '../assets/products/natural-rubber.jpg';
import polyurethaneLiquidImg from '../assets/products/polyurethane-liquid.jpg';
import plasticizerLiquidImg from '../assets/products/plasticizer-liquid.jpg';
import blowingAgentImg from '../assets/products/blowing-agent-powder.jpg';
import chemicalSolventsImg from '../assets/products/chemical-solvents.jpg';
import pigmentPowdersImg from '../assets/products/pigment-powders.jpg';
import mineralFillersImg from '../assets/products/mineral-fillers.jpg';
import metalOxidesImg from '../assets/products/metal-oxides.jpg';
import engineeringPlasticsImg from '../assets/products/engineering-plastics.jpg';
import miscImg from '../assets/misc.jpg';
import pigmentsRawImg from '../assets/pigments.jpg';
import solventsRawImg from '../assets/solvents.jpg';

export interface ChemicalProduct {
  id: string;
  name: string;
  category: string;
  hsCode: string;
  grades: string[];
  useCase: string;
  image: string;
}

export const PRODUCT_CATEGORIES = [
  'All Categories',
  'General Plastics (Polymers)',
  'Engineering Plastics',
  'Bio-Plastics',
  'Rubbers & Elastomers',
  'PU & PU Raw Materials',
  'Plasticizers',
  'Blowing Agents & Crosslinkers',
  'Stabilizers, Additives & Processing Aids',
  'Fillers & Reinforcements',
  'Pigments & Colorants',
  'Solvents',
  'Specialty Chemicals',
  'Anhydrides & Oxides',
] as const;

export const chemicalProducts: ChemicalProduct[] = [
  // 1. General Plastics (Polymers)
  {
    id: 'gp-1',
    name: 'Polyvinyl Chloride Suspension/Emulsion (PVC)',
    category: 'General Plastics (Polymers)',
    hsCode: '3904',
    grades: ['SG5', 'SG7', 'SG8', 'K67', 'K70'],
    useCase: 'Pipes, profiles, cables, medical devices, flooring, films, sheets.',
    image: pvcPowderImg
  },
  {
    id: 'gp-2',
    name: 'Polypropylene (PP)',
    category: 'General Plastics (Polymers)',
    hsCode: '3902',
    grades: ['Homo Polymer', 'Random Copolymer', 'Impact Copolymer'],
    useCase: 'Packaging, automotive parts, textiles, household goods, fibers.',
    image: ppPelletsImg
  },
  {
    id: 'gp-3',
    name: 'Polyethylene (PE)',
    category: 'General Plastics (Polymers)',
    hsCode: '3901',
    grades: ['LDPE', 'LLDPE', 'HDPE'],
    useCase: 'Films, bags, pipes, containers, bottles, geomembranes.',
    image: pePelletsImg
  },
  {
    id: 'gp-4',
    name: 'Ethylene Vinyl Acetate (EVA)',
    category: 'General Plastics (Polymers)',
    hsCode: '3901.3',
    grades: ['VA Content 5%–40%'],
    useCase: 'Footwear, adhesives, films, foams, packaging, toys.',
    image: evaBeadsImg
  },
  {
    id: 'gp-5',
    name: 'Recycled Plastic (Various Polymers)',
    category: 'General Plastics (Polymers)',
    hsCode: 'Mixed (3901, 3902, 3915)',
    grades: ['Depends on source material'],
    useCase: 'Sustainable packaging, molded products, construction applications, fibers.',
    image: recycledFlakesImg
  },
  {
    id: 'gp-6',
    name: 'POE (Polyolefin Elastomer)',
    category: 'General Plastics (Polymers)',
    hsCode: '3901.9',
    grades: ['Industrial Grade'],
    useCase: 'Adhesives, sealants, flexible packaging, impact modifiers, automotive parts.',
    image: poePelletsImg
  },
  {
    id: 'gp-7',
    name: 'Polystyrene (PS)',
    category: 'General Plastics (Polymers)',
    hsCode: '3903',
    grades: ['GPPS', 'HIPS'],
    useCase: 'Packaging, household goods, insulation.',
    image: psCrystalsImg
  },
  {
    id: 'gp-8',
    name: 'Polyethylene Terephthalate (PET)',
    category: 'General Plastics (Polymers)',
    hsCode: '3907',
    grades: ['Bottle Grade', 'Film Grade'],
    useCase: 'Bottles, films, fibers.',
    image: petChipsImg
  },
  {
    id: 'gp-9',
    name: 'Purified Terephthalic Acid (PTA)',
    category: 'General Plastics (Polymers)',
    hsCode: '2917',
    grades: ['Fiber Grade', 'PET Grade'],
    useCase: 'Production of polyester fiber and PET.',
    image: ptaPowderImg
  },

  // 2. Engineering Plastics
  {
    id: 'ep-1',
    name: 'Acrylonitrile Butadiene Styrene (ABS)',
    category: 'Engineering Plastics',
    hsCode: '3903.3',
    grades: ['750SW', 'PA-757', 'Terluran GP-22'],
    useCase: 'Automotive parts, housings, pipes.',
    image: engineeringPlasticsImg
  },
  {
    id: 'ep-2',
    name: 'Styrene Acrylonitrile (SAN)',
    category: 'Engineering Plastics',
    hsCode: '3903.2',
    grades: ['Standard', 'Impact Resistant'],
    useCase: 'Appliances, medical devices, lamps.',
    image: ppPelletsImg
  },
  {
    id: 'ep-3',
    name: 'Polycarbonate (PC)',
    category: 'Engineering Plastics',
    hsCode: '3907.4',
    grades: ['2805', '3103'],
    useCase: 'Lenses, automotive glazing, electronics.',
    image: pePelletsImg
  },
  {
    id: 'ep-4',
    name: 'Nylon (PA6, PA66)',
    category: 'Engineering Plastics',
    hsCode: '3908.1',
    grades: ['PA6 (B301)', 'PA66 (A216)'],
    useCase: 'Engineering components, fibers.',
    image: evaBeadsImg
  },
  {
    id: 'ep-5',
    name: 'Polyoxymethylene (POM)',
    category: 'Engineering Plastics',
    hsCode: '3907.1',
    grades: ['M90', 'Hostaform C9021'],
    useCase: 'Gears, fasteners, precision parts.',
    image: pvcPowderImg
  },
  {
    id: 'ep-6',
    name: 'Polymethyl Methacrylate (PMMA)',
    category: 'Engineering Plastics',
    hsCode: '3906.9',
    grades: ['GM-20', 'CM-205'],
    useCase: 'Lighting, signs, automotive parts.',
    image: psCrystalsImg
  },

  // 3. Bio-Plastics
  {
    id: 'bp-1',
    name: 'Polylactic Acid (PLA)',
    category: 'Bio-Plastics',
    hsCode: '3907.99',
    grades: ['PLA 2003D', '4032D'],
    useCase: 'Compostable packaging, 3D-printing filament & fibers.',
    image: ppPelletsImg
  },
  {
    id: 'bp-2',
    name: 'Polyhydroxyalkanoates (PHA)',
    category: 'Bio-Plastics',
    hsCode: '3916.9',
    grades: ['PHA 1', 'PHA 3'],
    useCase: 'Biodegradable films, medical implants & coatings.',
    image: pePelletsImg
  },

  // 4. Rubbers & Elastomers
  {
    id: 're-1',
    name: 'Natural Rubber (NR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4001',
    grades: ['RSS3', 'TSR20', 'TPC3W', 'ADS', 'LATEX', 'Skim Block'],
    useCase: 'Tires, conveyor belts, footwear.',
    image: naturalRubberImg
  },
  {
    id: 're-2',
    name: 'Styrene Butadiene Rubber (SBR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.19',
    grades: ['1502', '1712'],
    useCase: 'Tires, seals, hoses.',
    image: naturalRubberImg
  },
  {
    id: 're-3',
    name: 'Solution Styrene Butadiene Rubber (SSBR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.19',
    grades: ['1723', '1728'],
    useCase: 'High-performance tires, treads.',
    image: engineeringPlasticsImg
  },
  {
    id: 're-4',
    name: 'Nitrile Butadiene Rubber (NBR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.59',
    grades: ['3355', '3365'],
    useCase: 'Fuel hoses, seals, gloves.',
    image: naturalRubberImg
  },
  {
    id: 're-5',
    name: 'Hydrogenated Nitrile Rubber (HNBR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.99',
    grades: ['Zetpol 2000', 'Therban A3407'],
    useCase: 'Oil seals, O-rings.',
    image: engineeringPlasticsImg
  },
  {
    id: 're-6',
    name: 'Ethylene Propylene Diene Rubber (EPDM)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.7',
    grades: ['Keltan 512', '8555'],
    useCase: 'Automotive weather seals, roofing.',
    image: recycledFlakesImg
  },
  {
    id: 're-7',
    name: 'Release Agents for EVA Rubber',
    category: 'Rubbers & Elastomers',
    hsCode: '3403.19',
    grades: ['Industrial Grade'],
    useCase: 'Facilitates demolding in rubber/EVA processing, improves surface finish.',
    image: chemicalSolventsImg
  },
  {
    id: 're-8',
    name: 'Rice Rubber Roll',
    category: 'Rubbers & Elastomers',
    hsCode: '4016.99',
    grades: ['Industrial/Agro Grade'],
    useCase: 'Used in rice milling machines for dehusking grains efficiently.',
    image: miscImg
  },
  {
    id: 're-9',
    name: 'Chloroprene Rubber (CR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.41',
    grades: ['Neoprene WRT', 'GRT'],
    useCase: 'Hoses, belts, adhesives.',
    image: naturalRubberImg
  },
  {
    id: 're-10',
    name: 'Fluorocarbon Rubber (FKM)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.99',
    grades: ['Viton A', 'B', 'GF'],
    useCase: 'Chemical seals, automotive gaskets.',
    image: engineeringPlasticsImg
  },
  {
    id: 're-11',
    name: 'Thermoplastic Elastomers (TPE, SEBS, SBS)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.99',
    grades: ['Kraton G', 'Kraton D'],
    useCase: 'Footwear, seals, automotive parts.',
    image: evaBeadsImg
  },
  {
    id: 're-12',
    name: 'Reclaimed Rubber',
    category: 'Rubbers & Elastomers',
    hsCode: '4001.5',
    grades: ['Whole Tire Reclaim'],
    useCase: 'Low-cost rubber goods, mats.',
    image: engineeringPlasticsImg
  },
  {
    id: 're-13',
    name: 'Butyl Rubber (IIR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.19',
    grades: ['Bromo-Butyl 2030', '2222'],
    useCase: 'Inner tubes, pharmaceutical stoppers.',
    image: naturalRubberImg
  },
  {
    id: 're-14',
    name: 'Polybutadiene Rubber (BR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.19',
    grades: ['High Cis BR9000', 'BR1220'],
    useCase: 'Tire treads, sports goods.',
    image: naturalRubberImg
  },
  {
    id: 're-15',
    name: 'Liquid Rubber (LIR, LBR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.99',
    grades: ['LBR 300', 'LIR 50'],
    useCase: 'Modifier for TPE, adhesives, impact strength.',
    image: polyurethaneLiquidImg
  },
  {
    id: 're-16',
    name: 'Carboxylated NBR (XNBR)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.59',
    grades: ['XNBR 3380', 'XNBR 3680'],
    useCase: 'Rubber gloves, gaskets with better abrasion.',
    image: naturalRubberImg
  },
  {
    id: 're-17',
    name: 'Thermoplastic Vulcanizates (TPV)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.99',
    grades: ['Santoprene 201-55'],
    useCase: 'Soft-touch automotive trims, gaskets.',
    image: pePelletsImg
  },
  {
    id: 're-18',
    name: 'Silicone Rubber (VMQ)',
    category: 'Rubbers & Elastomers',
    hsCode: '4002.99',
    grades: ['Industrial Grade'],
    useCase: 'High-temp gaskets, bakeware, medical.',
    image: psCrystalsImg
  },

  // 5. PU & PU Raw Materials
  {
    id: 'pu-1',
    name: '1,4-Butanediol (BDO)',
    category: 'PU & PU Raw Materials',
    hsCode: '2905.32',
    grades: ['Industrial Grade'],
    useCase: 'Chain extender in PU, TPU production.',
    image: chemicalSolventsImg
  },
  {
    id: 'pu-2',
    name: 'Dimethylolpropionic Acid (DMPA)',
    category: 'PU & PU Raw Materials',
    hsCode: '2910.9',
    grades: ['Industrial Grade'],
    useCase: 'Used in water-based PU dispersions (PUDs).',
    image: pvcPowderImg
  },
  {
    id: 'pu-3',
    name: 'Trimethylolpropane (TMP)',
    category: 'PU & PU Raw Materials',
    hsCode: '2905.32',
    grades: ['Tri-functional Polyol'],
    useCase: 'Crosslinking agent in PU coatings, elastomers.',
    image: ptaPowderImg
  },
  {
    id: 'pu-4',
    name: 'Isophorone Diisocyanate (IPDI)',
    category: 'PU & PU Raw Materials',
    hsCode: '2929.1',
    grades: ['Aliphatic Diisocyanate'],
    useCase: 'UV-resistant PU coatings.',
    image: chemicalSolventsImg
  },
  {
    id: 'pu-5',
    name: 'Hexamethylene Diisocyanate (HDI)',
    category: 'PU & PU Raw Materials',
    hsCode: '2929.1',
    grades: ['Monomeric & Trimer Grades'],
    useCase: 'Automotive & industrial PU coatings.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pu-6',
    name: 'N-Methylpyrrolidone (NMP)',
    category: 'PU & PU Raw Materials',
    hsCode: '2933.39',
    grades: ['Industrial Grade'],
    useCase: 'PU synthesis solvent (used in synthetic leather).',
    image: chemicalSolventsImg
  },
  {
    id: 'pu-7',
    name: 'PU Dispersions (PUDs)',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.5',
    grades: ['Water-based Systems'],
    useCase: 'Water-based synthetic leather, eco-friendly coatings.',
    image: ppPelletsImg
  },
  {
    id: 'pu-8',
    name: 'PU System For Shoes',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.5',
    grades: ['Footwear Grade Systems'],
    useCase: 'Soles, insoles, midsoles.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pu-9',
    name: 'PU System For Leather',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.5',
    grades: ['Coating & Finishing Systems'],
    useCase: 'Synthetic leather coatings.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pu-10',
    name: 'PU System For Coating',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.5',
    grades: ['High Durability Systems'],
    useCase: 'Protective coatings, paints.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pu-11',
    name: 'Thermoplastic Polyurethane (TPU)',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.5',
    grades: ['Extrusion & Injection Grades'],
    useCase: 'Footwear, Gaskets, Films, Medicine.',
    image: pePelletsImg
  },
  {
    id: 'pu-12',
    name: 'Methylene Diphenyl Diisocyanate (MDI)',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.3',
    grades: ['Pure MDI', 'Polymer MDI'],
    useCase: 'Foams, adhesives, coatings.',
    image: pvcPowderImg
  },
  {
    id: 'pu-13',
    name: 'Polymeric MDI (PMDI)',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.3',
    grades: ['M20S', 'Suprasec 5005'],
    useCase: 'Rigid foam insulation, elastomers.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pu-14',
    name: 'Toluene Diisocyanate (TDI)',
    category: 'PU & PU Raw Materials',
    hsCode: '3909.3',
    grades: ['TDI-80/20', 'TDI-65/35'],
    useCase: 'Flexible foams, sealants.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pu-15',
    name: 'Polyether Polyols',
    category: 'PU & PU Raw Materials',
    hsCode: '3907.91',
    grades: ['3050', '5613'],
    useCase: 'Flexible foams, elastomers.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pu-16',
    name: 'Polyester Polyols',
    category: 'PU & PU Raw Materials',
    hsCode: '3907.91',
    grades: ['3152', '3252'],
    useCase: 'Coatings, adhesives, elastomers.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pu-17',
    name: 'Polycaprolactone Polyol',
    category: 'PU & PU Raw Materials',
    hsCode: '3907.99',
    grades: ['CAPA 2200', '2402'],
    useCase: 'TPU, cast elastomers.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pu-18',
    name: 'Adipic Acid',
    category: 'PU & PU Raw Materials',
    hsCode: '2917.12',
    grades: ['Industrial Grade', 'Polymer Grade'],
    useCase: 'Nylon 6,6, PU production.',
    image: ptaPowderImg
  },

  // 6. Plasticizers
  {
    id: 'pl-1',
    name: 'Dioctyl Phthalate (DOP)',
    category: 'Plasticizers',
    hsCode: '2917.32',
    grades: ['Industrial Grade'],
    useCase: 'Flexible PVC, cables, flooring.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-2',
    name: 'Diisononyl Phthalate (DINP)',
    category: 'Plasticizers',
    hsCode: '2917.32',
    grades: ['Industrial Grade'],
    useCase: 'Automotive interiors, PVC flooring.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-3',
    name: 'Diisodecyl Phthalate (DIDP)',
    category: 'Plasticizers',
    hsCode: '2917.32',
    grades: ['Industrial Grade'],
    useCase: 'Cables, synthetic leather, roofing membranes.',
    image: chemicalSolventsImg
  },
  {
    id: 'pl-4',
    name: 'Di-Octyl Terephthalate (DOTP)',
    category: 'Plasticizers',
    hsCode: '2917.39',
    grades: ['Industrial Grade'],
    useCase: 'Non-phthalate plasticizer for flexible PVC.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-5',
    name: 'Di-n-Butyl Phthalate (DBP)',
    category: 'Plasticizers',
    hsCode: '2917.32',
    grades: ['Industrial Grade'],
    useCase: 'Adhesives, sealants, paints.',
    image: chemicalSolventsImg
  },
  {
    id: 'pl-6',
    name: 'Dioctyl Adipate (DOA)',
    category: 'Plasticizers',
    hsCode: '2917.12',
    grades: ['Industrial Grade'],
    useCase: 'Low-temperature flexible PVC.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-7',
    name: 'Di-Octyl Sebacate (DOS)',
    category: 'Plasticizers',
    hsCode: '2917.13',
    grades: ['Industrial Grade'],
    useCase: 'Aerospace materials, lubricants.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-8',
    name: 'Epoxidized Soybean Oil (ESBO)',
    category: 'Plasticizers',
    hsCode: '1518',
    grades: ['Industrial Grade'],
    useCase: 'Secondary plasticizer for PVC.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pl-9',
    name: 'Acetyl Tributyl Citrate (ATBC)',
    category: 'Plasticizers',
    hsCode: '2918.16',
    grades: ['Food/Pharma Grade'],
    useCase: 'Food packaging, toys.',
    image: chemicalSolventsImg
  },
  {
    id: 'pl-10',
    name: 'Trioctyl Trimellitate (TOTM)',
    category: 'Plasticizers',
    hsCode: '2917.39',
    grades: ['Industrial Grade'],
    useCase: 'High-temperature cables, medical devices.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-11',
    name: 'Diisononyl Cyclohexane-1,2-Dicarboxylate (DINCH)',
    category: 'Plasticizers',
    hsCode: '2917.39',
    grades: ['Industrial Grade'],
    useCase: 'Medical applications, toys.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-12',
    name: 'Tributyl Citrate (TBC)',
    category: 'Plasticizers',
    hsCode: '2918.16',
    grades: ['Food Grade'],
    useCase: 'Plasticizer for sensitive applications.',
    image: chemicalSolventsImg
  },
  {
    id: 'pl-13',
    name: 'Polymeric Plasticizer (e.g., TOTM-P, DOS-P)',
    category: 'Plasticizers',
    hsCode: '3907.99',
    grades: ['Custom Molecular Wt.'],
    useCase: 'High permanence, low migration in PVC.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-14',
    name: 'Chlorinated Paraffin (CP 52, CP 70)',
    category: 'Plasticizers',
    hsCode: '3824.99',
    grades: ['CP 52%', 'CP 70%'],
    useCase: 'Flame-retardant plasticizer for PVC cables.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'pl-15',
    name: 'Acetylated Monoglycerides (ACETEM)',
    category: 'Plasticizers',
    hsCode: '2915.9',
    grades: ['Food/Pharma Grade'],
    useCase: 'Biodegradable plasticizer for packaging, pharma.',
    image: chemicalSolventsImg
  },
  {
    id: 'pl-16',
    name: 'Triethyl Citrate (TEC)',
    category: 'Plasticizers',
    hsCode: '2918.16',
    grades: ['Food Grade'],
    useCase: 'Plasticizer in medical, food-grade films.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-17',
    name: 'Butyl Benzyl Phthalate (BBP)',
    category: 'Plasticizers',
    hsCode: '2917.32',
    grades: ['Industrial Grade'],
    useCase: 'Adhesives, sealants, vinyl flooring.',
    image: plasticizerLiquidImg
  },
  {
    id: 'pl-18',
    name: 'Di-Capryl Phthalate (DCP)',
    category: 'Plasticizers',
    hsCode: '2917.32',
    grades: ['Industrial Grade'],
    useCase: 'Flexible PVC films, eco alternatives.',
    image: chemicalSolventsImg
  },

  // 7. Blowing Agents & Crosslinkers
  {
    id: 'ba-1',
    name: 'Sodium Bicarbonate (Baking Soda)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2836.3',
    grades: ['Industrial Grade'],
    useCase: 'Low-temperature foaming (eco/EVA use).',
    image: pvcPowderImg
  },
  {
    id: 'ba-2',
    name: 'TSS (p-Toluenesulfonyl Semicarbazide)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2928',
    grades: ['TSS Standard'],
    useCase: 'Foaming agent with stable decomposition for elastomers.',
    image: mineralFillersImg
  },
  {
    id: 'ba-3',
    name: 'Modified Azodicarbonamide',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2927',
    grades: ['AC Modified Grades'],
    useCase: 'Low-odor foaming in EVA/PE.',
    image: blowingAgentImg
  },
  {
    id: 'ba-4',
    name: 'Triallyl Cyanurate (TAC)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2926.9',
    grades: ['TAC 98%'],
    useCase: 'Co-agent with DCP for better heat resistance and tensile strength.',
    image: chemicalSolventsImg
  },
  {
    id: 'ba-5',
    name: 'Triallyl Isocyanurate (TAIC)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2921.51',
    grades: ['TAIC 98%'],
    useCase: 'Improves crosslinking in EVA, PE, and solar encapsulants.',
    image: chemicalSolventsImg
  },
  {
    id: 'ba-6',
    name: 'Peroxyketals (e.g., Luperox®)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2910.9',
    grades: ['Luperox DDM', 'F-Series'],
    useCase: 'Alternative organic peroxides for various polymers.',
    image: chemicalSolventsImg
  },
  {
    id: 'ba-7',
    name: 'Dicumyl Peroxide (DCP)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2910.9',
    grades: ['DCP 40%', 'DCP 98%'],
    useCase: 'Crosslinking of rubber, EVA.',
    image: ptaPowderImg
  },
  {
    id: 'ba-8',
    name: 'Sulfur (Insoluble & Soluble)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2503',
    grades: ['Rubber Grade'],
    useCase: 'Vulcanization of rubber.',
    image: blowingAgentImg
  },
  {
    id: 'ba-9',
    name: 'MBT (2-Mercaptobenzothiazole)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2930.9',
    grades: ['MBT Powder', 'Granules'],
    useCase: 'Rubber accelerator.',
    image: blowingAgentImg
  },
  {
    id: 'ba-10',
    name: 'TBBS (N-Tert-Butyl-2-Benzothiazole Sulfenamide)',
    category: 'Blowing Agents & Crosslinkers',
    hsCode: '2930.9',
    grades: ['TBBS Granules'],
    useCase: 'Accelerator for tire rubbers.',
    image: mineralFillersImg
  },

  // 8. Stabilizers, Additives & Processing Aids
  {
    id: 'st-1',
    name: 'Zinc Stearate',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '2915.7',
    grades: ['Technical Grade'],
    useCase: 'Lubricant and release agent in plastics, rubber, paints; PVC heat stabilizer.',
    image: pvcPowderImg
  },
  {
    id: 'st-2',
    name: 'Calcium Stearate',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '2915.7',
    grades: ['Technical Grade'],
    useCase: 'PVC heat stabilizer, lubricant for rubber, plastics, personal care products.',
    image: mineralFillersImg
  },
  {
    id: 'st-3',
    name: 'Lead Stearate',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '2915.7',
    grades: ['Industrial Grade'],
    useCase: 'Heat stabilizer for rigid PVC pipes, cables, profiles.',
    image: metalOxidesImg
  },
  {
    id: 'st-4',
    name: 'One Pack Stabilizers (Ca/Zn, Ba/Zn Systems)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3812.3',
    grades: ['Custom Blends (Lead-Free/Organic-Based)'],
    useCase: 'Stabilization of PVC pipes, profiles, cables, flooring, and sheets; improves processing stability.',
    image: mineralFillersImg
  },
  {
    id: 'st-5',
    name: 'Stearic Acid',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3823.11',
    grades: ['Industrial Grade'],
    useCase: 'Internal lubricant and stabilizer in PVC, rubber compounding, candle production, cosmetics.',
    image: ptaPowderImg
  },
  {
    id: 'st-6',
    name: 'Phenolic Resin',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3909.4',
    grades: ['Industrial Grade'],
    useCase: 'Molding compounds, coatings, adhesives, electronic laminates for thermal and mechanical strength.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'st-7',
    name: 'Tribasic Lead Sulfate (TBLS)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '2833.29',
    grades: ['Industrial Grade'],
    useCase: 'Excellent heat stabilizer for rigid PVC applications (pipes, fittings, conduits).',
    image: metalOxidesImg
  },
  {
    id: 'st-8',
    name: 'Silane Coupling Agents (Amino/Epoxy/Vinyl Types)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3806.1',
    grades: ['A1100', 'E1440', 'VTS'],
    useCase: 'Enhances adhesion between fillers (silica, glass fibers) and polymer matrices in rubber, plastics, PU, paints.',
    image: chemicalSolventsImg
  },
  {
    id: 'st-9',
    name: 'Antioxidants (e.g., BHT, Irganox 1010, 1076)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '2921.51 / 3812.90',
    grades: ['Primary & Secondary'],
    useCase: 'Prevents oxidative degradation during processing and service life of plastics, PU, rubber, adhesives.',
    image: ptaPowderImg
  },
  {
    id: 'st-10',
    name: 'UV Stabilizers (e.g., UV-531, UV-328, HALS)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3812.3',
    grades: ['Industrial Grade'],
    useCase: 'Protects plastics, EVA, PU, rubber, paints from UV light degradation and discoloration.',
    image: mineralFillersImg
  },
  {
    id: 'st-11',
    name: 'Acrylic Processing Aid (ACR)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3906.9',
    grades: ['ACR-401', 'ACR-530'],
    useCase: 'Enhances fusion, melt strength, and surface finish in rigid PVC, EVA sheets, profiles, footwear components.',
    image: ppPelletsImg
  },
  {
    id: 'st-12',
    name: 'MBS Impact Modifier (Methacrylate-Butadiene-Styrene)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3903.9',
    grades: ['MBS-1', 'MBS-2'],
    useCase: 'Improves impact resistance and transparency in rigid PVC sheets, films, EVA materials.',
    image: evaBeadsImg
  },
  {
    id: 'st-13',
    name: 'Epoxidized Soybean Oil (ESBO - Stabilizer)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '1518',
    grades: ['Industrial Grade'],
    useCase: 'Secondary plasticizer and thermal stabilizer for flexible PVC, plasticized materials, synthetic leather.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'st-14',
    name: 'Calcium Carbonate (Coated/Uncoated - Additive)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '2836.5',
    grades: ['Filler Grade'],
    useCase: 'Cost-effective filler improving mechanical properties in plastics, rubber, EVA soles, paints.',
    image: pvcPowderImg
  },
  {
    id: 'st-15',
    name: 'Organic Tin Stabilizers (Methyl Tin, Butyl Tin)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3812.3',
    grades: ['Industrial Grade'],
    useCase: 'Heat stabilizer for clear rigid PVC bottles, transparent sheets, and films.',
    image: plasticizerLiquidImg
  },
  {
    id: 'st-16',
    name: 'Optical Brighteners (OB-1, CBS-X)',
    category: 'Stabilizers, Additives & Processing Aids',
    hsCode: '3204.2',
    grades: ['Technical Grade'],
    useCase: 'Improves brightness and visual appearance of EVA foams, plastics, PU coatings, and paints.',
    image: blowingAgentImg
  },

  // 9. Fillers & Reinforcements
  {
    id: 'fr-1',
    name: 'Calcium Carbonate (Coated/Uncoated)',
    category: 'Fillers & Reinforcements',
    hsCode: '2836.5',
    grades: ['325 Mesh', '800 Mesh'],
    useCase: 'Filler for plastics, paints, rubbers.',
    image: pvcPowderImg
  },
  {
    id: 'fr-2',
    name: 'Precipitated Silica',
    category: 'Fillers & Reinforcements',
    hsCode: '2811.22',
    grades: ['Silica VN3', 'VN7'],
    useCase: 'Reinforcement filler for tires, rubbers.',
    image: mineralFillersImg
  },
  {
    id: 'fr-3',
    name: 'Fumed Silica',
    category: 'Fillers & Reinforcements',
    hsCode: '2811.22',
    grades: ['AEROSIL 200', 'R972'],
    useCase: 'Thickening agent, reinforcing filler.',
    image: metalOxidesImg
  },
  {
    id: 'fr-4',
    name: 'Talc Powder (Micronized)',
    category: 'Fillers & Reinforcements',
    hsCode: '2526.2',
    grades: ['400 Mesh', '800 Mesh'],
    useCase: 'Plastics, paints, cosmetics.',
    image: mineralFillersImg
  },
  {
    id: 'fr-5',
    name: 'Barium Sulfate (Natural/Blanc Fixe)',
    category: 'Fillers & Reinforcements',
    hsCode: '2833.27',
    grades: ['325 Mesh'],
    useCase: 'Filler for coatings, plastics, rubber.',
    image: metalOxidesImg
  },
  {
    id: 'fr-6',
    name: 'Kaolin Clay (China Clay)',
    category: 'Fillers & Reinforcements',
    hsCode: '2507',
    grades: ['325 Mesh', 'Calcined Kaolin'],
    useCase: 'Used in PVC cables, EVA, rubber, and paint for opacity and reinforcement.',
    image: pvcPowderImg
  },
  {
    id: 'fr-7',
    name: 'Magnesium Oxide (MgO - Reinforcing)',
    category: 'Fillers & Reinforcements',
    hsCode: '2519.9',
    grades: ['Light Grade', '85%', '92%'],
    useCase: 'Used as a curing and reinforcing filler in rubber and PU formulations.',
    image: metalOxidesImg
  },
  {
    id: 'fr-8',
    name: 'Wollastonite',
    category: 'Fillers & Reinforcements',
    hsCode: '2530.1',
    grades: ['325 Mesh', 'Surface-Treated'],
    useCase: 'Improves dimensional stability and strength in plastics and rubbers.',
    image: mineralFillersImg
  },
  {
    id: 'fr-9',
    name: 'Glass Fiber / Glass Beads',
    category: 'Fillers & Reinforcements',
    hsCode: '7019.9',
    grades: ['Milled', 'Chopped', 'Spheres'],
    useCase: 'Reinforcement for high-strength plastic, rubber, and PU composites.',
    image: pePelletsImg
  },
  {
    id: 'fr-10',
    name: 'Micronized Mica Powder',
    category: 'Fillers & Reinforcements',
    hsCode: '2525.2',
    grades: ['325 Mesh', 'Wet Ground'],
    useCase: 'Used for barrier properties in paints, plastics, and rubber.',
    image: mineralFillersImg
  },
  {
    id: 'fr-11',
    name: 'Silane-Treated Fillers',
    category: 'Fillers & Reinforcements',
    hsCode: 'Varies',
    grades: ['Surface Modified Grades'],
    useCase: 'Enhanced compatibility with polymers in high-end plastics and rubbers.',
    image: metalOxidesImg
  },

  // 10. Pigments & Colorants
  {
    id: 'pc-1',
    name: 'Titanium Dioxide (TiO₂ Rutile/Anatase)',
    category: 'Pigments & Colorants',
    hsCode: '2823',
    grades: ['R-902', 'R-706'],
    useCase: 'Paints, plastics, coatings.',
    image: metalOxidesImg
  },
  {
    id: 'pc-2',
    name: 'Iron Oxide Pigments (Red, Yellow, Black)',
    category: 'Pigments & Colorants',
    hsCode: '2821.1',
    grades: ['130', '920', '330'],
    useCase: 'Construction, coatings, plastics.',
    image: pigmentsRawImg
  },
  {
    id: 'pc-3',
    name: 'Phthalocyanine Blue',
    category: 'Pigments & Colorants',
    hsCode: '3204.17',
    grades: ['PB15:3', 'PB15:1'],
    useCase: 'Plastics, coatings, inks.',
    image: pigmentPowdersImg
  },
  {
    id: 'pc-4',
    name: 'Phthalocyanine Green',
    category: 'Pigments & Colorants',
    hsCode: '3204.17',
    grades: ['PG7'],
    useCase: 'Plastics, coatings, inks.',
    image: pigmentPowdersImg
  },
  {
    id: 'pc-5',
    name: 'Carbon Black',
    category: 'Pigments & Colorants',
    hsCode: '2803',
    grades: ['N220', 'N330', 'N550', 'N660'],
    useCase: 'Rubber reinforcement, inks, plastics.',
    image: engineeringPlasticsImg
  },
  {
    id: 'pc-6',
    name: 'Chrome Yellow',
    category: 'Pigments & Colorants',
    hsCode: '3206.41',
    grades: ['Medium Chrome', 'Lemon Chrome'],
    useCase: 'Paints, plastics, coatings.',
    image: blowingAgentImg
  },
  {
    id: 'pc-7',
    name: 'Organic Pigments (Azo)',
    category: 'Pigments & Colorants',
    hsCode: '3204.17',
    grades: ['Red 2B', 'Red F3RK', 'Yellow HR'],
    useCase: 'Used in plastics (PVC, EVA), PU coatings, masterbatches, and inks.',
    image: pigmentsRawImg
  },
  {
    id: 'pc-8',
    name: 'Ultramarine Blue',
    category: 'Pigments & Colorants',
    hsCode: '3206.49',
    grades: ['Standard', 'Heat-Resistant Grades'],
    useCase: 'EVA foam coloring, PVC compounds, plastics, rubber, cosmetics.',
    image: pigmentPowdersImg
  },
  {
    id: 'pc-9',
    name: 'Pearlescent Pigments',
    category: 'Pigments & Colorants',
    hsCode: '3206.49',
    grades: ['Silver', 'Gold', 'Interference Types'],
    useCase: 'Decorative coatings, cosmetics, PVC films, EVA soles.',
    image: mineralFillersImg
  },
  {
    id: 'pc-10',
    name: 'Fluorescent Pigments',
    category: 'Pigments & Colorants',
    hsCode: '3204.17',
    grades: ['Red', 'Yellow', 'Green', 'Orange'],
    useCase: 'High-visibility plastics and PU coatings, safety applications.',
    image: blowingAgentImg
  },
  {
    id: 'pc-11',
    name: 'Bismuth Vanadate Yellow',
    category: 'Pigments & Colorants',
    hsCode: '3206.49',
    grades: ['Industrial Grade'],
    useCase: 'High-performance pigment for automotive coatings, plastics, PU.',
    image: blowingAgentImg
  },
  {
    id: 'pc-12',
    name: 'Lithopone (ZnS + BaSO₄)',
    category: 'Pigments & Colorants',
    hsCode: '3206.42',
    grades: ['B301', 'B311'],
    useCase: 'White pigment alternative to TiO₂ in plastics, rubber, EVA.',
    image: metalOxidesImg
  },

  // 11. Solvents
  {
    id: 'sol-1',
    name: '2-Ethylhexanol (2EH)',
    category: 'Solvents',
    hsCode: '2905.16',
    grades: ['Industrial Grade'],
    useCase: 'Raw material for plasticizers, coatings.',
    image: plasticizerLiquidImg
  },
  {
    id: 'sol-2',
    name: 'Toluene',
    category: 'Solvents',
    hsCode: '2902.3',
    grades: ['Industrial Grade'],
    useCase: 'Coatings, adhesives, chemical feedstock.',
    image: solventsRawImg
  },
  {
    id: 'sol-3',
    name: 'Xylene (Mixed Isomers)',
    category: 'Solvents',
    hsCode: '2902.41',
    grades: ['Industrial Grade'],
    useCase: 'Solvent for paints and coatings.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-4',
    name: 'Acetone',
    category: 'Solvents',
    hsCode: '2914.11',
    grades: ['Industrial Grade'],
    useCase: 'Solvent for plastics, synthetic fibers.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-5',
    name: 'Methyl Ethyl Ketone (MEK)',
    category: 'Solvents',
    hsCode: '2914.12',
    grades: ['Industrial Grade'],
    useCase: 'Adhesives, coatings, printing inks.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-6',
    name: 'Methyl Isobutyl Ketone (MIBK)',
    category: 'Solvents',
    hsCode: '2914.13',
    grades: ['Industrial Grade'],
    useCase: 'Solvent for surface coatings, adhesives.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-7',
    name: 'Cyclohexanone',
    category: 'Solvents',
    hsCode: '2914.22',
    grades: ['Industrial Grade'],
    useCase: 'Solvent for paints, plastics, nylon production.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-8',
    name: 'Butyl Acetate (Normal/ISO)',
    category: 'Solvents',
    hsCode: '2915.33',
    grades: ['Normal BA', 'Iso BA'],
    useCase: 'Solvent for coatings, inks.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-9',
    name: 'Naphthalene',
    category: 'Solvents',
    hsCode: '2902.9',
    grades: ['Industrial Grade'],
    useCase: 'Intermediate for dyes, mothballs, plasticizers.',
    image: ptaPowderImg
  },
  {
    id: 'sol-10',
    name: 'Chloroform',
    category: 'Solvents',
    hsCode: '2903.13',
    grades: ['Industrial Grade'],
    useCase: 'Solvent in pharmaceuticals, refrigerants, lab use.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-11',
    name: 'Ethylene Dichloride (EDC)',
    category: 'Solvents',
    hsCode: '2903.15',
    grades: ['Industrial Grade'],
    useCase: 'Intermediate for vinyl chloride (PVC production).',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-12',
    name: 'Phenol Chloroform',
    category: 'Solvents',
    hsCode: 'Mixture',
    grades: ['Lab/Industrial Grade'],
    useCase: 'DNA extraction reagent, pharmaceutical and lab solvent.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-13',
    name: 'Isopropyl Alcohol (IPA)',
    category: 'Solvents',
    hsCode: '2905.12',
    grades: ['Industrial Grade', 'Pharma Grade'],
    useCase: 'Disinfectant, cleaning agent, electronics.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-14',
    name: 'Dimethylformamide (DMF)',
    category: 'Solvents',
    hsCode: '2924.1',
    grades: ['Industrial Grade'],
    useCase: 'Solvent for acrylic fibers, adhesives, and synthetic resins.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-15',
    name: 'Methylene Chloride (MC)',
    category: 'Solvents',
    hsCode: '2903.12',
    grades: ['Industrial Grade'],
    useCase: 'Paint stripper, solvent for adhesives, aerosols.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-16',
    name: 'Ethyl Acetate',
    category: 'Solvents',
    hsCode: '2915.31',
    grades: ['Industrial Grade'],
    useCase: 'Solvent for coatings, inks, pharmaceuticals.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-17',
    name: 'White Oil',
    category: 'Solvents',
    hsCode: '2710.19',
    grades: ['Pharma Grade', 'Industrial Grade'],
    useCase: 'Cosmetics, pharmaceuticals, plastics, textile lubricants.',
    image: plasticizerLiquidImg
  },
  {
    id: 'sol-18',
    name: 'Cyclohexane',
    category: 'Solvents',
    hsCode: '2902.11',
    grades: ['Industrial Grade'],
    useCase: 'Solvent, nylon intermediate (adipic acid, caprolactam).',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-19',
    name: 'N-Butanol',
    category: 'Solvents',
    hsCode: '2905.13',
    grades: ['Industrial Grade'],
    useCase: 'Solvent in coatings, resins, plasticizers.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-20',
    name: 'Iso-Butanol',
    category: 'Solvents',
    hsCode: '2905.14',
    grades: ['Industrial Grade'],
    useCase: 'Solvent, chemical intermediate, paint additive.',
    image: chemicalSolventsImg
  },
  {
    id: 'sol-21',
    name: 'Glycerin',
    category: 'Solvents',
    hsCode: '2905.45',
    grades: ['USP Grade', 'Industrial Grade'],
    useCase: 'Cosmetics, pharma, antifreeze, food industry.',
    image: polyurethaneLiquidImg
  },

  // 12. Specialty Chemicals
  {
    id: 'sc-1',
    name: 'Glacial Acetic Acid',
    category: 'Specialty Chemicals',
    hsCode: '2915.21',
    grades: ['Industrial Grade'],
    useCase: 'Vinyl acetate monomer, adhesives.',
    image: chemicalSolventsImg
  },
  {
    id: 'sc-2',
    name: 'Citric Acid',
    category: 'Specialty Chemicals',
    hsCode: '2918.14',
    grades: ['Anhydrous', 'Monohydrate'],
    useCase: 'Food additive, cleaning agent.',
    image: ptaPowderImg
  },
  {
    id: 'sc-3',
    name: 'Formic Acid',
    category: 'Specialty Chemicals',
    hsCode: '2915.11',
    grades: ['85%', '90%', '94%'],
    useCase: 'Leather, textiles, rubber industry.',
    image: chemicalSolventsImg
  },
  {
    id: 'sc-4',
    name: 'Petroleum Resin',
    category: 'Specialty Chemicals',
    hsCode: '3911.1',
    grades: ['Industrial Grade'],
    useCase: 'Adhesives, coatings, rubber compounding, road marking paints.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'sc-5',
    name: 'Phenolic Resin (Specialty)',
    category: 'Specialty Chemicals',
    hsCode: '3909.4',
    grades: ['Industrial Grade'],
    useCase: 'Molding compounds, coatings, adhesives, and laminates.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'sc-6',
    name: 'Wax (Paraffin/Microcrystalline etc.)',
    category: 'Specialty Chemicals',
    hsCode: '2712.9',
    grades: ['Industrial Grade', 'General Grade'],
    useCase: 'Used in candles, rubber processing, coatings, polishes.',
    image: pvcPowderImg
  },
  {
    id: 'sc-7',
    name: 'Coconut Oil',
    category: 'Specialty Chemicals',
    hsCode: '1513.11',
    grades: ['Crude', 'Refined'],
    useCase: 'Food, cosmetics, surfactants, lubricants.',
    image: polyurethaneLiquidImg
  },
  {
    id: 'sc-8',
    name: 'Benzoic Acid',
    category: 'Specialty Chemicals',
    hsCode: '2916.31',
    grades: ['Industrial Grade'],
    useCase: 'Food preservative, plasticizers.',
    image: ptaPowderImg
  },
  {
    id: 'sc-9',
    name: 'Monoethylene Glycol (MEG)',
    category: 'Specialty Chemicals',
    hsCode: '2905.31',
    grades: ['Industrial Grade'],
    useCase: 'Antifreeze, PET resin production.',
    image: chemicalSolventsImg
  },
  {
    id: 'sc-10',
    name: 'Diethylene Glycol (DEG)',
    category: 'Specialty Chemicals',
    hsCode: '2909.41',
    grades: ['Industrial Grade'],
    useCase: 'Polyurethane, unsaturated polyester resins.',
    image: plasticizerLiquidImg
  },
  {
    id: 'sc-11',
    name: 'Glycerin (Industrial/USP Grade)',
    category: 'Specialty Chemicals',
    hsCode: '2905.45',
    grades: ['99.7% USP', 'Technical Grade'],
    useCase: 'Cosmetics, pharmaceuticals, antifreeze.',
    image: polyurethaneLiquidImg
  },

  // 13. Anhydrides & Oxides
  {
    id: 'ao-1',
    name: 'Phthalic Anhydride',
    category: 'Anhydrides & Oxides',
    hsCode: '2917.35',
    grades: ['Industrial Grade'],
    useCase: 'Plasticizers, alkyd resins, dyes.',
    image: ptaPowderImg
  },
  {
    id: 'ao-2',
    name: 'Maleic Anhydride',
    category: 'Anhydrides & Oxides',
    hsCode: '2917.14',
    grades: ['Industrial Grade'],
    useCase: 'Unsaturated polyester resins, coatings.',
    image: ptaPowderImg
  },
  {
    id: 'ao-3',
    name: 'Zinc Oxide (Active/Indirect)',
    category: 'Anhydrides & Oxides',
    hsCode: '2817',
    grades: ['Active Grade', 'Indirect Grade'],
    useCase: 'Rubber vulcanization, ceramics, coatings.',
    image: metalOxidesImg
  },
  {
    id: 'ao-4',
    name: 'Magnesium Oxide',
    category: 'Anhydrides & Oxides',
    hsCode: '2519.9',
    grades: ['Light Grade', 'Heavy Grade'],
    useCase: 'Refractory material, rubber production.',
    image: metalOxidesImg
  },
  {
    id: 'ao-5',
    name: 'Titanium Dioxide',
    category: 'Anhydrides & Oxides',
    hsCode: '2823',
    grades: ['Rutile Grade', 'Anatase Grade'],
    useCase: 'Paints, coatings, plastics (including PVC), rubber, and EVA whitening agent.',
    image: metalOxidesImg
  },
  {
    id: 'ao-6',
    name: 'Calcium Oxide (Quicklime)',
    category: 'Anhydrides & Oxides',
    hsCode: '2522.1',
    grades: ['Industrial Grade'],
    useCase: 'Filler in rubber, plastics; desiccant; pH control in PVC processing.',
    image: pvcPowderImg
  },
  {
    id: 'ao-7',
    name: 'Silicon Dioxide (Silica)',
    category: 'Anhydrides & Oxides',
    hsCode: '2811.22',
    grades: ['Precipitated', 'Fumed', 'Crystalline'],
    useCase: 'Reinforcement in rubber, EVA foaming, and as a matting agent in paints.',
    image: mineralFillersImg
  },
  {
    id: 'ao-8',
    name: 'Aluminum Oxide',
    category: 'Anhydrides & Oxides',
    hsCode: '2818.2',
    grades: ['Technical Grade'],
    useCase: 'Filler in plastics, abrasives, ceramics.',
    image: metalOxidesImg
  },
  {
    id: 'ao-9',
    name: 'Boric Anhydride (B2O3)',
    category: 'Anhydrides & Oxides',
    hsCode: '2810',
    grades: ['Industrial Grade'],
    useCase: 'Glass, ceramics, and additives for heat resistance in plastics/rubber.',
    image: mineralFillersImg
  },
  {
    id: 'ao-10',
    name: 'Antimony Trioxide',
    category: 'Anhydrides & Oxides',
    hsCode: '2825.8',
    grades: ['Flame Retardant Grade'],
    useCase: 'Flame retardant in PVC, rubber, and plastics.',
    image: metalOxidesImg
  }
];
