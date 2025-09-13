// scripts.js

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainMenu = document.getElementById('mainMenu');

mobileMenuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mainMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mainMenu.classList.remove('show');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.getAttribute('href') === '#') return;
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (targetId.startsWith('#service-')) {
            // Hide all service pages
            document.querySelectorAll('.service-page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the selected service page
            document.querySelector(targetId).classList.add('active');
            
            // Scroll to the service page
            window.scrollTo({
                top: document.querySelector(targetId).offsetTop - 80,
                behavior: 'smooth'
            });
        } else if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        header.style.background = 'var(--white)';
    }
    
    // Show/hide back to top button
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Back to top functionality
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form validation and submission
const consultationForm = document.getElementById('consultationForm');
const successMessage = document.getElementById('successMessage');
const formMessage = document.getElementById('formMessage');
const submitBtn = document.getElementById('submitBtn');

// Function to validate form
function validateForm() {
    let isValid = true;
    
    // Reset all error states
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });
    
    // Validate name
    const name = document.getElementById('name').value;
    if (!name.trim()) {
        document.querySelector('#name').closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.querySelector('#email').closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    // Validate phone
    const phone = document.getElementById('phone').value;
    if (!phone.trim()) {
        document.querySelector('#phone').closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    // Validate service
    const service = document.getElementById('service').value;
    if (!service) {
        document.querySelector('#service').closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message').value;
    if (!message.trim()) {
        document.querySelector('#message').closest('.form-group').classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

// Updated Google Sheets URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbwl7qpcAa1qJosuEmEentjtX3iC9pu0CKpxKQWg7QDKItlftjWd39hUHCfh4JB6wzJpIw/exec';

consultationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    formMessage.innerHTML = '';
    formMessage.style.display = 'none';
    
    // Prepare form data as JSON
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Send data to Google Sheets
    fetch(scriptURL, { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Show success message
        successMessage.style.display = 'block';
        consultationForm.reset();
        
        // Also send WhatsApp and email
        const smsBody = `New Consultation Request:%0A%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Service: ${formData.service}%0A
Message: ${formData.message}`;
        
        const subject = `New Consultation Request from ${formData.name}`;
        const emailBody = `Name: ${formData.name}%0D%0A
Email: ${formData.email}%0D%0A
Phone: ${formData.phone}%0D%0A
Service: ${formData.service}%0D%0A%0D%0A
Message:%0D%0A${formData.message}`;
        
        window.open(`mailto:cavnish07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`, '_blank');
        window.open(`https://wa.me/919975146866?text=${encodeURIComponent(smsBody)}`, '_blank');
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Error!', error.message);
        formMessage.innerHTML = `<div class="error-message" style="display:block;">Error submitting form. Please try again later or contact us directly.</div>`;
        formMessage.style.display = 'block';
    })
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Request';
    });
});

