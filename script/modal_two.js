export function modalFactory(modalContentHTML, modalStyles, overlayName) {

    // Se já existe um overlay, mostra ele
    if (document.getElementById(overlayName)) {

        //FAZ APARECER TUDO DENTRO DO OVERLAY
        document.getElementById(overlayName).style.display = 'block';

        //ANIMAÇAO INCIAL
        document.getElementById('modal').style.transform = 'scale(0)';

        // FAZ O NAVEGADOR RECALCULAR O ESTILO (PARA ANIMAÇÃO FUNCIONAR)
        void document.getElementById('modal').offsetWidth;

        // ANIMAÇÃO FINAL
        document.getElementById('modal').style.transform = 'scale(1)';
        return
    }


    // Cria um overlay
    let overlay = document.createElement('div');
    overlay.style.display = 'block';
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
    overlay.id = overlayName;

    let closeButton = document.createElement('button');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '15px';
    closeButton.innerHTML = 'X';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '1.5rem';
    closeButton.style.cursor = 'pointer';
    closeButton.style.padding = '0.5rem';
    closeButton.style.color = 'red';
    closeButton.style.backgroundColor = 'transparent';

    // Container do modal
    let modal = document.createElement('div');

    modal.id = 'modal';

    // Coloca o HTML NO MODAL
    modal.innerHTML = modalContentHTML;

    // APLICANDO CSS
    for (let property in modalStyles) {
        modal.style[property] = modalStyles[property];
    }

    modal.style.cursor = 'default';

    // COLOCA O MODAL DENTRO DO OVERLAY
    overlay.appendChild(modal);

    // ANIMANDO O MODAL (COMEÇA DO ZERO)
    modal.style.transform = 'scale(0)';

    // COLOCA O BOTAO DE FECHAR NO MODAL
    modal.appendChild(closeButton);

    // BOTA TUDO NO BODY
    document.body.appendChild(overlay);

    // FAZ O NAVEGADOR RECALCULAR O ESTILO (PARA ANIMAÇÃO FUNCIONAR)
    void modal.offsetWidth;

    // TERMINANDO ANIMAÇÃO DO MODAL (TERMINA NO TAMANHO ORIGNINAL)
    modal.style.transform = 'scale(1)';

    // FECHA QUANDO CLICA FORA
    closeButton.onclick = function () {

        //ANIMAÇÃO DE FECHAMENTO
        modal.style.transform = 'scale(0)';

        // Wait for the transition to finish before hiding the overlay
        modal.addEventListener('transitionend', function () {
            overlay.style.display = 'none';
        }, { once: true });
    }

    return overlay;
}