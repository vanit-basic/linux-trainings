function commonWord(str) {
    let arr = str.split(' ');
    let uniqueArr = [... new Set(arr)];
    return commonElemArr(uniqueArr, arr);
}

function commonElemArr(arr1, arr2) {
    let commonWordSum = 0;
    let maxCommonWordSum = 0;
    let maxCommonWord;

    arr1.forEach(uniqueElem => {
        arr2.forEach(elem => {
            if (uniqueElem == elem) {
                commonWordSum++;
            }
        });
        if (maxCommonWordSum < commonWordSum) {
            maxCommonWordSum = commonWordSum;
            maxCommonWord = uniqueElem;
        }
        commonWordSum = 0;
    });
    return `the most common word ${maxCommonWord}(${maxCommonWordSum})`;
}

let str = 'aaa bbb ccc aaa ddd aaa aaa ccc bbb ccc';
console.log(commonWord(str));