let dataLocal = JSON.parse(localStorage.getItem('product'));
if(dataLocal.length > 0) {
    handleRender()
}


const handleRender = () => {
    dataLocal.map((item, index) => {
        let div = document.createElement('div');
        div.setAttribute('class', )
        return `
        
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
                        <del ${priceOld != null ? '' : 'none'}>${priceOld != null ? priceOld : null}</del>
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
}