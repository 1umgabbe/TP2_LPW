function carregar() {
    const listaDiv = document.getElementById("lista");
    const pecas = JSON.parse(localStorage.getItem("pecas")) || [];
    listaDiv.innerHTML = pecas.map(p => `
        <div class="item" style="border-left: 8px solid ${p.cor}">
            <div>
                <strong>${p.nome}</strong><br>
                <small>${p.categoria} • R$ ${p.preco} • ${p.fabricante} • Estoque: ${p.estoque}</small>
            </div>
        </div>
    `).join("");
}

const toggleBtn = document.querySelector(".dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
    const darkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("tema", darkMode ? "dark" : "light");
    toggleBtn.textContent = darkMode ? "☀️" : "🌙";
});

window.onload = () => {
    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }
    carregar();
};
