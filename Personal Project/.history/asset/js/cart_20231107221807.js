const handleRender = () => {
   let div = document.createElement('div');
   div.innerHTML = `
        
   `
}

let dataLocal = JSON.parse(localStorage.getItem('product'));
if(dataLocal.length > 0) {
    handleRender()
}


