let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".header .search-form");
let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector("header .navbar");

window.onscroll = () => {
  if (window.scrollY > 650) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  let value = window.scrollY / 10;
  document.querySelector(".home .mountain").style.bottom = `${-value}%`;
  document.querySelector(".home .content").style.bottom = `${value}%`;
  document.querySelector(".home .moon").style.marginTop = `${-value}%`;
  document.querySelector(".home .cloud-1").style.right = `${-value}%`;
  document.querySelector(".home .cloud-2").style.left = `${-value}%`;
};

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 650) {
//     document.querySelector(".header").classList.add("active");
//   } else {
//     document.querySelector(".header").classList.remove("active");
//   }

//   let value = window.scrollY / 10;
//   document.querySelector(".home .mountain").style.bottom = `${-value}%`;
//   document.querySelector(".home .content").style.bottom = `${value}%`;
//   document.querySelector(".home .moon").style.marginTop = `${-value}%`;
//   document.querySelector(".home .cloud-1").style.right = `${-value}%`;
//   document.querySelector(".home .cloud-2").style.left = `${-value}%`;
// });
