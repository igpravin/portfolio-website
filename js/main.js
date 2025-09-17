/**
 * Creative Portfolio Website
 * Main JavaScript functionality
 */

// Portfolio data
const portfolioData = [
    {
        id: 1,
        title: "To-Do List Web App",
        category: "web",
        description: "A simple web-based to-do list that allows users to add, delete, and mark tasks as complete with dynamic interaction and local storage",
        image: "assets/images/projects/todo-app.svg",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        category: "web",
        description: "A responsive personal portfolio website showcasing skills, projects, and contact information with modern design",
        image: "assets/images/projects/portfolio-website-simple.svg",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "My Notes App",
        category: "web",
        description: "A web-based notes application that allows users to add, delete, and mark tasks as complete with local storage functionality",
        image: "assets/images/projects/notes-app.svg",
        technologies: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#"
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

    // Render portfolio items
    function renderPortfolioItems() {
        portfolioGrid.innerHTML = '';
        
        portfolioData.forEach(item => {
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
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, #ff6b35, #ff8c42)';">
            </div>
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="portfolio-technologies">
                    ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        return portfolioItem;
    }

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
    const animateElements = document.querySelectorAll('.skill-item, .skill-card, .section-header');
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Initialize skill progress bars animation
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillProgressBars.forEach(bar => {
        skillObserver.observe(bar);
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
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin: 0;
        }
        .tech-tag {
            display: inline-block;
            background: rgba(255, 107, 53, 0.1);
            color: var(--accent-color);
            padding: 0.25rem 0.6rem;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid rgba(255, 107, 53, 0.2);
            transition: all 0.2s ease;
        }
        .tech-tag:hover {
            background: rgba(255, 107, 53, 0.15);
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