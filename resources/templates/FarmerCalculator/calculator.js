/* ============================================
   GROWTECH COLLECTIVE - FARMER'S CALCULATOR JS
   Based on GrainSA and DAFF data
   ============================================ */

// Comprehensive crop database with South African agricultural data
const cropDatabase = {
    // High-Value Crops
    macadamia: {
        name: "Macadamia Nuts",
        yieldPerHa: { min: 3, max: 5, unit: "tons" },
        pricePerKg: { min: 100, max: 150 },
        waterNeed: "800-1200mm/year",
        machineryCostPerHa: 30000,
        labourCostPerHa: 25000,
        otherCostsPerHa: 45000,
        bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal"],
        climate: "Subtropical, frost-free",
        growingPeriod: "6-7 years to maturity, then perennial harvest"
    },
    avocado: {
        name: "Avocados",
        yieldPerHa: { min: 10, max: 15, unit: "tons" },
        pricePerKg: { min: 20, max: 30 },
        waterNeed: "800-1000mm/year",
        machineryCostPerHa: 20000,
        labourCostPerHa: 30000,
        otherCostsPerHa: 30000,
        bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal", "Western Cape"],
        climate: "Warm subtropical, mild winters",
        growingPeriod: "3-4 years to first harvest, year-round production"
    },
    blueberries: {
        name: "Blueberries",
        yieldPerHa: { min: 8, max: 12, unit: "tons" },
        pricePerKg: { min: 40, max: 60 },
        waterNeed: "600-800mm/year",
        machineryCostPerHa: 35000,
        labourCostPerHa: 40000,
        otherCostsPerHa: 25000,
        bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo"],
        climate: "Cool to moderate, acidic soil required",
        growingPeriod: "2-3 years to full production, seasonal harvest"
    },
    // Citrus
    oranges: {
        name: "Oranges",
        yieldPerHa: { min: 30, max: 45, unit: "tons" },
        pricePerKg: { min: 8, max: 12 },
        waterNeed: "900-1200mm/year",
        machineryCostPerHa: 18000,
        labourCostPerHa: 22000,
        otherCostsPerHa: 20000,
        bestProvinces: ["Eastern Cape", "Western Cape", "Limpopo", "Mpumalanga"],
        climate: "Mediterranean to subtropical",
        growingPeriod: "3-4 years to bearing, harvest May-October"
    },
    lemons: {
        name: "Lemons",
        yieldPerHa: { min: 25, max: 40, unit: "tons" },
        pricePerKg: { min: 10, max: 15 },
        waterNeed: "800-1100mm/year",
        machineryCostPerHa: 18000,
        labourCostPerHa: 22000,
        otherCostsPerHa: 20000,
        bestProvinces: ["Western Cape", "Eastern Cape", "Limpopo"],
        climate: "Mediterranean, frost-sensitive",
        growingPeriod: "3 years to bearing, year-round production"
    },
    grapefruit: {
        name: "Grapefruit",
        yieldPerHa: { min: 28, max: 42, unit: "tons" },
        pricePerKg: { min: 7, max: 11 },
        waterNeed: "900-1200mm/year",
        machineryCostPerHa: 18000,
        labourCostPerHa: 22000,
        otherCostsPerHa: 20000,
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        climate: "Warm subtropical",
        growingPeriod: "3-4 years to bearing, harvest May-September"
    },
    // Grapes
    table_grapes: {
        name: "Table Grapes",
        yieldPerHa: { min: 20, max: 30, unit: "tons" },
        pricePerKg: { min: 15, max: 25 },
        waterNeed: "500-700mm/year",
        machineryCostPerHa: 25000,
        labourCostPerHa: 35000,
        otherCostsPerHa: 20000,
        bestProvinces: ["Western Cape", "Northern Cape", "Limpopo"],
        climate: "Hot, dry summers; cool winters",
        growingPeriod: "2-3 years to full production, harvest December-April"
    },
    wine_grapes: {
        name: "Wine Grapes",
        yieldPerHa: { min: 8, max: 15, unit: "tons" },
        pricePerKg: { min: 5, max: 10 },
        waterNeed: "500-700mm/year",
        machineryCostPerHa: 22000,
        labourCostPerHa: 28000,
        otherCostsPerHa: 18000,
        bestProvinces: ["Western Cape", "Northern Cape"],
        climate: "Mediterranean, well-drained soil",
        growingPeriod: "2-3 years to production, harvest February-April"
    },
    // Field Crops
    maize: {
        name: "Maize",
        yieldPerHa: { min: 2.5, max: 4.5, unit: "tons" },
        pricePerKg: { min: 3, max: 4.5 },
        waterNeed: "450-650mm/year",
        machineryCostPerHa: 8000,
        labourCostPerHa: 3000,
        otherCostsPerHa: 7000,
        bestProvinces: ["Free State", "North West", "Mpumalanga", "KwaZulu-Natal"],
        climate: "Summer rainfall, warm temperatures",
        growingPeriod: "4-5 months, plant October-December"
    },
    soybeans: {
        name: "Soybeans",
        yieldPerHa: { min: 2.0, max: 3.4, unit: "tons" },
        pricePerKg: { min: 7, max: 9.5 },
        waterNeed: "450-700mm/year",
        machineryCostPerHa: 7000,
        labourCostPerHa: 3500,
        otherCostsPerHa: 6500,
        bestProvinces: ["Mpumalanga", "Free State", "KwaZulu-Natal"],
        climate: "Warm, summer rainfall",
        growingPeriod: "3-4 months, plant November-December"
    },
    sunflower: {
        name: "Sunflower",
        yieldPerHa: { min: 1.2, max: 2.0, unit: "tons" },
        pricePerKg: { min: 6, max: 8 },
        waterNeed: "400-600mm/year",
        machineryCostPerHa: 6000,
        labourCostPerHa: 2500,
        otherCostsPerHa: 5500,
        bestProvinces: ["Free State", "North West", "Northern Cape"],
        climate: "Drought-tolerant, summer rainfall",
        growingPeriod: "3-4 months, plant October-December"
    },
    wheat: {
        name: "Wheat",
        yieldPerHa: { min: 2.5, max: 4.0, unit: "tons" },
        pricePerKg: { min: 4, max: 5.5 },
        waterNeed: "450-650mm/year",
        machineryCostPerHa: 7500,
        labourCostPerHa: 3000,
        otherCostsPerHa: 6500,
        bestProvinces: ["Western Cape", "Free State", "Northern Cape"],
        climate: "Winter rainfall or irrigated",
        growingPeriod: "4-5 months, plant May-July"
    },
    sorghum: {
        name: "Sorghum",
        yieldPerHa: { min: 2.0, max: 3.5, unit: "tons" },
        pricePerKg: { min: 3.5, max: 5 },
        waterNeed: "400-600mm/year",
        machineryCostPerHa: 6500,
        labourCostPerHa: 2800,
        otherCostsPerHa: 5500,
        bestProvinces: ["Free State", "Limpopo", "North West"],
        climate: "Drought-tolerant, warm season",
        growingPeriod: "3-4 months, plant November-December"
    },
    groundnuts: {
        name: "Groundnuts",
        yieldPerHa: { min: 1.5, max: 2.5, unit: "tons" },
        pricePerKg: { min: 10, max: 15 },
        waterNeed: "500-700mm/year",
        machineryCostPerHa: 7000,
        labourCostPerHa: 4000,
        otherCostsPerHa: 6000,
        bestProvinces: ["Limpopo", "North West", "Northern Cape"],
        climate: "Warm, sandy soil",
        growingPeriod: "4-5 months, plant October-November"
    },
    // Vegetables
    tomatoes: {
        name: "Tomatoes",
        yieldPerHa: { min: 40, max: 70, unit: "tons" },
        pricePerKg: { min: 8, max: 15 },
        waterNeed: "600-800mm/year",
        machineryCostPerHa: 15000,
        labourCostPerHa: 35000,
        otherCostsPerHa: 20000,
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        climate: "Warm, frost-free",
        growingPeriod: "3-4 months, year-round planting possible"
    },
    potatoes: {
        name: "Potatoes",
        yieldPerHa: { min: 30, max: 50, unit: "tons" },
        pricePerKg: { min: 4, max: 7 },
        waterNeed: "500-700mm/year",
        machineryCostPerHa: 12000,
        labourCostPerHa: 20000,
        otherCostsPerHa: 18000,
        bestProvinces: ["Free State", "Western Cape", "Limpopo"],
        climate: "Cool to moderate",
        growingPeriod: "3-4 months, multiple plantings per year"
    },
    onions: {
        name: "Onions",
        yieldPerHa: { min: 35, max: 60, unit: "tons" },
        pricePerKg: { min: 5, max: 9 },
        waterNeed: "400-600mm/year",
        machineryCostPerHa: 10000,
        labourCostPerHa: 25000,
        otherCostsPerHa: 15000,
        bestProvinces: ["Western Cape", "Free State", "Limpopo"],
        climate: "Cool to warm, well-drained",
        growingPeriod: "4-5 months, plant March-May"
    },
    cabbage: {
        name: "Cabbage",
        yieldPerHa: { min: 30, max: 55, unit: "tons" },
        pricePerKg: { min: 4, max: 7 },
        waterNeed: "500-700mm/year",
        machineryCostPerHa: 8000,
        labourCostPerHa: 22000,
        otherCostsPerHa: 12000,
        bestProvinces: ["Western Cape", "KwaZulu-Natal", "Gauteng"],
        climate: "Cool to moderate",
        growingPeriod: "3-4 months, year-round production"
    },
    carrots: {
        name: "Carrots",
        yieldPerHa: { min: 35, max: 60, unit: "tons" },
        pricePerKg: { min: 5, max: 8 },
        waterNeed: "450-650mm/year",
        machineryCostPerHa: 9000,
        labourCostPerHa: 24000,
        otherCostsPerHa: 13000,
        bestProvinces: ["Western Cape", "Limpopo", "Free State"],
        climate: "Cool to moderate, sandy soil",
        growingPeriod: "3-4 months, year-round planting"
    },
    lettuce: {
        name: "Lettuce",
        yieldPerHa: { min: 20, max: 35, unit: "tons" },
        pricePerKg: { min: 8, max: 14 },
        waterNeed: "350-500mm/year",
        machineryCostPerHa: 7000,
        labourCostPerHa: 28000,
        otherCostsPerHa: 10000,
        bestProvinces: ["Western Cape", "Gauteng", "KwaZulu-Natal"],
        climate: "Cool, short growing season",
        growingPeriod: "2-3 months, year-round production"
    },
    peppers: {
        name: "Peppers",
        yieldPerHa: { min: 25, max: 45, unit: "tons" },
        pricePerKg: { min: 10, max: 18 },
        waterNeed: "600-800mm/year",
        machineryCostPerHa: 14000,
        labourCostPerHa: 32000,
        otherCostsPerHa: 18000,
        bestProvinces: ["Limpopo", "Mpumalanga", "Western Cape"],
        climate: "Warm, frost-free",
        growingPeriod: "3-5 months, plant August-November"
    },
    // Deciduous Fruits
    apples: {
        name: "Apples",
        yieldPerHa: { min: 30, max: 50, unit: "tons" },
        pricePerKg: { min: 8, max: 14 },
        waterNeed: "700-1000mm/year",
        machineryCostPerHa: 22000,
        labourCostPerHa: 28000,
        otherCostsPerHa: 20000,
        bestProvinces: ["Western Cape", "Eastern Cape"],
        climate: "Cold winters, dry summers",
        growingPeriod: "3-4 years to bearing, harvest February-May"
    },
    pears: {
        name: "Pears",
        yieldPerHa: { min: 28, max: 45, unit: "tons" },
        pricePerKg: { min: 7, max: 12 },
        waterNeed: "700-1000mm/year",
        machineryCostPerHa: 22000,
        labourCostPerHa: 28000,
        otherCostsPerHa: 20000,
        bestProvinces: ["Western Cape", "Eastern Cape"],
        climate: "Cold winters required",
        growingPeriod: "3-4 years to bearing, harvest January-April"
    },
    peaches: {
        name: "Peaches",
        yieldPerHa: { min: 20, max: 35, unit: "tons" },
        pricePerKg: { min: 8, max: 14 },
        waterNeed: "700-900mm/year",
        machineryCostPerHa: 20000,
        labourCostPerHa: 26000,
        otherCostsPerHa: 18000,
        bestProvinces: ["Western Cape", "Eastern Cape", "Free State"],
        climate: "Cold winters, warm summers",
        growingPeriod: "2-3 years to bearing, harvest November-February"
    },
    plums: {
        name: "Plums",
        yieldPerHa: { min: 18, max: 32, unit: "tons" },
        pricePerKg: { min: 7, max: 12 },
        waterNeed: "650-900mm/year",
        machineryCostPerHa: 20000,
        labourCostPerHa: 26000,
        otherCostsPerHa: 18000,
        bestProvinces: ["Western Cape", "Eastern Cape"],
        climate: "Cold winters required",
        growingPeriod: "2-3 years to bearing, harvest December-March"
    },
    // Tropical Fruits
    mangoes: {
        name: "Mangoes",
        yieldPerHa: { min: 12, max: 20, unit: "tons" },
        pricePerKg: { min: 12, max: 20 },
        waterNeed: "800-1200mm/year",
        machineryCostPerHa: 18000,
        labourCostPerHa: 24000,
        otherCostsPerHa: 16000,
        bestProvinces: ["Limpopo", "Mpumalanga", "KwaZulu-Natal"],
        climate: "Tropical to subtropical",
        growingPeriod: "3-5 years to bearing, harvest November-February"
    },
    bananas: {
        name: "Bananas",
        yieldPerHa: { min: 30, max: 50, unit: "tons" },
        pricePerKg: { min: 6, max: 10 },
        waterNeed: "1200-2000mm/year",
        machineryCostPerHa: 20000,
        labourCostPerHa: 30000,
        otherCostsPerHa: 20000,
        bestProvinces: ["KwaZulu-Natal", "Mpumalanga", "Limpopo"],
        climate: "Tropical, frost-free, high rainfall",
        growingPeriod: "9-12 months to first harvest, continuous production"
    },
    pineapples: {
        name: "Pineapples",
        yieldPerHa: { min: 40, max: 65, unit: "tons" },
        pricePerKg: { min: 5, max: 9 },
        waterNeed: "1000-1500mm/year",
        machineryCostPerHa: 16000,
        labourCostPerHa: 28000,
        otherCostsPerHa: 16000,
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
        
        // Calculate basic values
        const avgYield = (cropData.yieldPerHa.min + cropData.yieldPerHa.max) / 2;
        const totalYield = avgYield * hectares;
        const avgPrice = (cropData.pricePerKg.min + cropData.pricePerKg.max) / 2;
        const revenue = totalYield * 1000 * avgPrice; // Convert tons to kg
        
        const machineryCost = cropData.machineryCostPerHa * hectares;
        const labourCost = cropData.labourCostPerHa * hectares;
        const otherCosts = cropData.otherCostsPerHa * hectares;
        const totalCosts = machineryCost + labourCost + otherCosts;
        
        const profit = revenue - totalCosts;
        const profitPerHa = profit / hectares;
        
        // Display results
        displayResults({
            cropName: cropData.name,
            totalYield,
            yieldUnit: cropData.yieldPerHa.unit,
            yieldPerHa: avgYield,
            yieldRange: `${cropData.yieldPerHa.min}-${cropData.yieldPerHa.max}`,
            revenue,
            avgPrice,
            priceRange: `R${cropData.pricePerKg.min}-${cropData.pricePerKg.max}`,
            machineryCost,
            machineryCostPerHa: cropData.machineryCostPerHa,
            labourCost,
            labourCostPerHa: cropData.labourCostPerHa,
            otherCosts,
            otherCostsPerHa: cropData.otherCostsPerHa,
            totalCosts,
            profit,
            profitPerHa,
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
        `${data.totalYield.toFixed(2)} ${data.yieldUnit}`;
    document.getElementById('yieldDetail').textContent = 
        `Average: ${data.yieldPerHa.toFixed(2)} ${data.yieldUnit}/ha`;
    
    // Revenue
    document.getElementById('revenueResult').textContent = 
        `R${data.revenue.toLocaleString()}`;
    document.getElementById('revenueDetail').textContent = 
        `Based on avg. market price: R${data.avgPrice.toFixed(2)}/kg`;
    
    // Costs
    document.getElementById('costResult').textContent = 
        `R${data.totalCosts.toLocaleString()}`;
    document.getElementById('costBreakdown').innerHTML = `
        • Machinery: R${data.machineryCost.toLocaleString()}<br>
        • Labour: R${data.labourCost.toLocaleString()}<br>
        • Other Inputs: R${data.otherCosts.toLocaleString()}
    `;
    
    // Profit
    const profitColor = data.profit >= 0 ? '#2f855a' : '#e53e3e';
    document.getElementById('profitResult').textContent = 
        `R${data.profit.toLocaleString()}`;
    document.getElementById('profitResult').style.color = profitColor;
    document.getElementById('profitDetail').textContent = 
        `R${data.profitPerHa.toLocaleString()} per hectare`;
    
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
            <li><strong>Yield Estimate:</strong> We used an average yield of ${data.yieldPerHa.toFixed(2)} ${data.yieldUnit}/ha (industry range: ${data.yieldRange} ${data.yieldUnit}/ha) multiplied by your farm size of ${data.hectares} ha.</li>
            <li><strong>Market Price:</strong> Based on current market data showing ${data.priceRange}/kg for ${data.cropName}. We used the average: R${data.avgPrice.toFixed(2)}/kg.</li>
            <li><strong>Machinery Costs:</strong> We applied a flat rate of R${data.machineryCostPerHa.toLocaleString()}/ha for ${data.cropName}, covering tractors, implements, fuel, and maintenance.</li>
            <li><strong>Labour Costs:</strong> We used R${data.labourCostPerHa.toLocaleString()}/ha for ${data.cropName}, including planting, weeding, harvesting, and general farm labour.</li>
            <li><strong>Other Input Costs:</strong> This includes R${data.otherCostsPerHa.toLocaleString()}/ha for fertilizers, pesticides, irrigation, seeds/seedlings, and packaging materials.</li>
        </ul>
        <p style="margin-top: 1rem;"><em>Note: These are industry averages based on GrainSA and DAFF data. Actual costs and yields may vary based on your specific location, soil quality, management practices, and weather conditions.</em></p>
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

   