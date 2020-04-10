let form = document.getElementById('form');
let modal = document.getElementById('modal');
let modalClose = document.getElementById('modal_close');

form.addEventListener('submit', function () { submitHendler(event) });
modalClose.addEventListener('click', modal_close);

createQuestions(questions);

function submitHendler(event) {
	event.preventDefault();
	showModal(checkAnswers(questions));
}

function showModal(correctAnswersSum) {
	modal.firstElementChild.innerHTML += correctAnswersSum;
	modal.classList.toggle('showModal');
}

function modal_close() {
	modal.firstElementChild.innerHTML = 'Your score: ';
	modal.classList.toggle('showModal');
}


function createQuestions(arr) {
	let questionsList = '';
	for (let i = 0; i < arr.length; i++) {
		questionsList += `<div><p> ${arr[i].question} </p>`;
		for (let j = 0; j < arr[i].answers.length; j++) {
			questionsList += `<label><input type="radio" name="q${i}">${arr[i].answers[j]}</label><br>`
		}
		questionsList += '</div>';
	}
	questionsList += '<input type="submit" class=\"btn btn-info\">';
	form.innerHTML = questionsList;
}

function checkAnswers(questions) {
	let input = document.getElementsByTagName('input');
	let label = document.getElementsByTagName('label');
	let correctAnswersSum = 0;
	let checkAnswer = '';

	for (let i = 0; i < input.length; i++) {
		checkAnswer = input[i].parentElement.innerHTML.split('>')[1];
		for(let j = 0; j < questions.length; j++) {
			if (input[i].checked && input[i].name == `q${j}` && checkAnswer == questions[j].correctAnswers) {
				correctAnswersSum++;
			}
		}
	}

	return correctAnswersSum;
}