let victorina=[
	{
	question:"Which is the longest river?",
	answer:'Amazon'
	},
	{
	question:"Which is the biggest country?",
	answer:"Russia",
	},
	{
	question:"Which is the highest mountain?",
	answer:"Everest"
	},
	{
	question:"Who is the current world number three tennis player?",
	answer:"Dominic Thiem"
	},
	{
	question:"Who is the captain of England national football team?",
	answer:"Harry Kane"
	}
]

let ymark=0;

function vic(victorina){
	for(let i=0;i<victorina.length;i++){
		let n=i;
		let useranswer=prompt(victorina[i].question);
		if(useranswer==null)
		 {console.log(`${++n}. You have not answerd in this question`);
		continue;
		}
		asd(useranswer);
		if(useranswer ==victorina[i].answer)
	 	 {console.log(`${++n}. +`);ymark++}
		else
		 console.log(`${++n}. -`);
		}
		return ymark;
}

function asd(ws){
	return ws.trim();
}

alert("Please write word's first letter as a capital letter! ")

console.log(`Your mark is: ${ vic(victorina)}`);
