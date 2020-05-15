// function checkAnagrammatic(str1, str2) {
//     if (str1.length != str2.length) {
//         return 'no';
//     }

//     let arr1 = str1.split('');
//     let arr2 = str2.split('');

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 delete arr2[j];
//                 break;
//             }
//         }
//     }

//     return checkArrElems(arr2);

// }

// function checkArrElems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             return 'no';
//         }
//     }

//     return 'yes';
// }

// let str1 = 'abcdgv';
// let str2 = 'vbcdag';

// console.log(checkAnagrammatic(str1, str2));


/////// v 2

let str1 = 'abcdgv1';
let str2 = '1vbcdag';

function checkAnagrammatic(str1, str2) {
    if (str1.length != str2.length) return 'No';
    if (str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('')) return 'Yes';
}

console.log(checkAnagrammatic(str1, str2));
console.log('AAA'.toLowerCase());