document.addEventListener('DOMContentLoaded', () => {
    // Set Current Year
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar Scroll Effect
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Mobile Menu
    const menuBtn = document.getElementById('menu-btn');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');

    if (menuBtn && sideNav && closeBtn) {
        menuBtn.addEventListener('click', () => sideNav.classList.add('open'));
        closeBtn.addEventListener('click', () => sideNav.classList.remove('open'));
    }

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Reveal animations
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((el) => {
            gsap.from(el, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Parallax Effect for Hero Image (Homepage)
        const heroImg = document.getElementById("hero-img");
        if (heroImg) {
            gsap.to(heroImg, {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero",
                    scrub: true
                }
            });
        }
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            if (header) {
                header.addEventListener('click', () => {
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });

                    // Toggle current item
                    item.classList.toggle('active');
                });
            }
        });
    }
});
