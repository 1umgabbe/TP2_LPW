// ---------- mapa de cores ----------
const coresCategoria = {
    "CPU": "#ff6b6b",
    "GPU": "#6b8bff",
    "RAM": "#24d18f",
    "SSD": "#ffb347",
    "Fonte": "#d9534f",
    "Placa-mãe": "#9b59b6",
    "Gabinete": "#777",
    "Cooler": "#40c4ff",
};

// ---------- carregar lista ----------
function carregar() {
    const listaDiv = document.getElementById("lista");
    const pecas = JSON.parse(localStorage.getItem("pecas")) || [];

    listaDiv.innerHTML = "";

    pecas.forEach((p, i) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.borderLeft = `8px solid ${p.cor}`;

        item.innerHTML = `
            <div>
                <strong>${p.nome}</strong><br>
                <small>${p.categoria} • R$ ${p.preco} • ${p.fabricante} • Estoque: ${p.estoque}</small>
            </div>

            <div class="btns">
                <button class="edit" onclick="editar(${i})">Editar</button>
                <button class="delete" onclick="remover(${i})">Excluir</button>
            </div>
        `;

        listaDiv.appendChild(item);
    });
}

// ---------- adicionar ----------
function addPeca() {
    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
    const preco = document.getElementById("preco").value;
    const fabricante = document.getElementById("fabricante").value;
    const estoque = document.getElementById("estoque").value;

    if (!nome || !categoria || !preco || !fabricante || !estoque) {
        alert("Preencha todos os campos!");
        return;
    }

    const pecas = JSON.parse(localStorage.getItem("pecas")) || [];

    pecas.push({
        nome,
        categoria,
        preco,
        fabricante,
        estoque,
        cor: coresCategoria[categoria] || "#ccc"
    });

    localStorage.setItem("pecas", JSON.stringify(pecas));

    limparCampos();
    carregar();
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("fabricante").value = "";
    document.getElementById("estoque").value = "";
}

// ---------- remover ----------
function remover(i) {
    if (!confirm("Deseja remover esta peça?")) return;

    const pecas = JSON.parse(localStorage.getItem("pecas"));
    pecas.splice(i, 1);

    localStorage.setItem("pecas", JSON.stringify(pecas));
    carregar();
}

// ---------- modal de edição ----------
function criarModal() {
    const modal = document.createElement("div");
    modal.id = "modal-edit";
    modal.style.display = "none";
    modal.innerHTML = `
        <div class="modal-card">
            <h2>Editar Peça</h2>

            <input id="edit-nome" placeholder="Nome">
            
            <select id="edit-categoria">
                <option>CPU</option>
                <option>GPU</option>
                <option>RAM</option>
                <option>SSD</option>
                <option>Fonte</option>
                <option>Placa-mãe</option>
                <option>Gabinete</option>
                <option>Cooler</option>
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
    document.body.appendChild(modal);
}

let editIndex = null;

function editar(i) {
    const pecas = JSON.parse(localStorage.getItem("pecas"));
    const p = pecas[i];

    editIndex = i;

    document.getElementById("edit-nome").value = p.nome;
    document.getElementById("edit-categoria").value = p.categoria;
    document.getElementById("edit-preco").value = p.preco;
    document.getElementById("edit-fabricante").value = p.fabricante;
    document.getElementById("edit-estoque").value = p.estoque;

    document.getElementById("modal-edit").style.display = "flex";
}

function salvarEdicao() {
    const pecas = JSON.parse(localStorage.getItem("pecas"));

    const nome = document.getElementById("edit-nome").value;
    const categoria = document.getElementById("edit-categoria").value;
    const preco = document.getElementById("edit-preco").value;
    const fabricante = document.getElementById("edit-fabricante").value;
    const estoque = document.getElementById("edit-estoque").value;

    if (!nome || !categoria || !preco || !fabricante || !estoque) {
        alert("Preencha todos os campos!");
        return;
    }

    pecas[editIndex] = {
        nome,
        categoria,
        preco,
        fabricante,
        estoque,
        cor: coresCategoria[categoria]
    };

    localStorage.setItem("pecas", JSON.stringify(pecas));

    fecharModal();
    carregar();
}

function fecharModal() {
    document.getElementById("modal-edit").style.display = "none";
}

// ---------- dark mode ----------
const toggleBtn = document.querySelector(".dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("tema", document.body.classList.contains("dark-mode") ? "dark" : "light");

    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ---------- restaurar tema e iniciar ----------
window.onload = () => {
    criarModal();

    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }

    carregar();
};
