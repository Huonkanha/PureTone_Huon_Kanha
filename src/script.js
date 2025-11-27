
// Sticky Navbar on Scroll
const navbar = document.getElementById('navbar');
        
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('change', function() {
    if (this.checked) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});

// Close menu 
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.checked = false;
        mobileMenu.classList.add('hidden');
    });
});

// Carousel Feedback
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.remove('hidden');
            testimonial.style.opacity = '1';
        } else {
            testimonial.classList.add('hidden');
            testimonial.style.opacity = '0';
        }
    });
    
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove('w-3', 'bg-purple-500/30');
            dot.classList.add('w-8', 'bg-purple-500');
        } else {
            dot.classList.remove('w-8', 'bg-purple-500');
            dot.classList.add('w-3', 'bg-purple-500/30');
        }
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showTestimonial(currentIndex);
    });
});

setInterval(nextTestimonial, 5000);
