/* ============================================
   GROWTECH COLLECTIVE - FARMER'S CALCULATOR JS
   Upgraded: finished database + advanced calculations
   ============================================ */

/* ---------------------------
   Configuration (tweakable)
   --------------------------- */
const GLOBALS = {
  labourRatePerHour: 40,    // R/hour (used to infer labour hours from labourCostPerHa)
  waterCostPerML: 80,       // R per MegaLiter (1 ML = 1,000,000 L)
  mmToLitersPerHa: 10000    // 1 mm over 1 ha => 10,000 liters
};

/* ---------------------------
   Comprehensive crop database
   (your original dataset — unchanged fields kept)
   I've kept entries as you provided. Add/remove crops here.
   --------------------------- */
const cropDatabase = {
  macadamia: {
    name: "Macadamia Nuts",
    yieldPerHa: { min: 3, max: 5, unit: "tons" },
    pricePerKg: { min: 100, max: 150 },
    waterNeed: "800-1200mm/year",
    machineryCostPerHa: 30000,
    machineryNote: "tractors, harvesters, dehuskers, and irrigation equipment",
    labourCostPerHa: 25000,
    otherCostsPerHa: 45000,
    bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal"],
    climate: "Subtropical, frost-free",
    growingPeriod: "6-7 years to maturity",
    plantingSeason: "Spring (September-November)"
  },
  avocado: {
    name: "Avocados",
    yieldPerHa: { min: 10, max: 15, unit: "tons" },
    pricePerKg: { min: 20, max: 30 },
    waterNeed: "800-1000mm/year",
    machineryCostPerHa: 20000,
    machineryNote: "tractors, sprayers, irrigation systems, and harvesting equipment",
    labourCostPerHa: 30000,
    otherCostsPerHa: 30000,
    bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal", "Western Cape"],
    climate: "Warm subtropical, mild winters",
    growingPeriod: "3-4 years to first harvest",
    plantingSeason: "Spring (August-October)"
  },
  blueberries: {
    name: "Blueberries",
    yieldPerHa: { min: 8, max: 12, unit: "tons" },
    pricePerKg: { min: 40, max: 60 },
    waterNeed: "600-800mm/year",
    machineryCostPerHa: 35000,
    machineryNote: "drip irrigation, netting systems, mechanical harvesters, and cooling facilities",
    labourCostPerHa: 40000,
    otherCostsPerHa: 25000,
    bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo"],
    climate: "Cool to moderate, acidic soil required",
    growingPeriod: "2-3 years to full production",
    plantingSeason: "Autumn-Winter (April-July)"
  },
  oranges: {
    name: "Oranges",
    yieldPerHa: { min: 30, max: 45, unit: "tons" },
    pricePerKg: { min: 8, max: 12 },
    waterNeed: "900-1200mm/year",
    machineryCostPerHa: 18000,
    machineryNote: "tractors, sprayers, pruning equipment, and irrigation systems",
    labourCostPerHa: 22000,
    otherCostsPerHa: 20000,
    bestProvinces: ["Eastern Cape", "Western Cape", "Limpopo", "Mpumalanga"],
    climate: "Mediterranean to subtropical",
    growingPeriod: "3-5 years to first harvest",
    plantingSeason: "Spring (August-September)"
  },
  lemons: {
    name: "Lemons",
    yieldPerHa: { min: 25, max: 40, unit: "tons" },
    pricePerKg: { min: 10, max: 15 },
    waterNeed: "800-1100mm/year",
    machineryCostPerHa: 18000,
    machineryNote: "tractors, sprayers, irrigation systems, and harvesting equipment",
    labourCostPerHa: 22000,
    otherCostsPerHa: 20000,
    bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo"],
    climate: "Mediterranean, frost-sensitive",
    growingPeriod: "3-5 years to production",
    plantingSeason: "Spring (August-September)"
  },
  grapefruit: {
    name: "Grapefruit",
    yieldPerHa: { min: 28, max: 42, unit: "tons" },
    pricePerKg: { min: 7, max: 11 },
    waterNeed: "900-1200mm/year",
    machineryCostPerHa: 18000,
    machineryNote: "tractors, irrigation systems, sprayers, and pruning equipment",
    labourCostPerHa: 22000,
    otherCostsPerHa: 20000,
    bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
    climate: "Warm subtropical",
    growingPeriod: "3-6 years to production",
    plantingSeason: "Spring (August-October)"
  },
  table_grapes: {
    name: "Table Grapes",
    yieldPerHa: { min: 20, max: 30, unit: "tons" },
    pricePerKg: { min: 15, max: 25 },
    waterNeed: "500-700mm/year",
    machineryCostPerHa: 25000,
    machineryNote: "trellising systems, drip irrigation, tractors, and pruning equipment",
    labourCostPerHa: 35000,
    otherCostsPerHa: 20000,
    bestProvinces: ["Western Cape", "Northern Cape", "Limpopo"],
    climate: "Hot, dry summers; cool winters",
    growingPeriod: "2-3 years to production",
    plantingSeason: "Winter (June-August)"
  },
  wine_grapes: {
    name: "Wine Grapes",
    yieldPerHa: { min: 8, max: 15, unit: "tons" },
    pricePerKg: { min: 5, max: 10 },
    waterNeed: "500-700mm/year",
    machineryCostPerHa: 22000,
    machineryNote: "trellising, irrigation, tractors, and harvesting equipment",
    labourCostPerHa: 28000,
    otherCostsPerHa: 18000,
    bestProvinces: ["Western Cape", "Northern Cape"],
    climate: "Mediterranean, well-drained soil",
    growingPeriod: "3-4 years to full production",
    plantingSeason: "Winter (June-August)"
  },
  maize: {
    name: "Maize",
    yieldPerHa: { min: 2.5, max: 4.5, unit: "tons" },
    pricePerKg: { min: 3, max: 4.5 },
    waterNeed: "450-650mm/year",
    machineryCostPerHa: 8000,
    machineryNote: "tractors, planters, combine harvesters, and grain storage",
    labourCostPerHa: 3000,
    otherCostsPerHa: 7000,
    bestProvinces: ["Free State", "North West", "Mpumalanga", "KwaZulu-Natal"],
    climate: "Summer rainfall, warm temperatures",
    growingPeriod: "4-5 months (120-150 days)",
    plantingSeason: "Spring (October-December)"
  },
  soybeans: {
    name: "Soybeans",
    yieldPerHa: { min: 2.0, max: 3.4, unit: "tons" },
    pricePerKg: { min: 7, max: 9.5 },
    waterNeed: "450-700mm/year",
    machineryCostPerHa: 7000,
    machineryNote: "tractors, planters, combine harvesters with specialized headers",
    labourCostPerHa: 3500,
    otherCostsPerHa: 6500,
    bestProvinces: ["Mpumalanga", "Free State", "KwaZulu-Natal"],
    climate: "Warm, summer rainfall",
    growingPeriod: "3-5 months (90-150 days)",
    plantingSeason: "Early Summer (November-December)"
  },
  sunflower: {
    name: "Sunflower",
    yieldPerHa: { min: 1.2, max: 2.0, unit: "tons" },
    pricePerKg: { min: 6, max: 8 },
    waterNeed: "400-600mm/year",
    machineryCostPerHa: 6000,
    machineryNote: "tractors, planters, and combine harvesters",
    labourCostPerHa: 2500,
    otherCostsPerHa: 5500,
    bestProvinces: ["Free State", "North West", "Northern Cape"],
    climate: "Drought-tolerant, summer rainfall",
    growingPeriod: "3-4 months (90-120 days)",
    plantingSeason: "Spring-Summer (October-January)"
  },
  wheat: {
    name: "Wheat",
    yieldPerHa: { min: 2.5, max: 4.0, unit: "tons" },
    pricePerKg: { min: 4, max: 5.5 },
    waterNeed: "450-650mm/year",
    machineryCostPerHa: 7500,
    machineryNote: "tractors, seeders, combine harvesters, and grain handling equipment",
    labourCostPerHa: 3000,
    otherCostsPerHa: 6500,
    bestProvinces: ["Western Cape", "Free State", "Northern Cape"],
    climate: "Winter rainfall or irrigated",
    growingPeriod: "4-5 months (120-150 days)",
    plantingSeason: "Autumn-Winter (May-July)"
  },
  sorghum: {
    name: "Sorghum",
    yieldPerHa: { min: 2.0, max: 3.5, unit: "tons" },
    pricePerKg: { min: 3.5, max: 5 },
    waterNeed: "400-600mm/year",
    machineryCostPerHa: 6500,
    machineryNote: "tractors, planters, and combine harvesters",
    labourCostPerHa: 2800,
    otherCostsPerHa: 5500,
    bestProvinces: ["Free State", "Limpopo", "North West"],
    climate: "Drought-tolerant, warm season",
    growingPeriod: "3-5 months (90-150 days)",
    plantingSeason: "Spring (October-December)"
  },
  groundnuts: {
    name: "Groundnuts",
    yieldPerHa: { min: 1.5, max: 2.5, unit: "tons" },
    pricePerKg: { min: 10, max: 15 },
    waterNeed: "500-700mm/year",
    machineryCostPerHa: 7000,
    machineryNote: "tractors, specialized planters, diggers, and threshers",
    labourCostPerHa: 4000,
    otherCostsPerHa: 6000,
    bestProvinces: ["Limpopo", "North West", "Northern Cape"],
    climate: "Warm, sandy soil",
    growingPeriod: "4-5 months (120-150 days)",
    plantingSeason: "Spring-Early Summer (October-December)"
  },
  tomatoes: {
    name: "Tomatoes",
    yieldPerHa: { min: 40, max: 70, unit: "tons" },
    pricePerKg: { min: 8, max: 15 },
    waterNeed: "600-800mm/year",
    machineryCostPerHa: 15000,
    machineryNote: "drip irrigation systems, tractors, and transplanting equipment",
    labourCostPerHa: 35000,
    otherCostsPerHa: 20000,
    bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
    climate: "Warm, frost-free",
    growingPeriod: "3-4 months (90-120 days)",
    plantingSeason: "Spring-Summer (September-January)"
  },
  potatoes: {
    name: "Potatoes",
    yieldPerHa: { min: 30, max: 50, unit: "tons" },
    pricePerKg: { min: 4, max: 7 },
    waterNeed: "500-700mm/year",
    machineryCostPerHa: 12000,
    machineryNote: "tractors, planters, irrigation equipment, and harvesters",
    labourCostPerHa: 20000,
    otherCostsPerHa: 18000,
    bestProvinces: ["Free State", "Western Cape", "Limpopo"],
    climate: "Cool to moderate",
    growingPeriod: "3-4 months (90-120 days)",
    plantingSeason: "Spring & Autumn (Aug-Oct, Feb-Apr)"
  },
  onions: {
    name: "Onions",
    yieldPerHa: { min: 35, max: 60, unit: "tons" },
    pricePerKg: { min: 5, max: 9 },
    waterNeed: "400-600mm/year",
    machineryCostPerHa: 10000,
    machineryNote: "tractors, transplanters, irrigation systems, and mechanical harvesters",
    labourCostPerHa: 25000,
    otherCostsPerHa: 15000,
    bestProvinces: ["Western Cape", "Free State", "Limpopo"],
    climate: "Cool to warm, well-drained",
    growingPeriod: "4-6 months (120-180 days)",
    plantingSeason: "Autumn-Winter (March-July)"
  },
  cabbage: {
    name: "Cabbage",
    yieldPerHa: { min: 30, max: 55, unit: "tons" },
    pricePerKg: { min: 4, max: 7 },
    waterNeed: "500-700mm/year",
    machineryCostPerHa: 8000,
    machineryNote: "tractors, transplanters, and irrigation equipment",
    labourCostPerHa: 22000,
    otherCostsPerHa: 12000,
    bestProvinces: ["Western Cape", "KwaZulu-Natal", "Gauteng"],
    climate: "Cool to moderate",
    growingPeriod: "2-4 months (60-120 days)",
    plantingSeason: "Year-round (varies by region)"
  },
  carrots: {
    name: "Carrots",
    yieldPerHa: { min: 35, max: 60, unit: "tons" },
    pricePerKg: { min: 5, max: 8 },
    waterNeed: "450-650mm/year",
    machineryCostPerHa: 9000,
    machineryNote: "tractors, precision seeders, irrigation, and mechanical harvesters",
    labourCostPerHa: 24000,
    otherCostsPerHa: 13000,
    bestProvinces: ["Western Cape", "Limpopo", "Free State"],
    climate: "Cool to moderate, sandy soil",
    growingPeriod: "2-4 months (70-120 days)",
    plantingSeason: "Spring & Autumn (Aug-Nov, Feb-Apr)"
  },
  lettuce: {
    name: "Lettuce",
    yieldPerHa: { min: 20, max: 35, unit: "tons" },
    pricePerKg: { min: 8, max: 14 },
    waterNeed: "350-500mm/year",
    machineryCostPerHa: 7000,
    machineryNote: "drip irrigation, tractors, and transplanting equipment",
    labourCostPerHa: 28000,
    otherCostsPerHa: 10000,
    bestProvinces: ["Western Cape", "Gauteng", "KwaZulu-Natal"],
    climate: "Cool, short growing season",
    growingPeriod: "2-3 months (60-90 days)",
    plantingSeason: "Autumn-Spring (March-November)"
  },
  peppers: {
    name: "Peppers (Sweet/Bell)",
    yieldPerHa: { min: 25, max: 45, unit: "tons" },
    pricePerKg: { min: 10, max: 18 },
    waterNeed: "600-800mm/year",
    machineryCostPerHa: 14000,
    machineryNote: "drip irrigation, tractors, and greenhouse equipment (if applicable)",
    labourCostPerHa: 32000,
    otherCostsPerHa: 18000,
    bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
    climate: "Warm, frost-free",
    growingPeriod: "3-5 months (90-150 days)",
    plantingSeason: "Spring-Summer (September-December)"
  },
  apples: {
    name: "Apples",
    yieldPerHa: { min: 30, max: 50, unit: "tons" },
    pricePerKg: { min: 8, max: 14 },
    waterNeed: "700-1000mm/year",
    machineryCostPerHa: 22000,
    machineryNote: "tractors, sprayers, pruning equipment, and cold storage facilities",
    labourCostPerHa: 28000,
    otherCostsPerHa: 20000,
    bestProvinces: ["Western Cape", "Eastern Cape"],
    climate: "Cold winters, dry summers",
    growingPeriod: "3-5 years to production",
    plantingSeason: "Winter (June-July)"
  },
  pears: {
    name: "Pears",
    yieldPerHa: { min: 28, max: 45, unit: "tons" },
    pricePerKg: { min: 7, max: 12 },
    waterNeed: "700-1000mm/year",
    machineryCostPerHa: 22000,
    machineryNote: "tractors, sprayers, cold storage, and pruning equipment",
    labourCostPerHa: 28000,
    otherCostsPerHa: 20000,
    bestProvinces: ["Western Cape", "Eastern Cape"],
    climate: "Cold winters required",
    growingPeriod: "3-5 years to production",
    plantingSeason: "Winter (June-July)"
  },
  peaches: {
    name: "Peaches",
    yieldPerHa: { min: 20, max: 35, unit: "tons" },
    pricePerKg: { min: 8, max: 14 },
    waterNeed: "700-900mm/year",
    machineryCostPerHa: 20000,
    machineryNote: "tractors, sprayers, pruning equipment, and cooling facilities",
    labourCostPerHa: 26000,
    otherCostsPerHa: 18000,
    bestProvinces: ["Western Cape", "Eastern Cape", "Free State"],
    climate: "Cold winters, warm summers",
    growingPeriod: "2-4 years to production",
    plantingSeason: "Winter (June-July)"
  },
  plums: {
    name: "Plums",
    yieldPerHa: { min: 18, max: 32, unit: "tons" },
    pricePerKg: { min: 7, max: 12 },
    waterNeed: "650-900mm/year",
    machineryCostPerHa: 20000,
    machineryNote: "tractors, sprayers, pruning equipment, and cold storage",
    labourCostPerHa: 26000,
    otherCostsPerHa: 18000,
    bestProvinces: ["Western Cape", "Eastern Cape"],
    climate: "Cold winters required",
    growingPeriod: "3-5 years to production",
    plantingSeason: "Winter (June-July)"
  },
  mangoes: {
    name: "Mangoes",
    yieldPerHa: { min: 12, max: 20, unit: "tons" },
    pricePerKg: { min: 12, max: 20 },
    waterNeed: "800-1200mm/year",
    machineryCostPerHa: 18000,
    machineryNote: "tractors, irrigation systems, sprayers, and pruning equipment",
    labourCostPerHa: 24000,
    otherCostsPerHa: 16000,
    bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal"],
    climate: "Tropical to subtropical",
    growingPeriod: "3-5 years to production",
    plantingSeason: "Spring (September-November)"
  },
  bananas: {
    name: "Bananas",
    yieldPerHa: { min: 30, max: 50, unit: "tons" },
    pricePerKg: { min: 6, max: 10 },
    waterNeed: "1200-2000mm/year",
    machineryCostPerHa: 20000,
    machineryNote: "irrigation systems, tractors, and cable transport systems",
    labourCostPerHa: 30000,
    otherCostsPerHa: 20000,
    bestProvinces: ["KwaZulu-Natal", "Mpumalanga", "Limpopo"],
    climate: "Tropical, frost-free, high rainfall",
    growingPeriod: "9-12 months per cycle",
    plantingSeason: "Spring-Summer (September-January)"
  },
  pineapples: {
    name: "Pineapples",
    yieldPerHa: { min: 40, max: 65, unit: "tons" },
    pricePerKg: { min: 5, max: 9 },
    waterNeed: "1000-1500mm/year",
    machineryCostPerHa: 16000,
    machineryNote: "tractors, planting equipment, and specialized harvesters",
    labourCostPerHa: 28000,
    otherCostsPerHa: 16000,
    bestProvinces: ["Eastern Cape", "KwaZulu-Natal"],
    climate: "Warm coastal, acidic soil",
    growingPeriod: "18-24 months",
    plantingSeason: "Year-round (warm regions)"
  }
};

