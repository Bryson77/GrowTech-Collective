/* ============================================
   GROWTECH COLLECTIVE - CROPS BROWSE PAGE JS
   Search and filter functionality
   ============================================ */

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    setupEventListeners();
});

function initializePage() {
    displayAllCrops();
}

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('cropSearch');
    searchInput.addEventListener('input', handleSearch);
    
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const filteredCrops = filterCrops(searchTerm, currentFilter);
    displayCrops(filteredCrops);
    updateResultsCount(filteredCrops.length, searchTerm);
}

function handleFilterClick(e) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Get filter category
    currentFilter = e.target.dataset.category;
    
    // Apply filter
    const searchTerm = document.getElementById('cropSearch').value.toLowerCase().trim();
    const filteredCrops = filterCrops(searchTerm, currentFilter);
    displayCrops(filteredCrops);
    updateResultsCount(filteredCrops.length, searchTerm);
}

function filterCrops(searchTerm, category) {
    return Object.values(CROPS_DATABASE).filter(crop => {
        const matchesSearch = !searchTerm || 
            crop.name.toLowerCase().includes(searchTerm) ||
            crop.category.toLowerCase().includes(searchTerm);
        
        const matchesCategory = category === 'all' || crop.category === category;
        
        return matchesSearch && matchesCategory;
    });
}

function displayAllCrops() {
    displayCrops(Object.values(CROPS_DATABASE));
    updateResultsCount(Object.values(CROPS_DATABASE).length, '');
}

function displayCrops(crops) {
    const grid = document.getElementById('cropsGrid');
    const noResults = document.getElementById('noResults');
    
    if (crops.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    grid.innerHTML = crops.map(crop => `
        <div class="crop-card" onclick="navigateToCrop('${crop.id}')">
            <div class="crop-emoji">${crop.emoji}</div>
            <h3>${crop.name}</h3>
            <p class="crop-category">${crop.category}</p>
            <div class="crop-card-footer">
                <span class="view-details">View Growing Guide →</span>
            </div>
        </div>
    `).join('');
}

function updateResultsCount(count, searchTerm) {
    const resultsInfo = document.getElementById('resultsCount');
    
    if (searchTerm) {
        resultsInfo.textContent = `Found ${count} crop${count !== 1 ? 's' : ''} matching "${searchTerm}"`;
    } else if (currentFilter === 'all') {
        resultsInfo.textContent = `Showing all ${count} crops`;
    } else {
        resultsInfo.textContent = `Showing ${count} ${currentFilter}`;
    }
}

function navigateToCrop(cropId) {
    window.location.href = `cropDetails.html#${cropId}`;
}