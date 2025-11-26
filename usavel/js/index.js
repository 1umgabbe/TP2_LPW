// ---------- carregar lista ----------
function carregar() {
    const listaDiv = document.getElementById("lista");
    const pecas = JSON.parse(localStorage.getItem("pecas")) || [];

    listaDiv.innerHTML = "";

    pecas.forEach((p) => {
        const item = document.createElement("div");
        item.classList.add("item");

        // barra colorida
        item.style.borderLeft = `8px solid ${p.cor}`;

        const info = document.createElement("div");
        info.innerHTML = `
            <strong>${p.nome}</strong><br>
            <small>${p.categoria} • R$ ${p.preco} • ${p.fabricante} • Estoque: ${p.estoque}</small>
        `;

        item.appendChild(info);
        listaDiv.appendChild(item);
    });
}

// ---------- dark mode ----------
const toggleBtn = document.querySelector(".dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("tema", document.body.classList.contains("dark-mode") ? "dark" : "light");

    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ---------- restaurar tema + iniciar ----------
window.onload = () => {
    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }
    carregar();
};
