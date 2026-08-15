// ============================
// BRIGHTER-PAD - Estadísticas
// ============================

// Calcular estadísticas automáticamente
function calculateStats() {
    const totalCategories = appData.categories.length;
    const totalApps = appData.categories.reduce((acc, cat) => acc + cat.apps.length, 0);
    
    return {
        categories: totalCategories,
        apps: totalApps,
        categoriesList: appData.categories.map(c => c.name)
    };
}

// Mostrar estadísticas en consola (para desarrollo)
function showStats() {
    const stats = calculateStats();
    console.log('📊 ESTADÍSTICAS DE BRIGHTER-PAD:');
    console.log(`📁 Categorías: ${stats.categories}`);
    console.log(`📱 Aplicaciones: ${stats.apps}`);
    console.log('📂 Categorías disponibles:');
    stats.categoriesList.forEach((name, index) => {
        console.log(`   ${index + 1}. ${name}`);
    });
    console.log('✨ Total de recursos: ' + (stats.categories + stats.apps));
}

// Mostrar estadísticas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showStats();
});

// También puedes mostrar en la UI (opcional)
function addStatsToUI() {
    const stats = calculateStats();
    const footer = document.querySelector('.footer');
    if (footer) {
        const statsElement = document.createElement('div');
        statsElement.style.cssText = `
            margin-top: 10px;
            font-size: 0.8rem;
            color: rgba(255,255,255,0.3);
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        `;
        statsElement.innerHTML = `
            <span>📁 ${stats.categories} Categorías</span>
            <span>📱 ${stats.apps} Aplicaciones</span>
            <span>⚡ v1.0.0</span>
        `;
        footer.appendChild(statsElement);
    }
}

// Llamar a la función cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
    addStatsToUI();
});