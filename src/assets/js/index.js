// Smooth scroll para anclas
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Cerrar menú móvil si está abierto
        const menu = document.getElementById('menu');
        const overlay = document.getElementById('menu-overlay');
        if (menu) menu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      }
    }
  });
});

// Menú Móvil
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menu-overlay');

if (menuToggle && menu && menuOverlay) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  });

  menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
  });
}

// Modal CV Preview
const btnVerCv = document.getElementById('btn-ver-cv');
const modalCv = document.getElementById('modal-cv');
const closeBtnCv = document.getElementById('close-modal-cv');

if (btnVerCv && modalCv && closeBtnCv) {
  btnVerCv.onclick = function () {
    modalCv.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  closeBtnCv.onclick = function () {
    modalCv.classList.remove('active');
    document.body.style.overflow = '';
  };

  modalCv.onclick = function (e) {
    if (e.target === modalCv) {
      modalCv.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
}

// Toggle Theme (Dark/Light Mode)
const btnToggleTheme = document.getElementById('btn-toggle-theme');

if (btnToggleTheme) {
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
}
