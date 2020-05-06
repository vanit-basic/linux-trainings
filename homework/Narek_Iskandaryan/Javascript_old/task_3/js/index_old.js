const users = [];

function validation() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    if (name && email && password) {
        addUser(name, email, password);
    } else {
        alert('Please enter all fields');
        return;
    }

}

function addUser(n, e, p) {
    const user = {
        name: n,
        email: e,
        password: p
    };
    users.push(user);
    showMessageWindow(n);
}

function submitHandler(event) {
    event.preventDefault();
    //console.log(event.target.value);
    validation();
}

function showMessageWindow(n) {
    const modal = document.getElementById('modalWindow');
    const body = modal.firstElementChild;
    body.innerHTML = `user ${n} is added`;
    modal.style.display = 'block';
    setTimeout(function (){location.replace('index.html')},5000);
}