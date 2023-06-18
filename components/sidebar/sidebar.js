const toggleBtn = document.querySelector(".sidebar-toggle-btn");
const sidebar = document.querySelector(".sidebar-list");

function handleSidebar() {
  sidebar.classList.toggle("active");
}

toggleBtn.addEventListener("click", handleSidebar);
