// sidebar.js
const sidebar = document.getElementById('app-sidebar');
const mainContent = document.getElementById('main-content');
const btnClose = document.getElementById('btn-close-sidebar');
const btnOpen = document.getElementById('btn-open-sidebar');

// Uma boa prática: verificar se os elementos existem na página antes de aplicar o evento
if (sidebar && mainContent && btnClose && btnOpen) {
    btnClose.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        mainContent.classList.remove('ml-64');
        btnOpen.classList.remove('hidden');
    });

    btnOpen.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        mainContent.classList.add('ml-64');
        btnOpen.classList.add('hidden');
    });
}