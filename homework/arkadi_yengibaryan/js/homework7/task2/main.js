let checkType = (elem1, elem2) => {
    if ((typeof elem1 == 'string' || typeof elem1 == 'number') &&
        (typeof elem2 == 'string' || typeof elem2 == 'number')) {
        return true;
    } else {
        return false;
    }
}

let checkAnagrammatic = (str1, str2) => {
    if (!checkType(str1, str2)) return false;
    if (typeof str1 == 'number') str1 = String(str1);
    if (typeof str2 == 'number') str2 = String(str2);
    if (str1.length != str2.length) return false;

    if (str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')) {
        return true;
    }

    return false;
}

let str1 = '12AA1cd';
let str2 = 'DA12c1A';

if (checkAnagrammatic(str1, str2)) {
    console.log('Yes');
} else {
    console.log('No');
}

let testAnagrammatic = (current, check, expected) => {
    let actual = checkAnagrammatic(current, check);
    if (expected != actual) {
        console.error(`For values ${current}-${check}, the test is fail`);
    }
}

testAnagrammatic('aabbcc', 'cbabac', true);
testAnagrammatic(123321, '113232', true);
testAnagrammatic('0', 0, true);
testAnagrammatic('', '', true);
testAnagrammatic('-@A@c@C', 'a@@C@c-', true);