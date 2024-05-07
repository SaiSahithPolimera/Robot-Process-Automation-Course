window.onload = function () {
  document.querySelector(".right-container").classList.add("animate");
  document.querySelector(".left-container").classList.add("animate");
  document.querySelector(".about").classList.add("animate");
};

var swiper = new Swiper(".testimonial-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});