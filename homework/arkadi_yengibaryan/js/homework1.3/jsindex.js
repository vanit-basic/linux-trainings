let form = document.getElementById('form');

form.addEventListener('submit', function() {submitHendler(event)});

function submitHendler(event) {
	// event.preventDefault();
	alert(checkAnswers(questions));
}

createQuestions(questions);

function createQuestions(arr) {
	let questionsList = '';
	for(let i = 0; i < arr.length; i++) {
		questionsList += `<div><p> ${arr[i].question} </p>`;
		for(let j = 0; j < arr[i].answers.length; j++) {
			questionsList += `<label>${arr[i].answers[j]}<input type="radio" name="q${i}"></label>`
		}
		questionsList += '</div>';
	}
	questionsList += '<input type="submit">';
	form.innerHTML = questionsList;
}

function checkAnswers(questions) {
	let input = document.getElementsByTagName('input');
	let label = document.getElementsByTagName('label');
	let correctAnswersSum = 0;
	let checkAnswer = '';

	for(let i = 0; i < input.length; i++) {
		checkAnswer = input[i].parentElement.innerHTML.split('<')[0];
		if (input[i].checked && input[i].name == 'q0' && checkAnswer == questions[0].correctAnswers) {
			correctAnswersSum++;
		}
		if (input[i].checked && input[i].name == 'q1' && checkAnswer == questions[1].correctAnswers) {
			correctAnswersSum++;
		}
		if (input[i].checked && input[i].name == 'q2' && checkAnswer == questions[2].correctAnswers) {
			correctAnswersSum++;
		}
	}

	return correctAnswersSum;
}




