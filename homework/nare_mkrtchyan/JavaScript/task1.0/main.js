let ymark = 0;
let victorina=[
	{
	question: 'Which is the longest river?',
	answer: 'amazon',
	},
	{
	question: 'Which is the biggest country?',
	answer: 'russia',
	},
	{
	question: 'Which is the highest mountain?',
	answer: 'everest',
	},
	{
	question: 'Who is the current world number three tennis player?',
	answer: 'dominic thiem',
	},
	{
	question: 'Who is the captain of England national football team?',
	answer: 'harry kane',
	}
		]

function vic( victorina ){
	for(let i = 0; i < victorina.length; i++){	
		let userAnswer = prompt( victorina[i].question );

		if( !userAnswer ) {
		  continue;
		} else {
		  let validAnswer = validation( userAnswer );
	 	
		  if( validAnswer === victorina[i].answer ) {
		    ymark++;}
		}
						}
	return ymark;
			}

function validation( uA ){
return uA.trim().toLowerCase();
			}

console.log( `Your mark is: ${ vic( victorina )}` );
