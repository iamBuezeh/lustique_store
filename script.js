const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const body = document.querySelector(".body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("onScroll");
  body.classList.toggle("is-open");
});

document.querySelectorAll(".nav a").forEach((ele) =>
  ele.addEventListener("click", function () {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);
