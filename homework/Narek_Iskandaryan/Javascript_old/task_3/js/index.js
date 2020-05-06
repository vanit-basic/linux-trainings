document.body.onload = () => createElements();

function createElements() {
	for (let i = 0; i < data.length; i++) {
		const div = document.createElement('div');
		div.className = 'formElem';

		const p = document.createElement('p');
		p.innerHTML = data[i].question;
		div.appendChild(p);

		for (let j = 0; j < data[i].answers.length; j++) {
			const label = document.createElement('label');
			label.innerHTML = data[i].answers[j];

			const input = document.createElement('input');
			input.type = 'radio';
			input.name = data[i].id;
			input.value = data[i].answers[j];
			
			label.appendChild(input);
			div.appendChild(label);
		}
		document.getElementById('form').appendChild(div);
	}

	const submitButton = document.createElement('input');
	submitButton.type = 'submit';
	submitButton.value = 'Submit';
	submitButton.className ="submit";
	document.getElementById('form').appendChild(submitButton);
}

function showMessageWindow(t, m) {
	const modal = document.getElementById('modalWindow');
	const body = modal.firstElementChild;

	if (t === "modal") {
		body.innerHTML = `Please answer a question: ${m}`;
	} else if (t === "score") {
		body.innerHTML = `Your score is := ${m}`;
	}

	modal.style.display = 'block';
	setTimeout(() => modal.style.display = 'none', 3 * 1000);
}

function formValidation() {
	for (let i = 0; i < data.length; i++) {
		const inputs = Array.from(document.getElementsByName(data[i].id));
		const answers = inputs.map(i => i.checked);
		if (!answers.includes(true)) {
			showMessageWindow("modal", data[i].question);
			return;
		}
	}
	return true;
}

function checkAnswers() {
	let score = 0;
	for (let i = 0; i < data.length; i++) {
		const inputs = Array.from(document.getElementsByName(data[i].id));
		const userAnswer = inputs.filter(i => i.checked);
		if (userAnswer[0].value === data[i].trueAnswer) score++;
	}
	return score;
}

function submitHandler(event) {
	event.preventDefault();
	if (formValidation()) showMessageWindow("score", checkAnswers()); 
}
