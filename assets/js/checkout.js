var container = document.querySelector('.container');

//___Currency
currency_selector.oninput = function() {
   localStorage.setItem('curr', this.value);
   load_item();
}

fx.base = "USD";
fx.rates = {
   "EUR": 0.745101, // eg. 1 USD === 0.745101 EUR
   "GBP": 0.647710, // etc...
   "HKD": 7.781919,
   "LKR": 312.083057,
   "USD": 1, // always include the base rate (1:1)
   /* etc */
}

load_item = () => {
   // var product = product_select.value;
   // category_name.innerText = products[product][0].category_name;
   var code = localStorage.getItem('code');
   var ppppp = 0;
   container.innerHTML = '';
   currency = localStorage.getItem('curr');

   for (var i = 1; i < products[ppppp].length; i++) {
      if (products[ppppp][i].product_code == code) {
         var product_card = document.createElement('div');
         var price = fx.convert(products[ppppp][i].product_price, { from: 'LKR', to: currency });
         var price = price.toFixed(2);
         price = currency + " " + price;

         product_card.innerHTML = `<div class="">
                                        <a class="" href="#">
                                           <div class="card_top">
                                              <img class="" src="${products[ppppp][i].product_image}" alt="${products[ppppp][i].product_name}">
                                           </div>

                                           <div class="">
                                              <p class="">${products[ppppp][i].product_name}</p>
                                              <p class="">Code - ${products[ppppp][i].product_code}</p>
                                              <p class="">${products[ppppp][i].product_description}</p>
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