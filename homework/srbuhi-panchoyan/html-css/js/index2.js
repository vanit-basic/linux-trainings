let number = [5, 6, 7, 1, 9, 3, 4];
// giv sum of separator of three numbers...

function sumOfThreeSeperator(arr){
	let sum = arr.filter(num => num % 3 == 0).reduce((acum, curr) => acum + curr, 0);
	return sum;
}
console.log(sumOfThreeSeperator(number));

//moving the mass elements so that each element can change its places. we have an example [ 1, 4, 7, 6] [4, 1, 6, 7 ]

let arr = [1, 4, 7, 6, 1, 5];
function reversArray(arr){
	for (let i = 0; i< arr.length ; i= i+2){
	[arr[i], arr[i+1]] = [arr[i+1], arr[i]]
	}
	return arr;
}
console.log(reversArray(arr));

//sample2
let array = [1, 7, 5, 6, 8, 1];

function maxInterval2(arr){
	let newArr = [];
	
	for (let i = 0; i < arr.length; i += 2) {
		newArr.push(arr.slice(i, i+2));
	}
	newArr.forEach(element => element.reverse());

	return newArr.flat();
}

console.log(maxInterval2(array));

// find the mass in the longest growing intuitive length.
// we have an example [ 1, 7, 5, 6, 8 , 1] mass, it grows two interval pieces[ 1, 7 ] , [ 5, 6, 8], in this case the answer is 3


function maxInterval(arr){
	let max = 0;
	let count = 1;
	for (let i = 0; i< arr. length; i++){
		if(arr[i] < arr[i+1]){
			count++;
		} else if(count > max){
			max = count;
			count = 1;
		} else {
			count = 1;
		}
	}
	return max;
}

console.log(maxInterval(array));

// let's say we have some text (we can present strings on a call).find the most common word in fact
let string = "it is very very very cool cool day ";

function countWord(string){
	let newString = string.split(" ");
	
	let maxCount = newString.filter(el => el == newString[0]).length;
	
	newString.filter(element => {next = newString.filter(el => el == element ).length;
	if(maxCount< next){
		maxCount = next;
	}
	
	})
	return maxCount;
}
console.log(countWord(string));

function commonWord(string){
	let str = string.split(" ");
	let max=0;
	console.log(str);
	
	for(let i = 0; i<str.length; i++){
		let count = 0;
		for(let j= 0; j< str.length;j++){
			if (str[i] === str[j]){
				count++;
				if ( max < count) {
					max = count;
					return str[i];
				}
			} 
		}
	}
	
}
console.log(commonWord(string));
