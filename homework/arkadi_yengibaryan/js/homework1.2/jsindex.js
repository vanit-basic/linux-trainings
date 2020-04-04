let questions = {
	'question1': 'Is JavaScript the same as Java?(yes/no)',
	'question2': 'How many parameters can be passed to a function?(one/many)',
	'question3': 'What type of variable?\r let a = \'aa\''
};

showQuestions(questions);

function showQuestions(questions) {
	let n = 0;
	for(let k in questions) {
		n += checkAnswers(prompt(questions[k]));
	}
	alert(n);
}

function checkAnswers(answer) {
	let ok = 0;
	answer = answer.toLowerCase();
	if (answer == 'no' || answer == 'many' || answer == 'string') {
		ok++;
	}
	return ok;
}
