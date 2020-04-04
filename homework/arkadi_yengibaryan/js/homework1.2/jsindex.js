let questions = [
	'Is JavaScript the same as Java?(yes/no)',
	'How many parameters can be passed to a function?(one/many)',
	'What type of variable?\r let a = \'aa\''
];


showQuestions(questions);

function showQuestions(questions) {
	let correctAnswersSum = 0;
	for(let i = 0; i < questions.length; i++) {
		correctAnswersSum += checkAnswers(prompt(questions[i]));
	}
	alert(`you’ve answered a provincial ${correctAnswersSum} question`);
}

function checkAnswers(answer) {
	let correctAnswers = ['no', 'many', 'string'];
	answer = answer.toLowerCase().trim();
	let correctAnswersSum = 0;

	for (let i = 0; i < correctAnswers.length; i++) {
		if (answer == correctAnswers[i]) {
			correctAnswersSum++;
		}
	}
	return correctAnswersSum;
}
