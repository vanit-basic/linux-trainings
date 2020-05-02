let arr = [1,2,3,4,5,6,7,8,9,10];
const Sum = arr
.filter(number => number%3 === 0)
.reduce((sum,number) => sum + number);
console.log(Sum);
