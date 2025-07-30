// Contact Form Submission Handler
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // You can replace this alert with an actual email service or backend logic
    alert("✅ Message sent successfully!\nThank you for reaching out, Dinesh will contact you soon.");

    // Clear the form
    this.reset();
});
