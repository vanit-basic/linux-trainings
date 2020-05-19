let checkType = (elem) => {
    if (typeof elem == 'string' || typeof elem == 'number') {
        return true;
    } else {
        return false;
    }
}

let checkPalindrome = text => {
    if (!checkType(text)) return false;
    if (typeof text == 'number') text = String(text);
    if (text.toLowerCase() == text.toLowerCase().split('').reverse().join('')) return true;
    return false;
}

if (checkPalindrome('acbbca')) {
    console.log('Yes');
} else {
    console.log('No');
}

let testPalindrome = (current, expected) => {
    let actual = checkPalindrome(current);
    if (expected != actual) console.error(`For value ${current}, the test is fail`);
}

testPalindrome('Aba', true);
testPalindrome('', true);
testPalindrome(112211, true);
testPalindrome(0, true);
testPalindrome('A1221a', true);
testPalindrome('0/-@aVA@-/0', true);
