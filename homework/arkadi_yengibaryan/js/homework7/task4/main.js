let checkPrimesNum = num => {
    if (num < 2) return false;
    if (num == 2) return true;
    if (num % 2 != 0) {
        for (let i = 3; i < num; i += 2) {
            if (num % i == 0) return false;
        }
    } else {
        return false;
    }
    return true;
}

let checkArr = arr => {
    if (!Array.isArray(arr)) return false;
    return arr.every(n => {
        return +n + 0 == n;
    });
}

let primesNumbersIndex = arr => {
    if (!checkArr(arr)) return false;
    let index = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkPrimesNum(arr[i])) {
            index.push(i);
        }
    }
    return index;
}

let arr = [4, 7, 10, 11, 13, 4];
console.log(primesNumbersIndex(arr));

let chekArrEqually = (arr1, arr2) => {
    return arr1.sort().join('') == arr2.sort().join('');
}

let testprimesNumbersIndex = (current, expected) => {
    let actual = primesNumbersIndex(current);
    if (!chekArrEqually(expected, actual)) {
        console.error(`For values ${current}, the test is fail`);
    }
}

testprimesNumbersIndex([1, 2, 3, 6, 7], [1, 2, 4]);
testprimesNumbersIndex([1, '2', '3', '6', 7], [1, 2, 4]);
testprimesNumbersIndex([1, '2', '3', '6', 7], [1, 2, 4]);
