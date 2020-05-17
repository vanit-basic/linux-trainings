let palindrom = (word) => {
    //Using charAt method
    /* len = word.length;
    for (let i=0; i<len; i++)
    { if(word.charAt(i)!== word.charAt(len-i-1)){
        document.getElementById("answer").innerHTML = `${word} is not palindrom word`;
    break;}
    else if(i=len-1) document.getElementById("answer").innerHTML = `${word} is palindrom word`; 
    }
} */
//Using split, reverse, join  methods
let word1 = word.split('').reverse().join('');
if(word === word1){
    document.getElementById("answer").innerHTML = `${word} is palindrom word`;
}
else document.getElementById("answer").innerHTML = `${word} is not palindrom word`;}
