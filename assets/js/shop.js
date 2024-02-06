//___Currency
currency_selector.oninput = function() {
   localStorage.setItem('curr', this.value);
   load_products();
}

fx.base = "USD";
fx.rates = {
   "EUR": 0.745101, // eg. 1 USD === 0.745101 EUR
   "LKR": 312.083057,
   "USD": 1, // always include the base rate (1:1)
   /* etc */
}

load_products = () => {
   var product = product_select.value;
   category_name.innerText = products[product][0].category_name;
   grid.innerHTML = '';
   currency = localStorage.getItem('curr');

   for (var i = 1; i < products[product].length; i++) {
      var product_card = document.createElement('div');
      var price = fx.convert(products[product][i].product_price, { from: 'LKR', to: currency });
      var price = price.toFixed(2);
      price = currency + " " + price;

      product_card.innerHTML = `<div class="card item">
                                        <a onclick="checkout(this)" class="card_inner" href="checkout.html">
                                           <div class="card_top">
                                              <img class="img" src="${products[product][i].product_image}" alt="${products[product][i].product_name}">
                                           </div>

                                           <div class="details">
                                              <p class="name">${products[product][i].product_name}</p>
                                              <p class="code" data-code="${products[product][i].product_code}">Code - ${products[product][i].product_code}</p>
                                              <p class="description">${products[product][i].product_description}</p>
                                              <p class="price">${price}</p>
                                              <div class="ratings">
                                              <i class="bi bi-star-fill"></i>
                                              <i class="bi bi-star-fill"></i>
                                              <i class="bi bi-star-fill"></i>
                                              <i class="bi bi-star"></i>
                                              <i class="bi bi-star"></i>
                                              </div>
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
   var c = card.querySelector('.code').getAttribute('data-code');
   localStorage.setItem('code', c);
}






grid.onscroll = () => {
   var titlebar = document.querySelector('#shop .titlebar');
   titlebar.style.display = 'flex';
}



//___Products arrangement logic

var grid_list = () => {
   if (innerWidth > 1000) {
      grid.classList.remove('g2', 'list')
      grid.classList.add('g4')
      g_4x4.style.color = 'var(--primary)'
      g_2x2.style.color = 'var(--secondary)'
      list.style.color = 'var(--secondary)'
   }

   else if (innerWidth < 700) {
      grid.classList.remove('g4', 'list')
      grid.classList.add('g2')
      g_2x2.style.color = 'var(--primary)'
      g_4x4.style.color = 'var(--secondary)'
      list.style.color = 'var(--secondary)'
   }

   else if (innerWidth < 400) {
      grid.classList.remove('g4', 'g2')
      grid.classList.add('list')
      list.style.color = 'var(--primary)'
      g_4x4.style.color = 'var(--secondary)'
      g_2x2.style.color = 'var(--secondary)'
   }
};



g_4x4.onclick = () => {
   grid.classList.remove('g2', 'list')
   grid.classList.add('g4')
   g_4x4.style.color = 'var(--primary)'
   g_2x2.style.color = 'var(--secondary)'
   list.style.color = 'var(--secondary)'
};

g_2x2.onclick = () => {
   grid.classList.remove('g4', 'list')
   grid.classList.add('g2')
   g_2x2.style.color = 'var(--primary)'
   g_4x4.style.color = 'var(--secondary)'
   list.style.color = 'var(--secondary)'
};

list.onclick = () => {
   grid.classList.remove('g4', 'g2')
   grid.classList.add('list')
   list.style.color = 'var(--primary)'
   g_4x4.style.color = 'var(--secondary)'
   g_2x2.style.color = 'var(--secondary)'
};

grid_list();

onresize = () => {
   grid_list();
}






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