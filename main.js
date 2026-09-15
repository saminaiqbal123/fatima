// Main JavaScript File for Fatima Interior Website

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent to Fatima Interior. We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Newsletter Form Handler
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for subscribing to Fatima Interior newsletter!');
            newsletterForm.reset();
        });
    }

    // Portfolio Filter Setup
    setupGalleryFilters();
});

// Portfolio Filter Setup Function
function setupGalleryFilters() {
    const buttons = document.querySelectorAll('.gallery-btn');
    const items = document.querySelectorAll('.gallery-item');

    if (buttons.length === 0) return;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // 1. تمام بٹنز سے active کلاس ختم کریں
            buttons.forEach(btn => btn.classList.remove('active'));

            // 2. کلک شدہ بٹن پر active کلاس لگائیں
            this.classList.add('active');

            // 3. ڈیٹا کیٹیگری یا بٹن کی آن کلک ویلیو سے کیٹیگری حاصل کریں
            const category = this.getAttribute('data-filter') || this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'all';

            // 4. گیلری ائٹمز کو فلٹر کریں
            filterGallery(category);
        });
    });
}

// Portfolio Filter Function
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
