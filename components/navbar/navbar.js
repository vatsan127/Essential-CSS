const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

function handleToggle() {
  navLinks.classList.toggle("active");
}

toggleBtn.addEventListener("click", handleToggle);