/* ---------------------------
   Utility helpers
   --------------------------- */
function parseWaterRange(mmString) {
  const match = (mmString || '').match(/(\d+)-(\d+)/);
  if (!match) return null;
  const min = parseInt(match[1], 10);
  const max = parseInt(match[2], 10);
  return { min, max, avg: (min + max) / 2 };
}

function parseGrowingPeriod(periodString) {
  // Try to identify years or months; return approximate months
  if (!periodString) return { months: null };
  const yearsMatch = periodString.match(/(\d+)\s*-\s*(\d+)\s*years?/i) || periodString.match(/(\d+)\s*years?/i);
  if (yearsMatch) {
    const nums = yearsMatch.slice(1).filter(Boolean).map(n => parseInt(n, 10));
    const minYears = nums[0];
    const maxYears = nums[1] || nums[0];
    const avgMonths = ((minYears + maxYears) / 2) * 12;
    return { months: Math.round(avgMonths) };
  }
  const monthsMatch = periodString.match(/(\d+)\s*-\s*(\d+)\s*months?/i) || periodString.match(/(\d+)\s*months?/i);
  if (monthsMatch) {
    const nums = monthsMatch.slice(1).filter(Boolean).map(n => parseInt(n, 10));
    const min = nums[0];
    const max = nums[1] || nums[0];
    return { months: Math.round((min + max) / 2) };
  }
  return { months: null };
}

