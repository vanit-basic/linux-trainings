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


function test (input, expresion){
	let actual = maxInterval(input);
	if (actual === expresion){
		console.log('ok');
	} else {
		console.log('error');
	}
}

test([ 1, 7, 5, 6, 8 , 1],3);
test([8, 13, 25, 0, 2, 1, 5, 9, 12, 24, 100],6);
test([0, 1, 2, 4, 3, 9, -1, -14], 4);
