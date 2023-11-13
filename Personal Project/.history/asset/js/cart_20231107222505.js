let dataLocal = JSON.parse(localStorage.getItem('product'));
const handleRender = () => {
    let div = document.createElement('div');
    dataLocal.forEach((item, index) => {
        div.innerHTML = `
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
                        <span>${item.priceNew}đ</span>
                        <del class="${item.priceOld == null && 'none'}">${item.priceOld != null ? item.priceOld : null}</del>
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
    `
    })

    document.querySelector('.list-cart').app
}

if (dataLocal.length > 0) {
    handleRender()
}


