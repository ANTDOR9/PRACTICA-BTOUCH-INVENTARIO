// ============================
// BRIGHTER-PAD - Estadísticas
// ============================

class StatsManager {
    constructor() {
        this.stats = this.calculateStats();
    }

    calculateStats() {
        // Asegurarnos que appData existe
        if (typeof appData === 'undefined') {
            console.warn('⚠️ appData no encontrado');
            return { categories: 0, apps: 0, categoriesList: [] };
        }

        const totalCategories = appData.categories.length;
        const totalApps = appData.categories.reduce(
            (acc, cat) => acc + cat.apps.length, 
            0
        );
        
        return {
            categories: totalCategories,
            apps: totalApps,
            categoriesList: appData.categories.map(c => c.name),
            categoriesDetail: appData.categories.map(c => ({
                name: c.name,
                appsCount: c.apps.length
            }))
        };
    }

    logStats() {
        console.log('📊 ESTADÍSTICAS DE BRIGHTER-PAD:');
        console.log(`📁 Categorías: ${this.stats.categories}`);
        console.log(`📱 Aplicaciones: ${this.stats.apps}`);
        console.log('📂 Detalle por categoría:');
        this.stats.categoriesDetail.forEach((cat) => {
            console.log(`   ${cat.name}: ${cat.appsCount} apps`);
        });
    }

    getStatsHTML() {
        return `
            <div class="stats-container">
                <span class="stat-item">📁 ${this.stats.categories} Categorías</span>
                <span class="stat-item">📱 ${this.stats.apps} Aplicaciones</span>
                <span class="stat-item">⚡ v1.0.0</span>
            </div>
        `;
    }

    addStatsToFooter() {
        const footer = document.querySelector('.footer');
        if (!footer) return;

        const statsDiv = document.createElement('div');
        statsDiv.className = 'stats-footer';
        statsDiv.innerHTML = this.getStatsHTML();
        
        // Estilos para las estadísticas en el footer
        statsDiv.style.cssText = `
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(255,255,255,0.05);
            display: flex;
            justify-content: center;
            gap: 24px;
            flex-wrap: wrap;
            font-size: 0.8rem;
            color: rgba(255,255,255,0.3);
        `;
        
        footer.appendChild(statsDiv);
    }
}

// Inicializar cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    const stats = new StatsManager();
    stats.logStats();
    stats.addStatsToFooter();
    
    // Guardar en window para acceso global
    window.statsManager = stats;
});

// También puedes exportar si usas módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StatsManager;
}