// Service page navigation
window.addEventListener('hashchange', function() {
    const hash = window.location.hash;
    if (hash.startsWith('#service-')) {
        // Hide all service pages
        document.querySelectorAll('.service-page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show the selected service page
        document.querySelector(hash).classList.add('active');
        
        // Scroll to the service page
        window.scrollTo({
            top: document.querySelector(hash).offsetTop - 80,
            behavior: 'smooth'
        });
    }
});

// Initialize service pages based on URL hash
if (window.location.hash.startsWith('#service-')) {
    document.querySelector(window.location.hash).classList.add('active');
}

// AI Image Generator Logic
document.getElementById('generate-office').addEventListener('click', function() {
    const prompt = document.getElementById('office-prompt').value;
    if (!prompt) {
        alert('Please enter a description for your office design');
        return;
    }
    
    // Show loading indicator
    document.getElementById('office-loading').style.display = 'block';
    document.querySelector('#office-result .ai-placeholder').style.display = 'none';
    document.getElementById('office-generated-img').style.display = 'none';
    
    // Simulate AI processing time
    setTimeout(() => {
        // Hide loading indicator
        document.getElementById('office-loading').style.display = 'none';
        
        // Get selected style
        const selectedStyle = document.querySelector('.style-option.active').dataset.style;
        
        // In a real implementation, this would call an AI API
        // For demo purposes, we'll use a placeholder image based on style
        const styleImages = {
            'modern': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'minimalist': 'https://images.unsplash.com/photo-1552664197-f9e6e9a6e9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'industrial': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'scandinavian': 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        };
        
        const img = document.getElementById('office-generated-img');
        img.src = styleImages[selectedStyle];
        img.style.display = 'block';
    }, 2000);
});

// Style selection
document.querySelectorAll('.style-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.style-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Style preview click
document.querySelectorAll('.style-preview').forEach(preview => {
    preview.addEventListener('click', function() {
        const style = this.dataset.style;
        
        // Update style selection
        document.querySelectorAll('.style-option').forEach(opt => {
            opt.classList.remove('active');
            if(opt.dataset.style === style) {
                opt.classList.add('active');
            }
        });
        
        // Scroll to AI generator
        document.getElementById('ai').scrollIntoView({ behavior: 'smooth' });
    });
});

// Save design button
document.getElementById('save-office').addEventListener('click', function() {
    const img = document.getElementById('office-generated-img');
    if (!img.src) {
        alert('Please generate a design first');
        return;
    }
    
    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'arya-enterprises-office-design.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Share design button
document.getElementById('share-office').addEventListener('click', function() {
    const img = document.getElementById('office-generated-img');
    if (!img.src) {
        alert('Please generate a design first');
        return;
    }
    
    if (navigator.share) {
        navigator.share({
            title: 'Office Design Visualization',
            text: 'Check out this office design generated by ARYA ENTERPRISES',
            url: img.src
        })
        .catch(error => console.log('Sharing failed', error));
    } else {
        // Fallback for browsers without Web Share API
        const shareWindow = window.open('', '_blank');
        shareWindow.document.write(`
            <html>
            <head>
                <title>Share Design</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
                    img { max-width: 100%; height: auto; margin: 20px 0; border-radius: 8px; }
                </style>
            </head>
            <body>
                <h2>Share Your Design</h2>
                <p>Copy the image URL below or right-click to save:</p>
                <img src="${img.src}" alt="Generated office design">
                <p><textarea style="width:100%; padding:10px; margin:10px 0;" readonly>${img.src}</textarea></p>
            </body>
            </html>
        `);
    }
});

// Portfolio Modal Functionality
const portfolioModal = document.getElementById('portfolioModal');
const modalClose = document.getElementById('modalClose');

// Portfolio project data
const projects = [
    {
        id: 1,
        title: "Modern Office Space",
        subtitle: "Corporate Headquarters",
        description: "We transformed a 5,000 sq ft space into a modern, collaborative workspace for a leading tech company. The project included custom aluminum partitions, ergonomic furniture, and integrated lighting solutions that enhance both aesthetics and functionality.",
        location: "Navi Mumbai",
        size: "5,000 sq ft",
        duration: "8 weeks",
        services: [
            "Aluminum partitions",
            "Modular furniture",
            "Lighting solutions",
            "Flooring installation"
        ],
        images: [
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        title: "Electrical Works",
        subtitle: "Commercial Complex",
        description: "Comprehensive electrical installation for a new commercial complex. Our team implemented a robust electrical system with safety as the top priority, including panel installations, lighting design, and cable management throughout the facility.",
        location: "Mumbai",
        size: "10,000 sq ft",
        duration: "12 weeks",
        services: [
            "Electrical installations",
            "Lighting design",
            "Cable management",
            "Safety systems"
        ],
        images: [
            "https://images.unsplash.com/photo-1581093057305-3fe6ab6c1c78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581092581010-4f0a6c7f4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581092580508-1d0b6f5d8d9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        title: "Warehouse Transformation",
        subtitle: "Logistics Center",
        description: "Complete warehouse makeover for a logistics company. We installed durable epoxy flooring, constructed mezzanine levels for additional storage, and implemented a comprehensive organization system with safety markings and optimized lighting.",
        location: "Taloja",
        size: "20,000 sq ft",
        duration: "10 weeks",
        services: [
            "Epoxy flooring",
            "Mezzanine construction",
            "Safety markings",
            "Industrial lighting"
        ],
        images: [
            "electrical/",
            "electrical/",
            "electrical/",
            "electrical/"
        ]
    }
];

// Open portfolio modal
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const projectId = parseInt(this.dataset.project);
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalSubtitle').textContent = project.subtitle;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('projectLocation').textContent = project.location;
            document.getElementById('projectSize').textContent = project.size;
            document.getElementById('projectDuration').textContent = project.duration;
            
            // Clear and populate services
            const servicesList = document.getElementById('projectServices');
            servicesList.innerHTML = '';
            project.services.forEach(service => {
                const li = document.createElement('li');
                li.textContent = service;
                servicesList.appendChild(li);
            });
            
            // Clear and populate gallery
            const gallery = document.getElementById('modalGallery');
            gallery.innerHTML = '';
            project.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = project.title;
                gallery.appendChild(img);
            });
            
            // Show modal
            portfolioModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close portfolio modal
modalClose.addEventListener('click', function() {
    portfolioModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside content
portfolioModal.addEventListener('click', function(e) {
    if (e.target === portfolioModal) {
        portfolioModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Testimonial Slider
const testimonials = [
    {
        text: "ARYA ENTERPRISES transformed our warehouse with their excellent epoxy flooring and rack systems. Their attention to detail was impressive and the project was completed ahead of schedule. The team was professional and responsive throughout the process.",
        author: "Rahul Sharma",
        company: "Director, Sharma Logistics"
    },
    {
        text: "The office renovation exceeded our expectations. The team at ARYA ENTERPRISES understood our vision perfectly and delivered a workspace that has significantly improved our team's productivity and morale.",
        author: "Priya Patel",
        company: "CEO, Tech Innovations"
    },
    {
        text: "We hired ARYA for electrical work in our new facility. Their licensed professionals ensured everything was up to code and completed efficiently. Their expertise saved us time and potential headaches down the road.",
        author: "Vikram Mehta",
        company: "Operations Manager, Manufacturing Solutions"
    }
];

const testimonialSlides = document.getElementById('testimonialSlides');
const testimonialNav = document.getElementById('testimonialNav');

// Populate testimonials
testimonials.forEach((testimonial, index) => {
    // Create slide
    const slide = document.createElement('div');
    slide.className = 'testimonial-slide';
    slide.innerHTML = `
        <div class="testimonial-text">
            ${testimonial.text}
        </div>
        <div class="testimonial-author">${testimonial.author}</div>
        <div class="testimonial-company">${testimonial.company}</div>
    `;
    testimonialSlides.appendChild(slide);
    
    // Create navigation dot
    const dot = document.createElement('button');
    dot.className = index === 0 ? 'active' : '';
    dot.addEventListener('click', () => {
        goToSlide(index);
    });
    testimonialNav.appendChild(dot);
});

let currentSlide = 0;

function goToSlide(index) {
    currentSlide = index;
    testimonialSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active dot
    document.querySelectorAll('#testimonialNav button').forEach((dot, i) => {
        dot.className = i === currentSlide ? 'active' : '';
    });
}

// Auto slide testimonials
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    goToSlide(currentSlide);
}, 5000);

// Project Counter Animation
const counters = document.querySelectorAll('.counter-number');
const speed = 200;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => {
                const target = +counter.dataset.count;
                const count = +counter.innerText;
                
                if (count < target) {
                    const increment = target / speed;
                    
                    const updateCounter = () => {
                        const current = +counter.innerText;
                        if (current < target) {
                            counter.innerText = Math.ceil(current + increment);
                            setTimeout(updateCounter, 1);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    
                    updateCounter();
                }
            });
            
            // Stop observing after animation starts
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

// Start observing the counter section
observer.observe(document.querySelector('.counter-section'));