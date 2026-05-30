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

// ==========================================
// 2. CONTROLE DO ESTOQUE (Prevenção de Erros)
// ==========================================
function toggleRowLock(button) {
    const row = button.closest('tr');
    const viewBadge = row.querySelector('.view-badge');
    const editStepper = row.querySelector('.edit-stepper');
    const input = editStepper.querySelector('input');
    
    if (editStepper.classList.contains('hidden')) {
        editStepper.classList.remove('hidden');
        viewBadge.classList.add('hidden');
        
        button.innerHTML = '🔓';
        button.classList.remove('bg-gray-50', 'text-gray-600', 'border-gray-200');
        button.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-300', 'font-bold');
    } else {
        const novoValor = input.value;
        viewBadge.textContent = `${novoValor} uni.`;
        
        editStepper.classList.add('hidden');
        viewBadge.classList.remove('hidden');
        
        button.innerHTML = '🔒';
        button.classList.remove('bg-blue-50', 'text-blue-600', 'border-blue-300', 'font-bold');
        button.classList.add('bg-gray-50', 'text-gray-600', 'border-gray-200');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Localiza o input do Modo Noturno dentro da sidebar
    const inputDarkMode = document.querySelector('.darkmode-toggle input');

    // Função para aplicar ou remover o tema escuro
    function aplicarTema(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            if (inputDarkMode) inputDarkMode.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            if (inputDarkMode) inputDarkMode.checked = false;
        }
    }

    // 1. Ao carregar a página: Verifica se o usuário já tinha deixado o modo noturno ativo antes
    const temaSalvo = localStorage.getItem('fishaqua-theme');
    if (temaSalvo === 'dark') {
        aplicarTema(true);
    } else {
        aplicarTema(false);
    }

    // 2. Ouvinte de Clique: Quando o usuário arrasta a chave seletora
    if (inputDarkMode) {
        inputDarkMode.addEventListener('change', () => {
            if (inputDarkMode.checked) {
                aplicarTema(true);
                localStorage.setItem('fishaqua-theme', 'dark'); // Salva a escolha
            } else {
                aplicarTema(false);
                localStorage.setItem('fishaqua-theme', 'light'); // Salva a escolha
            }
        });
    }
});