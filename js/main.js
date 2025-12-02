// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Enhanced smooth scroll and active link management
const sections = document.querySelectorAll('section');
const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
        });
    }
};

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Update active link based on scroll position
function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 100; // Add offset for better UX
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Add smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        scrollToSection(targetId);
    });
});

// Update active link on scroll with debounce
window.addEventListener('scroll', debounce(updateActiveLink));

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveLink();
});

// Enhanced Carousel functionality
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Initialize carousel
function initCarousel() {
    // Set initial active states
    showSlide(0);
    startAutoSlide();
    
    // Add event listeners for controls
    prevBtn.addEventListener('click', () => {
        changeSlide(-1);
        resetAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        changeSlide(1);
        resetAutoSlide();
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
            resetAutoSlide();
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
            resetAutoSlide();
        }
    });
    
    // Add swipe support for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.querySelector('.carousel').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.querySelector('.carousel').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to trigger slide change
    const swipeDistance = touchStartX - touchEndX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            changeSlide(1); // Swipe left - next slide
        } else {
            changeSlide(-1); // Swipe right - previous slide
        }
        resetAutoSlide();
    }
}

function showSlide(n) {
    // Wrap around to first/last slide if needed
    currentSlide = (n + slides.length) % slides.length;
    
    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
        slide.style.opacity = index === currentSlide ? '1' : '0';
    });
    
    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function currentSlideFunc(n) {
    showSlide(n);
    resetAutoSlide();
}

function startAutoSlide() {
    // Clear any existing interval
    if (slideInterval) clearInterval(slideInterval);
    
    // Set new interval
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 8000); // 8 seconds per slide
}

