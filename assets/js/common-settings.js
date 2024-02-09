var preloader = document.querySelector('.preloader'),
   theme_toggler = document.querySelector('#theme-toggler'),
   theme,
   product_menu_icon = document.querySelector('#product-menu-icon'),
   product_list = document.querySelector('#product-list'),
   product_select = document.querySelector('#product'),
   currency_selector = document.querySelector('#currency-selector'),
   currency = currency_selector.value,

   items = document.querySelectorAll('.item'),
   grid = document.querySelector('#showcase'),
   g_3x3 = document.querySelector('.g3x3'),
   g_2x2 = document.querySelector('.g2x2'),
   list = document.querySelector('.list-button'),

   swiper_wrapper = document.querySelector('.swiper-wrapper'),

   menu = document.querySelector('#menu'),
   nav_links = document.querySelectorAll('#menu .list .item');



// Window.onload function

onload = () => {
   // Preloader

   setTimeout(() => {
      preloader.style.display = 'none';
   }, 500);

   // Theme

   if (!(localStorage.getItem('theme'))) {
      theme = localStorage.setItem('theme', 'light');
   }
   else if (localStorage.getItem('theme') == 'dark') {
      document.head.appendChild(dark_theme_css);
   }

   // Currency

   if (!(localStorage.getItem('curr'))) {
      localStorage.setItem('curr', currency);
   }
   currency_selector.value = localStorage.getItem('curr');
};


// Site theme

var dark_theme_css = document.createElement('link');
dark_theme_css.rel = 'stylesheet';
dark_theme_css.href = './assets/css/dark_theme.css';

theme_toggler.oninput = () => {
   if (localStorage.getItem('theme') == 'light') {
      document.head.appendChild(dark_theme_css);
      localStorage.setItem('theme', 'dark');
   }
   else {
      document.head.lastChild.remove();
      localStorage.setItem('theme', 'light');
   }
};



// Product menu list

product_menu_icon.onclick = () => {
   product_list.classList.toggle('active');
};

product_list.onclick = function() {
   this.classList.remove('active');
}

product_list.querySelector('.menu').onclick = (event) => {
   event.stopPropagation();
};





// Closes the product list if the user clicks outside of it.

// onclick = function(e) {
//    if (!e.target.matches('.product-list')) {
//       if (product_list.classList.contains('active')) {
//          product_list.classList.remove('active');
//       }
//    }
// }

// onclick = function(e) {
//    if (!e.target.matches('.menu')) {
//       if (menu.classList.contains('active')) {
//          menu.classList.remove('active');
//       }
//    }
// }

// nav_links.forEach(link => {
//    link.onclick = (event) => {
//       event.stopPropagation();
//    }
// })