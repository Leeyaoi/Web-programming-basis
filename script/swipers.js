const awards_swiper = new Swiper('.awards_slider .swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      },
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
  breakpoints: {
    1200: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    },
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
  breakpoints: {
    1200: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    },
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
  if(newTheme == 'dark'){
    mode_changer.innerHTML = "LIGHT MODE"
  }
  else{
    mode_changer.innerHTML = "DARK MODE"
  }
  localStorage.setItem('themePreference', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
});

const burger_menu = document.getElementById('burger-menu');
burger_menu.addEventListener('click', () => {
  document.querySelector("header").classList.toggle('open');
});

const links_arrow = document.querySelector(".footer_arrow.links");
const community_arrow = document.querySelector(".footer_arrow.community");
const contacts_arrow = document.querySelector(".footer_arrow.contacts");
const join_arrow = document.querySelector(".footer_arrow.join");

function Open(element){
  element.classList.toggle('open');
}

links_arrow.addEventListener('click',() => Open(document.querySelector(".links.list")));
community_arrow.addEventListener('click',() => Open(document.querySelector(".community.list")));
contacts_arrow.addEventListener('click',() => Open(document.querySelector(".contacts.list")));
join_arrow.addEventListener('click',() => Open(document.querySelector(".join.list")));