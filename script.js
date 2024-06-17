document.addEventListener('DOMContentLoaded', () => {
    const viewImagesIcon = document.getElementById('viewImagesIcon');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');

    if (viewImagesIcon && overlay && closeButton) {
        viewImagesIcon.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });

        closeButton.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = event.target.name.value.trim();
            const email = event.target.email.value.trim();

            if (!name || !email) {
                alert('Please fill in both fields.');
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Thank you for subscribing!');
                event.target.reset();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
        window.addEventListener('scroll', () => {
            const position = reviewsSection.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                reviewsSection.classList.add('visible');
            } else {
                reviewsSection.classList.remove('visible');
            }
        });
    }

    function startCountdown(elementId) {
        const countdownElement = document.getElementById(elementId);
        if (!countdownElement) return;

        function updateCountdown() {
            const now = new Date();
            const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            const timeRemaining = endOfDay - now;

            const hours = Math.floor(timeRemaining / 1000 / 60 / 60);
            const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
            const seconds = Math.floor((timeRemaining / 1000) % 60);

            countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;

            if (timeRemaining <= 0) {
                clearInterval(interval);
                startCountdown(elementId);
            }
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    startCountdown('countdown-hero');
    startCountdown('countdown-newsletter');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const newsletterForm = document.getElementById('newsletter-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (newsletterForm && thankYouMessage) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = event.target.name.value.trim();
            const email = event.target.email.value.trim();
            const phone = event.target.phone.value.trim();
            const address = event.target.address.value.trim();
            const shoeSize = event.target['shoe-size'].value;

            if (!phone.match(/^\d+$/)) {
                alert('Phone number must contain only digits.');
                return;
            }

            alert('Your order has been successfully placed. We will contact you to confirm your order.');
            newsletterForm.reset();
            thankYouMessage.style.display = 'block';
        });
    }
});
