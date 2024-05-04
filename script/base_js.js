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

const links_arrow = document.querySelector(".links .footer_arrow");
const community_arrow = document.querySelector(".community .footer_arrow");
const contacts_arrow = document.querySelector(".contacts .footer_arrow");
const join_arrow = document.querySelector(".join .footer_arrow");

function Open(element){
  element.classList.toggle('open');
}

links_arrow.addEventListener('click',() => Open(document.querySelector(".links.list")));
community_arrow.addEventListener('click',() => Open(document.querySelector(".community.list")));
contacts_arrow.addEventListener('click',() => Open(document.querySelector(".contacts.list")));
join_arrow.addEventListener('click',() => Open(document.querySelector(".join.list")));