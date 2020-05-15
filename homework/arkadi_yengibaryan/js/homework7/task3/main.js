function arrElemSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += String(arr[i]).split("").reduce((sum, num) => {
            return sum + Number(num);
        }, 0);
    }

    return res;
}
let arr = [111, 2222, 333];
console.log(arrElemSum(arr));
