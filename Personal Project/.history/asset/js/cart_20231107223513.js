// let dataLocal = JSON.parse(localStorage.getItem('product'));
// const handleRender = () => {
    
//    let result = dataLocal.map((item, index) => {
//        return `
//        <div class="cart-item">
//        <div class="component-product">
//            <div class="product_check">
//                <input type="checkbox" name="" id="" data-price="" data-quantity="">
//            </div>
//            <div class="product_image">
//                <a href="#">
//                    <img src="${item.image}" alt="">
//                </a>
//            </div>
//            <div class="product_info">
//                <div class="item_remove">
//                    <span>&times;</span>
//                </div>
//                <div class="product-relative">
//                    <a href="" title="">${item.name}</a>
//                    <p class="cart-color-item"></p>
//                    <div class="price-prd">
//                        <span>${item.priceNew}đ</span>
//                        <del class="${item.priceOld == null && 'none'}">${item.priceOld != null ? item.priceOld : null}</del>
//                    </div>
//                </div>
//                <div class="select-quantity">
//                    <div class="button-minus">-</div>
//                    <input id="two-input" value="${item.quantity}" min="1" aria-valuemax="50" type="number" name=""
//                        class="product-quantity">
//                    <div class="button-maxnus">+</div>
//                </div>
//            </div>
//        </div>
//    </div>
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
  let result = listProduct.map((product) => {
    return `
      <div class="row-product">
        <div class="product-img-payments">
          <img src="${product.image}" alt="">
        </div>
        <div class="product-name-payments">
          <p id="product-name-payment"> <ion-icon
            style="font-size: 32px; margin-right: 5px;  color: #2fb058; --ionicon-stroke-width: 17px; ;"
            name="ticket-outline"><small>Giảm giá</small></ion-icon> ${product.name}
          <p class="product-thanhtoan">${product.priceNew.toLocaleString('en-US')}₫ <del>${product.priceOld.toLocaleString('en-US')}₫</del></p>
          </p>
        </div>
        <div class="product-quantity-payments">
          <div class="button-minus" name="${product.symbol}">-</div>
          <input id="two-input" onchange="handleInput(this)" value="${product.quantity}" aria-valuemax="50" type="number" name=""
            class="product-quantity">
          <div class="button-maxnus" name="${product.symbol}">+</div>
        </div>
      </div>
    `;
  });
  document.querySelector('.component-left').innerHTML = result.join('');
  
}

function handleInput(input) {
  let getValue = +(input.value);
  console.log(getValue, 'getValue');
  if(getValue <= 0) {
    console.log('lot vao');
    getValue = 1
  }
  // console.log(productId);
  for (let i = 0; i < listProduct.length; i++) {
      listProduct[i].quantity = getValue
      listProduct[i].price * listProduct[i].quantity
      // console.log(check);
      setLocal()
      updateProductList()
      return 0; // Return và không thực hiện đoạn mã bên dưới

  }

}




if (listProduct.length > 0) {
  let headingName = document.querySelector('.product-name');
  headingName.innerText = 'Sản phẩm bạn đã mua';
}

updateProductList();


