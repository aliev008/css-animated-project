import { colorPalettes } from "./colors.js";

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

// Leftside info bar

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

// Rotate elements by reverse button

const reverse = () => {
  if (boxContainer.style.flexWrap === "wrap") {
    boxContainer.style.flexWrap = "wrap-reverse";
  } else {
    boxContainer.style.flexWrap = "wrap";
  }
};

reversePill.addEventListener("click", reverse);

// Theme

let paletteIndex = 0;

const xLetterIndex = 11;
const rotateIconIndex = 3;

// Start state

xLetterSVG.style.fill = colorPalettes[paletteIndex][xLetterIndex].fill;
allPills.forEach(
  (pill, i) => (pill.style.backgroundColor = colorPalettes[paletteIndex][i].fill)
);


// 1:31:00