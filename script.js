// ==================================
// MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// ==================================
// PROFILE IMAGE
// ==================================

const profileImage = document.getElementById("profileImage");
const profilePlaceholder = document.getElementById("profilePlaceholder");

profileImage.addEventListener("load", function () {

    profileImage.style.display = "block";
    profilePlaceholder.style.display = "none";

});

profileImage.addEventListener("error", function () {

    profileImage.style.display = "none";
    profilePlaceholder.style.display = "grid";

});


// ==================================
// AUTOMATIC COPYRIGHT YEAR
// ==================================

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// ==================================
// CONTACT FORM
// ==================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    if (!name || !email || !subject || !message) {

        formMessage.textContent = "Please complete all fields.";

        return;

    }

    const recipient = "hmathe60@gmail.com";

    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    const mailtoLink =
        "mailto:" + recipient +
        "?subject=" + emailSubject +
        "&body=" + emailBody;

    formMessage.textContent =
        "Opening your email application...";

    window.location.href = mailtoLink;

});