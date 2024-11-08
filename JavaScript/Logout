// Selecionar o botão de logout
const logoutBtn = document.querySelector('.logout-btn');

// Selecionar o overlay e seus botões
const logoutOverlay = document.getElementById('logout-overlay');
const confirmButton = document.getElementById('confirm-logout-overlay');
const declineButton = document.getElementById('decline-logout-overlay');

// Função para mostrar o overlay
function showLogoutOverlay() {
    logoutOverlay.style.display = 'block';
}

// Função para esconder o overlay
function hideLogoutOverlay() {
    logoutOverlay.style.display = 'none';
}

// Função de Logout
function logout() {
    // Clear user session
    localStorage.clear();
    // Redirect to the login page
    window.location.href = 'index.html';
}

// Adicionar clique ao botão de logout
logoutBtn.addEventListener('click', showLogoutOverlay);

// Adicionar clique para o botão de confirmar logout
confirmButton.addEventListener('click', logout);

// Adicionar clique para o botão de cancelar logout
declineButton.addEventListener('click', hideLogoutOverlay);
