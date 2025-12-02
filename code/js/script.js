const isDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

function updateTheme() {
  if (isDarkMode()) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
updateTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

