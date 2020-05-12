//task_1 before
/*
const arr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
];
const arr1 = arr
.filter( i => i%3==0 )
.reduce((x,y) => x + y,0);
console.log(arr1)
*/
//task_1 after
function arrElemsSum(arr, n) {
let result = arr
.filter(num => num % n == 0)
.reduce((sum, num) => sum + num, 0);
return result;
}

function test(input, expected) {
let actual = arrElemsSum(input, 3);
if (expected === actual) {
console.log('ok');
} else {
console.log('error')
}
}

test([1, 3, 5, 6, 9, 12], 30);
test([1, 3, 5, 9, 12], 24);