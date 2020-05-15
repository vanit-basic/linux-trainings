function bubbleSorting(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}

let arr = [10, 7, 1, 2, 6, 23, 22, 34, 11, 1, 25, 2];

console.log(bubbleSorting(arr));
