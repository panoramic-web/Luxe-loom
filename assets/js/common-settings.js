var preloader = document.querySelector('.preloader'),
   nav = document.querySelector('#navbar'),
   theme_toggler = document.querySelector('#theme-toggler'),
   page = document.body.getAttribute('data-page'),
   theme,
   product_menu_icon = document.querySelector('#product-menu-icon'),
   sidebar = document.querySelector('#sidebar'),
   dropdown_items = document.querySelectorAll('.item-name'),
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

localStorage.setItem('page', page);

function dropdown(btn) {
   btn.parentNode.querySelector('#dropdown-content').classList.toggle('active');
   btn.querySelector('i').classList.toggle('bi-plus');
   btn.querySelector('i').classList.toggle('bi-dash');
}




// Window.onload function

onload = () => {
   // Preloader

   setTimeout(() => {
      preloader.style.display = 'none';
   }, 500);

   // Theme

   if (!(localStorage.getItem('theme'))) {
      theme = localStorage.setItem('theme', 'light')
      toggle_func();
   }
   else if (localStorage.getItem('theme') == 'dark') {
      document.head.appendChild(dark_theme_css);
      toggle_func();
   }

   // Currency

   if (!(localStorage.getItem('curr'))) {
      localStorage.setItem('curr', currency);
   }
   currency_selector.value = localStorage.getItem('curr');
};



// Fixed navbar onscroll

onscroll = () => {
   if (pageYOffset > 0) {
      nav.classList.add('fixed');
   }
   else if (pageYOffset === 0) {
      nav.classList.remove('fixed');
   }
};



// Site theme

var toggle_func = () => {
   theme_toggler.querySelector('i').classList.toggle('bi-sun');
   theme_toggler.querySelector('i').classList.toggle('bi-moon');
}

var dark_theme_css = document.createElement('link');
dark_theme_css.rel = 'stylesheet';
dark_theme_css.href = `./assets/css/${page}_dark.css`;

theme_toggler.onclick = function() {
   if (localStorage.getItem('theme') == 'light') {
      document.head.appendChild(dark_theme_css);
      localStorage.setItem('theme', 'dark');
      toggle_func();
   }
   else {
      document.head.lastChild.remove();
      localStorage.setItem('theme', 'light');
      toggle_func();
   }
};



// Product menu list

product_menu_icon.onclick = () => {
   sidebar.classList.toggle('active');
};

sidebar.onclick = function() {
   this.classList.remove('active');
}

sidebar.querySelector('.menu').onclick = (event) => {
   event.stopPropagation();
};





// Closes the product list if the user clicks outside of it.

// onclick = function(e) {
//    if (!e.target.matches('.sidebar')) {
//       if (sidebar.classList.contains('active')) {
//          sidebar.classList.remove('active');
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