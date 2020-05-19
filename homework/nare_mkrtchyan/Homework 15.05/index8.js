//Using map and filter methods

/*let primeIndex = (numArr) => {
	let primeArr = numArr.map((num,i) => {
	    if(num === 2 || num === 3)
		return i;
	    else {
		for(let j = 2; j < num/2; j++){
		     if(!(num % j)){
			    return;
		     } else if(j === Math.floor(num/2))
			    return i;
		}
	    }
	}).filter(x => x !==undefined)
	return primeArr;
}
*/

//Using forEach and push methods 

let primeIndex = (numArr) => {
	primeArr = [];
	numArr.forEach((num,i) => {
	    if(num === 2 || num === 3)
		primeArr.push(i);
	    else {
	        for(let j = 2; j < num/2; j++){
		    if(!(num % j)){
		       break;;
		    } else if(j === Math.floor(num/2))
		       primeArr.push(i);
	        }
	    }
	}) 
	return primeArr;
}

let arrayEquals = (first, second) => {
	if(first.length !== second.length) {
	return false;
	}
let e = first.every((value, index) => {
	let x = value === second[index];
	return x;
});
return e;
}
let testArr1 = () => {

	let input = [2, 3, 4];
	let expected = [0, 1];
	let actual = primeIndex(input);
	if(!arrayEquals(expected,actual))
	console.log('Test testArr1 failed ', expected , '!==' , actual);
	else console.log('testArr1 is done!!');
}
let testArr2 = () => {

	let input = [0, 1, 6];
	let expected = [];
	let actual = primeIndex(input);
	if(!arrayEquals(expected,actual))
	console.log('Test testArr2 failed ', expected , '!==' , actual);
	else console.log('testArr2 is done!!');
	
}
let testArr3 = () => {

	let input = [];
	let expected = [];
	let actual = primeIndex(input);
	if(!arrayEquals(expected,actual))
	console.log('Test testArr3 failed ', expected , '!==' , actual);
	else console.log('testArr3 is done!!');
}
	testArr1 ();
testArr2 ();
testArr3 ()	;
