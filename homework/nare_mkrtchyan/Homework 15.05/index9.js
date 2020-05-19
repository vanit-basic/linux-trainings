//Bubble Sort (using recursion)
let bSort = (numArr) => {
	if(numArr.length === 0) return numArr;
	else{
	    for(let i = 1; i< numArr.length; i++){
		if(numArr[i - 1] > numArr[i]){
		    let c = numArr[i - 1];
		    numArr[i - 1] = numArr[i];
		    numArr[i] = c;
		    
		}
	    }
	    
	   for(let i = 1; i< numArr.length; i++){
		if(numArr[i-1] > numArr[i]) bSort(numArr);
		else if(i === numArr.length - 1) {return numArr;}
	    } 
	}
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

	let input = [3, 9, 23, 15, 31, 48, 34, 75, 2, 16, 98, 102, 32, 1, 9];
	let expected = [1, 2, 3, 9, 9, 15, 16, 23, 31, 32, 34, 48, 75, 98, 102];
	let actual = bSort(input);
	if(!arrayEquals(expected,actual))
	console.log('Test testArr1 failed ', expected , '!==' , actual);
	else console.log('testArr1 is done!!');
}
let testArr2 = () => {

	let input = [];
	let expected = [];
	let actual = bSort(input);
	if(!arrayEquals(expected,actual))
	console.log('Test testArr2 failed ', expected , '!==' , actual);
	else console.log('testArr2 is done!!');
	
}
testArr1();
testArr2();
//console.log(bSort(numArr));
 

