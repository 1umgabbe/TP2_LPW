
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark-mode");
        if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
        if (toggleBtn) toggleBtn.textContent = "🌙";
    }
});

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