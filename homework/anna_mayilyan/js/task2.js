///// task1////

function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? true : false;
}

alert(isPalindrome("moon"));

//// task2////
function compare (a, b) {
  y = a.split("").sort();
  z = b.split("").sort();
  if(y.length==z.length) {
   for (i=0; i<y.length; i++) {
    if (y[i]!==z[i]){
     console.log(a + " and " + b + " are not anagrams!");
     return false;
    }
   }
   return true;
  } else { return false;}}
console.log(compare("listen","silent"));


///task3///
var arr = [111, 222, 333, 444];

let a = arr.join('').split();
    let sum = 0;
while (a) {
    sum += a % 10;
    a = Math.floor(a / 10);
}

console.log(sum);


//task4//
let arr = [100,25,84,77];
function bubble(arr) {
  for (var i = 0; i < arr.length; i++) {
   for(var j=0; j < arr.length - 1; j++){
    if (arr[j] > arr[j + 1]) {
      var a = arr[j]
      var b = arr[j + 1]
      arr[j] = b
      arr[j + 1] = a
     }
   }
  }
  return arr;
}
alert(bubble(arr));

