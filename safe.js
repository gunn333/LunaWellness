document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const backToTopButton = document.getElementById("back-to-top");
    let currentSlide = 0;

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
        });
    }

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentSlide);

    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        thankYouMessage.classList.remove("hidden");
        setTimeout(() => {
            thankYouMessage.classList.add("hidden");
            contactForm.reset();
        }, 3000);
    });

    const modal = document.getElementById("modal");
    const closeModalButton = document.querySelector(".close-button");
    const modalText = document.getElementById("modal-text");

    carouselItems.forEach(item => {
        item.addEventListener("click", () => {
            modalText.innerText = item.querySelector("p").innerText;
            modal.classList.remove("hidden");
        });
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });

    // Scroll Animations
    const scrollAnimations = document.querySelectorAll('.scroll-anim');
    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        scrollAnimations.forEach(anim => {
            const animTop = anim.getBoundingClientRect().top;
            if (animTop < triggerBottom) {
                anim.classList.add('visible');
            } else {
                anim.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Back to Top Button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Highlighting Active Section in Navigation
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
