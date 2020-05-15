function checkPalindrome(text) {
    let revStr = text.split('').reverse();

    for (let i = 0; i < revStr.length; i++) {
        if (revStr[i] != text[i]) {
            return 'no'
        }
    }

    return 'yes';
}

let a = 'abc';

console.log(checkPalindrome('aba'));