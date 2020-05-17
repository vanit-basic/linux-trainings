function booblesort (array){
    
    let arr = [...array]
    for(let i= 0; i< arr.length; i++){
        for(let j= 0; j< arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}


function test(input, expected){
	let actual = booblesort(input);
	if(actual == expected){
		console.log('ok');
	} else {
		console.log('error');
	}
}

test([5, 1, 12, 10, 24, 3, 8, 7],[ 1, 3, 5, 7, 8, 10, 12, 24 ]);
test([7, 15, 98, 100, 32, 74, 6, 12, 1], [ 1, 6, 7, 12, 15, 32, 74, 98, 100 ]);
test([6, 14, 1, 7, 0, 12, 9], [0, 1, 6, 7, 9, 12, 14]);
