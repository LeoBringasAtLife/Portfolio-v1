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
