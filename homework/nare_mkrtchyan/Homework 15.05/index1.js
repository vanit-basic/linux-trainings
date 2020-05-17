let anagramma = (word1, word2) => {
    if(word1.length === word2.length){
        arr1 = word1.split('');
        arr2 = word2.split('');
        for(let i=0; i<word1.length;i++)
        {
            let     num1 = arr1.filter(letter => letter === arr1[i]).length;
            let num2 = arr2.filter(letter => letter === arr1[i]).length;
                if(num1 === num2&&i<word1.length-1){continue;}
                else if(num1 === num2&&i === word1.length-1)document.getElementById("answer").innerHTML = `${word1} and ${word2} are anagramm words`;
             else {document.getElementById("answer").innerHTML = `${word1} and ${word2} are not anagramm words`;
             break;}
        }
    }else document.getElementById("answer").innerHTML = `${word1} and ${word2} are not anagramm words`;
}
