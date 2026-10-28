const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-mode');
    
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn load lại trang

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        feedback.style.color = '#e74c3c';
        feedback.textContent = 'Vui lòng điền đầy đủ tất cả các trường!';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        feedback.style.color = '#e74c3c';
        feedback.textContent = 'Địa chỉ email không hợp lệ!';
        return;
    }

    feedback.style.color = '#2ecc71';
    feedback.textContent = 'Cảm ơn bạn đã gửi tin nhắn! Tôi sẽ phản hồi sớm nhất.';
    
    contactForm.reset();
});