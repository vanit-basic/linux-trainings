let palindromeArray =(str) => { 
let isPalindrome = true;
     

for(let i = 0; i < str.length / 2; i++) {

    
    if(str[i] !== str[str.length - i - 1]){
      isPalindrome = false; 
      break;
    }
}

return isPalindrome;
}
console.log(palindromeArray ( "eye" ));
console.log(palindromeArray("star"));