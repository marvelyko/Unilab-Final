window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('down-arrow').onclick = function toggleCategoryMenu() {
        document.getElementById('cat-menu-tog').classList.toggle('hidden');
    }
});