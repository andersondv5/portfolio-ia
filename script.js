     // Navigation scroll effect
        window.addEventListener('scroll', function () {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 100) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });

        // Mobile menu toggle with smooth animations
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMobileMenu = document.getElementById('close-mobile-menu');

        function openMobileMenu() {
            mobileMenu.classList.remove('hidden');
            // Trigger the animation after a small delay
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0', 'translate-x-full');
                mobileMenu.classList.add('opacity-100', 'translate-x-0');
            }, 50);
        }

        function closeMobileMenuFunc() {
            mobileMenu.classList.remove('opacity-100', 'translate-x-0');
            mobileMenu.classList.add('opacity-0', 'translate-x-full');
            // Hide after transition completes
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 500);
        }

        mobileMenuButton.addEventListener('click', openMobileMenu);
        closeMobileMenu.addEventListener('click', closeMobileMenuFunc);

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', closeMobileMenuFunc);
        });

        // Close mobile menu when pressing Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenuFunc();
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll animations with Intersection Observer
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

        // Observe all elements with fade-in-observer class
        document.querySelectorAll('.fade-in-observer').forEach(el => {
            observer.observe(el);
        });
