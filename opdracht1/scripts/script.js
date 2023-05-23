// JavaScript Document
const circle = document.querySelector("span:nth-of-type(3)");
const body = document.querySelector("body")
const container = document.querySelector("h1");
const Margiela = document.querySelector("span:nth-of-type(4)");


circle.addEventListener("animationend", () => {
  circle.style.animation = "rotate 4s linear infinite";
  console.log("Rolling End");
});

body.addEventListener("click", () => {
circle.style.animation = "roll 4s ease-in-out";

setTimeout(() => {
  Margiela.style.animation = "Carrousel 4s ease-in infinite";
container.style.overflow = "hidden";
console.log("Timer done");
}, 3000);

  console.log("Click!");
});
