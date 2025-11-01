// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Optional: Close menu when a link is clicked (mobile)
navbar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});
