const toggleButton = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  if (navbar.style.display == "none") {
    navbar.style.display = "grid";
  } else {
    navbar.style.display = "none";
  }
});

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

btn1.addEventListener("click", () => {
  image1.style.transform = "translateX(0px)";
});

btn2.addEventListener("click", () => {
  image2.style.transform = "translateX(-100%)";
});

btn3.addEventListener("click", () => {
  image3.style.transform = "translateX(-200%)";
});

btn4.addEventListener("click", () => {
  image4.style.transform = "translateX(-300%)";
});