function inferSeasonalRisk(crop) {
  // Heuristic:
  // - If avg water need > 1200mm => high (drought/flood sensitive)
  // - If growingPeriod months >= 36 => medium (longer time = more risk)
  // - Else low
  const waterRange = parseWaterRange(crop.waterNeed);
  const gp = parseGrowingPeriod(crop.growingPeriod);
  if (waterRange && waterRange.avg >= 1200) return "High";
  if (gp.months && gp.months >= 36) return "Medium";
  return "Low";
}

/* ---------------------------
   Advanced calculators
   --------------------------- */
function calculateAdvancedMetrics(cropData, hectares, avgYield, avgPrice, revenue, machineryCost, labourCost, otherCosts, totalCosts) {
  // Water usage and cost
  const waterRange = parseWaterRange(cropData.waterNeed);
  let waterML = null;
  let waterCost = null;
  if (waterRange) {
    // liters per hectare = avgMm * mmToLitersPerHa
    const avgMm = waterRange.avg;
    const litersPerHa = avgMm * GLOBALS.mmToLitersPerHa;
    const totalLiters = litersPerHa * hectares;
    waterML = totalLiters / 1_000_000; // MegaLiters
    waterCost = waterML * GLOBALS.waterCostPerML;
  }

  // Labour hours (derived)
  const labourHoursPerHa = cropData.labourCostPerHa ? (cropData.labourCostPerHa / GLOBALS.labourRatePerHour) : null;
  const labourHoursTotal = labourHoursPerHa ? labourHoursPerHa * hectares : null;

  // Profit & Margin
  const profit = revenue - totalCosts;
  const profitMarginPct = revenue > 0 ? (profit / revenue) * 100 : null;

  // Break-even (hectares needed to cover totalCosts at given per-hectare revenue)
  const revenuePerHa = avgYield * 1000 * avgPrice; // avgYield in tons => *1000 = kg
  const breakEvenHectares = revenuePerHa > 0 ? (totalCosts / revenuePerHa) : null;

  // Seasonal risk heuristic
  const seasonalRisk = inferSeasonalRisk(cropData);

  return {
    waterML,
    waterCost,
    labourHoursPerHa,
    labourHoursTotal,
    profit,
    profitMarginPct,
    breakEvenHectares,
    seasonalRisk
  };
}

