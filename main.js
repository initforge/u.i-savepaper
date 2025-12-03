// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 80) {
        navbar.classList.add('navbar--scrolled');
    } else {
        navbar.classList.remove('navbar--scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

if (navbarToggle) {
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        
        // Animate menu
        if (navbarMenu.classList.contains('active')) {
            gsap.fromTo(navbarMenu, 
                { 
                    opacity: 0, 
                    y: -20 
                },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.3, 
                    ease: "power2.out" 
                }
            );
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbarMenu.classList.remove('active');
        }
    });
});

// Navbar active state on scroll
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.navbar__link');

function updateActiveNav() {
    let current = '';
    const scrollY = window.pageYOffset;
    const offset = 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Hero animations
gsap.from('.hero__subheading', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2
});

gsap.from('.hero__heading', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4
});

gsap.from('.hero__description', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.6
});

gsap.from('.hero__buttons', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.8
});

gsap.from('.hero__image', {
    opacity: 0,
    scale: 0.9,
    rotation: -5,
    duration: 1.2,
    delay: 0.6,
    ease: "back.out(1.7)"
});

// About section animations
gsap.utils.toArray('.about__text').forEach(element => {
    gsap.fromTo(element, 
        {
            opacity: 0,
            x: -50
        },
        {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none play none"
            },
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    );
});

gsap.utils.toArray('.about__right').forEach(element => {
    gsap.fromTo(element,
        {
            opacity: 0,
            x: 50
        },
        {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none play none"
            },
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out"
        }
    );
});

// Activities cards stagger animation
gsap.utils.toArray('.activity-card').forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            y: 50
        },
        {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none play none"
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out"
        }
    );
});

// Features section animations
gsap.fromTo('.features__text',
    {
        opacity: 0,
        x: -30
    },
    {
        scrollTrigger: {
            trigger: '.features__text',
            start: "top 80%",
            toggleActions: "play none play none"
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
    }
);

gsap.fromTo('.polaroid-stack',
    {
        opacity: 0,
        x: 100
    },
    {
        scrollTrigger: {
            trigger: '.polaroid-stack',
            start: "top 80%",
            toggleActions: "play none play none"
        },
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "back.out(1.2)"
    }
);

// Reviews stagger animation
gsap.utils.toArray('.review-card').forEach((card, index) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
        },
        {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none play none"
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out"
        }
    );
});

// Signup form animation
gsap.fromTo('.signup__form-wrapper',
    {
        opacity: 0,
        scale: 0.95
    },
    {
        scrollTrigger: {
            trigger: '.signup__form-wrapper',
            start: "top 80%",
            toggleActions: "play none play none"
        },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out"
    }
);

// Contact section animations
gsap.fromTo('.contact__map',
    {
        opacity: 0,
        scale: 0.95
    },
    {
        scrollTrigger: {
            trigger: '.contact__map',
            start: "top 80%",
            toggleActions: "play none play none"
        },
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
    }
);

gsap.utils.toArray('.contact__logo').forEach((logo, index) => {
    gsap.fromTo(logo,
        {
            opacity: 0,
            rotation: -10 + (index * 5),
            scale: 0.8
        },
        {
            scrollTrigger: {
                trigger: logo,
                start: "top 85%",
                toggleActions: "play none play none"
            },
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.5)"
        }
    );
});

