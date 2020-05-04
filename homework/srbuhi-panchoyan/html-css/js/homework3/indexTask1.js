// giv sum of separator of three numbers...

function sumOfSeperator(arr, n){
        let sum = arr.filter(num => num % n === 0).reduce((acum, curr) => acum + curr, 0);
        return sum;
}


function test(input, expectid){
        let actual = sumOfSeperator(input, 3);
        if expectid === actual){
                console.log('ok');
        } else {
                console.log('error');
        }
}

test([1,8, 9, 12, 5, 6],27);
test([4, 17, 25, 7, 0], 0);
test([5, 6, 7, 1, 9, 3, 4],18);

