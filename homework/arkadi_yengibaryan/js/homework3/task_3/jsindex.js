function intervalMaxLength(arr) {
    let start = 0;
    let end = 2;
    let newArr = [];
    arr.forEach((elem, index) => {
        if (index >= 3) {
            if (arr.slice(start, end).length) {
                newArr.push((arr.slice(start, end)));
            }
            [start, end] = [end, end + index];
        }
    });
    return checkMaxLength(newArr);
}

function checkMaxLength(arr) {
    let maxLength = 0;
    arr.forEach(elem => {
        if (maxLength < elem.length) {
            maxLength = elem.length;
        }
    });
    return maxLength;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(intervalMaxLength(arr));