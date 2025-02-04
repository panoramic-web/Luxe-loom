const category_name = document.querySelector('#category-name'),
   filter_btn = document.querySelector('.filters-btn'),
   filter_window = document.querySelector('.filter-window'),
   filter_window_close_btn = document.querySelector('#filter-window-close');

// Currency
currency_toggler.onchange = function() {
   localStorage.setItem('currency', this.value);
   load_products();
}

filter_btn.onclick = () => {
   filter_window.classList.toggle('active');
}
filter_window_close_btn.onclick = () => {
   filter_window.classList.toggle('active');
}


fx.base = "USD";
fx.rates = {
   "EUR": 0.745101, // eg. 1 USD === 0.745101 EUR
   "LKR": 312.083057,
   "USD": 1, // always include the base rate (1:1)
   /* etc */
}

load_products = () => {
   const product = product_select.value;
   category_name.innerText = products[product][0].category_name;
   grid.innerHTML = '';
   curr = localStorage.getItem('currency');

   for (var i = 1; i < products[product].length; i++) {
      const product_card = document.createElement('div');
      let price = fx.convert(products[product][i].product_price, { from: 'LKR', to: curr });
      price = curr == 'USD' ? ("US$ " + price.toFixed(2)) : ("LKR " + price.toFixed(2));

      product_card.innerHTML = `<div class="card item">
                                 <a onclick="checkout(this)" class="card_inner" href="checkout.html">
                                    <div class="card_top">
                                       <img class="img" src="${products[product][i].product_image}" alt="${products[product][i].product_name}">
                                    </div>

                                    <div class="details">
                                       <p class="name">${products[product][i].product_name}</p>
                                       <!--<p class="code" data-code="${products[product][i].product_code}">Item code: ${products[product][i].product_code}</p>
                                       <p class="description">${products[product][i].product_description}</p>
                                      --> <p class="reviews">⭐ 4.5 (125 Reviews)</p>
                                       <p class="price">${price} (20% OFF)</p>
                                       <!--<p class="price">${price}</p>-->
                                       <!--<div class="ratings">
                                          <i class="bi bi-star-fill"></i>
                                          <i class="bi bi-star-fill"></i>
                                          <i class="bi bi-star-fill"></i>
                                          <i class="bi bi-star"></i>
                                          <i class="bi bi-star"></i>
                                       </div>
                                       -->
                                       <p class="sizes">Available Sizes: S, M, L, XL</p>
                                       <button type="button" class="heart-btn"><i class="bi bi-heart"></i> Add to wishlist</button>
                                       <button type="button" class="cart-btn"><i class="bi bi-cart"></i> Add to cart</button>
                                       <p class="delivery-cost">Free delivery</p>
                                    </div>
                                </a>
                              </div>`
      grid.appendChild(product_card);
   }
};

load_products();

product_select.oninput = () => {
   load_products();
};

function checkout(card) {
   const code = card.querySelector('.code').getAttribute('data-code');
   localStorage.setItem('item_code', code);
}



// Products arrangement
const grid_list = () => {
   if (innerWidth > 1000) {
      grid.classList.remove('g2', 'list')
      grid.classList.add('g4')
      g_3x3.style.color = 'var(--sidebar-bg)'
      g_3x3.style.background = 'var(--primary-text)'
      g_2x2.style.color = 'var(--primary-text)'
      list.style.color = 'var(--primary-text)'
   }
   else if (innerWidth < 700) {
      grid.classList.remove('g4', 'list')
      grid.classList.add('g2')
      g_2x2.style.color = 'var(--sidebar-bg)'
      g_2x2.style.background = 'var(--primary-text)'
      g_3x3.style.color = 'var(--primary-text)'
      list.style.color = 'var(--primary-text)'
   }
   else if (innerWidth < 400) {
      grid.classList.remove('g4', 'g2', 'grid')
      grid.classList.add('list')
      list.style.color = 'var(--sidebar-bg)'
      list.style.background = 'var(--primary-text)'
      g_3x3.style.color = 'var(--primary-text)'
      g_2x2.style.color = 'var(--primary-text)'
   }
};

grid_list();
onresize = grid_list;

const grid_btns = document.querySelectorAll('.grid-btn');
grid_btns.forEach((btn) => {
   btn.onclick = function() {
      for (var i = 0; i < grid_btns.length; i++) {
         grid_btns[i].style.color = 'var(--primary-text)';
         grid_btns[i].style.background = 'var(--sidebar-bg)';
         grid.classList.remove('g4', 'g2', 'list');
      }
      const style = this.getAttribute('data-style');
      grid.classList.add(style);
      this.style.color = 'var(--sidebar-bg)';
      this.style.background = 'var(--primary-text)';
   }
});









const grid_list = () => {
   grid.classList.remove('g4', 'g2', 'list');

   if (innerWidth > 1000) grid.classList.add('g4'), setActive(g_3x3);
   else if (innerWidth < 400) grid.classList.add('list'), setActive(list);
   else grid.classList.add('g2'), setActive(g_2x2);
};

const setActive = (btn) => {
   [g_3x3, g_2x2, list].forEach(b => (b.style.color = 'var(--primary-text)', b.style.background = ''));
   btn.style.color = 'var(--sidebar-bg)';
   btn.style.background = 'var(--primary-text)';
};

grid_list();
onresize = grid_list;

document.querySelectorAll('.grid-btn').forEach(btn => {
   btn.onclick = function() {
      document.querySelectorAll('.grid-btn').forEach(b => (b.style.color = 'var(--primary-text)', b.style.background = 'var(--sidebar-bg)'));
      grid.className = this.getAttribute('data-style');
      this.style.color = 'var(--sidebar-bg)';
      this.style.background = 'var(--primary-text)';
   };
});









// getText("products.json");

// async function getText(file) {
//    let x = await fetch(file);
//    let y = await x.text();
//    console.log(y);
// }



// const xmlhttp = new XMLHttpRequest();

// xmlhttp.onload = function() {
//    const myObj = JSON.parse(this.responseText);
//    console.log(myObj[0]);
// };

// xmlhttp.open("GET", "products.json");
// xmlhttp.send();