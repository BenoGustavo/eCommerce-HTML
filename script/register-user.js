const form = document.querySelector('.cadastro-form');

function get_form_data() {
    const inputs = document.querySelectorAll('input');
    const saved_data = [];
    let extracted_values = {};

    for (const value of inputs) {
        extracted_values[`${value.name}`] = value.value;
    }
    saved_data.push(extracted_values);

    return saved_data;
}

function get_local_data() {
    try {
        const data = localStorage.getItem('form-users') || '[]';
    
        return JSON.parse(data);
    }
    catch (error) {
        error.message = 'Erro ao verificar os dados!';
        return display_error(error.message);
    }
}

function set_local_data(data) {
    try {
        localStorage.setItem('form-users', JSON.stringify(data));
    }
    catch (error) {
        error.message = 'Erro ao enviar os dados!';
        return display_error(error.message);
    }
}

function add_local_data(data) {
    try {
        const local_data = get_local_data();

        local_data.push(...data);

        set_local_data(local_data);
    }
    catch (error) {
        return display_error(error.message);
    }

    window.location = "./pages/users_list.html"
}

function display_error(error) {
    const error_message = document.createElement('p');
    error_message.className = 'error-message';

    error_message.textContent = error;
    form.appendChild(error_message);

    setTimeout(() => {
        error_message.style.display = "none";
    }, 3000);
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const form_data = get_form_data();

    add_local_data(form_data);
})