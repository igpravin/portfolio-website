/**
 * Creative Portfolio Website
 * Main JavaScript functionality
 */

// Portfolio data
const portfolioData = [
    {
        id: 1,
        title: "E-commerce Platform",
        category: "web",
        description: "Modern e-commerce solution with React and Node.js",
        image: "https://via.placeholder.com/400x250/6366f1/ffffff?text=E-commerce+Platform",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "mobile",
        description: "Secure banking application for iOS and Android",
        image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Banking+App",
        technologies: ["React Native", "TypeScript", "Firebase"]
    },
    {
        id: 3,
        title: "Brand Identity Design",
        category: "branding",
        description: "Complete brand identity for tech startup",
        image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Brand+Identity",
        technologies: ["Figma", "Illustrator", "Photoshop"]
    },
    {
        id: 4,
        title: "Restaurant Website",
        category: "web",
        description: "Responsive website for local restaurant chain",
        image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Restaurant+Site",
        technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
        id: 5,
        title: "Fitness Tracking App",
        category: "mobile",
        description: "Health and fitness tracking mobile application",
        image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Fitness+App",
        technologies: ["Flutter", "Dart", "SQLite"]
    },
    {
        id: 6,
        title: "Corporate Branding",
        category: "branding",
        description: "Rebranding project for financial services company",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Corporate+Brand",
        technologies: ["Adobe Creative Suite", "Sketch"]
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializePortfolio();
    initializeContactForm();
    initializeScrollEffects();
    initializeAnimations();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Portfolio functionality
 */
function initializePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Render portfolio items
    function renderPortfolioItems(items = portfolioData) {
        portfolioGrid.innerHTML = '';
        
        items.forEach(item => {
            const portfolioItem = createPortfolioItem(item);
            portfolioGrid.appendChild(portfolioItem);
        });

        // Add animation delay to items
        const portfolioItems = portfolioGrid.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('animate-fade-in-up');
        });
    }

    // Create portfolio item element
    function createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item portfolio-${item.category}`;
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="portfolio-item-overlay">
                <div class="portfolio-item-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="portfolio-technologies">
                        ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        // Add click event for modal (future enhancement)
        portfolioItem.addEventListener('click', function() {
            console.log(`Opening project: ${item.title}`);
            // Future: Open modal with project details
        });

        return portfolioItem;
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            if (filter === 'all') {
                renderPortfolioItems(portfolioData);
            } else {
                const filteredItems = portfolioData.filter(item => item.category === filter);
                renderPortfolioItems(filteredItems);
            }
        });
    });

    // Initial render
    renderPortfolioItems();
}

/**
 * Contact form functionality
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Simulate form submission
        console.log('Form submitted:', formObject);
        
        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

/**
 * Scroll effects and animations
 */
function initializeScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-item, .service-card, .section-header');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize animations
 */
function initializeAnimations() {
    // Add CSS for tech tags
    const style = document.createElement('style');
    style.textContent = `
        .portfolio-technologies {
            margin-top: 1rem;
        }
        .tech-tag {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 1rem;
            font-size: 0.8rem;
            margin: 0.25rem 0.25rem 0 0;
            backdrop-filter: blur(10px);
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');

        if (hero && window.innerWidth > 768) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            if (heroContent) heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
            if (heroImage) heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Utility functions
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add notification styles
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 2rem;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            border-left: 4px solid #6366f1;
        }
        .notification.notification-success {
            border-left-color: #10b981;
        }
        .notification.notification-error {
            border-left-color: #ef4444;
        }
        .notification.show {
            transform: translateX(0);
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        .notification-close:hover {
            color: #333;
        }
        @media (max-width: 768px) {
            .notification {
                right: 1rem;
                left: 1rem;
                transform: translateX(0) translateY(-100px);
            }
            .notification.show {
                transform: translateX(0) translateY(0);
            }
        }
    `;

    // Add styles to head if not already present
    if (!document.querySelector('#notification-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'notification-styles';
        styleElement.textContent = notificationStyles;
        document.head.appendChild(styleElement);
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto remove
    const autoRemove = setTimeout(() => {
        removeNotification(notification);
    }, 5000);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Smooth scroll polyfill for older browsers
if (!window.CSS || !CSS.supports('scroll-behavior', 'smooth')) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    script.onload = function() {
        window.__forceSmoothScrollPolyfill__ = true;
        window.smoothscroll.polyfill();
    };
    document.head.appendChild(script);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Any expensive scroll operations can go here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Loading state management
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Hide loading spinner if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

console.log('✨ Creative Portfolio loaded successfully!');