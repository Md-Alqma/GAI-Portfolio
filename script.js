document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });

  // Close the navbar menu when clicking on a link
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ... Previous code ...

  // Form validation
  const contactForm = document.querySelector("#contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate form fields (add more validation as needed)
    const name = contactForm.querySelector("#name").value.trim();
    const email = contactForm.querySelector("#email").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    // if (!name || !email || !message) {
    //   alert("Please fill in all fields.");
    //   return;
    // } else {
    // Send the form (you can implement sending logic here)
    alert("Form submitted successfully!");
    contactForm.reset();
  });
});
