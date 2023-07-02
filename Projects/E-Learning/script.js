const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".nav-list");
const navbarToggleBtn = document.querySelector(".toggle-btn");

// section - Navbar
let navabarStatus = false;

function navbarMenu() {
  console.log("Navbar Menu Action ");
  if (!navabarStatus) {
    navbar.style.height = "150px";
    navbarList.style.top = "50px";
    navbarList.style.zIndex = "0";
    navabarStatus = true;
    console.log("Status -> ", navabarStatus);
  } else {
    navbar.style.height = "30px";
    navbarList.style.top = "-100px";
    navbarList.style.zIndex = "-2";
    navabarStatus = false;
    console.log("Status -> ", navabarStatus);
  }
}

navbarToggleBtn.addEventListener("click", navbarMenu);
