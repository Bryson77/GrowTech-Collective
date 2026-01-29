/* ============================================
   GROWTECH COLLECTIVE - AVOCADO GARDEN PLANNER
   Optimized for home and community gardens in SA
   ============================================ */

// Optimized avocado growing data for home/community gardens
const AVOCADO_GROWING_DATA = {
    dwarf: {
        name: "Dwarf Avocado Trees",
        initialSpacing: 3.0,
        finalSpacing: 4.0,
        waterPerTree: 40, // liters per week (summer)
        fertilizerType: "balanced",
        yieldPerTree: 30, // kg per year at maturity
        treeCost: 250, // R250-350 per dwarf tree
        maturityYears: 3,
        description: "Best for small home gardens. Grafted on dwarfing rootstock, grows 3-4m tall. Perfect for suburban yards.",
        spacingNote: "Final spacing of 4m allows for healthy growth and easy harvesting"
    },
    standard: {
        name: "Standard Avocado Trees",
        initialSpacing: 5.0,
        finalSpacing: 7.0,
        waterPerTree: 70,
        fertilizerType: "balanced",
        yieldPerTree: 100,
        treeCost: 180,
        maturityYears: 4,
        description: "Traditional full-size trees. Best for larger gardens or small orchards. Grows 6-8m tall.",
        spacingNote: "Final spacing of 7m recommended for optimal canopy development"
    },
    container: {
        name: "Container Avocados",
        initialSpacing: 2.0,
        finalSpacing: 2.5,
        waterPerTree: 25,
        fertilizerType: "slow-release",
        yieldPerTree: 15,
        treeCost: 300,
        maturityYears: 3,
        description: "Ideal for patios and small spaces. Grafted on ultra-dwarf rootstock, grows 2-3m tall. Requires 60L+ pots.",
        spacingNote: "Permanent container growing - repot every 2-3 years into larger containers"
    }
};

// Fertilizer options optimized for cost
const FERTILIZER_OPTIONS = {
    compost: {
        name: "Homemade Compost",
        costPerTree: 25,
        npk: "Variable NPK + micronutrients",
        application: "15-20kg per tree spring and autumn",
        benefits: "Low-cost, improves soil, slow-release",
        instructions: "Spread around drip line, keep 30cm from trunk"
    },
    balanced: {
        name: "Balanced NPK 6:6:6 + Zinc",
        costPerTree: 100,
        npk: "6:6:6 + Zn + B",
        application: "Quarterly: 0.5kg (young), 1.5kg (mature)",
        benefits: "Complete nutrition, includes zinc for fruit quality",
        instructions: "Broadcast around drip line, water in well"
    },
    organic: {
        name: "Organic Avocado Blend",
        costPerTree: 175,
        npk: "5:2:4 + trace elements",
        application: "Every 8 weeks, 200-600g per tree",
        benefits: "Gentle, soil-friendly, slow-release minerals",
        instructions: "Work into top 10cm of soil, mulch over"
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
        alert('Please enter valid garden dimensions (minimum 3m x 3m for avocados)');
        return;
    }

    const growingData = AVOCADO_GROWING_DATA[method];
    
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
    const winterWaterPerWeek = Math.round(summerWaterPerWeek * 0.5); // 50% in winter
    const annualWaterLiters = (summerWaterPerWeek * 26) + (winterWaterPerWeek * 26);
    
    // Yield calculations
    const firstYield = totalTrees * (growingData.yieldPerTree * 0.3); // 30% in first bearing year
    const fullYield = totalTrees * growingData.yieldPerTree;
    const estimatedValue = fullYield * 25; // R25/kg average for home-grown avocados
    
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
    // Includes: stakes, tree guards, mulch, initial compost
    const stakeCost = trees * 30; // R30 per stake
    const mulchCost = trees * 20; // R20 for mulch per tree
    const miscCost = trees * 15; // Guards, ties, labels
    return stakeCost + mulchCost + miscCost;
}

function validateDimensions(width, length) {
    return typeof width === 'number' && 
           typeof length === 'number' && 
           !isNaN(width) && 
           !isNaN(length) && 
           width >= 3 && 
           length >= 3;
}

