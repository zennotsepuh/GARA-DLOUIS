// Initialize GARA DLOUIS
document.addEventListener('DOMContentLoaded', () => {
    console.log('Garaa Dlouis initialized');
    
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Typing effect
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const originalText = typingText.textContent;
        typingText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                typingText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        typeWriter();
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Buy button handler
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.product-card');
            const productName = card.querySelector('h3').textContent;
            const price = card.querySelector('.price').textContent;
            
            // Redirect to WhatsApp with product info
            const phone = '6282122997137';
            const message = `Halo, saya ingin membeli ${productName} (${price})`;
            const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            
            window.open(waLink, '_blank');
        });
    });
    
    // Particle effect
    createParticles();
});

function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00ff88;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 5 + 3}s infinite linear;
            opacity: ${Math.random() * 0.5};
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
`;
document.head.appendChild(style);
