const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

function handleToggle() {
  navLinks.classList.toggle("active");
}

toggleBtn.addEventListener("click", handleToggle);
