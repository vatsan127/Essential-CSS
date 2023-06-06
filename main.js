const toggleBtn = document.querySelector(".toggle-btn");
const expand = document.querySelector(".expand");
const navList = document.querySelector(".list");

function handleExpand() {
  if (navList.classList.contains("expand")) {
    navList.classList.remove("expand");
    navList.classList.remove("animate-slideDown");
  } else {
    navList.classList.add("expand");
    navList.classList.add("animate-slideDown");
  }
}

toggleBtn.addEventListener("click", handleExpand);
window.addEventListener("resize", () => {
  if (navList.classList.contains("expand")) {
    navList.classList.remove("expand");
    navList.classList.remove("animate-slideDown");
  }
});
