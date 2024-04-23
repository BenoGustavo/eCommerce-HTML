const root = document.querySelector("html");

let modal = document.querySelector(".cadastro");
let modalStyle = modal.style;

let style = {
    position: "absolute",
    left: 1,
    top: 1,
};


function modalFactory() {
    let container = document.createElement("div");

    let modalStylesheet = {
        width: "50%",
        height: "50%",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    let modalItem = document.createElement("div");

    container.appendChild(modalItem);
    root.appendChild(container);

    injectCss(modalStylesheet, modal.style)
}

function injectCss(stylesheet, receiverStyle) {
    //console.log(Object.keys(receiverStyle).length);

    // if(Object.keys(receiverStyle).length <= 0) {
    //     for(let change in receiverStyle) {
    //         for(let newChange in stylesheet) {
    //             if(change === newChange){
    //                 receiverStyle[change] = stylesheet[newChange];
    //             }
    //         }
    //     }
    // } else {
    //     for(let change in receiverStyle) {
    //         for(let newChange in stylesheet) {
    //             if(change === newChange){
    //                 receiverStyle[change] = stylesheet[newChange];
    //             }
    //         }
    //     }
    // }
    for(let change in receiverStyle) {
        for(let newChange in stylesheet) {
            if(change === newChange){
                receiverStyle[change] = stylesheet[newChange];
            }
        }
    }

}

// injectCss(style, modalStyle)