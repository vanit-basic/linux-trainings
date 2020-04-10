const q1 = '2 + 2'; 					const a1 = '4';
const q2 = 'What is the name of the earth satellite'; 	const a2 = 'moon';
const q3 = '2 + 10'; 					const a3 = '12';
let score = 0;

askQuestion(q1, a1);
askQuestion(q2, a2);
askQuestion(q3, a3);

function askQuestion(q, a) {
	const userAnswer = prompt(q);
	if (userAnswer) {
		const validAnswer = userAnswer.toLowerCase().trim();
		if (validAnswer === a) score++;
	}
}

console.log(`Your score is: ${score}`);
