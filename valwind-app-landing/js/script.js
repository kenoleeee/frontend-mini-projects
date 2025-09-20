// Buttons Links
const buttonGitLink = document.querySelector('.subscribe');

buttonGitLink.addEventListener('click', () => {
    window.open('https://github.com/kuska1/ValWind', '_blank');
});

const buttonContact = document.querySelector('.send-question-button');

buttonContact.addEventListener('click', () => {
    window.open('https://kuska1.github.io', '_blank');
});

// Swiper
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".review-cards", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});