// Toggle Theme (Dark/Light Mode) - Script compartido
// Este script puede ser usado en cualquier página del sitio

(function () {
  const btnToggleTheme = document.getElementById('btn-toggle-theme');

  if (!btnToggleTheme) return;

  const themeIcon = btnToggleTheme.querySelector('.material-icons');
  const themeText = btnToggleTheme.querySelector('.toggle-text');

  // Función para aplicar el tema
  function applyTheme(isDark) {
    if (isDark) {
      document.body.classList.add('dark-mode');
      if (themeIcon) themeIcon.textContent = 'light_mode';
      if (themeText) themeText.textContent = 'Modo claro';
      btnToggleTheme.setAttribute('aria-label', 'Cambiar a modo claro');
      btnToggleTheme.setAttribute('aria-pressed', 'true');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      if (themeIcon) themeIcon.textContent = 'dark_mode';
      if (themeText) themeText.textContent = 'Modo oscuro';
      btnToggleTheme.setAttribute('aria-label', 'Cambiar a modo oscuro');
      btnToggleTheme.setAttribute('aria-pressed', 'false');
      localStorage.setItem('theme', 'light');
    }
  }

  // Cargar tema guardado o detectar preferencia del sistema
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      applyTheme(savedTheme === 'dark');
    } else {
      // Si no hay preferencia guardada, usar la del sistema
      applyTheme(prefersDark);
    }
  }

  // Inicializar tema al cargar la página
  initTheme();

  // Toggle al hacer clic en el botón
  btnToggleTheme.addEventListener('click', function () {
    const isDark = document.body.classList.contains('dark-mode');
    applyTheme(!isDark);
  });
})();

