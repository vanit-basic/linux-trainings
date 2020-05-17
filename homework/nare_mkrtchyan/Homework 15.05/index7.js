numArr = [5, 9, 23, 15, 31, 48, 34, 75, 2, 16, 98, 102, 32, 1, 9, 3];
let sum = numArr.reduce((cal,num ) => { 
    if(num.toString().length > 1){
        let remainder = 0;
        while(num > 0){
        remainder += num%10;
        num = Math.floor(num/10);
        }
        return cal + remainder;
    } else {return cal + num;} 
},0)
let tester = (sum) => {
    if (sum === 107){
        return 'Ok';
    }
    else return 'ERROR';
}
console.log(tester(sum));
