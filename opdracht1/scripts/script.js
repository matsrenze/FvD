// JavaScript Document
const circle = document.querySelector("span:nth-of-type(3)");
const body = document.querySelector("body");
const container = document.querySelector("h1");
const Margiela = document.querySelector("span:nth-of-type(4)");

circle.addEventListener("animationend", () => {
  circle.style.animation = "rotate 4s linear infinite";
  Margiela.style.animation = "Carrousel 5s ease-in infinite";
  container.style.overflowX = "hidden";
  console.log("Flipped!");
});

/* body.addEventListener("click", () => {

circle.style.animation = "flip 2s ease-in-out";

 setTimeout(() => {
  Margiela.style.animation = "Carrousel 4s ease-in infinite";
  container.style.overflowX = "hidden";
console.log("Timer done");
}, 2000); 

  console.log("Click!");
}); */
