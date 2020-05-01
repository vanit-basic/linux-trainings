function arrElemsSum(arr, n) {
    let result = arr
        .filter(num => num % n == 0)
        .reduce((sum, num) => sum + num, 0);
    return result;
}


let nums = [1, 3, 5, 6, 9, 12];
console.log(arrElemsSum(nums, 3));