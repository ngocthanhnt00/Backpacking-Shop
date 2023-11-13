
const countProduct = () => {
    const arrayProduct = JSON.parse(localStorage.getItem('product')) || [];
    if(arrayProduct.length > 0) {
        let rightHeader = document.querySelector('.right-header a:nth-child(3)');
        let getValue = rightHeader.dataset.cartCounter;
        rightHeader.setAttribute('data-cart-counter', `${arrayProduct.length}`)
    }
}

setInterval(countProduct, 1)