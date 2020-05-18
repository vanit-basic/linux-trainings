//task 5
function searchPalindrom (){
	let word = document.getElementById("words").value.trim();
	for(let i = 0; i < word.length; i++){
		if(word[i] === word[word.length - i - 1]){
			console.log("This word is palindrom.");
			document.getElementById("answer1").innerHTML = "This word is palindrom."
		}
		if(word[i] !== word[word.length - i - 1]){
			console.log("This word is not palindrom.");
			document.getElementById("answer1").innerHTML = "This word is not palindrom."
			return;
		}
	}
}
// task 6
function searchAnagramma(){
	let word1 = document.getElementById('word1').value.trim();
	let word2 = document.getElementById('word2').value.trim();
	let cantitate = 0;
	if(word1.length === word2.length){
		for(let i = 0; i < word1.length; i++){
			if(word2.includes(word1[i])){
				cantitate += 1;
			}else{
				document.getElementById("answer2").innerHTML = "This word is not anagramm.";
				console.log("not");
				return;
			}
		}
	}else{
		document.getElementById("answer2").innerHTML = "This word is not anagramm.";
		console.log("not");
		return;
	}
	if(cantitate === word1.length){
		document.getElementById("answer2").innerHTML = "This word is anagramm.";
		console.log("yes");
	}
}
//task 7 
function arrayNumbersSum(arrTest){
	let y = 0;
	for(let i = 0; i < arrTest.length; i++){
		let x = arrTest[i];
		let z = true;
		while(z){
			if(x !== 0){
				y += x%10;
				x -= x%10;
				x = x/10;
			}else if (x === 0){
				z = x;
			}
		}
	}
	console.log(y);
}
let arr = [123,321,12,1,2,4,2,111111,-123];
arrayNumbersSum(arr);
//task 8
function searchIndexPrimeNumber(arrTest){
			let result = [];
newCycle1:for(let i = 0; i < arrTest.length; i++){
			if (arrTest[i] <= 1){
				continue newCycle1;
			}
			else if (arrTest[i] === 2){
				result.push(i);
			}else {
		newCycle2:for (let j = 2; j < arrTest[i]; j++){
					if ((arrTest[i] === j+1)&&(arrTest[i] % j === 1)){
						result.push(i);
					}
					if (arrTest[i] % j === 0){
						continue newCycle1;
					}
					else{
						continue newCycle2;
					}
				}
			}
		}
		return result;
}
let arrTest1 = [4, 6, 8, 9, 12, 53, 2, 5, 7, 31, 97, 17];
console.log(searchIndexPrimeNumber(arrTest1));
//task 9
 function bubbleSort(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
let arrTest2 = [4, 6, 8, 9, 12, 53, 2, 5, 7, 31, 97, 17];
console.log(bubbleSort(arrTest2));
