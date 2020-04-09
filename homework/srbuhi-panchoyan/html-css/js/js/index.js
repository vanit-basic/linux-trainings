document.body.onload = () => createElements();

function createElements() {
	for (let i = 0; i < arr.length; i++) {
		const div = document.createElement('div');
		div.className = 'formElem';

		const p = document.createElement('p');
		p.innerHTML =arr[i].question;
		div.appendChild(p);

		for (let j = 0; j < arr[i].answers.length; j++) {
			const label = document.createElement('label');
			label.innerHTML = arr[i].answers[j];

			const input = document.createElement('input');
			input.type = 'radio';
			input.name = arr[i].id;
			input.value = arr[i].answers[j];
			
			label.appendChild(input);
			div.appendChild(label);
		}
		document.getElementById('form').appendChild(div);
	}

	const submitButton = document.createElement('input');
	submitButton.type = 'submit';
	submitButton.value = 'Submit';
	document.getElementById('form').appendChild(submitButton);
}

function showMessageWindow(t, s){
	const modal = document.getElementById('modalWindow');
	const body = modal.firstElementChild;

	if (t === "modal") {
		body.innerHTML = `Please answer a question: ${s}`;
	} else if (t === "score") {
		body.innerHTML = `Your score is := ${s}`;
	}

	modal.style.display = 'block';
	setTimeout(() => modal.style.display = 'none', 3 * 1000);
}

function formValidation() {
	for (let i = 0; i < arr.length; i++) {
		const inputs = Array.from(document.getElementsByName(arr[i].id));
		const answers = inputs.map(i => i.checked);
		if (!answers.includes(true)) {
			showMessageWindow("modal", arr[i].question);
			return;
		}
	}
	return true;
}

function checkAnswers() {
	let score = 0;
	for (let i = 0; i < arr.length; i++) {
		const inputs = Array.from(document.getElementsByName(arr[i].id));
		const userAnswer = inputs.filter(i => i.checked);
		if (userAnswer[0].value === arr[i].trueAnswer) score++;
	}
	return score;
}

function submitHandler(event) {
	event.preventDefault();
	if (formValidation()) showMessageWindow("score", checkAnswers()); 
}
