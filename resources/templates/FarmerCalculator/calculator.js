/* ============================================
   GROWTECH COLLECTIVE - FARMER'S CALCULATOR JS
   Based on GrainSA and DAFF data
   Updated with SAFEX prices (November 17, 2025)
   ============================================ */

// Comprehensive crop database with South African agricultural data
const cropDatabase = {
    // High-Value Crops
    macadamia: {
        name: "Macadamia Nuts",
        yieldPerHa: { min: 3, max: 5, unit: "tons" },
        pricePerTon: { min: 100000, max: 150000 },
        waterNeed: "800-1200mm/year",
        productionCostPerHa: 80000, // Seedlings, fertilizer, diesel, labour, irrigation
        bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal"],
        climate: "Subtropical, frost-free",
        growingPeriod: "6-7 years to maturity, then perennial harvest"
    },
    avocado: {
        name: "Avocados",
        yieldPerHa: { min: 10, max: 15, unit: "tons" },
        pricePerTon: { min: 20000, max: 30000 },
        waterNeed: "800-1000mm/year",
        productionCostPerHa: 65000, // Seedlings, fertilizer, diesel, labour, irrigation
        bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal", "Western Cape"],
        climate: "Warm subtropical, mild winters",
        growingPeriod: "3-4 years to first harvest, year-round production"
    },
    blueberries: {
        name: "Blueberries",
        yieldPerHa: { min: 8, max: 12, unit: "tons" },
        pricePerTon: { min: 40000, max: 60000 },
        waterNeed: "600-800mm/year",
        productionCostPerHa: 85000, // Seedlings, fertilizer, diesel, labour, netting
        bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo"],
        climate: "Cool to moderate, acidic soil required",
        growingPeriod: "2-3 years to full production, seasonal harvest"
    },
    // Citrus
    oranges: {
        name: "Oranges",
        yieldPerHa: { min: 30, max: 45, unit: "tons" },
        pricePerTon: { min: 8000, max: 12000 },
        waterNeed: "900-1200mm/year",
        productionCostPerHa: 55000, // Seedlings, fertilizer, diesel, labour
        bestProvinces: ["Eastern Cape", "Western Cape", "Limpopo", "Mpumalanga"],
        climate: "Mediterranean to subtropical",
        growingPeriod: "3-4 years to bearing, harvest May-October"
    },
    lemons: {
        name: "Lemons",
        yieldPerHa: { min: 25, max: 40, unit: "tons" },
        pricePerTon: { min: 10000, max: 15000 },
        waterNeed: "800-1100mm/year",
        productionCostPerHa: 55000,
        bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo"],
        climate: "Mediterranean, frost-sensitive",
        growingPeriod: "3 years to bearing, year-round production"
    },
    grapefruit: {
        name: "Grapefruit",
        yieldPerHa: { min: 28, max: 42, unit: "tons" },
        pricePerTon: { min: 7000, max: 11000 },
        waterNeed: "900-1200mm/year",
        productionCostPerHa: 55000,
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        climate: "Warm subtropical",
        growingPeriod: "3-4 years to bearing, harvest May-September"
    },
    // Grapes
    table_grapes: {
        name: "Table Grapes",
        yieldPerHa: { min: 20, max: 30, unit: "tons" },
        pricePerTon: { min: 15000, max: 25000 },
        waterNeed: "500-700mm/year",
        productionCostPerHa: 70000, // Vines, trellising, fertilizer, diesel, labour
        bestProvinces: ["Western Cape", "Northern Cape", "Limpopo"],
        climate: "Hot, dry summers; cool winters",
        growingPeriod: "2-3 years to full production, harvest December-April"
    },
    wine_grapes: {
        name: "Wine Grapes",
        yieldPerHa: { min: 8, max: 15, unit: "tons" },
        pricePerTon: { min: 5000, max: 10000 },
        waterNeed: "500-700mm/year",
        productionCostPerHa: 60000,
        bestProvinces: ["Western Cape", "Northern Cape"],
        climate: "Mediterranean, well-drained soil",
        growingPeriod: "2-3 years to production, harvest February-April"
    },
    // Field Crops - SAFEX Data (November 17, 2025)
    maize: {
        name: "Maize",
        yieldPerHa: { min: 2.5, max: 4.5, unit: "tons" },
        pricePerTon: { min: 3480, max: 3575 }, // SAFEX Nov 17, 2025 (Yellow & White combined)
        waterNeed: "450-650mm/year",
        productionCostPerHa: 7700, // Seed, fertilizer, diesel, labour (GrainSA based)
        bestProvinces: ["Free State", "North West", "Mpumalanga", "KwaZulu-Natal"],
        climate: "Summer rainfall, warm temperatures",
        growingPeriod: "4-5 months, plant October-December"
    },
    soybeans: {
        name: "Soybeans",
        yieldPerHa: { min: 2.0, max: 3.4, unit: "tons" },
        pricePerTon: { min: 7270, max: 7330 }, // SAFEX Nov 17, 2025
        waterNeed: "450-700mm/year",
        productionCostPerHa: 8350, // Seed R1700, inoculant R400, fertilizer R1500, diesel R1250, labour R3500
        bestProvinces: ["Mpumalanga", "Free State", "KwaZulu-Natal"],
        climate: "Warm, summer rainfall",
        growingPeriod: "3-4 months, plant November-December"
    },
    sunflower: {
        name: "Sunflower",
        yieldPerHa: { min: 1.2, max: 2.0, unit: "tons" },
        pricePerTon: { min: 9468, max: 10151 }, // SAFEX Nov 17, 2025
        waterNeed: "400-600mm/year",
        productionCostPerHa: 5850, // Seed, fertilizer, diesel, labour (GrainSA based)
        bestProvinces: ["Free State", "North West", "Northern Cape"],
        climate: "Drought-tolerant, summer rainfall",
        growingPeriod: "3-4 months, plant October-December"
    },
    wheat: {
        name: "Wheat",
        yieldPerHa: { min: 2.5, max: 4.0, unit: "tons" },
        pricePerTon: { min: 5710, max: 5896 }, // SAFEX Nov 17, 2025
        waterNeed: "450-650mm/year",
        productionCostPerHa: 7200, // Seed, fertilizer, diesel, labour
        bestProvinces: ["Western Cape", "Free State", "Northern Cape"],
        climate: "Winter rainfall or irrigated",
        growingPeriod: "4-5 months, plant May-July"
    },
    sorghum: {
        name: "Sorghum",
        yieldPerHa: { min: 2.0, max: 3.5, unit: "tons" },
        pricePerTon: { min: 3500, max: 5000 },
        waterNeed: "400-600mm/year",
        productionCostPerHa: 6100, // Seed, fertilizer, diesel, labour
        bestProvinces: ["Free State", "Limpopo", "North West"],
        climate: "Drought-tolerant, warm season",
        growingPeriod: "3-4 months, plant November-December"
    },
    groundnuts: {
        name: "Groundnuts",
        yieldPerHa: { min: 1.5, max: 2.5, unit: "tons" },
        pricePerTon: { min: 10000, max: 15000 },
        waterNeed: "500-700mm/year",
        productionCostPerHa: 8200, // Seed, fertilizer, diesel, labour
        bestProvinces: ["Limpopo", "North West", "Northern Cape"],
        climate: "Warm, sandy soil",
        growingPeriod: "4-5 months, plant October-November"
    },
    // Vegetables
    tomatoes: {
        name: "Tomatoes",
        yieldPerHa: { min: 40, max: 70, unit: "tons" },
        pricePerTon: { min: 8000, max: 15000 },
        waterNeed: "600-800mm/year",
        productionCostPerHa: 60000, // Seedlings, fertilizer, diesel, labour, staking
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        climate: "Warm, frost-free",
        growingPeriod: "3-4 months, year-round planting possible"
    },
    potatoes: {
        name: "Potatoes",
        yieldPerHa: { min: 30, max: 50, unit: "tons" },
        pricePerTon: { min: 4000, max: 7000 },
        waterNeed: "500-700mm/year",
        productionCostPerHa: 42000, // Seed potatoes, fertilizer, diesel, labour
        bestProvinces: ["Free State", "Western Cape", "Limpopo"],
        climate: "Cool to moderate",
        growingPeriod: "3-4 months, multiple plantings per year"
    },
    onions: {
        name: "Onions",
        yieldPerHa: { min: 35, max: 60, unit: "tons" },
        pricePerTon: { min: 5000, max: 9000 },
        waterNeed: "400-600mm/year",
        productionCostPerHa: 45000, // Seedlings, fertilizer, diesel, labour
        bestProvinces: ["Western Cape", "Free State", "Limpopo"],
        climate: "Cool to warm, well-drained",
        growingPeriod: "4-5 months, plant March-May"
    },
    cabbage: {
        name: "Cabbage",
        yieldPerHa: { min: 30, max: 55, unit: "tons" },
        pricePerTon: { min: 4000, max: 7000 },
        waterNeed: "500-700mm/year",
        productionCostPerHa: 38000, // Seedlings, fertilizer, diesel, labour
        bestProvinces: ["Western Cape", "KwaZulu-Natal", "Gauteng"],
        climate: "Cool to moderate",
        growingPeriod: "3-4 months, year-round production"
    },
    carrots: {
        name: "Carrots",
        yieldPerHa: { min: 35, max: 60, unit: "tons" },
        pricePerTon: { min: 5000, max: 8000 },
        waterNeed: "450-650mm/year",
        productionCostPerHa: 40000, // Seed, fertilizer, diesel, labour
        bestProvinces: ["Western Cape", "Limpopo", "Free State"],
        climate: "Cool to moderate, sandy soil",
        growingPeriod: "3-4 months, year-round planting"
    },
    lettuce: {
        name: "Lettuce",
        yieldPerHa: { min: 20, max: 35, unit: "tons" },
        pricePerTon: { min: 8000, max: 14000 },
        waterNeed: "350-500mm/year",
        productionCostPerHa: 38000, // Seedlings, fertilizer, diesel, labour
        bestProvinces: ["Western Cape", "Gauteng", "KwaZulu-Natal"],
        climate: "Cool, short growing season",
        growingPeriod: "2-3 months, year-round production"
    },
    peppers: {
        name: "Peppers",
        yieldPerHa: { min: 25, max: 45, unit: "tons" },
        pricePerTon: { min: 10000, max: 18000 },
        waterNeed: "600-800mm/year",
        productionCostPerHa: 58000, // Seedlings, fertilizer, diesel, labour, staking
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        climate: "Warm, frost-free",
        growingPeriod: "3-5 months, plant August-November"
    },
    // Deciduous Fruits
    apples: {
        name: "Apples",
        yieldPerHa: { min: 30, max: 50, unit: "tons" },
        pricePerTon: { min: 8000, max: 14000 },
        waterNeed: "700-1000mm/year",
        productionCostPerHa: 62000, // Seedlings, fertilizer, diesel, labour
        bestProvinces: ["Western Cape", "Eastern Cape"],
        climate: "Cold winters, dry summers",
        growingPeriod: "3-4 years to bearing, harvest February-May"
    },
    pears: {
        name: "Pears",
        yieldPerHa: { min: 28, max: 45, unit: "tons" },
        pricePerTon: { min: 7000, max: 12000 },
        waterNeed: "700-1000mm/year",
        productionCostPerHa: 62000,
        bestProvinces: ["Western Cape", "Eastern Cape"],
        climate: "Cold winters required",
        growingPeriod: "3-4 years to bearing, harvest January-April"
    },
    peaches: {
        name: "Peaches",
        yieldPerHa: { min: 20, max: 35, unit: "tons" },
        pricePerTon: { min: 8000, max: 14000 },
        waterNeed: "700-900mm/year",
        productionCostPerHa: 56000,
        bestProvinces: ["Western Cape", "Eastern Cape", "Free State"],
        climate: "Cold winters, warm summers",
        growingPeriod: "2-3 years to bearing, harvest November-February"
    },
    plums: {
        name: "Plums",
        yieldPerHa: { min: 18, max: 32, unit: "tons" },
        pricePerTon: { min: 7000, max: 12000 },
        waterNeed: "650-900mm/year",
        productionCostPerHa: 56000,
        bestProvinces: ["Western Cape", "Eastern Cape"],
        climate: "Cold winters required",
        growingPeriod: "2-3 years to bearing, harvest December-March"
    },
    // Tropical Fruits
    mangoes: {
        name: "Mangoes",
        yieldPerHa: { min: 12, max: 20, unit: "tons" },
        pricePerTon: { min: 12000, max: 20000 },
        waterNeed: "800-1200mm/year",
        productionCostPerHa: 52000,
        bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal"],
        climate: "Tropical to subtropical",
        growingPeriod: "3-5 years to bearing, harvest November-February"
    },
    bananas: {
        name: "Bananas",
        yieldPerHa: { min: 30, max: 50, unit: "tons" },
        pricePerTon: { min: 6000, max: 10000 },
        waterNeed: "1200-2000mm/year",
        productionCostPerHa: 62000,
        bestProvinces: ["KwaZulu-Natal", "Mpumalanga", "Limpopo"],
        climate: "Tropical, frost-free, high rainfall",
        growingPeriod: "9-12 months to first harvest, continuous production"
    },
    pineapples: {
        name: "Pineapples",
        yieldPerHa: { min: 40, max: 65, unit: "tons" },
        pricePerTon: { min: 5000, max: 9000 },
        waterNeed: "1000-1500mm/year",
        productionCostPerHa: 52000,
        bestProvinces: ["Eastern Cape", "KwaZulu-Natal"],
        climate: "Warm coastal, acidic soil",
        growingPeriod: "18-24 months to harvest"
    }
};

