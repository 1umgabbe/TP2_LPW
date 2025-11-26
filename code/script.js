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

// Toggle between login and register forms
function toggleAuthForms(event) {
  if (event) event.preventDefault();

  const login = document.getElementById('login-form');
  const register = document.getElementById('register-form');

  // If the explicit forms are present, toggle them and update ARIA attributes.
  if (login && register) {
    const showingLogin = login.classList.contains('ativo');

    login.classList.toggle('ativo');
    register.classList.toggle('ativo');

    login.setAttribute('aria-hidden', showingLogin ? 'true' : 'false');
    register.setAttribute('aria-hidden', showingLogin ? 'false' : 'true');

    if (linkToRegister) linkToRegister.setAttribute('aria-expanded', String(!showingLogin));
    if (linkToLogin) linkToLogin.setAttribute('aria-expanded', String(showingLogin));

    // Move focus to the visible form for keyboard users
    const toFocus = showingLogin ? register.querySelector('input, button, a') : login.querySelector('input, button, a');
    if (toFocus) toFocus.focus();
    return;
  }

  // Fallback: toggle any container classes (maintains backward compatibility)
  const containers = document.querySelectorAll('.login-container');
  containers.forEach(container => container.classList.toggle('ativo'));
}

// Wire up toggle links if they exist on the page
const linkToRegister = document.getElementById('link-to-register');
const linkToLogin = document.getElementById('link-to-login');
if (linkToRegister) linkToRegister.addEventListener('click', toggleAuthForms);
if (linkToLogin) linkToLogin.addEventListener('click', toggleAuthForms);

