const isDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Lógica inicial para definir a classe correta
function updateTheme() {
  if (isDarkMode()) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  }
}

// Chame a função quando a página carregar
updateTheme();

// Opcional: Adicionar um listener para mudanças em tempo real (se o usuário mudar a configuração do sistema enquanto navega)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);