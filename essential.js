const toggleBtn = document.querySelector(".toggle-btn");
const expand = document.querySelector(".expand");
const navList = document.querySelector(".list");

function handleExpand() {
  if (navList.classList.contains("expand")) {
    navList.classList.remove("expand");
  } else {
    navList.classList.add("expand");
  }
}

toggleBtn.addEventListener("click", handleExpand);
// window.addEventListener("resize", handleView);
