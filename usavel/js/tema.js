// BOTÃO DARK MODE
const toggleBtn = document.querySelector(".dark-mode-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // salva tema
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("tema", "dark");
            toggleBtn.textContent = "☀️";
        } else {
            localStorage.setItem("tema", "light");
            toggleBtn.textContent = "🌙";
        }
    });
}

// restaura tema salvo
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark-mode");
        if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
        if (toggleBtn) toggleBtn.textContent = "🌙";
    }
});
