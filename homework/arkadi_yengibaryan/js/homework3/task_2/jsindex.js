function revArrElem(arr) {
    let newArr = [];
    let result = [];

    arr.forEach((elem, index) => {
        if (index % 2 == 0) {
            newArr.push(arr.slice(index, index + 2).reverse());
        }
    });

    newArr.forEach(elem => {
        elem.forEach(e => {
            result.push(e);
        });
    });

    return result;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(revArrElem(arr));

