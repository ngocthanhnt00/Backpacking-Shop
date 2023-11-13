let dataLocal = JSON.parse(localStorage.getItem('product'));
const handleRender = () => {
  dataLocal.forEach((item))
}

if(dataLocal.length > 0) {
    handleRender()
}


