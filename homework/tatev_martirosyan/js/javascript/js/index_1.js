			function clickEvent(){
				event.preventDefault();
				let valid = validation();
				if(valid)
				setTimeout(() => location.href="./index.html", 2 * 1000);
				
				
			}
			function validation() {
				const name = document.getElementById('nameInput').value.toLowerCase().trim();
				const email = document.getElementById('emailInput').value.trim();
				const password = document.getElementById('passwordInput').value.trim();

				if (name && email && password) {
					let valid = addUser(name, email, password);
					return valid;
				} else {
					showMessageWindow("modal",'Please enter all fields');
					return false;
				}
				
			}
		
			function addUser(n, e, p) {
			const user={
					name:n,
					email:e,
					password:p,
			};
			if (localStorage.getItem(n)){
					showMessageWindow("modal", "Please enter a another user name");		
					return false;
			}
				localStorage.setItem(n, JSON.stringify(user));
				showMessageWindow("name", n);
				return true;
			}

			function showMessageWindow(t, m) {
					const modal = document.getElementById('modalWindow');
					const body = modal.firstElementChild;

				if (t === "modal") {
					body.innerHTML = m;
					modal.style.left = '5%';
					setTimeout(() => modal.style.left = '16%', 3 * 1000);
				} else if (t === "name") {
					body.innerHTML = ` Hello ${m}`;
				}

				modal.style.display = 'block';
				setTimeout(() => modal.style.display = 'none', 3 * 1000);
			}