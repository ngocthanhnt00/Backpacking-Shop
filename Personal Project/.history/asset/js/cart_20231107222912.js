let dataLocal = JSON.parse(localStorage.getItem('product'));
const handleRender = () => {
    
    dataLocal.map((item, index) => {
       return `
            
        `
    })

    document.querySelector('.list-cart').prepend(div)
}

if (dataLocal.length > 0) {
    handleRender()
}


