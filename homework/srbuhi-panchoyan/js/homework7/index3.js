function count(array){
	let sum = 0;
	array.forEach(number => {
      
		while(number!= 0){
			sum += number % 10;
			number = Math.floor(number/10);
		}      
	});
    return sum;
}



function test(input, expectid){
	let actual = count(input);
	if (expectid === actual){
		console.log('ok');
	} else {
		console.log('error');
	}
}

test([12,34,112,5], 19);
test([55,34,12,5], 25);
test([2,644,112,15], 26);
