let dataLocal = JSON.parse(localStorage.getItem('product'));
dataLocal.map((item, index) => {
    return `
    <div class="item-cart">
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
                <a href="" title="">Lều 4 người 1 lớp Vultura SG-04</a>
                <p class="cart-color-item"></p>
                <div class="price-prd">
                    <span>${item.priceNew}đ</span>
                    <del>${priceOld != null ? priceOld }</del>
                </div>

            </div>
            <div class="select-quantity">
                <div class="button-minus">-</div>
                <input id="two-input" value="1" min="1" aria-valuemax="50" type="number" name=""
                    class="product-quantity">
                <div class="button-maxnus">+</div>
            </div>
        </div>
    </div>
</div>
    `
})