const swiper = new Swiper(".slider-wrapper", {
  slidesPerView: 5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    960: {
      slidesPerView: 4,
    },
    620: {
      slidesPerView: 3,
    },
    460: {
      slidesPerView: 1,
    },
  },
});
function printWindowSize() {
  const navLinks = document.getElementById("nav-links-overlay");

  const width = window.innerWidth;
  const height = window.innerHeight;
  if (width >= 960) {
    navLinks.classList.remove("open-nav");
  }

  console.log(`Current window size: ${width}px x ${height}px`);
}

printWindowSize();
window.addEventListener("resize", printWindowSize);

var openSideBar = document.getElementById("open-side-bar");
var sideNavLinks = document.getElementById("side-nav");

function openSideNav() {
  const sideNavLinks = document.getElementById("side-nav");
  sideNavLinks.classList.toggle("open-nav");
}
openSideBar.onclick = () => {
  openSideNav();
};

// open nav links
var openNavLinks = document.getElementById("open-nav-links-btn");
function openNavLinksFunc() {
  const navLinks = document.getElementById("nav-links-overlay");

  navLinks.classList.toggle("open-nav");
  // if (navLinks.classList.contains("open-nav")) {
  //   openNavLinks.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
  // } else {
  //   openNavLinks.innerHTML = '<i class="fa-solid fa-ellipsis"></i>';
  // }
}
openNavLinks.onclick = () => {
  openNavLinksFunc();
};
