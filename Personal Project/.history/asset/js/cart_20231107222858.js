let dataLocal = JSON.parse(localStorage.getItem('product'));
const handleRender = () => {
    
    dataLocal.forEach((item, index) => {
        `

    `
    })

    document.querySelector('.list-cart').prepend(div)
}

if (dataLocal.length > 0) {
    handleRender()
}


