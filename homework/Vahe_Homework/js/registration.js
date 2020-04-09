
			function showMessageWindow(t , m ) {
			
			const modal = document.getElementById('modalWindow1');
			const body = modal.firstElementChild;

			if (t === "m") {
				body.innerHTML = 'Please enter all fields.';
			} else if (t === "m1") {
				body.innerHTML = `User ${m} is added`;
			} else {
				body.innerHTML = 'Please Enter a another user name.';
			}
			
			modal.style.display = 'block';
			setTimeout(() => modal.style.display = 'none', 3 * 1000);
			
			}
			
			function clickEvent(event) {
				event.preventDefault();
				console.log('this is a click event', event);
			}

			function validation() {
				const name = document.getElementById('nameInput').value;
				const email = document.getElementById('emailInput').value;
				const password = document.getElementById('passwordInput').value;

				  if (name && email && password) {
					checkRegistration(name,email,password);
				} else {
				showMessageWindow('m',undefined);
					return;
				}
			}
			function checkRegistration(n,e,p){
				const dataRegistr  = {
					name : n,
					email : e,
					password : p,
				}
			    if(localStorage.getItem(n)){
					showMessageWindow('m2',undefined);
			    } else {
					localStorage.setItem(n, JSON.stringify(dataRegistr));
					showMessageWindow('m1',n);
					setTimeout(() => sayHello(), 3 * 1000);
				}
			}

			function sayHello() {
				location.replace('file:///C:/Users/Dell/Desktop/project1/index.html');
			}
			
			function submitHandler(event) {
				event.preventDefault();
				//console.log(event.target.value);
				validation();
			}