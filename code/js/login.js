function login() {
    const user = document.getElementById("login-email");
    const pass = document.getElementById("login-password");

    if (!user || !pass) return; // evita erro no index

    const u = user.value.trim();
    const p = pass.value.trim();

    if (!u || !p) {
        alert("Por favor, preencha usuário e senha.");
        return;
    }

    localStorage.setItem("usuario", u);
    localStorage.setItem("senha", p);
    window.location.href = "app.html";

}
