// Contact Form Submit Handler
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect values (optional if backend processing is added)
    const fullName = this.querySelector('input[placeholder="Enter your full name "]').value;
    const email = this.querySelector('input[placeholder="Enter your email"]').value;
    const message = this.querySelector('textarea').value;

    // Placeholder logic (replace with actual backend/API call)
    alert(`✅ Thank you, ${fullName}!\nYour message has been received.`);

    this.reset();
});

// Resume Download (Optional Alert)
const resumeLink = document.querySelector('a[href$="Dinesh_Resume.pdf"]');
resumeLink?.addEventListener("click", () => {
    alert("📄 Resume download started!");
});

// Optional: Log social media clicks for analytics
document.querySelectorAll(".socials a").forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Visited: ${link.href}`);
    });
});
