const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
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

const countProduct = () => {
    let rightHeader = document.querySelector('.right-header a:nth-child(3)');
    let titleCart = document.querySelector('.title-cart');
    if(listProduct.length > 0) {
        titleCart.innerHTML = `Giỏ hàng <span class="count">(${listProduct.length} sản phẩm)</span>`;
        rightHeader.setAttribute('data-cart-counter', `${listProduct.length}`);
        let counter = $('.count');
        counter.style.display= 'inline-block';
    } else {
        titleCart.innerHTML = `Giỏ hàng <span class="count">(${listProduct.length} sản phẩm)</span>`;
        rightHeader.setAttribute('data-cart-counter', '0');
        let counter = $('.count');
        counter.style.display= 'none';
    }
}

function updateProductList() {
    if(listProduct.)
}

// * Click Button Increase And Decrease Quantity
const clickUpdateQuantity = (event) => {
    if (listProduct.length > 0) {
        // * Click Button Increase And Decrease Quantity
        let isPlusButton = event.target.classList.contains('button-maxnus');
        let isMinusButton = event.target.classList.contains('button-minus');
        let productInfo = event.target.closest('.product_info');
        console.log(productInfo, 'oooooo');
        if (isMinusButton || isPlusButton) {
            for (let i = 0; i < listProduct.length; i++) {
                if (listProduct[i].id == (productInfo.dataset.id)) {
                    if (isPlusButton) {
                        listProduct[i].quantity += 1;
                        setLocal()

                    } else if (isMinusButton) {
                        listProduct[i].quantity -= 1;
                        setLocal();
                        if (listProduct[i].quantity == 0) {
                            removeItem(i)
                        };
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


const handleInput = (element, productID) => {
    let getValue = +(element.value);
    let check = productID;
    console.log(check, 'sssssssss');
    for (let i = 0; i < listProduct.length; i++) {
        if(listProduct[i].id == productID) {
            listProduct[i].quantity = getValue
            setLocal()
            listProduct[i].total = listProduct[i].priceNew * listProduct[i].quantity
            console.log(check);
            setLocal()
            updateProductList()
            return 0; // Return và không thực hiện đoạn mã bên dưới
        }
    }
}

const removeItem = (i) => {
    listProduct.splice(i, 1);
    setLocal();
    countProduct()
    updateProductList();
}