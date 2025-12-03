const coresCategoria = {
    "CPU": "#e63946", "GPU": "#6f2dbd", "RAM": "#0077b6", "SSD": "#2a9d8f",
    "Fonte": "#f4a261", "Placa-mãe": "#6d6875", "Gabinete": "#ff5d8f", "Cooler": "#00b4d8",
};

function carregar() {
    const listaDiv = document.getElementById("lista");
    const pecas = JSON.parse(localStorage.getItem("pecas")) || [];
    listaDiv.innerHTML = "";

    pecas.forEach(p => {
        const item = document.createElement("div");
        item.className = "item";
        item.style.borderLeft = `8px solid ${p.cor}`;

        item.innerHTML = `
            <div class="texto">
                <strong>${p.nome}</strong>
                <small>${p.categoria} • R$ ${p.preco} • ${p.fabricante} • Estoque: ${p.estoque}</small>
            </div>
            <div class="btns">
                <button class="edit" onclick="editar(${pecas.indexOf(p)})">Editar</button>
                <button class="delete" onclick="remover(${pecas.indexOf(p)})">Excluir</button>
            </div>
        `;
        listaDiv.appendChild(item);
    });
}

function obterPecas() {
    return JSON.parse(localStorage.getItem("pecas")) || [];
}

function salvarPecas(pecas) {
    localStorage.setItem("pecas", JSON.stringify(pecas));
}

function limparCampos(...ids) {
    ids.forEach(id => document.getElementById(id).value = "");
}

function addPeca() {
    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value;
    const preco = document.getElementById("preco").value;
    const fabricante = document.getElementById("fabricante").value.trim();
    const estoque = document.getElementById("estoque").value;

    if (!nome || !categoria || !preco || !fabricante || !estoque) {
        alert("Preencha todos os campos!");
        return;
    }

    const pecas = obterPecas();
    pecas.push({ nome, categoria, preco, fabricante, estoque, cor: coresCategoria[categoria] || "#ccc" });
    salvarPecas(pecas);
    limparCampos("nome","categoria","preco","fabricante","estoque");
    carregar();
}

function remover(i) {
    if (!confirm("Deseja remover esta peça?")) return;
    const pecas = obterPecas();
    pecas.splice(i, 1);
    salvarPecas(pecas);
    carregar();
}

let editIndex = null;

function criarModal() {
    if (document.getElementById("modal-edit")) return;

    const modal = document.createElement("div");
    modal.id = "modal-edit";
    modal.style.display = "none";
    modal.innerHTML = `
        <div class="modal-card">
            <h2>Editar Peça</h2>
            <input id="edit-nome" placeholder="Nome">
            <select id="edit-categoria">
                ${Object.keys(coresCategoria).map(cat => `<option>${cat}</option>`).join("")}
            </select>
            <input id="edit-preco" type="number" placeholder="Preço (R$)">
            <input id="edit-fabricante" placeholder="Fabricante">
            <input id="edit-estoque" type="number" placeholder="Estoque">
            <div class="actions">
                <button onclick="salvarEdicao()">Salvar</button>
                <button class="secondary" onclick="fecharModal()">Cancelar</button>
            </div>
        </div>
    `;
    modal.addEventListener("click", e => { if(e.target === modal) fecharModal(); });
    document.body.appendChild(modal);
}

function editar(i) {
    const pecas = obterPecas();
    const p = pecas[i];
    editIndex = i;

    ["nome","categoria","preco","fabricante","estoque"].forEach(id => {
        document.getElementById(`edit-${id}`).value = p[id] || "";
    });

    document.getElementById("modal-edit").style.display = "flex";
}

function salvarEdicao() {
    const pecas = obterPecas();
    const nome = document.getElementById("edit-nome").value.trim();
    const categoria = document.getElementById("edit-categoria").value;
    const preco = document.getElementById("edit-preco").value;
    const fabricante = document.getElementById("edit-fabricante").value.trim();
    const estoque = document.getElementById("edit-estoque").value;

    if (!nome || !categoria || !preco || !fabricante || !estoque) {
        alert("Preencha todos os campos!");
        return;
    }

    pecas[editIndex] = { nome, categoria, preco, fabricante, estoque, cor: coresCategoria[categoria] || "#ccc" };
    salvarPecas(pecas);
    fecharModal();
    carregar();
}

function fecharModal() {
    document.getElementById("modal-edit").style.display = "none";
}

const toggleBtn = document.querySelector(".dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("tema", document.body.classList.contains("dark-mode") ? "dark" : "light");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

window.onload = () => {
    criarModal();
    if(localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }
    carregar();
};
    