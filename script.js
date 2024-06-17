document.addEventListener('DOMContentLoaded', (event) => {
    const viewImagesIcon = document.getElementById('viewImagesIcon');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');

    // Thêm sự kiện click cho biểu tượng
    viewImagesIcon.addEventListener('click', function() {
        overlay.style.display = 'flex'; // Hiển thị overlay với hình ảnh phụ
    });

    // Thêm sự kiện click cho nút đóng
    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none'; // Ẩn overlay
    });

    // Thêm mã JavaScript của bạn cho biểu mẫu đăng ký (signup form)
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = event.target.name.value.trim();
        const email = event.target.email.value.trim();

        if (name === '' || email === '') {
            alert('Please fill in both fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for subscribing!');
            event.target.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

});

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var reviewsSection = document.getElementById('reviews');
        var position = reviewsSection.getBoundingClientRect();

        // Checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
            reviewsSection.classList.add('visible');
        } else {
            reviewsSection.classList.remove('visible');
        }
    });
});
function startCountdown(elementId) {
    const countdownElement = document.getElementById(elementId);

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

document.addEventListener("DOMContentLoaded", function() {
    startCountdown('countdown-hero');
    startCountdown('countdown-newsletter');
});

document.addEventListener("DOMContentLoaded", function() {
    startCountdown('countdown-hero');
    startCountdown('countdown-newsletter');

    // Xử lý sự kiện cuộn mượt mà
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('newsletter-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const name = this.elements['name'].value.trim();
        const email = this.elements['email'].value.trim();
        const phone = this.elements['phone'].value.trim();
        const address = this.elements['address'].value.trim();
        const shoeSize = this.elements['shoe-size'].value;

        // Validate phone number
        if (!phone.match(/^\d+$/)) {
            alert('Phone number must contain only digits.');
            return;
        }

        // Simulate submission success
        // Here you can replace this alert with an actual AJAX call to submit the data
        alert('Your order has been successfully placed. We will contact you to confirm your order.');
        
        // Reset form
        form.reset();

        // Show thank you message
        thankYouMessage.style.display = 'block';
    });
});
