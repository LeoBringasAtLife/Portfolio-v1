// Menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    const isExpanded = menu.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);

    // Animación del botón hamburguesa
    const dots = menuToggle.querySelectorAll('.menu-dot');
    if (isExpanded) {
        dots[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        dots[1].style.opacity = '0';
        dots[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        dots[0].style.transform = 'none';
        dots[1].style.opacity = '1';
        dots[2].style.transform = 'none';
    }
});

// Cerrar menú al hacer click en un enlace
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');

        const dots = menuToggle.querySelectorAll('.menu-dot');
        dots[0].style.transform = 'none';
        dots[1].style.opacity = '1';
        dots[2].style.transform = 'none';
    });
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');

        const dots = menuToggle.querySelectorAll('.menu-dot');
        dots[0].style.transform = 'none';
        dots[1].style.opacity = '1';
        dots[2].style.transform = 'none';
    }
});

// Smooth scroll para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animación de entrada para las cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las cards
document.querySelectorAll('.card-proyecto').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});