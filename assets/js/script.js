//___Currency
currency_toggler.onchange = function() {
   localStorage.setItem('currency', this.value);
}

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'vertical',
   loop: true,
   autoplay: true,

   // If we need pagination
   // pagination: {
   //    el: '.swiper-pagination',
   // },

   // Navigation arrows
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});


const new_arrivals = new Swiper('.seasonal-offers-slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   autoplay: true,
   speed: 1000,

   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 100px
      100: {
         slidesPerView: 1,
         spaceBetween: 5
      },
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      // when window width is >= 480px
      580: {
         slidesPerView: 3,
         spaceBetween: 15
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         spaceBetween: 20
      },
      // when window width is >= 880px
      880: {
         slidesPerView: 5,
         spaceBetween: 25
      },
      // when window width is >= 1000px
      1000: {
         slidesPerView: 6,
         spaceBetween: 30
      },
   },

   // Navigation arrows
   // navigation: {
   //    nextEl: '.product-next',
   //    prevEl: '.product-prev',
   // },

   // If we need pagination
   // pagination: {
   //    el: '.swiper-pagination',
   // },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});


const for_you_slider = new Swiper('.for-you-slider', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   autoplay: true,
   speed: 1000,

   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 100px
      100: {
         slidesPerView: 1,
         spaceBetween: 5
      },
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      // when window width is >= 480px
      580: {
         slidesPerView: 3,
         spaceBetween: 15
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         spaceBetween: 20
      },
      // when window width is >= 880px
      880: {
         slidesPerView: 5,
         spaceBetween: 25
      },
      // when window width is >= 1000px
      1000: {
         slidesPerView: 6,
         spaceBetween: 30
      },
   },

   // Navigation arrows
   // navigation: {
   //    nextEl: '.product-next',
   //    prevEl: '.product-prev',
   // },

   // If we need pagination
   // pagination: {
   //    el: '.swiper-pagination',
   // },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});