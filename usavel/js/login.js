function login() {
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");

    if (!user || !pass) return;
    
    const u = user.value.trim();
    const p = pass.value.trim();

    if (!u || !p) {
        alert("Por favor, preencha usuário e senha.");
        return;
    }

    localStorage.setItem("usuario", u);
    localStorage.setItem("senha", p);

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }

    window.location.href = "app.html";
}
