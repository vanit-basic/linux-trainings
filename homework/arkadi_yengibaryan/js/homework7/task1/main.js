function checkPalindrome(text) {
    if (text.toLowerCase() == text.toLowerCase().split('').reverse().join('')) return 'yes';
    return 'no';
}

console.log(checkPalindrome('Acbbca'));

// console.log('AAA'.toLowerCase());
