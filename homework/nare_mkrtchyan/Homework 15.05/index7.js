let sumFunc = (numArr) => {
	let  sum = numArr.reduce((cal,num ) => { 
	    if(num.toString().length > 1){
		let remainder = 0;
		while(num > 0){
		remainder += num%10;
		num = Math.floor(num/10);
		}
		return cal + remainder;
	    } else {return cal + num;} 
	},0)
	return sum;
}
let tester = (sum,expected) => {
    let actual = sumFunc(sum);
    if (actual === expected){
        console.log( 'Ok');
    }
    else console.log( 'ERROR' );
}


tester([5, 9, 23, 15, 31, 48, 34, 75, 2, 16, 98, 102, 32, 1, 9, 3], 107);
tester([], 0);


