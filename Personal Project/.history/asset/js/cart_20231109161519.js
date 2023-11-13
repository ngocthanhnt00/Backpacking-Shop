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
               <div class="product_info" data-id="${item.id}">
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
                   <div onclick="clickUpdateQuantity(event)" class="select-quantity" >
                       <div  class="button-minus">-</div>
                       <input onchange="handleInput(this)" id="two-input" value="${item.quantity}" min="1" aria-valuemax="50" type="number" name=""
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
const clickUpdateQuantity = (event) => {
    if(listProduct.length > 0) {
        // * Click Button Increase And Decrease Quantity
        let isPlusButton = event.target.classList.contains('button-maxnus');
        let isMinusButton = event.target.classList.contains('button-minus');
        let productInfo = event.target.closest('.product_info');
        console.log(productInfo, 'oooooo');
        if(isMinusButton || isPlusButton) {
            for (let i = 0; i < listProduct.length; i++) {
                if(listProduct[i].id == (productInfo.dataset.id)) {
                    if(isPlusButton) {
                        listProduct[i].quantity += 1;
                        setLocal()
                        
                    } else if (isMinusButton) {
                        if(listProduct[i].quantity > 0) {
                            console.log('Lot vao day ssss');
                            listProduct[i].quantity -= 1;
                            setLocal();
                        } else if
                    }
                    listProduct[i].total = listProduct[i].priceNew * listProduct[i].quantity;
                    setLocal()
                    updateProductList()
                    
                }
            }
        }
       
    }
    
    }
// * End


updateProductList();


const handleInput = (element) => {
    let getValue = +(element.value);
    console.log(getValue);
    for (let i = 0; i < listProduct.length; i++) {
        listProduct[i].quantity = getValue
        let check = listProduct[i].total = listProduct[i].priceNew * listProduct[i].quantity
        console.log(check);
        setLocal()
        renderProduct()
        return 0; // Return và không thực hiện đoạn mã bên dưới

        
    }
}