// let dataLocal = JSON.parse(localStorage.getItem('product'));
// const handleRender = () => {
    
//    let result = dataLocal.map((item, index) => {
//        return `
//        
//         `
//     })

//     document.querySelector('.list-cart').innerHTML()
// }

// if (dataLocal.length > 0) {
//     handleRender()
// }



let listProduct = JSON.parse(localStorage.getItem('product')) || [];
// const sum = () => {
//   let totalPrice = listProduct.reduce((acc, curr) => {
//     acc += curr.priceNew * curr.quantity;
//     return acc;
//   }, 0);
//   sum_price.innerHTML = totalPrice.toLocaleString('en-US') + '₫';
// };

const setLocal = () => {
  return localStorage.setItem('product', JSON.stringify(listProduct))
}

function updateProductList() {
  let result = listProduct.map((item, index) => {
    return `
    <div class="cart-item">
           <div class="component-product">
               <div class="product_check">
                   <input type="checkbox" name="" id="" data-price="" data-quantity="">
               </div>
               <div class="product_image">
                   <a href="#">
                       <img src="${item.image}" alt="">
                   </a>
               </div>
               <div class="product_info">
                   <div class="item_remove">
                       <span>&times;</span>
                   </div>
                   <div class="product-relative">
                       <a href="" title="">${item.name}</a>
                       <p class="cart-color-item"></p>
                       <div class="price-prd">
                           <span>${item.priceNew.toLocaleString('en-US')}đ</span>
                           <del class="${item.priceOld == null && 'none'}">${item.priceOld != null ? item.priceOld.toLocaleString('en-US') : null}đ</del>
                       </div>
                   </div>
                   <div class="select-quantity">
                       <div class="button-minus">-</div>
                       <input id="two-input" value="${item.quantity}" min="1" aria-valuemax="50" type="number" name=""
                           class="product-quantity">
                       <div class="button-maxnus">+</div>
                   </div>
               </div>
           </div>
       </div>
    `;
  });
  document.querySelector('.component-left').innerHTML = result.join('');
  
}

// * Click Button Increase And Decrease Quantity
if(listProduct.leng)
// * End

// function handleInput(input) {
//   let getValue = +(input.value);
//   console.log(getValue, 'getValue');
//   if(getValue <= 0) {
//     console.log('lot vao');
//     getValue = 1
//   }
//   // console.log(productId);
//   for (let i = 0; i < listProduct.length; i++) {
//       listProduct[i].quantity = getValue
//       listProduct[i].price * listProduct[i].quantity
//       // console.log(check);
//       setLocal()
//       updateProductList()
//       return 0; // Return và không thực hiện đoạn mã bên dưới

//   }

// }

// if (listProduct.length > 0) {
//   let headingName = document.querySelector('.product-name');
//   headingName.innerText = 'Sản phẩm bạn đã mua';
// }

updateProductList();


