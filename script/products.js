import { modalFactory } from './modal_two.js';

let modalLink = document.getElementById('new_product');

modalLink.addEventListener('click', function (event) {
    event.preventDefault();
    modalFactory(
        '<h1 style="text-align: center;">ADICIONAR PRODUTO</h1>\
        <label for="product_name_input">Nome</label></br>\
        <input style="margin-top:10px;border-radius: 5px; border:solid 1px black; height: 100%;width: 100%;padding: 0.5rem;" type="text" placeholder="Insira o nome do produto" id="product_name_input"></br>\
        <label  for="product_description_input" >Descrição</label></br>\
        <textarea style="margin-top:10px;border-radius: 5px; border:solid 1px black; height: 100%;width: 100%;padding: 0.5rem;" id="product_description_input"></textarea></br>\
        <label for="product_price_input">Preço</label></br>\
        <input style="margin-top:10px;border-radius: 5px; border:solid 1px black; height: 100%;width: 100%;padding: 0.5rem;" id="product_price_input" type="number" placeholder="Insira o preço do produto"></br>\
        <label for="product_quantity_input">Quantidade:</label></br>\
        <input style="margin-top:10px;border-radius: 5px; border:solid 1px black; height: 100%;width: 100%;padding: 0.5rem;" id="product_quantity_input" type="number" placeholder="Insira a quantidade em estoque"></br>\
        <button style="display: block; margin-top:2rem;margin-bottom:2rem;margin-left: auto; margin-right: auto; padding: 0.5rem 1rem; border: solid 1px black; border-radius: 5px; color: black; font-size: 1rem; cursor: pointer; transition: all 0.3s ease; font-weight: 600;" id="add_product">ADICIONAR</button>',
        {
            display: 'block',
            position: 'absolute',
            zIndex: '3',
            left: 'calc(50% - 15%)',
            top: '1rem',
            width: '30%',
            height: 'fit-content',
            overflow: 'auto',
            borderRadius: "10px",
            backgroundColor: 'hsl(213 100% 98%)',
            padding: '0 2rem',
            textAlign: 'left',
            boxShadow: '0 0 10px 0 hsl(213 100% 80%)',
            transition: 'all 0.3s ease-in-out',
        }
    );

    //FAZENDO O BUTAO BUTAOZA
    let addProductButton = document.getElementById('add_product');
    addProductButton.addEventListener('click', createProduct);
});

function createProduct() {
    let newProduct = {
        name: document.getElementById('product_name_input').value,
        description: document.getElementById('product_description_input').value,
        price: document.getElementById('product_price_input').value,
        quantity: document.getElementById('product_quantity_input').value
    }

    let products = JSON.parse(localStorage.getItem('products')) || [];

    if (products.find(product => product.name === newProduct.name)) {
        alert('Produto já cadastrado');
        return;
    }

    products.push(newProduct);

    localStorage.setItem('products', JSON.stringify(products));

    alert(`Produto (${newProduct.name}) cadastrado com sucesso`);

    insertNewProductInPage(newProduct);
}

function loadProducts() {
    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(product => {
        insertNewProductInPage(product);
    });
}

function insertNewProductInPage(newProduct) {
    let mainContainer = document.getElementById('product_container');

    //CRIANDO A ESTRUTURA DO HTML
    let product = document.createElement('div');
    product.className = 'product';
    let productName = document.createElement('h2');
    productName.textContent = newProduct.name;
    let productDescription = document.createElement('p');
    productDescription.className = 'descricao_medicamento';
    productDescription.textContent = newProduct.description;
    let productStock = document.createElement('p');
    productStock.className = 'descricao_medicamento';
    productStock.textContent = `Estoque: ${newProduct.quantity}`;
    let productPrice = document.createElement('p');
    productPrice.className = 'preco_produto';
    productPrice.textContent = `R$ ${newProduct.price}`;
    let buttonContainer = document.createElement('div');
    buttonContainer.className = 'button_container';
    let button = document.createElement('button');
    button.textContent = 'Comprar';
    button.id = "buy_button";
    setDecreaseStock(button, newProduct, productStock);

    buttonContainer.appendChild(button);
    product.appendChild(productName);
    product.appendChild(productDescription);
    product.appendChild(productStock);
    product.appendChild(productPrice);
    product.appendChild(buttonContainer);

    mainContainer.appendChild(product);
}

function setDecreaseStock(button, newProduct, productStock) {
    button.addEventListener('click', function () {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        let product = products.find(product => product.name === newProduct.name);
        if (product) {
            product.quantity--;

            if (product.quantity == 0) {
                alert('Produto fora de estoque');
                products = products.filter(p => p.name !== newProduct.name); // REMOVE DA LISTA (So aparece depois q atualiza a pagina)
            }

            localStorage.setItem('products', JSON.stringify(products));
            productStock.textContent = `Estoque: ${product.quantity}`; // Update the displayed stock
        }
    });
}

// LOGOUT USER

let logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem('isUserAutheticated');
    window.location = "/index.html";
})

loadProducts()