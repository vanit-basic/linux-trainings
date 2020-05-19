let checkArr = arr => {
    if (!Array.isArray(arr)) return false;
    return arr.every(n => {
        return +n + 0 == n;
    });
}

let arrElemSum = (arr) => {
    if (!checkArr(arr)) return 'Type error!';
    let res = 0;

    arr.forEach(e => {
        res += String(e).split("").reduce((sum, num) => {
            return sum + +num;
        }, 0);
    });

    return res;
}

let arr = [11, 222, 3333];
console.log(arrElemSum(arr));

let testArrElemSum = (current, expected) => {
    let actual = arrElemSum(current);
    if (expected != actual) {
        console.error(`For values ${current}, the test is fail`);
    }
}

testArrElemSum([11, 22, 121], 10);
testArrElemSum(['11', 22, '121'], 10);
testArrElemSum(['11a', 22, '121'], 'Type error!');
testArrElemSum(['0', 22, '121'], 8);
testArrElemSum(['000', 0, '0'], 0);
testArrElemSum(['000', [1, 2], '0'], 'Type error!');
testArrElemSum(['000', { a: 1 }, '0'], 'Type error!');