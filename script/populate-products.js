function checkIfProductExists() {
    let products = JSON.parse(localStorage.getItem('products')) || [];

    if (products.length === 0) {
        return false;
    }
    return true
}

function populateLocalStorage(){
    let products = [{"name":"Banana comum","description":"Apenas banana comum","price":"10","quantity":"150"},{"name":"Banana prata","description":"Apenas banana prata","price":"15","quantity":"100"},{"name":"Banana ouro","description":"Apenas banana ouro","price":"20","quantity":"50"},{"name":"Banana da terra","description":"Apenas banana da terra","price":"5","quantity":"25"},{"name":"Banana pouca perna","description":"Apenas banana anã","price":"90","quantity":"69"},{"name":"Banana maça","description":"Apenas banana maça","price":"32","quantity":"324"},{"name":"Banana D'angola","description":"Apenas banana angolana","price":"77","quantity":"777"},{"name":"Banana nanicão","description":"Apenas banana media","price":"22","quantity":"324"}]

    localStorage.setItem('products', JSON.stringify(products));
}

if (!checkIfProductExists()) {
    populateLocalStorage();
}