/* ============================================
   GROWTECH COLLECTIVE - APPLE GARDEN PLANNER
   Optimized for home and community gardens in SA
   ============================================ */

// Optimized apple growing data for home/community gardens
const APPLE_GROWING_DATA = {
    dwarf: {
        name: "Dwarf Apple Trees",
        initialSpacing: 2.5,
        finalSpacing: 3.0,
        waterPerTree: 20, // liters per week
        fertilizerType: "balanced",
        yieldPerTree: 15, // kg per year (realistic for dwarf)
        treeCost: 180, // R180-250 per dwarf tree
        maturityYears: 2,
        description: "Best for small home gardens. Grafted on M9 rootstock, grows 2-3m tall. Perfect for containers or limited space.",
        spacingNote: "Final spacing of 3m allows for healthy growth and easy maintenance"
    },
    semiDwarf: {
        name: "Semi-Dwarf Apple Trees",
        initialSpacing: 3.5,
        finalSpacing: 4.5,
        waterPerTree: 30,
        fertilizerType: "balanced",
        yieldPerTree: 30,
        treeCost: 150,
        maturityYears: 3,
        description: "Good balance of size and yield. Grows 3-4m tall. Ideal for community gardens.",
        spacingNote: "Final spacing of 4.5m provides adequate airflow and sunlight"
    },
    standard: {
        name: "Standard Apple Trees",
        initialSpacing: 5.0,
        finalSpacing: 6.0,
        waterPerTree: 45,
        fertilizerType: "balanced",
        yieldPerTree: 50,
        treeCost: 120,
        maturityYears: 5,
        description: "Traditional full-size trees. Best for large gardens or small orchards. Grows 5-7m tall.",
        spacingNote: "Final spacing of 6m recommended for optimal growth"
    }
};

// Fertilizer options optimized for cost
const FERTILIZER_OPTIONS = {
    compost: {
        name: "Homemade Compost",
        costPerTree: 0,
        npk: "Variable NPK",
        application: "10-15kg per tree in early spring",
        benefits: "Free, improves soil structure, slow-release nutrients",
        instructions: "Spread around base, keep 15cm from trunk"
    },
    chickenManure: {
        name: "Chicken Manure",
        costPerTree: 15,
        npk: "High Nitrogen",
        application: "2-3kg per tree (well-rotted)",
        benefits: "Low cost, high nitrogen for growth",
        instructions: "Must be aged 6 months, mix into soil in winter"
    },
    balanced: {
        name: "3:1:5 Fruit Tree Fertilizer",
        costPerTree: 35,
        npk: "3:1:5 (43) SR",
        application: "250g per tree in spring, 150g after fruit set",
        benefits: "Balanced nutrition, proven for fruit trees",
        instructions: "Broadcast around drip line, water in well"
    },
    organic: {
        name: "Organic Fruit Blend",
        costPerTree: 50,
        npk: "4:3:2 + trace elements",
        application: "300g per tree every 3 months",
        benefits: "Gentle, soil-friendly, trace minerals",
        instructions: "Work into top 5cm of soil, mulch over"
    }
};

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const planButton = document.getElementById('planGarden');
    planButton.addEventListener('click', calculateGardenPlan);
});