// DOM Elements
const calculatorForm = document.getElementById('calculatorForm');
const loadingState = document.getElementById('loadingState');
const resultsSection = document.getElementById('resultsSection');
const recalculateBtn = document.getElementById('recalculateBtn');

// Event Listeners
calculatorForm.addEventListener('submit', handleCalculation);
recalculateBtn.addEventListener('click', resetCalculator);

// Main calculation function
async function handleCalculation(e) {
    e.preventDefault();
    
    const cropType = document.getElementById('cropSelect').value;
    const hectares = parseFloat(document.getElementById('hectares').value);
    
    if (!cropType || !hectares) {
        alert('Please select a crop and enter farm size');
        return;
    }
    
    // Show loading state
    calculatorForm.style.display = 'none';
    loadingState.style.display = 'block';
    resultsSection.style.display = 'none';
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
        // Get crop data
        const cropData = cropDatabase[cropType];
        
        // Calculate yield range
        const minTotalYield = cropData.yieldPerHa.min * hectares;
        const maxTotalYield = cropData.yieldPerHa.max * hectares;
        
        // Calculate revenue range (yield in tons × price per ton)
        const minRevenue = minTotalYield * cropData.pricePerTon.min;
        const maxRevenue = maxTotalYield * cropData.pricePerTon.max;
        
        // Calculate total costs
        const totalCosts = cropData.productionCostPerHa * hectares;
        
        // Calculate profit range
        const minProfit = minRevenue - totalCosts;
        const maxProfit = maxRevenue - totalCosts;
        
        // Display results
        displayResults({
            cropName: cropData.name,
            minTotalYield,
            maxTotalYield,
            yieldUnit: cropData.yieldPerHa.unit,
            yieldPerHaMin: cropData.yieldPerHa.min,
            yieldPerHaMax: cropData.yieldPerHa.max,
            minRevenue,
            maxRevenue,
            pricePerTonMin: cropData.pricePerTon.min,
            pricePerTonMax: cropData.pricePerTon.max,
            totalCosts,
            productionCostPerHa: cropData.productionCostPerHa,
            minProfit,
            maxProfit,
            waterNeed: cropData.waterNeed,
            bestProvinces: cropData.bestProvinces,
            climate: cropData.climate,
            growingPeriod: cropData.growingPeriod,
            hectares
        });
        
    } catch (error) {
        console.error('Calculation error:', error);
        alert('An error occurred during calculation. Please try again.');
        resetCalculator();
    }
}

