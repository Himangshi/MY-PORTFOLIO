document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const nav = document.querySelector('nav');
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    navbarToggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        navbarToggle.classList.toggle('open');
    });

    modeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode', modeToggle.checked);
    });

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateSlider() {
        const newPosition = -currentIndex * 100 + '%';
        slider.style.transition = 'transform 2.5s ease-in-out';
        slider.style.transform = 'translateX(' + newPosition + ')';
    }

    function nextSlide() {
        slider.style.transition = 'none';
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        slider.style.transition = 'none';
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    }

    function resetTransition() {
        slider.style.transition = 'transform 3s ease-in-out';
    }

    slider.addEventListener('transitionend', resetTransition);

    setInterval(nextSlide, 4000); // Auto slide every 4 seconds

    // Optional: Add event listeners for manual control
    document.querySelector('.skills-carousel').addEventListener('mouseover', function () {
        clearInterval(autoSlideInterval);
    });

    document.querySelector('.skills-carousel').addEventListener('mouseout', function () {
        autoSlideInterval = setInterval(nextSlide, 3000);
    });

    // Code for About Section
    var aboutSection = document.querySelector(".about");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > aboutSection.offsetTop - window.innerHeight / 2) {
            aboutSection.style.opacity = 1;
        }
    });

    // Code for Home Text Animation
    const words = document.querySelectorAll(".home-text span");

    words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.2}s`;
    });

    // Initialize ScrollReveal for about-content
    const sr = ScrollReveal();
    const aboutContentConfig = {
        duration: 1000,
        origin: 'top',
        distance: '50px',
        easing: 'ease-in-out',
        afterReveal: function () {
            document.querySelector('.about-content').style.opacity = 1;
        },
    };
    sr.reveal('.about-content', aboutContentConfig);
});
