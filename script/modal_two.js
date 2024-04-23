function modalFactory(modalContentHTML, modalStyles) {
    // Cria um overlay
    let overlay = document.createElement('div');
    overlay.style.display = 'none';
    overlay.style.position = 'fixed';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    overlay.style.zIndex = '2';
    overlay.style.cursor = 'pointer';

    // Container do modal
    let modal = document.createElement('div');

    // Coloca o HTML NO MODAL
    modal.innerHTML = modalContentHTML;

    // APLICANDO CSS
    for (let property in modalStyles) {
        modal.style[property] = modalStyles[property];
    }

    // COLOCA O MODAL DENTRO DO OVERLAY
    overlay.appendChild(modal);

    // BOTA TUDO NO BODY
    document.body.appendChild(overlay);

    // FECHA QUANDO CLICA FORA
    overlay.onclick = function () {
        overlay.style.display = "none";
    }

    return overlay;
}

let overlay = modalFactory(
    '<h1>Modal Title</h1><p>Some text in the modal.</p>',
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
    }
);

let button = document.querySelector('#open-modal-button');

// CLICA NO BOTAO MOSTRA O MODAL
button.addEventListener('click', function () {
    overlay.style.display = "block";
});