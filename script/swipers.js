const awards_swiper = new Swiper('.awards_slider .swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
}) ;

const hair_swiper = new Swiper('.hair_slider .swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 100,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}) ;

const pin_swiper = new Swiper('.eco_pins_slider .swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  //spaceBetween: 200,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}) ;