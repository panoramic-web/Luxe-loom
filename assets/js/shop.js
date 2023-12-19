var product_menu_toggler = document.querySelector('.product-menu-toggler'),
   product_list = document.querySelector('#product-list'),
   product_select = document.querySelector('#product'),
   category_name = document.querySelector('#category-name'),
   grid = document.querySelector('#showcase'),
   g_4x4 = document.querySelector('.g4x4'),
   g_2x2 = document.querySelector('.g2x2'),
   list = document.querySelector('.list-button'),
   swiper_wrapper = document.querySelector('.swiper-wrapper');

product_menu_toggler.onclick = function() {
   product_list.classList.toggle('active');
}

// Close the product_list if the user clicks outside of it

onclick = function(e) {
   if (!e.target.matches('.product-list')) {
      if (product_list.classList.contains('active')) {
         product_list.classList.remove('active');
      }
   }
}


/* Specifies the product category name
Insert the price in dollors without the $ sign */

let products = [
   t_shirts = [
      {
         category_name: 'T-shirts'
      }, {
         product_image: './assets/items/t shirts/TFETTERS-Fashion-Men-T-shirt-Slim-Fit-Custom-T-shirt-Crease-Design-Long-Stylish-Luxury-V__83553.1550172485.jpg',
         product_name: 'Long stylish luxury v',
         product_description: 'Available in black, white, grey',
         product_price: '8.00',
         product_added_date: '2023-10-29'
   }, {
         product_image: './assets/items/t shirts/2018-Fashion-Men-T-shirt-Slim-Fit-Custom-T-shirt-Crease-Design-Long-Stylish-Luxury__74411.1523708594.jpg',
         product_name: 'Long stylish luxury',
         product_description: 'Available in black, white, grey',
         product_price: '8.15',
         product_added_date: '2023-10-06'
   }, {
         product_image: './assets/items/t shirts/2018-Fashion-Men-T-shirt-Slim-Fit-Custom-T-shirt-Crease-Design-Long-Stylish-Luxury__33850.1523708593.jpg',
         product_name: 'Long stylish luxury',
         product_description: 'Available in black, white, grey',
         product_price: '8.15',
         product_added_date: '2023-10-15'
   }, {
         product_image: './assets/items/t shirts/2018-Fashion-Mens-Casual-T-Shirts-Slim-Fit-Short-Sleeve-T-Shirt-Men-s-shirts-Tee.jpg_Q90.jpg_.jpg',
         product_name: 'Short sleeve t-shirt',
         product_description: 'Available in black, white, grey',
         product_price: '5.76',
         product_added_date: '2023-09-15'
   }, {
         product_image: './assets/items/t shirts/2020-Autumn-Brand-Clothing-100-Cotton-Men-Clothes-T-Shirt-Long-Sleeve-T-Shirts-Mens-Casual.jpg',
         product_name: 'Long sleeve t-shirt',
         product_description: 'Available in black, white, grey',
         product_price: '7.77',
         product_added_date: '2023-09-29'
   }, {
         product_image: './assets/items/t shirts/6-Designs-Mens-T-Shirt-Slim-Fit-Crew-Neck-T-shirt-Men-Short-Sleeve-Shirt-Casual__30249.1537167076.jpg',
         product_name: 'Short sleeve crew neck',
         product_description: 'Available in black, white, grey',
         product_price: '5.00',
         product_added_date: '2023-09-20'

   }, {
         product_image: './assets/items/t shirts/Charcoal Grat T.jpg',
         product_name: 'Long sleeve v',
         product_description: 'Available in black, white, grey',
         product_price: '7.00',
         product_added_date: '2023-09-07'
   }, {
         product_image: './assets/items/t shirts/New-Design-T-Shirt-Short-Sleeve-Casual-Mens-Polo-Shirt.jpg',
         product_name: 'Short sleeve polo t-shirt',
         product_description: 'Available in black, white, grey',
         product_price: '5.00',
         product_added_date: '2023-09-30'
   }, {
         product_image: './assets/items/t shirts/full-sleeve-woolen-t-shirt-500x500.jpg',
         product_name: 'Short sleeve polo t-shirt',
         product_description: 'Available in black, white, grey',
         product_price: '5.00',
         product_added_date: '2023-10-10'
   }, {
         product_image: './assets/items/t shirts/men-27s-designer-t-shirt-500x500.jpg',
         product_name: 'Short sleeve polo t-shirt',
         product_description: 'Available in black, white, grey',
         product_price: '5.00',
         product_added_date: '2023-10-17'
   }
   ],

jeans = [
      {
         category_name: 'Jeans'
   }, {
         product_image: './assets/items/jeans/15886958_1.jpeg',
         product_name: 'Slim fit dark brown jeans',
         product_description: 'Available in black, white, grey',
         product_price: '9.70',
         product_added_date: '2023-10-25'
   }, {
         product_image: './assets/items/jeans/How-Your-Jeans-Should-Fit-Ashley-Weston-Mens-Clothing-Fit-Guide.jpg',
         product_name: 'Slim fit jeans',
         product_description: 'Available in black, white, grey',
         product_price: '8.50',
         product_added_date: '2023-10-22'
   }
]
];


load_products = () => {
   var product = product_select.value;
   category_name.innerText = products[product][0].category_name;
   grid.innerHTML = '';

   for (var i = 1; i < products[product].length; i++) {
      var product_card = document.createElement('div');
      product_card.innerHTML = `<div class="card">
                                        <a class="card_inner" href="#">
                                           <div class="card_top">
                                              <img class="img" src="${products[product][i].product_image}" alt="${products[product][i].product_name}">
                                           </div>

                                           <div class="details">
                                              <p class="name">${products[product][i].product_name}</p>
                                              <p class="description">${products[product][i].product_description}</p>
                                              <p class="price">US$ ${products[product][i].product_price}</p>
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