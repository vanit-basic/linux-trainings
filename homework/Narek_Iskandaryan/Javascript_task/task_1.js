function palindrome(string){
    string = string.toLowerCase();
    string_1 = string.split("").reverse().join("");
    if(string === string_1){
        let result = `${string} is a palindrome`;
        return result;
    }else{
        let result = (`${string} isn't palindrome`);
        return result;
    }
};

let str='Madam';
let result=palindrome(str);
console.log(result)