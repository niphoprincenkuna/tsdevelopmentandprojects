// TS DEVELOPMENTS AND PROJECTS - JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ============================================
    // PARTICLES EFFECT (Hero Background)
    // ============================================
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(46, 143, 214, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;

        particlesContainer.appendChild(particle);
    }

    // Add float animation keyframes dynamically
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
                opacity: 0.3;
            }
            25% {
                transform: translateY(-30px) translateX(10px);
                opacity: 0.6;
            }
            50% {
                transform: translateY(-15px) translateX(-10px);
                opacity: 0.4;
            }
            75% {
                transform: translateY(-40px) translateX(5px);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(styleSheet);

    // ============================================
    // HERO ANIMATIONS ON LOAD
    // ============================================
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons, .hero-stats');

    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 400 + (index * 200));
    });

    // ============================================
    // ANIMATED COUNTER
    // ============================================
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });

        countersAnimated = true;
    }

    // ============================================
    // SCROLL REVEAL
    // ============================================
    const revealElements = document.querySelectorAll(
        '.service-card, .pricing-card, .feature-item, .section-header, .why-content, .why-image, .cta-content'
    );

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach((el, index) => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });

        // Trigger counter animation when stats are visible
        const statsSection = document.querySelector('.hero-stats');
        if (statsSection) {
            const statsTop = statsSection.getBoundingClientRect().top;
            if (statsTop < windowHeight - 50) {
                animateCounters();
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ============================================
    // SERVICE CARD STAGGERED ANIMATION
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // ============================================
    // PRICING CARD STAGGERED ANIMATION
    // ============================================
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // ============================================
    // FEATURE ITEM STAGGERED ANIMATION
    // ============================================
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // ============================================
    // NAVBAR LINK ACTIVE STATE ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === 'index.html' && !current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ============================================
    // PARALLAX EFFECT ON HERO
    // ============================================
    const heroBg = document.querySelector('.hero-bg');

    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // ============================================
    // BUTTON RIPPLE EFFECT
    // ============================================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: ${x - 50}px;
                top: ${y - 50}px;
            `;

            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple keyframes
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ============================================
    // TYPING EFFECT FOR HERO TITLE (Optional Enhancement)
    // ============================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');

        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            line.style.opacity = '1';

            let charIndex = 0;
            const typeDelay = index === 0 ? 600 : 1200;

            setTimeout(() => {
                const typeInterval = setInterval(() => {
                    if (charIndex < text.length) {
                        line.textContent += text[charIndex];
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                    }
                }, 40);
            }, typeDelay);
        });
    }

    console.log('TS Developments and Projects - Website loaded successfully!');
});