function resetAutoSlide() {
    startAutoSlide();
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Product modal data
const productData = {
    grp: {
        title: 'SUNNIK GRP Panel Tanks',
        description: 'Glass Reinforced Polymer (GRP) combines strength, durability, and light weight, making it the material of choice in industries that demand reliability. Sunnik has perfected this technology to create GRP Sectional Panel Tanks that outperform traditional storage methods.',
        features: [
            'Modular, hygienic, weather and disaster-resistant design',
            '6X Safety Factor for exceptional reliability',
            'Compliance with Global Quality Standards: BS EN 13280, SS245:2014, and WRAS BS6920:2014',
            'Superior insulation - thermal conductivity 240× lower than steel',
            'Optional 25mm or 50mm polyurethane foam for energy efficiency',
            'Lightweight yet extremely strong construction',
            'Keeps water stable in extreme KSA climates',
            'Long service life with minimal maintenance'
        ],
        applications: [
            'Potable water storage',
            'Industrial process water',
            'Commercial buildings',
            'Fire protection systems',
            'Agricultural irrigation',
            'Residential complexes'
        ],
        specifications: {
            'Material': 'Glass Reinforced Polymer (GRP)',
            'Safety Factor': '6X',
            'Insulation': '240× better than steel',
            'Standards': 'BS EN 13280, SS245:2014, WRAS BS6920:2014',
            'Design': 'Modular Sectional Panels',
            'Climate Adaptability': 'Extreme temperature resistant'
        }
    },
    hdg: {
        title: 'SUNNIK HDG Steel Panel Tanks',
        description: 'Hot-Dip Galvanized (HDG) Steel is renowned for its exceptional strength, durability, and corrosion resistance, making it a trusted material for heavy-duty industrial and infrastructure applications. Sunnik leverages this proven technology to deliver HDG Steel Sectional Tanks that offer robust and reliable water storage solutions.',
        features: [
            'High-strength, long-lasting construction',
            'Exceptional corrosion resistance',
            'Adaptable to wide range of applications',
            'Resilient against mechanical stress',
            'Suitable for demanding site conditions',
            'Modular panel construction for flexibility',
            'Proven performance in harsh environments',
            'Ideal for large-scale storage projects'
        ],
        applications: [
            'Large-scale potable water storage',
            'Industrial liquid storage',
            'Municipal water supply',
            'Infrastructure projects',
            'Commercial facilities',
            'Fire protection reserves'
        ],
        specifications: {
            'Material': 'Hot-Dip Galvanized Steel',
            'Application': 'Heavy-duty industrial & infrastructure',
            'Design': 'Modular Sectional Panels',
            'Strength': 'Superior mechanical resistance',
            'Scalability': 'Large-scale storage capacity',
            'Durability': 'Long-lasting performance'
        }
    },
    ss: {
        title: 'SUNNIK Stainless Steel Panel Tanks (SS304, SS316, SS444)',
        description: 'Hygienic & Durable: Engineered for superior corrosion resistance and long-term performance, Sunnik Stainless Steel Tanks ensure safe, reliable storage for potable water and industrial applications. Stringent manufacturing using dedicated stainless-steel equipment ensures top-quality panels free from contamination by corrosion-prone metals.',
        features: [
            'NSF61/ANSI/CAN and FDA food-safe certified',
            'Fully compliant with AISI standards',
            'First in Malaysia with SPAN approval for municipal water use',
            'SS304, SS316, and SS444 grade options',
            'Contamination-free manufacturing process',
            'Superior corrosion resistance',
            'Long-term hygienic performance',
            'Proven in iconic projects like Burj Khalifa and Tadawul Tower'
        ],
        applications: [
            'Potable water storage',
            'Industrial applications',
            'Pharmaceutical facilities',
            'Food & beverage industry',
            'Municipal water systems',
            'High-rise buildings'
        ],
        specifications: {
            'Material': 'SS304, SS316, SS444 Grade',
            'Certifications': 'NSF61/ANSI/CAN, FDA, AISI',
            'Special Approval': 'SPAN certified for municipal use',
            'Manufacturing': 'Dedicated stainless-steel equipment',
            'Quality': 'Contamination-free panels',
            'Notable Projects': 'Burj Khalifa (UAE), Tadawul Tower (KSA)'
        }
    }
};

// Open product modal
function openProduct(productType) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const product = productData[productType];
    
    if (!product) return;
    
    let html = `
        <h2 style="color: var(--primary-color); margin-bottom: 1.5rem;">${product.title}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.8;">${product.description}</p>
        
        <h3 style="color: var(--dark-color); margin-bottom: 1rem; font-size: 1.5rem;">Key Features</h3>
        <ul style="list-style: none; margin-bottom: 2rem;">
            ${product.features.map(feature => `
                <li style="padding: 0.5rem 0; display: flex; align-items: center;">
                    <i class="fas fa-check-circle" style="color: var(--primary-color); margin-right: 1rem;"></i>
                    ${feature}
                </li>
            `).join('')}
        </ul>
        
        <h3 style="color: var(--dark-color); margin-bottom: 1rem; font-size: 1.5rem;">Applications</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            ${product.applications.map(app => `
                <div style="padding: 1rem; background: var(--light-color); border-radius: 10px; text-align: center;">
                    <i class="fas fa-water" style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-weight: 500;">${app}</p>
                </div>
            `).join('')}
        </div>
        
        <h3 style="color: var(--dark-color); margin-bottom: 1rem; font-size: 1.5rem;">Technical Specifications</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
            ${Object.entries(product.specifications).map(([key, value]) => `
                <tr style="border-bottom: 1px solid #e5e7eb;">
                    <td style="padding: 1rem; font-weight: 600; color: var(--dark-color);">${key}</td>
                    <td style="padding: 1rem; color: var(--text-color);">${value}</td>
                </tr>
            `).join('')}
        </table>
        
        <div style="text-align: center;">
            <a href="downloads/${productType}-catalog.pdf" class="btn btn-primary" download style="display: inline-flex; margin-right: 1rem;">
                <i class="fas fa-file-pdf"></i> Download Catalog
            </a>
            <a href="#contact" class="btn btn-secondary" onclick="closeProduct()" style="display: inline-flex;">
                <i class="fas fa-envelope"></i> Request Quote
            </a>
        </div>
    `;
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close product modal
function closeProduct() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeProduct();
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .stat-item, .cert-card, .partner-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Smooth scroll behavior for all anchor links
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
