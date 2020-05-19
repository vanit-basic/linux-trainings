let checkArr = arr => {
    if (!Array.isArray(arr)) return false;
    return arr.every(e => {
        return typeof e == 'string' || typeof e == 'number';
    });
}

let bubbleSorting = arr => {
    if (!checkArr(arr)) return false;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

let arr = [10, 7, 1, 2, 6, 23, 22, 34, 11, 1, 25, 2];
console.log(bubbleSorting(arr));


let chekArrEqually = (arr1, arr2) => {
    return arr1.sort().join('') == arr2.sort().join('');
}

let testBubbleSorting = (current, expected) => {
    let actual = bubbleSorting(current);
    if (!chekArrEqually(expected, actual)) {
        console.error(`For values ${current}, the test is fail`);
    }
}

testBubbleSorting([3, 5, 0, 1], [0, 1, 3, 5]);
testBubbleSorting([0, 0, 0, 0], [0, 0, 0, 0]);
testBubbleSorting([0, 21, 0.5, -5, -2, -3], [-5, -3, -2, 0, 0.5, 21]);