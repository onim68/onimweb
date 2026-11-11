// MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });
}

// AUTOMATIC COPYRIGHT YEAR
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// CONTACT FORM DEMONSTRATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const feedback = document.getElementById("formMessage");

        if (!name || !email || !subject || !message) {
            feedback.textContent = "Please complete all fields.";
            return;
        }

        feedback.textContent =
            "Thank you! This demonstration form is ready for backend integration.";

        contactForm.reset();
    });
}