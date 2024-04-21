//form-users //

let senhaInput = document.getElementsByName("senha")[0]
let emailInput = document.getElementsByName("Email")[0]

let loginButton = document.getElementsByName("loginButton")[0];
loginButton.addEventListener('click', loginUser);

function loginUser() {
    let email = emailInput.value;
    let password = senhaInput.value;

    let users = JSON.parse(localStorage.getItem('form-users')) || [];
    let user = users.find(user => user.email === email && user.senha === password);

    if (user) {
        //NEED TO DO A THING TO LOAD THE PAGE HERE
        alert('Login efetuado com sucesso');
    } else {
        // NEED TO CREATE A MODAL TO SHOW THE USER NOT FOUND
        alert('User não encontrado');
    }
}