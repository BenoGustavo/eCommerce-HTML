//form-users //

let senhaInput = document.getElementsByName("senha")[0]
let emailInput = document.getElementsByName("Email")[0]

let loginButton = document.getElementsByName("loginButton")[0];
loginButton.addEventListener('click', loginUser);

function loginUser(event) {
    event.preventDefault(); // previne q o bgl seja enviado

    let email = emailInput.value;
    let password = senhaInput.value;

    let users = JSON.parse(localStorage.getItem('form-users')) || [];
    let user = users.find(user => user.email === email && user.senha === password);

    if (user) {
        //CARREGA A OUTRA PGINA
        setAuthUser(user.nome);
        window.location = "/html/products.html"
    } else {
        // NEED TO CREATE A MODAL TO SHOW THE USER NOT FOUND
        alert('User não encontrado');
    }
}

function setAuthUser(userName) {
    let user = {
        isAutheticated: true,
        nome: userName
    };

    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
}

function isUserAutheticated() {
    let user = JSON.parse(localStorage.getItem('user'));
    return user ? user.isAutheticated : false;
}

if (isUserAutheticated()) {
    window.location = "/html/products.html"
}