/* ---------------------------
   DOM Init & handlers
   --------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  const calculatorForm = document.getElementById('calculatorForm');
  const recalculateBtn = document.getElementById('recalculateBtn');

  // Populate cropSelect if it exists
  const cropSelect = document.getElementById('cropSelect');
  if (cropSelect) {
    cropSelect.innerHTML = `<option value="">-- Select Crop --</option>` +
      Object.keys(cropDatabase).map(key => `<option value="${key}">${cropDatabase[key].name}</option>`).join('');
  }

  if (calculatorForm) {
    calculatorForm.addEventListener('submit', handleCalculation);
  }

  if (recalculateBtn) {
    recalculateBtn.addEventListener('click', resetCalculator);
  }
});

/* Main calculation function */
async function handleCalculation(e) {
  e.preventDefault();

  const cropSelect = document.getElementById('cropSelect');
  const hectaresInput = document.getElementById('hectares');

  if (!cropSelect || !hectaresInput) {
    console.error('Form elements not found');
    return;
  }

  const cropType = cropSelect.value;
  const hectares = parseFloat(hectaresInput.value);

  if (!cropType || !hectares || hectares <= 0) {
    alert('Please select a crop and enter a valid farm size (greater than 0)');
    return;
  }

  const calculatorForm = document.getElementById('calculatorForm');
  const loadingState = document.getElementById('loadingState');
  const resultsSection = document.getElementById('resultsSection');

  if (!calculatorForm || !loadingState || !resultsSection) {
    console.error('Display elements not found');
    return;
  }

  // Show loading state
  calculatorForm.style.display = 'none';
  loadingState.style.display = 'block';
  resultsSection.style.display = 'none';

  // small artificial delay so the UI shows loading (optional)
  await new Promise(resolve => setTimeout(resolve, 800));

  try {
    const cropData = cropDatabase[cropType];
    if (!cropData) throw new Error('Crop data not found');

    // Basic values
    const avgYield = (cropData.yieldPerHa.min + cropData.yieldPerHa.max) / 2; // tons/ha
    const totalYield = avgYield * hectares; // tons
    const avgPrice = (cropData.pricePerKg.min + cropData.pricePerKg.max) / 2; // R/kg
    const revenue = totalYield * 1000 * avgPrice; // R (tons -> kg)

    // Costs
    const machineryCost = (cropData.machineryCostPerHa || 0) * hectares;
    const labourCost = (cropData.labourCostPerHa || 0) * hectares;
    const otherCosts = (cropData.otherCostsPerHa || 0) * hectares;
    const totalCosts = machineryCost + labourCost + otherCosts;

    // Advanced metrics
    const advanced = calculateAdvancedMetrics(cropData, hectares, avgYield, avgPrice, revenue, machineryCost, labourCost, otherCosts, totalCosts);

    // Prepare data object for UI
    const data = {
      cropName: cropData.name,
      totalYield,
      yieldUnit: cropData.yieldPerHa.unit,
      yieldPerHa: avgYield,
      yieldRange: `${cropData.yieldPerHa.min}-${cropData.yieldPerHa.max}`,
      priceRange: `R${cropData.pricePerKg.min}-${cropData.pricePerKg.max}`,
      avgPrice,
      revenue,
      machineryCost,
      machineryCostPerHa: cropData.machineryCostPerHa,
      machineryNote: cropData.machineryNote,
      labourCost,
      labourCostPerHa: cropData.labourCostPerHa,
      labourHoursPerHa: advanced.labourHoursPerHa,
      labourHoursTotal: advanced.labourHoursTotal,
      otherCosts,
      otherCostsPerHa: cropData.otherCostsPerHa,
      totalCosts,
      profit: advanced.profit,
      profitPerHa: advanced.profit / hectares,
      profitMarginPct: advanced.profitMarginPct,
      waterNeed: cropData.waterNeed,
      waterUsageML: advanced.waterML,
      waterCost: advanced.waterCost,
      bestProvinces: cropData.bestProvinces,
      climate: cropData.climate,
      growingPeriod: cropData.growingPeriod,
      plantingSeason: cropData.plantingSeason,
      hectares,
      seasonalRisk: advanced.seasonalRisk,
      breakEvenHectares: advanced.breakEvenHectares
    };

    displayResults(data);
  } catch (error) {
    console.error('Calculation error:', error);
    alert('An error occurred during calculation. Please try again.');
    resetCalculator();
  }
}

