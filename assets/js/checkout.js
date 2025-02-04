const container = document.querySelector('.container');

// Currency
currency_selector.onchange = function() {
   localStorage.setItem('currency', this.value);
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
   const code = localStorage.getItem('item_code');
   let category = 0;
   container.innerHTML = '';
   curr = localStorage.getItem('currency');

   for (var i = 1; i < products[category].length; i++) {
      if (products[category][i].product_code == code) {
         const product_card = document.createElement('div');
         let price = fx.convert(products[category][i].product_price, { from: 'LKR', to: curr });
         price = curr == 'USD' ? ("US$ " + price.toFixed(2)) : ("LKR " + price.toFixed(2));

         const preview_image = document.querySelector('.chechout_product .image');
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