function calculateGardenPlan() {
    const width = parseFloat(document.getElementById('gardenWidth').value);
    const length = parseFloat(document.getElementById('gardenLength').value);
    const method = document.getElementById('growingMethod').value;

    if (!validateDimensions(width, length)) {
        alert('Please enter valid garden dimensions (minimum 2m x 2m)');
        return;
    }

    const growingData = APPLE_GROWING_DATA[method];
    
    // Calculate layout
    const treesPerRow = Math.floor(width / growingData.finalSpacing);
    const rows = Math.floor(length / growingData.finalSpacing);
    const totalTrees = treesPerRow * rows;

    if (totalTrees === 0) {
        alert(`Your garden is too small for ${growingData.name}. Try a smaller variety or increase garden size.`);
        return;
    }
    
    // Water calculations (adjusted for SA climate - summer vs winter)
    const summerWaterPerWeek = totalTrees * growingData.waterPerTree;
    const winterWaterPerWeek = Math.round(summerWaterPerWeek * 0.4); // 40% in winter
    const annualWaterLiters = (summerWaterPerWeek * 26) + (winterWaterPerWeek * 26); // 26 weeks each season
    
    // Yield calculations
    const firstYield = totalTrees * (growingData.yieldPerTree * 0.5); // 50% in first bearing year
    const fullYield = totalTrees * growingData.yieldPerTree;
    const estimatedValue = fullYield * 12; // R12/kg average for home-grown apples
    
    // Cost calculations
    const treeCost = totalTrees * growingData.treeCost;
    const fertilizerCost = calculateFertilizerCost(totalTrees);
    const setupCosts = calculateSetupCosts(totalTrees);
    const annualCosts = fertilizerCost + (annualWaterLiters * 0.015); // R0.015 per liter municipal water
    
    displayGardenPlan({
        treesPerRow,
        rows,
        totalTrees,
        summerWaterPerWeek,
        winterWaterPerWeek,
        annualWaterLiters,
        firstYield,
        fullYield,
        estimatedValue,
        treeCost,
        fertilizerCost,
        setupCosts,
        annualCosts,
        ...growingData
    });
}

function calculateFertilizerCost(trees) {
    // Default to balanced commercial fertilizer
    return trees * FERTILIZER_OPTIONS.balanced.costPerTree;
}

function calculateSetupCosts(trees) {
    // Includes: stakes, tree ties, mulch, initial compost
    const stakeCost = trees * 25; // R25 per stake
    const mulchCost = trees * 15; // R15 for mulch per tree
    const miscCost = trees * 10; // Ties, labels, etc
    return stakeCost + mulchCost + miscCost;
}

function validateDimensions(width, length) {
    return typeof width === 'number' && 
           typeof length === 'number' && 
           !isNaN(width) && 
           !isNaN(length) && 
           width >= 2 && 
           length >= 2;
}

