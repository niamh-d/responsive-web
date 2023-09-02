"use strict";

const openAndClose = function (itemNum) {
  const element = document.querySelector(`.item--${itemNum}`);
  if (element.classList.contains("open")) {
    element.classList.remove("open");
  } else {
    element.classList.add("open");
  }
};

const icon1 = document.querySelector(".icon--1");
const icon2 = document.querySelector(".icon--2");
const icon3 = document.querySelector(".icon--3");

icon1.addEventListener("click", () => openAndClose("1"));
icon2.addEventListener("click", () => openAndClose("2"));
icon3.addEventListener("click", () => openAndClose("3"));
