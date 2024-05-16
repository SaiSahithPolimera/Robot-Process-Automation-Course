window.onload = function () {
  document.querySelector(".right-container").classList.add("animate");
  document.querySelector(".left-container").classList.add("animate");
  document.querySelector(".about").classList.add("animate");
};

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    360: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    520: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1000: {
      slidesPerView: 4,
    },
  },
});

screen.orientation.lock();
