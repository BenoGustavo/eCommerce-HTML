import { modalFactory } from './modal_two.js';

let modalLink = document.getElementById('new_product');

modalLink.addEventListener('click', function (event) {
    event.preventDefault();
    modalFactory(
        '<h1>ADICIONAR PRODUTO</h1>\
        <label>Nome</label>\
        <input type="text" placeholder="Insira o nome do produto">\
        <label>Descrição</label>\
        <textarea></textarea>\
        <label>Preço</label>\
        <input type="number" placeholder="Insira o preço do produto">\
        <label>Quantidade:</label>\
        <input type="number" placeholder="Insira a quantidade em estoque">\
        <button id="submit">ADICIONAR</button>',
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
            textAlign: 'center',
            boxShadow: '0 0 10px 0 hsl(213 100% 80%)',
            transition: 'all 0.3s ease-in-out',
        }
    );
});