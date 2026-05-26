// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 8, 20, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 8, 20, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Package Modal Functions
function openModal(packageType) {
    const modal = document.getElementById('packageModal');
    const title = document.getElementById('modalPackageTitle');
    const description = document.getElementById('modalPackageDescription');

    let packageInfo = {
        starter: {
            title: 'Starter Package - $149',
            description: 'Perfect for beginners looking to learn the fundamentals of chart reading and Fibonacci techniques.'
        },
        professional: {
            title: 'Professional Package - $297',
            description: 'Our most popular choice! Includes advanced training, live sessions, and community access.'
        },
        master: {
            title: 'Master Package - $597',
            description: 'Complete mastery program with 1-on-1 mentorship and lifetime access to all materials.'
        }
    };

    title.textContent = packageInfo[packageType].title;
    description.textContent = packageInfo[packageType].description;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Chart Modal
function openChartModal() {
    const modal = document.getElementById('chartModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Broker Modal
function openBrokerModal() {
    const modal = document.getElementById('brokerModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});

// Form Submission
document.querySelector('.inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        package: document.getElementById('package').value,
        experience: document.getElementById('experience').value,
        message: document.getElementById('message').value
    };

    // Here you would normally send this to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    
    // Reset form
    this.reset();
});

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.package-card, .stat-card, .about-text, .disclaimer-block').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});

// Floating button visibility
window.addEventListener('scroll', () => {
    const floatingBtn = document.querySelector('.floating-btn');
    if (window.scrollY > 500) {
        floatingBtn.style.display = 'block';
    } else {
        floatingBtn.style.display = 'none';
    }
});
