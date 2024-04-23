
// Call API 


let data;
fetch('https://ngocthanhnt04.id.vn/database.json')
    .then((res) => res.json())
    .then((res) => {
        data = res
        renderProduct()
        // Product2
        const listProduct = document.querySelector('.list-products2');
        const products = document.querySelectorAll('.list-products2 .product2');
        console.log(products.length, 'length');
        let itemWidth = 0;
        setInterval(() => {
            itemWidth = products[0].offsetWidth + 20;
        })
        let currentIndex = 0;

        document.querySelector('.next').addEventListener('click', function () {
            if (currentIndex < products.length - 2) {
                currentIndex++;
            } else {
                currentIndex = 0; // Quay lại từ đầu nếu đã ở cuối danh sách
            }
            listProduct.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        });

        document.querySelector('.prev').addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = products.length - 1; // Quay lại cuối danh sách nếu đã ở đầu
            }
            listProduct.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

            // HOVER PRODUCT2
            // END HOVER PRODUCT2

        });

    })
// End Call API


// RENDER PRODUCT
function renderProduct() {
    data.forEach((item, index) => {
        let html = document.createElement('div');
        html.setAttribute('class', 'product2');
        html.innerHTML +=
            `
    <div class="image-product" onclick="handleDetail('${item.masp}')">
        <img src="${item.img}" alt="">
    </div>
    <div class="product-info"  name="${item.id}" onclick="handleDetail('${item.masp}')">
        <div class="btn-add">
            <button onclick="themGioHang(this)" class="addCart"><i class="fa-solid fa-cart-shopping fa-lg" style="color: #fff;"></i></button>
            <button onclick="pretty()" class="pretty"><i class="fa-solid fa-heart fa-lg" style="color: #fff;"></i></i></button>
            <button onclick="options()" class="options"><i class="fa-solid fa-gear fa-lg" style="color: #fff;"></i></button>
        </div>
        <div class="product-vendor text-center">
            <span>
                <a href="">${item.brand}</a>
            </span>
        </div>
        <div class="product-name text-center">
            <h3 class="cart-title">
                <a href="#">${item.name}</a>
            </h3>
        </div>
        <div class="stars text-center ">
            <i class="fa-regular fa-star" style="color: #50c252;"></i>
            <i class="fa-regular fa-star" style="color: #50c252;"></i>
            <i class="fa-regular fa-star" style="color: #50c252;"></i>
            <i class="fa-regular fa-star" style="color: #50c252;"></i>
            <i class="fa-regular fa-star" style="color: #50c252;"></i>
        </div>

        <div class="price">
            <div class="price-new">${item.priceNew}đ</div>
            <div class="price-old ${item.priceOld == null && 'none'}" >${item.priceOld}đ</div>
        </div>
      
    </div>
`
        console.log(html);
        document.querySelector('.list-products2').append(html)

    })
}
// END RENDER PRODUCT

