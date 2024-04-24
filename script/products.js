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
});