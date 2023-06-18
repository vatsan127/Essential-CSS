const toggleBtn = document.querySelector(".sidebar-toggle-btn");
const sidebar = document.querySelector(".sidebar-list");
const sidebarItems = document.querySelector(".sidebar-item ");

function handleSidebar() {
  sidebar.classList.toggle("active-sideBar");
}

toggleBtn.addEventListener("click", handleSidebar);
