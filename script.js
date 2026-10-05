// =========================
// APPOINTMENT → WHATSAPP
// =========================

const appointmentForm = document.querySelector(".appointment-form");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const treatment = document.getElementById("treatment").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
`Hello Aurelia Skin & Cosmetology Clinic,

I would like to request an appointment.

Name: ${name}
Phone: ${phone}
Treatment / Concern: ${treatment}
Preferred Date: ${date}
Preferred Time: ${time}

Concern Details:
${message || "Not provided"}

Thank you.`;

        const whatsappURL =
            `https://wa.me/919150979121?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank");

    });

}
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-menu");

        const isOpen = navLinks.classList.contains("mobile-menu");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

}