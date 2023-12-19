var preloader = document.querySelector('.preloader'),
   theme_toggler = document.querySelector('#theme-toggler'),
   theme;

var dark_theme_css = document.createElement('link');
dark_theme_css.rel = 'stylesheet';
dark_theme_css.href = './assets/css/dark_theme.css';


onload = () => {
   //___Preloader animation

   setTimeout(() => {
      preloader.style.display = 'none';
   }, 500);


   //___Theme

   if (!(localStorage.getItem(theme))) {
      theme = localStorage.setItem(theme, 'light');
   }

   else if (localStorage.getItem(theme) == 'dark') {
      document.head.appendChild(dark_theme_css);
   }
};


//___Site theme

theme_toggler.oninput = () => {
   if (localStorage.getItem(theme) == 'light') {
      document.head.appendChild(dark_theme_css);
      localStorage.setItem(theme, 'dark');
   }
   else if (localStorage.getItem(theme) == 'dark') {
      document.head.lastChild.remove();
      localStorage.setItem(theme, 'light');
   }
};