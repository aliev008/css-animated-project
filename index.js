const body = document.querySelector("body");
const sliderInput = document.querySelector("#slider-input");
const allBoxes = document.querySelectorAll(".box");
const allPills = document.querySelectorAll(".pill");
const allHiddenPills = document.querySelectorAll(".hidden-pill");
const allArrows = document.querySelectorAll(".arrow");
const expandPill = document.querySelector("#expand");
const xLetterPath = document.querySelector("#x-letter");
const xLetterSVG = document.querySelector("#x-letter-svg");
const xBox = document.querySelector(".x-box");
const socialFan = document.querySelector(".social-fan");
const reversePill = document.querySelector("#reverse");
const boxContainer = document.querySelector(".box-container");
const iconPath = document.querySelector("#icon");
const hiddenBox = document.querySelector(".hidden-box");
const textBox = document.querySelector(".hidden-box .text-box");

const expand = () => {
  if (hiddenBox.clientWidth !== 0) {
    textBox.classList.add("hidden");
    setTimeout(() => (hiddenBox.style.width = "0"), 200);
  } else {
    hiddenBox.style.width = "1700px";
    setTimeout(() => textBox.classList.remove("hidden"), 500);
  }
};

expandPill.addEventListener("click", expand);
