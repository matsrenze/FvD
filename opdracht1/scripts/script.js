// JavaScript Document
const circle = document.querySelector("span:nth-of-type(3)");

circle.addEventListener("animationend", () => {
    console.log("Animation ended");
    circle.style.animation = 'rotate 4s linear infinite';
  });

// circle.style.animation = 'roll 4s ease-in'; // Start a new animation
