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

const mode_changer = document.getElementById('dark_theme');
mode_changer.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  console.log(newTheme);
  if(newTheme == 'dark'){
    mode_changer.innerHTML = "LIGHT MODE"
  }
  else{
    mode_changer.innerHTML = "DARK MODE"
  }
  localStorage.setItem('themePreference', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
});