const data = [
	{
		question: '2 + 2',
		answer: '4'
	},
	{
		question: 'What is the name of the earth satellite ?',
		answer: 'moon'
	},
	{
		question: '2 + 10',
		answer: '12'
	},
];
let score = 0;
askQuestion(data);

function askQuestion(d) {
	for (let i = 0; i < d.length; i++) {
		const userAnswer = prompt(d[i].question);
		const validAnswer = answerValidation(userAnswer);
		if (validAnswer && validAnswer === d[i].answer) score++;
	}
}

function answerValidation(a) {
	if (a) {
		a = a.toLowerCase().trim();
		return a;
	}
	return false;
}

console.log(`Your score is: ${score}`);
