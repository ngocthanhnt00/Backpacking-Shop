const countProduct = () => {
    if(arrayProduct.length > 0) {
        let rightHeader = document.querySelector('.right-header a:nth-child(3)');
        let getValue = rightHeader.dataset.cartCounter;
        console.log(getValue, 'sssss');
        rightHeader.setAttribute('data-cart-counter', `${arrayProduct.length}`)
    }
}

ser