// Form handling
const signupForm = document.getElementById('signupForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Show/hide "other activity" textarea
const activityOtherCheckbox = document.getElementById('activityOther');
const otherActivityTextarea = document.getElementById('otherActivity');

if (activityOtherCheckbox) {
    activityOtherCheckbox.addEventListener('change', function() {
        if (this.checked) {
            otherActivityTextarea.style.display = 'block';
            gsap.from(otherActivityTextarea, {
                opacity: 0,
                height: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        } else {
            gsap.to(otherActivityTextarea, {
                opacity: 0,
                height: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    otherActivityTextarea.style.display = 'none';
                }
            });
        }
    });
}

// Form validation and submission
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        
        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        nameInput.style.borderColor = '#E8F5E9';
        emailInput.style.borderColor = '#E8F5E9';
        
        let isValid = true;
        
        // Validate name
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Vui lòng nhập họ và tên';
            nameInput.style.borderColor = '#E53935';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Vui lòng nhập email';
            emailInput.style.borderColor = '#E53935';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Email không hợp lệ';
            emailInput.style.borderColor = '#E53935';
            isValid = false;
        }
        
        if (!isValid) {
            // Shake animation for error
            gsap.to(signupForm, {
                x: -10,
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                ease: "power2.inOut"
            });
            return;
        }
        
        // Collect form data
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            phone: document.getElementById('phone').value,
            class: document.getElementById('class').value,
            activities: Array.from(document.querySelectorAll('input[name="activity"]:checked')).map(cb => cb.value),
            otherActivity: otherActivityTextarea.value,
            message: document.getElementById('message').value
        };
        
        // Log to console (for demo)
        console.log('Form submitted:', formData);
        
        // Hide form and show thank you panel with animation
        const thankYouPanel = document.getElementById('thankYouPanel');
        
        // Animate form out
        gsap.to(signupForm, {
            opacity: 0,
            scale: 0.9,
            y: -20,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                signupForm.classList.add('hidden');
                thankYouPanel.style.display = 'flex';
                
                // Animate thank you panel in
                gsap.fromTo(thankYouPanel, 
                    {
                        opacity: 0,
                        scale: 0.8,
                        y: 30
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "back.out(1.2)"
                    }
                );
                thankYouPanel.classList.add('show');
            }
        });
    });
}

// Toast animation on show
const toastObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (toast.classList.contains('show')) {
                gsap.fromTo(toast,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
                );
            } else {
                gsap.to(toast, {
                    y: 50,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        }
    });
});

if (toast) {
    toastObserver.observe(toast, { attributes: true });
}

// Footer back to top button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Card hover effects (3D tilt)
document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        gsap.to(card, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(card, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            ease: "power2.out"
        });
    });
});

// Review card interactions
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(card.querySelector('.review-card__text'), {
            duration: 0.3,
            color: '#2E7D32',
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(card.querySelector('.review-card__text'), {
            duration: 0.3,
            color: '#555',
            ease: "power2.out"
        });
    });
});

// Form input interactions
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    
    input.addEventListener('blur', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            gsap.to(this, {
                borderColor: '#81C784',
                duration: 0.3,
                ease: "power2.out"
            });
        }
    });
});

// Checkbox interactions
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-label');
        if (this.checked) {
            gsap.fromTo(label,
                { scale: 1 },
                { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out" }
            );
        }
    });
});

// Submit another button
const submitAnotherBtn = document.getElementById('submitAnother');
if (submitAnotherBtn) {
    submitAnotherBtn.addEventListener('click', function() {
        const thankYouPanel = document.getElementById('thankYouPanel');
        const signupForm = document.getElementById('signupForm');
        
        // Animate thank you panel out
        gsap.to(thankYouPanel, {
            opacity: 0,
            scale: 0.8,
            y: 30,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                thankYouPanel.style.display = 'none';
                thankYouPanel.classList.remove('show');
                signupForm.classList.remove('hidden');
                
                // Reset form
                signupForm.reset();
                otherActivityTextarea.style.display = 'none';
                
                // Animate form in
                gsap.fromTo(signupForm,
                    {
                        opacity: 0,
                        scale: 0.9,
                        y: -20
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "back.out(1.2)"
                    }
                );
            }
        });
    });
}

// Contact logo hover shake
document.querySelectorAll('.contact__logo').forEach(logo => {
    logo.addEventListener('mouseenter', function() {
        gsap.to(logo, {
            rotation: gsap.utils.random(-3, 3),
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    });
});

