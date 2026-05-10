// Smooth scrolling to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Add floating hearts dynamically
    createFloatingHearts();
    
    // Navbar scroll effect (if needed later)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.5;
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
});

// Create multiple floating hearts
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💝'][Math.floor(Math.random() * 4)];
        heart.style.position = 'absolute';
        heart.style.fontSize = (12 + Math.random() * 16) + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (15 + Math.random() * 15) + 's';
        heart.style.animationDelay = Math.random() * 20 + 's';
        heart.style.opacity = 0.6 + Math.random() * 0.4;
        heartsContainer.appendChild(heart);
    }
}

// Add gentle mouse parallax effect to hero
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    hero.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener('mouseleave', () => {
    document.querySelector('.hero').style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

const music = document.getElementById("bg-music");

window.addEventListener("click", () => {
    music.play();
}, { once: true });