// Contact Form Script
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    // Get form values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Validation
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // Simple email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // If valid, show success message
    alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);

    // Reset form
    form.reset();
  });
});
