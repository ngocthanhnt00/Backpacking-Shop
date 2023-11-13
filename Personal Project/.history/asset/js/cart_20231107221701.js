const handleRender = () => {
    let result = dataLocal.map((item, index) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'cart-item');
        return `
    
        
        `

    })
    div.innerHTML = result.join('');
    console.log(div, 'ssss');
    document.querySelector('.list-cart').prepend(div)
}

let dataLocal = JSON.parse(localStorage.getItem('product'));
if(dataLocal.length > 0) {
    handleRender()
}


