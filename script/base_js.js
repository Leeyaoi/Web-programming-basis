if(localStorage.getItem("cart") !== null){
  updateCartNum();
}

const mode_changer_big = document.getElementById('dark_theme');
const mode_changer_small = document.querySelector('.menu_list #dark_theme');
mode_changer_big.addEventListener('click', () => ChangeMode(mode_changer_big));
mode_changer_small.addEventListener('click', () => ChangeMode(mode_changer_small));

if(localStorage.getItem('themePreference') == 'dark'){
  document.body.classList.toggle('dark-theme');
  document.documentElement.setAttribute('data-theme', 'dark');
  if(localStorage.getItem("lang") == "ru"){
    mode_changer_big.innerHTML = "СВЕТЛАЯ ТЕМА"
    mode_changer_small.innerHTML = "СВЕТЛАЯ"
  }
  else{
    mode_changer_big.innerHTML = "LIGHT MODE"
    mode_changer_small.innerHTML = "LIGHT MODE"
  }
}


document.querySelector(".cart").addEventListener("click", () => {window.location.replace("../pages/cart.html")})

function ChangeMode(element){
  document.body.classList.toggle('dark-theme');
  const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  if(newTheme == 'dark'){
    if(localStorage.getItem("lang") == "ru"){
      mode_changer_big.innerHTML = "СВЕТЛАЯ ТЕМА"
      mode_changer_small.innerHTML = "СВЕТЛАЯ"
    }
    else{
      mode_changer_big.innerHTML = "LIGHT MODE"
      mode_changer_small.innerHTML = "LIGHT MODE"
    }
  }
  else{
    if(localStorage.getItem("lang") == "ru"){
      mode_changer_big.innerHTML = "ТЕМНАЯ ТЕМА"
      mode_changer_small.innerHTML = "ТЕМНАЯ"
    }
    else{
      mode_changer_big.innerHTML = "DARK MODE"
      mode_changer_small.innerHTML = "DARK MODE"
    }
  }
  localStorage.setItem('themePreference', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
}

var open = false;

const burger_menu = document.getElementById('burger-menu');
burger_menu.addEventListener('click', () => {
  open = !open
  document.querySelector("header").classList.toggle('open');
  document.querySelector("html").classList.toggle("unscroll");
  if(open){
    document.querySelector(".bg_shad").style.zIndex="1"
  }
  else{
    document.querySelector(".bg_shad").style.zIndex="-1"
  }
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

function updateCartNum(){
  document.querySelector("#cart_num").textContent = JSON.parse(localStorage.getItem("cart")).length;
}