/* ---------------------------
   UI: displayResults
   Blocks (Option 3): mixed approach:
     1. Estimated Yield
     2. Revenue Potential
     3. Total Costs
     4. Projected Profit
     5. Water Requirements
     6. Growing Period
   --------------------------- */
function displayResults(data) {
  // Big crop name header
  const cropNameDisplay = document.getElementById('cropNameDisplay');
  if (cropNameDisplay) {
    cropNameDisplay.innerHTML = `<h2 style="margin:0; font-size:1.6rem; color:#1f6f3f;">${data.cropName} — ${data.hectares} ha</h2>`;
  }

  // Transparency / Calculation breakdown
  const transparencyContent = document.getElementById('transparencyContent');
  if (transparencyContent) {
    transparencyContent.innerHTML = `
      <div style="background: rgba(47,139,76,0.05); padding: 16px; border-radius: 10px;">
        <h4 style="color: #1f6f3f; margin: 0 0 8px 0;">How We Calculated This</h4>
        <p><strong>📊 Yield Estimation:</strong> Used average of <strong>${data.yieldRange} ${data.yieldUnit}/ha</strong> => <strong>${data.yieldPerHa.toFixed(2)} ${data.yieldUnit}/ha</strong>.</p>
        <p><strong>💰 Market Price:</strong> Range: <strong>${data.priceRange}/kg</strong> — used <strong>R${data.avgPrice.toFixed(2)}/kg</strong>.</p>
        <p><strong>🔧 Machinery:</strong> Applied <strong>R${data.machineryCostPerHa.toLocaleString()}/ha</strong> for this crop which includes:</p>
        <p style="margin-left:20px; color:#385f45; margin-top:-12px;">✓ ${data.machineryNote}</p>
        <p><strong>👨‍🌾 Labour:</strong> Applied <strong>R${data.labourCostPerHa?.toLocaleString() || '0'}/ha</strong>. (Estimated <strong>${data.labourHoursPerHa ? data.labourHoursPerHa.toFixed(1) : 'N/A'}</strong> hrs/ha at R${GLOBALS.labourRatePerHour}/hr)</p>
        <p><strong>🌱 Other Inputs:</strong> R${data.otherCostsPerHa?.toLocaleString() || '0'}/ha (fertiliser, pesticides, irrigation etc.).</p>
      </div>
    `;
  }

  // Block 1 - Estimated Yield
  const yieldResult = document.getElementById('yieldResult');
  const yieldDetail = document.getElementById('yieldDetail');
  if (yieldResult) yieldResult.textContent = `${data.totalYield.toFixed(2)} ${data.yieldUnit}`;
  if (yieldDetail) yieldDetail.textContent = `Average: ${data.yieldPerHa.toFixed(2)} ${data.yieldUnit}/ha`;

  // Block 2 - Revenue Potential
  const revenueResult = document.getElementById('revenueResult');
  const revenueDetail = document.getElementById('revenueDetail');
  if (revenueResult) revenueResult.textContent = `R${data.revenue.toLocaleString('en-ZA', { maximumFractionDigits: 0 })}`;
  if (revenueDetail) revenueDetail.textContent = `R${(data.revenue / data.hectares).toLocaleString('en-ZA', { maximumFractionDigits: 0 })} per hectare`;

  // Block 3 - Costs
  const costResult = document.getElementById('costResult');
  const costBreakdown = document.getElementById('costBreakdown');
  if (costResult) costResult.textContent = `R${data.totalCosts.toLocaleString('en-ZA', { maximumFractionDigits: 0 })}`;
  if (costBreakdown) {
    costBreakdown.innerHTML = `
      💰 Machinery: R${data.machineryCost.toLocaleString('en-ZA', { maximumFractionDigits: 0 })} <br>
      👨‍🌾 Labour: R${data.labourCost.toLocaleString('en-ZA', { maximumFractionDigits: 0 })} (${data.labourHoursTotal ? data.labourHoursTotal.toFixed(1) + ' hrs' : 'N/A'})<br>
      🌱 Other Inputs: R${data.otherCosts.toLocaleString('en-ZA', { maximumFractionDigits: 0 })}
    `;
  }

  // Block 4 - Profit
  const profitResult = document.getElementById('profitResult');
  const profitDetail = document.getElementById('profitDetail');
  const profitColor = data.profit >= 0 ? '#2fa85a' : '#e53e3e';
  if (profitResult) {
    profitResult.textContent = `R${data.profit.toLocaleString('en-ZA', { maximumFractionDigits: 0 })}`;
    profitResult.style.color = profitColor;
  }
  if (profitDetail) profitDetail.textContent = `R${data.profitPerHa.toLocaleString('en-ZA', { maximumFractionDigits: 0 })} /ha • Margin: ${data.profitMarginPct !== null ? data.profitMarginPct.toFixed(1) + '%' : 'N/A'}`;

  // Block 5 - Water Requirements
  const waterResult = document.getElementById('waterResult');
  const waterDetail = document.getElementById('waterDetail');
  if (waterResult) waterResult.textContent = data.waterNeed;
  if (waterDetail) {
    const usage = data.waterUsageML !== null ? `${data.waterUsageML.toFixed(2)} ML` : 'N/A';
    const cost = data.waterCost !== null ? `R${data.waterCost.toLocaleString('en-ZA', { maximumFractionDigits: 0 })}` : 'N/A';
    waterDetail.textContent = `For ${data.hectares} ha: ${usage} • Estimated water cost: ${cost}`;
  }

  // Block 6 - Growing Period
  const timeResult = document.getElementById('timeResult');
  const timeDetail = document.getElementById('timeDetail');
  if (timeResult) timeResult.textContent = data.growingPeriod;
  if (timeDetail) timeDetail.textContent = `Plant: ${data.plantingSeason} • Seasonal risk: ${data.seasonalRisk}`;

  // Province info / climate
  const provinceResult = document.getElementById('provinceResult');
  if (provinceResult) {
    provinceResult.innerHTML = `
      <p><strong>📍 Top provinces for ${data.cropName}:</strong></p>
      <p>${data.bestProvinces.map(p => `${p}`).join(' • ')}</p>
      <p style="margin-top: 1rem;"><strong>🌡️ Climate Requirements:</strong> ${data.climate}</p>
      <p style="margin-top: 0.5rem;"><strong>⚖️ Break-even hectares:</strong> ${data.breakEvenHectares ? data.breakEvenHectares.toFixed(2) + ' ha' : 'N/A'}</p>
    `;
  }

  // AI Insights (Coming Soon) - Option B
  const aiInsightsContent = document.getElementById('aiInsightsContent');
  if (aiInsightsContent) {
    aiInsightsContent.innerHTML = `
      <div style="background: rgba(99,208,127,0.08); padding: 16px; border-radius: 10px; text-align: center; border: 2px dashed #63d07f;">
        <p style="color: #1f6f3f; font-weight: 700; margin: 0 0 8px 0;">🤖 AI Insights Coming Soon</p>
        <p style="color: #385f45; margin: 0; font-size: 0.95rem;">Smart farming recommendations powered by AI will be available soon. To enable this we will call an AI service from a secure backend (we won't expose API keys client-side).</p>
      </div>
    `;
  }

  // Show results
  const calculatorForm = document.getElementById('calculatorForm');
  const loadingState = document.getElementById('loadingState');
  const resultsSection = document.getElementById('resultsSection');

  if (calculatorForm) calculatorForm.style.display = 'none';
  if (loadingState) loadingState.style.display = 'none';
  if (resultsSection) {
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* Reset calculator */
function resetCalculator() {
  const calculatorForm = document.getElementById('calculatorForm');
  const resultsSection = document.getElementById('resultsSection');
  const loadingState = document.getElementById('loadingState');

  if (calculatorForm) {
    calculatorForm.reset();
    calculatorForm.style.display = 'block';
    calculatorForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (resultsSection) resultsSection.style.display = 'none';
  if (loadingState) loadingState.style.display = 'none';
}

/* ---------------------------
   Notes & Next steps
   ---------------------------
1. AI Insights: keep the "Coming Soon" block. When ready:
   - Implement a backend endpoint (Node/Express, Flask, etc.)
   - Frontend sends calculation + context to backend
   - Backend calls Anthropic/OpenAI with secret key and returns insights

2. Tweak GLOBALS.labourRatePerHour and GLOBALS.waterCostPerML to match local costs.

3. If you want per-crop labour-hour profiles (instead of a simple derivation),
   add a `labourHoursPerHa` field in cropDatabase and the calculator will use it.

4. You can expand seasonal risk model (add historic rainfall variability, frost days, pest incidence).

If you want, I can:
- produce the matching HTML snippet (with all the required result elements), or
- convert this into a backend endpoint (Node.js) that returns JSON for the frontend.
Pick one and I’ll deliver it next. */

   