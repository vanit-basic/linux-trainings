
function clickEvent(event) {
	event.preventDefault();
	console.log('this is a click event', event);
}

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
	if (localStorage.getItem(n)) {
		alert ("Please enter another user info");
		return;
	}
	localStorage.setItem(n, JSON.stringify(user));
	sayHello(n);
}

function sayHello(n) {
	alert(`user ${n} is added`);
	location.replace('index.html');
}

function submitHandler(event) {
	event.preventDefault();
	//console.log(event.target.value);
	validation();
}
