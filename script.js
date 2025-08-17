// Contact Form Validation & Submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = contactForm.querySelector('input[placeholder="Enter your full name "]').value.trim();
    const email = contactForm.querySelector('input[placeholder="Enter your email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // If everything is valid
    alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);

    // Reset form
    contactForm.reset();
  });
});