let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let list = document.querySelector('.list');
console.log(list);
let items = document.querySelectorAll('.item');
console.log(items);
let dots = document.querySelectorAll('.dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let contai = document.querySelector('.container')
let ss = false
let active = 0;
let lengthItems = items.length - 1;
var refesh = setInterval(() => {
    next.click()
}, 3000)


next.onclick = function () {
    if (active == lengthItems) {
        active = 0;
    } else {
        active += 1;
    }
    handle()

}


prev.onclick = function () {
    if (active == 0) {
        active = lengthItems;
    } else {
        active -= 1;
    }
    handle()

}
function handle() {
    let removeLastActive = document.querySelector('.dots .active');
    removeLastActive.classList.remove('active')
    if (dots[active]) {
        dots[active].classList.add('active')
    }
    // console.log(active);
    let checkLeft = items[active].offsetLeft
    // console.log(checkLeft);
    list.style.left = `${-checkLeft}px`
    clearInterval(refesh)
    refesh = setInterval(() => { next.click() }, 3000);

}

dots.forEach((dot, index) => {
    dot.onclick = function () {
        active = index
        handle()
    }
})





// let addCartProd = $$('.addCart');
// Array.from(addCartProd).forEach((prod, index) => {
//     prod.onmouseover = function () {
//         addCart[index].innerHTML = ''
//         let button1 = document.createElement('button');

//         button1.setAttribute('class', 'addCart')
//         button1.innerHTML = '<i class="fa-solid fa-cart-shopping fa-lg" style="color: #fff;"></i>'
//         let button2 = document.createElement('button');
//         button2.setAttribute('class', 'options')
//         button2.innerHTML = '<i class="fa-solid fa-gear fa-lg" style="color: #fff;"></i>'

//         addCart[index].appendChild(button1)
//         addCart[index].appendChild(button2)
//     }
// });




let listProduct3 = document.querySelector('.list-products3');
let products3 = document.querySelectorAll('.list-products3 .product3');
let itemWidth3 = products3[0].offsetWidth + 20;
let currentIndex3 = 0;

document.querySelector('.next3').addEventListener('click', function () {
    if (currentIndex3 < products3.length - 2) {
        currentIndex3++;
    } else {
        currentIndex3 = 0; // Quay lại từ đầu nếu đã ở cuối danh sách
    }
    listProduct3.style.transform = `translateX(-${currentIndex3 * itemWidth3}px)`;
});


document.querySelector('.prev3').addEventListener('click', function () {
    if (currentIndex3 > 0) {
        currentIndex3--;
    } else {
        currentIndex3 = products3.length - 1; // Quay lại cuối danh sách nếu đã ở đầu
    }
    listProduct3.style.transform = `translateX(-${currentIndex3 * itemWidth3}px)`;
});




// End Product2




// ** Search product
let nameProduct = [];
let searchInput = $('.search-input-product');
let cartTitle = $$('.cart-title a');
let priceNew = $$('.price .price-new')
let priceOld = $$('.price .price-old')
let getLinkImage = $$('.image-product img');
let searchProduct = $('#search-products')

document.addEventListener('DOMContentLoaded', function () {
    Array.from(cartTitle).forEach((title, index) => {
        nameProduct.push({
            name: title.innerText,
            priceNew: priceNew[index].innerText,
            priceOld: priceOld[index] != null ? priceOld[index].innerText : '',
            image: getLinkImage[index].src,
        });
    });
});




// console.log(unf);

function searchProducts(query) {
    let results = [];
    query = query.toLowerCase(); // Chuyển đổi giá trị nhập vào thành chữ thường để so sánh không phân biệt hoa thường

    for (let i = 0; i < nameProduct.length; i++) {
        let productName = nameProduct[i].name.toLowerCase(); // Chuyển đổi tên sản phẩm thành chữ thường
        if (productName.includes(query)) {
            results.push(nameProduct[i]);
        }
    }
    console.log(results);

    return results;
}
let html = '';
searchProduct.addEventListener('input', () => {
    let searchValue = searchProduct.value.trim(); // Lấy giá trị nhập vào và loại bỏ các khoảng trắng ở đầu và cuối
    let searchLeft = $('.search-left');
    console.log(searchLeft, 'kieeeeee');

    if (searchValue === '') {
        searchInput.style.display = 'none';
        html = ''
        searchLeft.innerHTML = ''; // Xóa nội dung hiển thị kết quả tìm kiếm khi không có giá trị nhập vào
    } else {
        searchInput.style.display = 'block';
        let searchResults = searchProducts(searchValue);
        console.log(searchResults, 'ssss');
        handleRender(searchResults); // Gọi hàm handleRender để hiển thị kết quả tìm kiếm
    }
});

function handleRender(results) {
    let searchLeft = $('.search-left');

    for (let i = 0; i < results.length; i++) {
        let product = results[i];
        html += `
            <div class="item-search">
                <div class="image-product-search">
                    <img src="${product.image}" alt="">
                </div>
                <div class="infor">
                    <div class="infor-title">${product.name}</div>
                    <div class="infor-price">
                        <div class="price-new-search">${product.priceNew}</div>
                        <div class="price-old-search">${product.priceOld}</div>
                    </div>
                </div>
            </div>
        `;
    }

    searchLeft.innerHTML = html;
}

// End Search Product

// * SLIDER BANNER
let activeBanner = 0;
let banners = Array.from($$('.banner'));
let listBanner = $('.sale-banner');
let bannerWidth = banners[0].offsetWidth;
let intervalID;

function updateSlider() {
    listBanner.style.transform = `translateX(-${(activeBanner * bannerWidth)}px)`;
}

function nextBanner() {
    activeBanner = (activeBanner + 1) % banners.length;
    // console.log(activeBanner, 'sss');
    updateSlider();
}

function startAutoSlide() {
    intervalID = setInterval(nextBanner, 2000); // Tự động lướt mỗi 2 giây
}


function stopInterval() {
    clearInterval(intervalID); // Dừng tự động lướt
}





updateSlider();
startAutoSlide();


// * END SLIDER BANNER


// * HANDLER CLICK PRODUCT


let arrayProduct = JSON.parse(localStorage.getItem("product")) || [];
const countProduct = () => {
    if(arrayProduct.length > 0) {
        let rightHeader = document.querySelector('.right-header a:nth-child(3)');
        let getValue = rightHeader.dataset.cartCounter;
        console.log(getValue, 'sssss');
        rightHeader.setAttribute('data-cart-counter', `${arrayProduct.length}`)
    }
}

countProduct()
setInterval(countProduct, 2000)


function setLocal() {
    return localStorage.setItem('product', JSON.stringify(arrayProduct))
}
const themGioHang = (element) => {
    let quantity = 1;
    let productInfor = element.closest('.btn-add').closest('.product-info');
    let id = productInfor.getAttribute('name');
    console.log(id, 'id');
    let image = productInfor.parentElement.querySelector(".image-product img").src;
    let name = productInfor.querySelector('.product-name a').innerText;
    let brand = productInfor.querySelector('.product-vendor a').innerText;
    let priceNew = productInfor.querySelector('.price .price-new').innerText.replace(',', '').replace(',', '').replace('đ', '');
    let priceOld = productInfor.querySelector('.price .price-old');
    console.log(priceOld, 'Check');
    if (!(priceOld.classList.contains("none"))) {
        priceOld = priceOld.innerText.replace(',', '').replace(',', '').replace('đ', '');
    } else {
        priceOld = null;
    }
    console.log(priceOld, 'priceOld');
    let total = +priceNew * quantity
    let data = {
        id: +id,
        name: name,
        brand: brand,
        image: image,
        priceNew: +priceNew,
        priceOld: (priceOld == null ? null : +priceOld),
        quantity: quantity,
        total: total,
    }
    console.log(data.priceOld, 'ssss');
    updateQuantity(data)

}


function updateQuantity(data) {
    for (let i = 0; i < arrayProduct.length; i++) {
        if (arrayProduct[i].id == data.id) {
            console.log('Lot vao day');
            arrayProduct[i].quantity++; // +  1 Thì nó lại ko ăn ( ảo vc)
            arrayProduct[i].total = arrayProduct[i].priceNew * arrayProduct[i].quantity;;
            setLocal()
            return
        }
    }
    console.log(data, 'sssss');
    arrayProduct.push(data)
    setLocal()
    countProduct()
}
const options = () => {
    console.log('Options, qqqqqq ');
}

// * END CLICK PRODUCT 



const handleDetail = (name) => {
    
    window.location.href = `./src/detail${name}.html`;
   
}


