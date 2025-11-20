// ============================
// NAVIGATION SCROLL EFFECT
// ============================
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled', 'py-3');
    } else {
        nav.classList.remove('nav-scrolled', 'py-3');
    }
});

// ============================
// MOBILE MENU FUNCTIONALITY
// ============================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenu || !mobileMenuButton) return;

    // Abrir/fechar menu mobile
    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });

    // Fechar menu ao clicar em links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!mobileMenu.classList.contains('hidden')) {
            const clickInsideMenu = mobileMenu.contains(event.target);
            const clickOnButton = mobileMenuButton.contains(event.target);
            if (!clickInsideMenu && !clickOnButton) {
                mobileMenu.classList.add('hidden');
            }
        }
    });

    // Fechar menu com ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Evitar que cliques dentro do menu fechem ele
    mobileMenu.addEventListener('click', (e) => e.stopPropagation());
});

// ============================
// SMOOTH SCROLLING
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-observer').forEach(el => {
    observer.observe(el);
});
