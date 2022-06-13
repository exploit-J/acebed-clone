const overlay = document.querySelector(".overlay");
const gnbLeftButton = document.querySelector(".gnb-left-btn");
const gnbRightButton = document.querySelector(".gnb-right-btn");
const gnbLeftNav = document.querySelector(".inner-left");
const gnbRightNav = document.querySelector(".inner-right");
const leftNavClose = document.querySelector(".gnb-left .close-btn");
const rightNavClose = document.querySelector(".right-wrap .close-btn");
const nav1stDepthItem = document.querySelectorAll(".depth-1");
const nav1stDepthBtn = document.querySelectorAll(".depth-1 button");
const searchOpenBtn = document.querySelector(".search-button");
const searchClosenBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search");
const header = document.querySelector("header");

// nav active event
gnbLeftButton.addEventListener("click", () => {
  gnbLeftNav.classList.add("active");
  overlay.classList.add("active");
});
leftNavClose.addEventListener("click", () => {
  gnbLeftNav.classList.remove("active");
  overlay.classList.remove("active");
  nav1stDepthItem.forEach((item) => {
    item.classList.remove("active");
  });
});

gnbRightButton.addEventListener("click", () => {
  gnbRightNav.classList.add("active");
  overlay.classList.add("active");
});
rightNavClose.addEventListener("click", () => {
  gnbRightNav.classList.remove("active");
  overlay.classList.remove("active");
  nav1stDepthItem.forEach((item) => {
    item.classList.remove("active");
  });
});

// overlay active event
overlay.addEventListener("click", () => {
  gnbLeftNav.classList.remove("active");
  gnbRightNav.classList.remove("active");
  overlay.classList.remove("active");
  nav1stDepthItem.forEach((item) => {
    item.classList.remove("active");
  });
});

// nav-list active event
nav1stDepthBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("active");
  });
});

// search-box active event
searchOpenBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
});

searchClosenBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
});

// header scroll event
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 1) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
