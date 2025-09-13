// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainMenu = document.getElementById('mainMenu');

mobileMenuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            mainMenu.classList.remove('show');
            
            // Scroll to element
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Project Counter Animation
const counters = document.querySelectorAll('.counter-number');
const counterSection = document.querySelector('.counter-section');

let hasCounted = false;

function animateCounters() {
    if (hasCounted) return;
    
    const counterSectionPos = counterSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (counterSectionPos < screenPos) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = Math.ceil(target / 100);
            
            if (count < target) {
                counter.innerText = Math.min(count + increment, target);
                setTimeout(() => animateCounters(), 20);
            }
        });
        
        hasCounted = true;
    }
}

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// AI Office Visualization
const generateBtn = document.getElementById('generate-office');
const officePrompt = document.getElementById('office-prompt');
const officeResult = document.getElementById('office-result');
const officeGeneratedImg = document.getElementById('office-generated-img');
const officeLoading = document.getElementById('office-loading');
const saveBtn = document.getElementById('save-office');
const shareBtn = document.getElementById('share-office');
const styleOptions = document.querySelectorAll('.style-option');

let selectedStyle = 'modern';

// Style selection
styleOptions.forEach(option => {
    option.addEventListener('click', () => {
        styleOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        selectedStyle = option.getAttribute('data-style');
    });
});

// Generate office design
generateBtn.addEventListener('click', () => {
    const prompt = officePrompt.value.trim();
    
    if (!prompt) {
        alert('Please describe your office design first');
        return;
    }
    
    // Show loading state
    officeLoading.style.display = 'block';
    officeResult.querySelector('.ai-placeholder').style.display = 'none';
    officeGeneratedImg.style.display = 'none';
    
    // Simulate AI generation (in a real app, this would call an API)
    setTimeout(() => {
        // Hide loading
        officeLoading.style.display = 'none';
        
        // Show result (using a placeholder image for demo)
        const imageUrls = {
            modern: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            minimalist: 'https://images.unsplash.com/photo-1552664197-f9e6e9a6e9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            industrial: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            scandinavian: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        };
        
        officeGeneratedImg.src = imageUrls[selectedStyle];
        officeGeneratedImg.style.display = 'block';
        
    }, 2000);
});

// Save design
saveBtn.addEventListener('click', () => {
    if (!officeGeneratedImg.src) {
        alert('Please generate a design first');
        return;
    }
    
    // Create a temporary link for download
    const link = document.createElement('a');
    link.href = officeGeneratedImg.src;
    link.download = 'arya-enterprises-office-design.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Share design
shareBtn.addEventListener('click', () => {
    if (!officeGeneratedImg.src) {
        alert('Please generate a design first');
        return;
    }
    
    if (navigator.share) {
        navigator.share({
            title: 'My Office Design from ARYA ENTERPRISES',
            text: 'Check out this office design I created with ARYA ENTERPRISES AI Visualization tool',
            url: window.location.href
        })
        .catch(error => {
            console.log('Error sharing:', error);
        });
    } else {
        alert('Web Share API not supported in your browser. You can copy the page URL to share.');
    }
});

// Service page navigation
document.querySelectorAll('a[href^="#service-"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetPage = document.querySelector(targetId);
        const allServicePages = document.querySelectorAll('.service-page');
        
        // Hide all service pages
        allServicePages.forEach(page => {
            page.style.display = 'none';
        });
        
        // Show the selected service page
        if (targetPage) {
            targetPage.style.display = 'block';
            
            // Scroll to the service page
            window.scrollTo({
                top: targetPage.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const inputs = this.querySelectorAll('input, textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (isValid) {
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Hide all service pages initially
    document.querySelectorAll('.service-page').forEach(page => {
        page.style.display = 'none';
    });
    
    // Set up scroll event listeners
    window.addEventListener('scroll', animateCounters);
    
    // Initial check for counters
    animateCounters();
});