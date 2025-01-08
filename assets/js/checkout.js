var container = document.querySelector('.container');

// Currency

currency_selector.oninput = function() {
   localStorage.setItem('curr', this.value);
   load_item();
}

fx.base = "USD";
fx.rates = {
   "EUR": 0.745101, // eg. 1 USD === 0.745101 EUR
   "GBP": 0.647710,
   "HKD": 7.781919,
   "LKR": 312.083057,
   "USD": 1, // always include the base rate (1:1)
}

load_item = () => {
   // var product = product_select.value;
   // category_name.innerText = products[product][0].category_name;
   var code = localStorage.getItem('item_code');
   var category = 0;
   container.innerHTML = '';
   currency = localStorage.getItem('curr');

   for (var i = 1; i < products[category].length; i++) {
      if (products[category][i].product_code == code) {
         var product_card = document.createElement('div');
         var price = fx.convert(products[category][i].product_price, { from: 'LKR', to: currency });
         if (currency == 'USD') {
            price = "US$ " + price.toFixed(2);
         }
         else {
            price = "LKR " + price.toFixed(2);
         }

         var preview_image = document.querySelector('.chechout_product .image');
         preview_image.src = products[category][i].product_image;
         preview_image.alt = products[category][i].product_name;


         product_card.innerHTML = `<div class="card">
                                        <a class="card_inner" href="#">
                                           <div class="left">
                                              <img class="" src="${products[category][i].product_image}" alt="${products[category][i].product_name}">
                                           </div>

                                           <div class="right">
                                              <p class="">${products[category][i].product_name}</p>
                                              <p class="">Item code: ${products[category][i].product_code}</p>
                                              <p class="">${products[category][i].product_description}</p>
                                              <p class="">${price}</p>
                                              <div class="">
                                              <i class="bi bi-star-fill"></i>
                                              <i class="bi bi-star-fill"></i>
                                              <i class="bi bi-star-fill"></i>
                                              <i class="bi bi-star"></i>
                                              <i class="bi bi-star"></i>
                                              </div>
                                           </div>
                                        </a>
                                     </div>`
         container.appendChild(product_card);
      }
   }
};

load_item();