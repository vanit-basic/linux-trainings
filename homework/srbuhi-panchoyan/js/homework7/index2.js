function anagramma (a, b){      
    let first =[...String(a)];    
    let second = [...String(b)];       
    second.reverse();
    
    for(let i = 0; i<first.length; i){
        if (first[i] == second[i]){
            return true;
        } else {
            return false;
        }
    }    
    return false;
}

console.log(anagramma(1234, 4321));
console.log(anagramma(1234, 7894));

console.log(anagramma("katak", "kazak"));
console.log(anagramma("katak", "katak"));
