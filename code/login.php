<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - NextChip</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style/login.css">
</head>

<body>

    <div class="auth-wrapper">
    <div id="login-form" class="login-container ativo" aria-hidden="false">
        <div class="logo"><a href="introduction.html">NextChip</a></div>
        <h2>Entrar</h2>
        <form action="login_register.php" method="post">
            <div class="form-group">
                <label for="login-email" class="text">Email</label>
                <input type="email" id="login-email" name="email" placeholder="Digite seu email" required>
            </div>
            <div class="form-group">
                <label for="login-password" class="text">Senha</label>
                <input type="password" id="login-password" name="password" placeholder="Digite sua senha" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <div class="outros-links-container">
            <span class="outros-links">
                <a href="#"> Recuperar Senha</a>
            </span>
            <span class="outros-links">
                <a href="#" id="link-to-register" aria-controls="register-form" aria-expanded="false"> Cadastre-se </a>
            </span>
        </div>
    </div>

    <div id="register-form" class="login-container" aria-hidden="true">
        <h2>Cadastro</h2>
        <form>
            <div class="form-group">
                <label for="register-name" class="text">Nome</label>
                <input type="text" id="register-name" name="name" placeholder="Seu nome..." required>
            </div>
            <div class="form-group">
                <label for="register-email" class="text">Email</label>
                <input type="email" id="register-email" name="email" placeholder="Digite seu email" required>
            </div>
            <div class="form-group">
                <label for="register-password" class="text">Senha</label>
                <input type="password" id="register-password" name="password" placeholder="Digite sua senha" required>
            </div>
            <div class="form-group">
                <label for="register-confirm-password" class="text">Confirme a Senha</label>
                <input type="password" id="register-confirm-password" name="confirm-password" placeholder="Confirme sua senha"
                    required>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
        <div class="outros-links-container">
            <span class="outros-links">
                <a href="#"> Recuperar Senha</a>
            </span>
            <span class="outros-links">
                <a href="#" id="link-to-login" aria-controls="login-form" aria-expanded="false">Já tem uma conta? Faça login</a>
            </span>
        </div>
    </div>
    </div>
    <script src="script.js"></script>
</body>

</html>