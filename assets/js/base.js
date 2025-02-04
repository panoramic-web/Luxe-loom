// Query selectors
// Not changing so used const
const preloader = document.querySelector('.preloader'),
   nav = document.querySelector('#navbar'),
   theme_toggler = document.querySelector('#theme-toggler'),
   page = document.body.getAttribute('data-page'),
   sidebar_btn = document.querySelector('#sidebar-toggle'),
   sidebar = document.querySelector('.sidebar'),
   currency_toggler = document.querySelector('#currency-toggle'),
   nav_links = document.querySelectorAll('.menu-list .menu-item');

// Dynamically changing, so used let
let curr = currency_toggler.value;

// Unused Variables (for potential future use)
const dropdown_items = document.querySelectorAll('.item-name'),
   product_select = document.querySelector('#product'),
   items = document.querySelectorAll('.item'),
   grid = document.querySelector('#showcase'),
   g_3x3 = document.querySelector('.g3x3'),
   g_2x2 = document.querySelector('.g2x2'),
   list = document.querySelector('.list-button'),
   swiper_wrapper = document.querySelector('.swiper-wrapper'),
   menu = document.querySelector('#menu');




// Store the current page in localStorage
localStorage.setItem('page', page);

// Window onload event
window.onload = () => {
   // Hide preloader
   setTimeout(() => preloader.style.display = 'none', 1000);

   // Set Initial Theme
   if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
   }

   // Apply correct theme icon
   theme_toggler.querySelector('i').classList.add(
      document.body.classList.contains('dark-theme') ? 'bi-sun' : 'bi-moon'
   );

   // Initialize currency
   if (!localStorage.getItem('currency')) {
      localStorage.setItem('currency', curr);
   }
   currency_toggler.value = localStorage.getItem('currency');
};

// Theme Toggling
const toggleTheme = () => {
   document.body.classList.toggle('dark-theme');
   const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
   localStorage.setItem('theme', newTheme);
   theme_toggler.querySelector('i').classList.toggle('bi-sun');
   theme_toggler.querySelector('i').classList.toggle('bi-moon');
};

// Theme Toggle Event
theme_toggler.onclick = toggleTheme;

// Fixed navbar on scroll
window.onscroll = () => {
   nav.classList.toggle('fixed', pageYOffset > 0);
};

// Product menu toggle
sidebar_btn.onclick = () => {
   sidebar.classList.toggle('active');
};

// Dropdown toggle function
function toggleDropdown(button) {
   // This function is used to toggle the visibility of a dropdown or submenu when a button is clicked.

   // Find the closest parent container that matches the classes 'menu-dropdown' or 'submenu'.
   // The `closest` method searches up the DOM tree for the nearest ancestor with the specified selector.
   const container = button.closest('.menu-dropdown, .submenu');

   // Within the container, find the first child element with the classes 'dropdown-menu' or 'submenu-items'.
   // This will be the target element whose visibility will be toggled.
   const target = container.querySelector('.dropdown-menu, .submenu-items');

   // Check if the target element exists (to avoid errors if it doesn't exist).
   if (target) {
      // Toggle the classes 'bi-chevron-compact-right' and 'bi-chevron-compact-down' on the icon inside the button.
      const icon = button.querySelector('.bi-chevron-compact-right, .bi-chevron-compact-down');
      if (icon) {
         icon.classList.toggle('bi-chevron-compact-right');
         icon.classList.toggle('bi-chevron-compact-down');
      }

      // Toggle the 'active' class on the button itself.
      // This might be used to style the button differently when the dropdown is active.
      button.classList.toggle('active');

      // Toggle the 'show' class on the target element (the dropdown or submenu).
      // The 'show' class likely controls the visibility of the dropdown (e.g., making it visible or hidden).
      target.classList.toggle('show');
   }
}

// Close sidebar when clicked outside
document.addEventListener('click', event => {
   if (!event.target.closest(".sidebar") && !event.target.closest("#sidebar-toggle")) {
      sidebar.classList.remove('active');
   }
});


// Close sidebar when clicked outside .sidebar-menu and inside .sidebar, but this is not working 
// if clicked outside .sidebar, so this is not a correct logic, don't use both code blocks below

// sidebar.onclick = function() {
//    this.classList.remove('active');
// };

// sidebar.querySelector('.sidebar-menu').onclick = event => {
//    event.stopPropagation();
// };





/*
document.onclick = function(e) {
   if (!e.target.matches('.sidebar')) {
      sidebar.classList.remove('active');
   }

   if (!e.target.matches('.menu')) {
      menu.classList.remove('active');
   }
};

// Prevent clicks on nav_links from propagating
nav_links.forEach(link => {
   link.onclick = event => event.stopPropagation();
});
*/