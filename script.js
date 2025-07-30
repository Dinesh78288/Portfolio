document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out, Dinesh will get back to you soon!");
    this.reset();
});
