let dataLocal = JSON.parse(localStorage.getItem('product'));
const handleRender = () => {
   dataLocal.forEach((item, index) => {
        let div = document.createElement('div');
    div.innerHTML = `
    let div = document.createElement('div');
    div.innerHTML = `
         
    `    
    `
   })
}

if(dataLocal.length > 0) {
    handleRender()
}


