// JavaScript Document
const circle = document.querySelector("span:nth-of-type(3)");
const logo = document.querySelector("h1");

circle.addEventListener("animationend", () => {
  circle.style.animation = "rotate 4s linear infinite";
  console.log("Animation ended");
});

logo.addEventListener("click", () => {
  circle.style.animation = "roll 4s ease-in-out";
  console.log("Click!");
});
