//moving the mass elements so that each element can change its places. we have an example [ 1, 4, 7, 6] [4, 1, 6, 7 ]

let arr = [1, 4, 7, 6, 1, 5];

function reversArray(arr){
        for (let i = 0; i< arr.length ; i= i+2){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        }
        return arr;
}

console.log(reversArray(arr));

function test(input, expected){
	let actual = reversArray(input);
	if(actual == expected){
		console.log('ok');
	} else {
		console.log('error');
	}
}

test([1, 4, 7, 6, 1, 5], [ 4, 1, 6, 7, 5, 1 ]) 
test([1, 7, 5, 6, 8, 1],  [7, 1, 6, 5, 1, 8 ]);

//sample2

/*function revArr(arr){
        let newArr = [];
        for (let i = 0; i < arr.length-1; i += 2) {
                newArr.push(arr.slice(i, i+2));
        }
        newArr.forEach(element => element.reverse());
        return newArr.flat();
}


function test2(input, expected){
        let actual = revArr(input);
        if(actual === expected){
                console.log('ok');
        } else {
                console.log('error');
        }
}

test2([1, 4, 7, 6, 1, 5],[4, 1, 6, 7, 5, 1]);
test2([1, 7, 5, 6, 8, 1], [7, 1, 6, 5, 1, 8]);
*/