function displayGardenPlan(plan) {
    const resultsDiv = document.getElementById('gardenResults');
    
    const totalSetupCost = plan.treeCost + plan.setupCosts;
    const roi = plan.fullYield > 0 ? (totalSetupCost / plan.estimatedValue).toFixed(1) : 0;
    
    resultsDiv.innerHTML = `
        <h3>🍎 Your Apple Garden Plan</h3>
        
        <div style="background: #f0fff4; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #2f855a;">
            <p><strong>Layout:</strong> ${plan.rows} rows × ${plan.treesPerRow} trees = <strong>${plan.totalTrees} trees</strong></p>
            <p><strong>Tree Type:</strong> ${plan.name}</p>
            <p><strong>Spacing:</strong> ${plan.finalSpacing}m between trees</p>
            <p style="margin-bottom: 0;"><em>${plan.description}</em></p>
        </div>

        <h4 style="color: #2f855a; margin-top: 2rem;">💧 Water Requirements</h4>
        <ul>
            <li><strong>Summer (Oct-Mar):</strong> ${plan.summerWaterPerWeek} liters per week (${(plan.summerWaterPerWeek/plan.totalTrees).toFixed(0)}L per tree)</li>
            <li><strong>Winter (Apr-Sep):</strong> ${plan.winterWaterPerWeek} liters per week (${(plan.winterWaterPerWeek/plan.totalTrees).toFixed(0)}L per tree)</li>
            <li><strong>Annual Total:</strong> ${plan.annualWaterLiters.toLocaleString()} liters</li>
        </ul>
        <p><em>💡 Tip: Use drip irrigation or mulch heavily to conserve water. Water early morning to prevent fungal diseases.</em></p>

        <h4 style="color: #2f855a; margin-top: 2rem;">🌱 Fertilizer Recommendations</h4>
        <div style="background: #fffaf0; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #f6ad55;">
            ${generateFertilizerOptions(plan.totalTrees)}
        </div>

        <h4 style="color: #2f855a; margin-top: 2rem;">🍏 Expected Yield</h4>
        <ul>
            <li><strong>First Bearing Year:</strong> ${plan.firstYield.toFixed(0)}kg (starts in year ${plan.maturityYears})</li>
            <li><strong>Full Production:</strong> ${plan.fullYield.toFixed(0)}kg per year (from year ${plan.maturityYears + 2})</li>
            <li><strong>Market Value:</strong> R${plan.estimatedValue.toLocaleString()} per year at full production</li>
        </ul>

        <h4 style="color: #2f855a; margin-top: 2rem;">💰 Cost Breakdown</h4>
        <div class="cost-breakdown">
            <div class="cost-item">
                <span>Apple Trees (${plan.totalTrees} × R${plan.treeCost}):</span>
                <strong>R${plan.treeCost.toLocaleString()}</strong>
            </div>
            <div class="cost-item">
                <span>Setup Materials (stakes, ties, mulch):</span>
                <strong>R${plan.setupCosts.toLocaleString()}</strong>
            </div>
            <div class="cost-item">
                <span><strong>Total Setup Cost:</strong></span>
                <strong>R${totalSetupCost.toLocaleString()}</strong>
            </div>
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid #f6ad55;">
                <div class="cost-item">
                    <span>Annual Fertilizer:</span>
                    <strong>R${plan.fertilizerCost.toLocaleString()}</strong>
                </div>
                <div class="cost-item">
                    <span>Annual Water (municipal):</span>
                    <strong>R${(plan.annualWaterLiters * 0.015).toFixed(0)}</strong>
                </div>
                <div class="cost-item">
                    <span><strong>Annual Operating Cost:</strong></span>
                    <strong>R${plan.annualCosts.toFixed(0)}</strong>
                </div>
            </div>
        </div>

        <div style="background: #e6fffa; padding: 1.5rem; border-radius: 10px; margin-top: 1.5rem; border-left: 4px solid #4299e1;">
            <p style="margin: 0;"><strong>📊 Return on Investment:</strong> Your setup costs will be recovered in approximately <strong>${roi} years</strong> once trees reach full production. After that, you'll have fresh apples for decades!</p>
        </div>

        <h4 style="color: #c53030; margin-top: 2rem;">⚠️ Important Notes</h4>
        <ul style="color: #744210;">
            <li>${plan.spacingNote}</li>
            <li>Most apples need a pollinator tree (different variety) for good fruit set</li>
            <li>Apples require 800-1500 chill hours (below 7°C) - best in Western Cape, Eastern Cape, Free State</li>
            <li>Start disease prevention early - spray with lime sulfur in winter</li>
            <li>Budget for pest control: approximately R150-300 per year for home remedies</li>
        </ul>

        <p style="margin-top: 2rem; font-style: italic; color: #4a5568;">
            <strong>Cost-Saving Tips:</strong> Use homemade compost instead of commercial fertilizer (saves R${plan.fertilizerCost}), collect rainwater for irrigation, and companion plant with chamomile and lavender for natural pest control.
        </p>
    `;
}

function generateFertilizerOptions(trees) {
    let html = '<p style="margin-bottom: 1rem;"><strong>Choose what fits your budget:</strong></p>';
    
    for (const [key, fert] of Object.entries(FERTILIZER_OPTIONS)) {
        const totalCost = trees * fert.costPerTree;
        html += `
            <div style="margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 8px; border: 1px solid #fed7aa;">
                <strong style="color: #2f855a;">Option ${Object.keys(FERTILIZER_OPTIONS).indexOf(key) + 1}: ${fert.name}</strong>
                ${totalCost === 0 ? '<span style="color: #38a169; font-weight: bold;"> (FREE!)</span>' : ''}
                <br>
                <span style="color: #744210;">NPK: ${fert.npk} | Cost: R${totalCost}/year | ${fert.application}</span>
                <br>
                <em style="font-size: 0.95rem; color: #4a5568;">${fert.benefits}</em>
            </div>
        `;
    }
    
    return html;
}