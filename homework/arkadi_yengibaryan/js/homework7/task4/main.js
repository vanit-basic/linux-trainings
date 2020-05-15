function primesNumbersIndex(arr) {
    let index = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkPrimesNum(arr[i])) {
            index.push(i);
        }
    }

    return index;
}

function checkPrimesNum(num) {
    if (num < 3) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }

    return true;
}

let arr = [4, 7, 10, 11, 13];

console.log(primesNumbersIndex(arr));
primesNumbersIndex(arr);