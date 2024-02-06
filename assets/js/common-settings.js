var preloader = document.querySelector('.preloader'),
   theme_toggler = document.querySelector('#theme-toggler'),
   theme,
   product_menu_icon = document.querySelector('#product-menu-icon'),
   product_list = document.querySelector('#product-list'),
   product_select = document.querySelector('#product'),
   currency_selector = document.querySelector('#currency-selector'),
   currency = currency_selector.value,
   category_name = document.querySelector('#category-name'),
   items = document.querySelectorAll('.item'),
   grid = document.querySelector('#showcase'),
   g_4x4 = document.querySelector('.g4x4'),
   g_2x2 = document.querySelector('.g2x2'),
   list = document.querySelector('.list-button'),
   swiper_wrapper = document.querySelector('.swiper-wrapper'),
   menu = document.querySelector('#menu'),
   nav_links = document.querySelectorAll('#menu .list .item');

var dark_theme_css = document.createElement('link');
dark_theme_css.rel = 'stylesheet';
dark_theme_css.href = './assets/css/dark_theme.css';

product_menu_icon.onclick = function() {
   product_list.classList.toggle('active');
}

/*

// Close the product list if the user clicks outside of it

onclick = function(e) {
   if (!e.target.matches('.product-list')) {
      if (product_list.classList.contains('active')) {
         product_list.classList.remove('active');
      }
   }
}

*/

onload = () => {
   //___Preloader animation
   setTimeout(() => {
      preloader.style.display = 'none';
   }, 500);

   //___Theme
   if (!(localStorage.getItem('theme'))) {
      theme = localStorage.setItem('theme', 'light');
   }
   else if (localStorage.getItem('theme') == 'dark') {
      document.head.appendChild(dark_theme_css);
   }

   //___Currency
   if (!(localStorage.getItem('curr'))) {
      localStorage.setItem('curr', currency);
   }
   currency_selector.value = localStorage.getItem('curr');
};


//___Site theme
theme_toggler.oninput = () => {
   if (localStorage.getItem('theme') == 'light') {
      document.head.appendChild(dark_theme_css);
      localStorage.setItem('theme', 'dark');
   }
   else if (localStorage.getItem('theme') == 'dark') {
      document.head.lastChild.remove();
      localStorage.setItem('theme', 'light');
   }
};




/*
onclick = function(e) {
   if (!e.target.matches('.menu')) {
      if (menu.classList.contains('active')) {
         menu.classList.remove('active');
      }
   }
}

nav_links.forEach(link => {
   link.onclick = (event) => {
      event.stopPropagation();
   }
})
*/