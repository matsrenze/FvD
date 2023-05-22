// JavaScript Document
const circle = document.querySelector("span:nth-of-type(3)");
const logo = document.querySelector("h1");
const Margiela = document.querySelector("span:nth-of-type(4)");

circle.addEventListener("animationend", () => {
  circle.style.animation = "rotate 4s linear infinite";
  console.log("Rolling End");
});

circle.addEventListener("click", () => {
circle.style.animation = "roll 4s ease-in-out";
Margiela.style.animation = "Carrousel 4s ease-in infinite";
  console.log("Click!");
});
