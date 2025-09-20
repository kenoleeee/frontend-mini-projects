const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone-input');

    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            let value = phoneInput.value.replace(/[^\d+]/g, '');
            //antirussian
            if (value.startsWith('+7') || value.startsWith('8')) {
                phoneInput.style.borderColor = 'red';
                value = '';
            } else {
                phoneInput.style.borderColor = 'var(--color-primary)';
            }
            phoneInput.value = value;
        });
    }
});