/* ============================================
   GROWTECH COLLECTIVE - CROP DETAILS PAGE JS
   Dynamically generates crop information from database
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    loadCropDetails();
});

function loadCropDetails() {
    // Get crop ID from URL hash (e.g., #banana)
    const cropId = window.location.hash.substring(1);
    
    if (!cropId) {
        showError();
        return;
    }
    
    // Find crop in database
    const crop = CROPS_DATABASE[cropId];
    
    if (!crop) {
        showError();
        return;
    }
    
    // Display crop information
    displayCrop(crop);
}

function showError() {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('errorState').style.display = 'block';
}

function displayCrop(crop) {
    // Update page title
    document.getElementById('pageTitle').textContent = `${crop.name} - GrowTech Collective`;
    document.title = `${crop.name} Growing Guide - GrowTech Collective`;
    
    // Generate HTML content
    const content = generateCropHTML(crop);
    
    // Insert into page
    const contentContainer = document.getElementById('cropContent');
    contentContainer.innerHTML = content;
    
    // Hide loading, show content
    document.getElementById('loadingState').style.display = 'none';
    contentContainer.style.display = 'block';
    
    // Initialize garden planner if exists
    if (crop.gardenPlanner) {
        initializeGardenPlanner(crop);
    }
}

function generateCropHTML(crop) {
    return `
        <div class="crop-detail-page">
            <!-- Header -->
            <div class="crop-header">
                <div class="crop-emoji-large">${crop.emoji}</div>
                <h1>${crop.name}</h1>
                <p class="crop-category-badge">${crop.category}</p>
            </div>

            <!-- Main Content Box -->
            <div class="content-box">
                
                <!-- Growth Duration -->
                <section class="info-section">
                    <h2>⏱️ Growth Duration</h2>
                    <p>${crop.growthDuration}</p>
                </section>

                <!-- Planting Seasons -->
                <section class="info-section">
                    <h2>📅 Planting Seasons</h2>
                    <p>${crop.plantingSeasons}</p>
                </section>

                ${crop.yieldPerArea ? `
                <section class="info-section">
                    <h2>📊 Yield Per Area</h2>
                    <p>${crop.yieldPerArea}</p>
                </section>
                ` : ''}

                <!-- Soil Requirements -->
                <section class="info-section">
                    <h2>🌱 Soil Requirements</h2>
                    <p>${crop.soilRequirements}</p>
                </section>

                <!-- Water Needs -->
                <section class="info-section">
                    <h2>💧 Water Requirements</h2>
                    <p>${crop.waterNeeds}</p>
                </section>

                <!-- Sunlight -->
                <section class="info-section">
                    <h2>☀️ Sunlight Needs</h2>
                    <p>${crop.sunlightNeeds}</p>
                </section>

                <!-- Temperature -->
                <section class="info-section">
                    <h2>🌡️ Temperature Tolerance</h2>
                    <p>${crop.temperatureTolerance}</p>
                </section>

                <!-- Fertilizers -->
                ${generateFertilizerSection(crop.fertilizers)}

                <!-- Diseases -->
                ${generateDiseasesSection(crop.diseases)}

                <!-- Pests -->
                ${generatePestsSection(crop.pests)}

                <!-- Best Provinces -->
                ${generateProvincesSection(crop.bestProvinces)}

                <!-- Varieties -->
                ${crop.varieties ? generateVarietiesSection(crop.varieties) : ''}

                <!-- Garden Planner -->
                ${crop.gardenPlanner ? generateGardenPlannerSection(crop) : ''}
            </div>
        </div>
    `;
}

function generateFertilizerSection(fertilizers) {
    if (!fertilizers || fertilizers.length === 0) return '';
    
    return `
        <section class="fertilizer-section">
            <h2>💚 Fertilization Guide</h2>
            <p>Proper nutrition is essential for healthy growth and maximum yield. Here are budget-friendly options:</p>
            
            <div class="fertilizer-options">
                ${fertilizers.map(fert => `
                    <div class="fertilizer-card">
                        <span class="cost-badge">${fert.cost}</span>
                        <h4>${fert.name}</h4>
                        <p><strong>NPK:</strong> ${fert.npk}</p>
                        <p><strong>Application:</strong> ${fert.application}</p>
                        <p><strong>Benefits:</strong> ${fert.benefits}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function generateDiseasesSection(diseases) {
    if (!diseases || diseases.length === 0) return '';
    
    return `
        <section class="disease-section">
            <h2>🦠 Common Diseases & Management</h2>
            <p>Prevention is key! Healthy, well-maintained plants resist diseases better than stressed ones.</p>
            
            ${diseases.map(disease => `
                <div class="disease-card">
                    <h3>${disease.name}</h3>
                    <p class="symptoms"><strong>Symptoms:</strong> ${disease.symptoms}</p>
                    <div class="treatment">
                        <strong>Treatment:</strong>
                        <p>${disease.treatment}</p>
                        <p style="margin-top: 0.5rem;"><strong>Cost:</strong> ${disease.cost}</p>
                    </div>
                </div>
            `).join('')}
        </section>
    `;
}

function generatePestsSection(pests) {
    if (!pests || pests.length === 0) return '';
    
    return `
        <section class="pest-section">
            <h2>🐛 Common Pests & Control</h2>
            
            ${pests.map(pest => `
                <div class="pest-card">
                    <h3>${pest.name}</h3>
                    <p class="symptoms"><strong>Signs:</strong> ${pest.symptoms}</p>
                    <div class="treatment">
                        <strong>Control:</strong>
                        <p>${pest.control}</p>
                        <p style="margin-top: 0.5rem;"><strong>Cost:</strong> ${pest.cost}</p>
                    </div>
                </div>
            `).join('')}
            
            <p style="margin-top: 2rem; padding: 1rem; background: #f0fff4; border-radius: 8px; border-left: 3px solid #2f855a;">
                <strong>💡 Integrated Pest Management:</strong> Regular monitoring, encourage beneficial insects, maintain plant health, and use chemical controls only when necessary.
            </p>
        </section>
    `;
}

function generateProvincesSection(provinces) {
    if (!provinces || provinces.length === 0) return '';
    
    return `
        <section class="provinces-section">
            <h2>📍 Best Growing Regions in South Africa</h2>
            <div class="provinces-list">
                ${provinces.map(province => `<span class="province-badge">${province}</span>`).join('')}
            </div>
        </section>
    `;
}

function generateVarietiesSection(varieties) {
    if (!varieties || varieties.length === 0) return '';
    
    return `
        <section class="varieties-section">
            <h2>🌾 Recommended Varieties</h2>
            <div class="varieties-grid">
                ${varieties.map(variety => `
                    <div class="variety-card">
                        <h4>${variety.name}</h4>
                        <p>${variety.description}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function generateGardenPlannerSection(crop) {
    return `
        <section class="garden-planner">
            <h2>🌳 Garden Planner</h2>
            <p>Calculate space, costs, and yields for your home or community garden:</p>
            
            <div class="input-group">
                <label for="gardenWidth">Garden Width (meters):</label>
                <input type="number" id="gardenWidth" min="2" step="0.5" placeholder="e.g., 10">
            </div>
            
            <div class="input-group">
                <label for="gardenLength">Garden Length (meters):</label>
                <input type="number" id="gardenLength" min="2" step="0.5" placeholder="e.g., 15">
            </div>
            
            ${crop.gardenPlanner.treeTypes.length > 1 ? `
            <div class="input-group">
                <label for="treeType">Growing Method:</label>
                <select id="treeType">
                    ${crop.gardenPlanner.treeTypes.map((type, index) => `
                        <option value="${index}">${type.name}</option>
                    `).join('')}
                </select>
            </div>
            ` : ''}
            
            <button id="planGarden" class="primary-btn">🧮 Calculate Garden Plan</button>
            
            <div id="gardenResults"></div>
        </section>
    `;
}

function initializeGardenPlanner(crop) {
    const planButton = document.getElementById('planGarden');
    if (!planButton) return;
    
    planButton.addEventListener('click', () => calculateGarden(crop));
}

function calculateGarden(crop) {
    const width = parseFloat(document.getElementById('gardenWidth').value);
    const length = parseFloat(document.getElementById('gardenLength').value);
    const typeIndex = crop.gardenPlanner.treeTypes.length > 1 
        ? parseInt(document.getElementById('treeType').value) 
        : 0;
    
    if (!width || !length || width < 2 || length < 2) {
        alert('Please enter valid garden dimensions (minimum 2m x 2m)');
        return;
    }
    
    const treeType = crop.gardenPlanner.treeTypes[typeIndex];
    const treesPerRow = Math.floor(width / treeType.spacing);
    const rows = Math.floor(length / treeType.spacing);
    const totalTrees = treesPerRow * rows;
    
    if (totalTrees === 0) {
        alert('Your garden is too small for this crop. Try increasing the size.');
        return;
    }
    
    displayGardenResults(crop, treeType, totalTrees, treesPerRow, rows);
}

function displayGardenResults(crop, treeType, totalTrees, treesPerRow, rows) {
    const resultsDiv = document.getElementById('gardenResults');
    
    const totalYield = totalTrees * treeType.yieldPerTree;
    const totalCost = totalTrees * treeType.treeCost;
    const waterPerWeek = totalTrees * treeType.waterPerWeek;
    
    resultsDiv.innerHTML = `
        <div style="background: #f0fff4; padding: 2rem; border-radius: 12px; margin-top: 2rem; border: 2px solid #2f855a;">
            <h3 style="color: #2f855a; margin-top: 0;">${crop.emoji} Your ${crop.name} Garden Plan</h3>
            
            <p><strong>Layout:</strong> ${rows} rows × ${treesPerRow} plants = <strong>${totalTrees} total</strong></p>
            <p><strong>Spacing:</strong> ${treeType.spacing}m between plants</p>
            
            <hr style="border: none; border-top: 1px solid #9ae6b4; margin: 1.5rem 0;">
            
            <h4 style="color: #2f855a;">📊 Expected Results:</h4>
            <p>💧 <strong>Water per week:</strong> ${waterPerWeek} liters</p>
            <p>🌾 <strong>Estimated yield:</strong> ${totalYield} ${treeType.yieldPerTree > 10 ? 'kg' : 'kg per year'}</p>
            <p>💰 <strong>Setup cost:</strong> R${totalCost.toLocaleString()}</p>
            <p>⏱️ <strong>Time to maturity:</strong> ${treeType.maturityYears} year${treeType.maturityYears > 1 ? 's' : ''}</p>
            
            <p style="margin-top: 1.5rem; font-style: italic; color: #4a5568;">
                <strong>💡 Tip:</strong> These are estimates based on good growing conditions. Actual results vary by location, soil, and management.
            </p>
        </div>
    `;
}