let form = document.getElementById('form');

form.addEventListener('submit', function () { submitHendler(event) });

function submitHendler(event) {
    event.preventDefault();
    validation();
}

function validation() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let chackName = /^[a-zA-Z]+$/.test(name.value);
    let chackEmail = /^[0-9a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(email.value);
    let chackpassword = /^[0-9a-zA-Z-.@]+$/.test(password.value);

    if (validationInput(name, 3, 40, chackName)) {
        errorMessShow(name, ' ');
    } else {
        return;
    }
    if (validationInput(email, 6, 50, chackEmail)) {
        errorMessShow(email, ' ');
    } else {
        return;
    }
    if (validationInput(password, 3, 40, chackpassword)) {
        errorMessShow(password, ' ');
    } else {
        return;
    }
    if (!addUser(name, email, password)) {
        form.lastElementChild.innerHTML = 'User with that email already exists';
        return;
    }
    location.href = 'test.html';
}

function errorMessShow(elem, mess) {
    elem.previousElementSibling.innerHTML = mess;
}

function validationInput(inputName, minLength, maxLength, preg) {
    if (inputName.value.trim().length < minLength || inputName.value.trim().length > maxLength || !preg) {
        errorMess = `Invalid ${inputName.name} length or format`;
        errorMessShow(inputName, errorMess);
        return false;
    } else {
        return true;
    }
}

function addUser(name, email, password) {
    localStorage.setItem('admin@mail.ru', ['admin', 'admin']);
    let userInfo = [name.value, password.value];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (email.value === key) {
            return false;
        }
    }
    localStorage.setItem(email.value, userInfo);
    return true;
}