const navLinks = document.getElementById("nav-links");
const navBurger = document.getElementById("nav-burger");
const htmlElement = document.querySelector("html");

function navBarActiveHandler() {
  document.documentElement.scrollTop = 0;
  htmlElement.classList.toggle("overflow-h");
  navBurger.classList.toggle("nav-burger__active");
  navLinks.classList.toggle("nav-links__active");
}

// events
navBurger.addEventListener("click", navBarActiveHandler);