function displayGardenPlan(plan) {
    const resultsDiv = document.getElementById('gardenResults');
    
    const totalSetupCost = plan.treeCost + plan.setupCosts;
    const roi = plan.fullYield > 0 ? (totalSetupCost / plan.estimatedValue).toFixed(1) : 0;
    
    resultsDiv.innerHTML = `
        <h3>🥑 Your Avocado Garden Plan</h3>
        
        <div style="background: #f0fff4; padding: 1.5rem; border-radius: 10px; margin: 1rem 0; border-left: 4px solid #2f855a;">
            <p><strong>Layout:</strong> ${plan.rows} rows × ${plan.treesPerRow} trees = <strong>${plan.totalTrees} trees</strong></p>
            <p><strong>Tree Type:</strong> ${plan.name}</p>
            <p><strong>Spacing:</strong> ${plan.finalSpacing}m between trees</p>
            <p style="margin-bottom: 0;"><em>${plan.description}</em></p>
        </div>

        <h4>💧 Water Requirements</h4>
        <ul style="list-style: none; padding-left: 0;">
            <li style="padding: 0.5rem 0;">✓ <strong>Summer (Oct-Mar):</strong> ${plan.summerWaterPerWeek} liters per week (${(plan.summerWaterPerWeek/plan.totalTrees).toFixed(0)}L per tree)</li>
            <li style="padding: 0.5rem 0;">✓ <strong>Winter (Apr-Sep):</strong> ${plan.winterWaterPerWeek} liters per week (${(plan.winterWaterPerWeek/plan.totalTrees).toFixed(0)}L per tree)</li>
            <li style="padding: 0.5rem 0;">✓ <strong>Annual Total:</strong> ${plan.annualWaterLiters.toLocaleString()} liters</li>
        </ul>
        <p style="background: #fffaf0; padding: 1rem; border-radius: 8px; margin-top: 1rem;"><em>💡 Tip: Use drip irrigation and mulch heavily to conserve water. Avocados need consistent moisture but hate waterlogged roots.</em></p>

        <h4>🌱 Fertilizer Recommendations</h4>
        <div style="background: #fffaf0; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #f6ad55;">
            ${generateFertilizerOptions(plan.totalTrees)}
        </div>

        <h4>🥑 Expected Yield</h4>
        <ul style="list-style: none; padding-left: 0;">
            <li style="padding: 0.5rem 0;">✓ <strong>First Bearing Year:</strong> ${plan.firstYield.toFixed(0)}kg (starts in year ${plan.maturityYears})</li>
            <li style="padding: 0.5rem 0;">✓ <strong>Full Production:</strong> ${plan.fullYield.toFixed(0)}kg per year (from year ${plan.maturityYears + 3})</li>
            <li style="padding: 0.5rem 0;">✓ <strong>Market Value:</strong> R${plan.estimatedValue.toLocaleString()} per year at full production</li>
        </ul>

        <h4>💰 Cost Breakdown</h4>
        <div class="cost-breakdown">
            <div class="cost-item">
                <span>Avocado Trees (${plan.totalTrees} × R${plan.treeCost}):</span>
                <strong>R${plan.treeCost.toLocaleString()}</strong>
            </div>
            <div class="cost-item">
                <span>Setup Materials (stakes, guards, mulch):</span>
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
            <p style="margin: 0;"><strong>📊 Return on Investment:</strong> Your setup costs will be recovered in approximately <strong>${roi} years</strong> once trees reach full production. Mature avocado trees can produce for 30+ years!</p>
        </div>

        <h4 style="color: #c53030; margin-top: 2rem;">⚠️ Important Notes</h4>
        <ul style="color: #744210; list-style: none; padding-left: 0;">
            <li style="padding: 0.3rem 0;">✓ ${plan.spacingNote}</li>
            <li style="padding: 0.3rem 0;">✓ Most avocados need cross-pollination - plant Type A + Type B varieties</li>
            <li style="padding: 0.3rem 0;">✓ Avocados are frost-sensitive - protect young trees in cold areas</li>
            <li style="padding: 0.3rem 0;">✓ Well-drained soil is CRITICAL - plant on mounds if soil is heavy</li>
            <li style="padding: 0.3rem 0;">✓ Budget for pest/disease control: approximately R200-400 per tree per year</li>
            <li style="padding: 0.3rem 0;">✓ Zinc deficiency is common - use fertilizer with zinc or apply zinc sulfate</li>
        </ul>

        <p style="margin-top: 2rem; font-style: italic; color: #4a5568; background: #f7fafc; padding: 1rem; border-radius: 8px;">
            <strong>💡 Cost-Saving Tips:</strong> Use homemade compost (saves R${plan.fertilizerCost - (plan.totalTrees * 25)}), collect rainwater for irrigation, mulch with free grass clippings or wood chips, and plant garlic/marigolds around trees for natural pest control.
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
                <br>
                <span style="color: #744210;">NPK: ${fert.npk} | Annual Cost: R${totalCost}/year | ${fert.application}</span>
                <br>
                <em style="font-size: 0.95rem; color: #4a5568;">${fert.benefits}</em>
            </div>
        `;
    }
    
    html += '<p style="margin-top: 1rem;"><strong>Key Nutrients:</strong> Avocados need nitrogen for growth, zinc and boron for fruit quality. Avoid high-phosphorus fertilizers which can cause zinc deficiency.</p>';
    
    return html;
}