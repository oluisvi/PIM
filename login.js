// Seleciona o botão com a classe login
const loginButton = document.querySelector('.login');

// Adiciona o evento 'click' ao botão
loginButton.addEventListener('click', () => {
  // Redireciona para dashboard.html
  window.location.href = 'dashboard.html';
});

//Função para usuário que esqueceu senha
function forgotPassword() {
  document.getElementById("forgotPasswordSection").style.display = "block";
}