// Display results in the UI
function displayResults(data) {
    // Crop Name Display
    document.getElementById('cropNameDisplay').textContent = data.cropName;
    
    // Yield
    document.getElementById('yieldResult').textContent = 
        `${data.minTotalYield.toFixed(1)} - ${data.maxTotalYield.toFixed(1)} ${data.yieldUnit}`;
    document.getElementById('yieldDetail').textContent = 
        `Range: ${data.yieldPerHaMin} - ${data.yieldPerHaMax} ${data.yieldUnit}/ha`;
    
    // Revenue
    document.getElementById('revenueResult').textContent = 
        `R${data.minRevenue.toLocaleString()} - R${data.maxRevenue.toLocaleString()}`;
    document.getElementById('revenueDetail').textContent = 
        `Price range: R${data.pricePerTonMin.toLocaleString()} - R${data.pricePerTonMax.toLocaleString()}/ton`;
    
    // Costs
    document.getElementById('costResult').textContent = 
        `R${data.totalCosts.toLocaleString()}`;
    document.getElementById('costBreakdown').innerHTML = `
        <strong>Production Cost Breakdown:</strong><br>
        R${data.productionCostPerHa.toLocaleString()}/ha × ${data.hectares} ha<br>
        <em style="font-size: 0.9rem; color: #718096;">Includes: Seeds/seedlings, fertilizer, diesel, and labour</em>
    `;
    
    // Profit
    const profitColor = data.minProfit >= 0 ? '#2f855a' : '#e53e3e';
    document.getElementById('profitResult').textContent = 
        `R${data.minProfit.toLocaleString()} - R${data.maxProfit.toLocaleString()}`;
    document.getElementById('profitResult').style.color = profitColor;
    
    const minProfitPerHa = Math.round(data.minProfit / data.hectares);
    const maxProfitPerHa = Math.round(data.maxProfit / data.hectares);
    document.getElementById('profitDetail').textContent = 
        `R${minProfitPerHa.toLocaleString()} - R${maxProfitPerHa.toLocaleString()} per hectare`;
    
    // Water
    document.getElementById('waterResult').textContent = data.waterNeed;
    document.getElementById('waterDetail').textContent = 
        `For ${data.hectares} ha: ${calculateTotalWater(data.waterNeed, data.hectares)}`;
    
    // Growing Period
    document.getElementById('growingResult').textContent = data.growingPeriod;
    
    // Calculation Transparency
    document.getElementById('transparencyContent').innerHTML = `
        <p><strong>How We Calculated Your Results:</strong></p>
        <ul style="margin-top: 0.75rem; line-height: 1.8;">
            <li><strong>Yield Range:</strong> We used ${data.yieldPerHaMin}-${data.yieldPerHaMax} ${data.yieldUnit}/ha (industry standard for ${data.cropName}) multiplied by your farm size of ${data.hectares} ha. This gives a total yield of ${data.minTotalYield.toFixed(1)}-${data.maxTotalYield.toFixed(1)} ${data.yieldUnit}.</li>
            <li><strong>Market Price:</strong> Based on SAFEX market data (November 17, 2025), ${data.cropName} prices range from R${data.pricePerTonMin.toLocaleString()}/ton to R${data.pricePerTonMax.toLocaleString()}/ton.</li>
            <li><strong>Revenue Range:</strong> Minimum revenue (${data.minTotalYield.toFixed(1)} tons × R${data.pricePerTonMin.toLocaleString()}/ton) = R${data.minRevenue.toLocaleString()}. Maximum revenue (${data.maxTotalYield.toFixed(1)} tons × R${data.pricePerTonMax.toLocaleString()}/ton) = R${data.maxRevenue.toLocaleString()}.</li>
            <li><strong>Production Costs:</strong> We used R${data.productionCostPerHa.toLocaleString()}/ha for ${data.cropName}, covering seeds/seedlings, fertilizer, diesel for machinery, and labour costs. Total for ${data.hectares} ha = R${data.totalCosts.toLocaleString()}.</li>
            <li><strong>Profit Calculation:</strong> Revenue minus total production costs. Your potential profit ranges from R${data.minProfit.toLocaleString()} (worst case) to R${data.maxProfit.toLocaleString()} (best case).</li>
        </ul>
        <p style="margin-top: 1rem;"><em><strong>Note:</strong> Calculations based on GrainSA production budgets and SAFEX market prices (Nov 17, 2025). Production costs include direct farming inputs only (seeds, fertilizer, diesel, labour). Excluded: Insurance, marketing, transport, harvesting costs (paid post-harvest). Actual results vary by location, soil, weather, and management.</em></p>
    `;
    
    // Province
    document.getElementById('provinceResult').innerHTML = `
        <p><strong>Top provinces for ${data.cropName}:</strong></p>
        <p>${data.bestProvinces.map(p => `📍 ${p}`).join(' • ')}</p>
        <p style="margin-top: 1rem;"><strong>Climate:</strong> ${data.climate}</p>
    `;
    
    // AI Insights - Coming Soon
    document.getElementById('aiInsights').innerHTML = `
        <p style="text-align: center; padding: 2rem;">
            <strong>🚀 AI-Powered Insights Coming Soon!</strong><br><br>
            We're working on bringing you personalized farming advice powered by artificial intelligence. Soon, you'll receive:<br><br>
            • Profitability optimization tips<br>
            • Risk assessment and mitigation strategies<br>
            • Seasonal timing recommendations<br>
            • Market trend analysis<br><br>
            <em>Stay tuned for this exciting feature!</em>
        </p>
    `;
    
    // Show results
    loadingState.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Calculate total water requirements
function calculateTotalWater(waterRange, hectares) {
    const match = waterRange.match(/(\d+)-(\d+)/);
    if (match) {
        const min = parseInt(match[1]);
        const max = parseInt(match[2]);
        const avg = (min + max) / 2;
        const total = avg * hectares;
        return `approx. ${total.toLocaleString()}mm total`;
    }
    return waterRange;
}

// Reset calculator
function resetCalculator() {
    calculatorForm.reset();
    calculatorForm.style.display = 'block';
    loadingState.style.display = 'none';
    resultsSection.style.display = 'none';
    
    // Scroll to top of form
    calculatorForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}