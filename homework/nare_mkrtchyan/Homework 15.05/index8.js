numArr = [5, 9, 23, 15, 31, 48, 34, 75, 2, 16, 98, 102, 32, 1, 9, 3];
//Using map and filter methods
let primeArr = numArr.map((num,i) => {
    for(let j = 2; j < ((num/2)+1); j++){
        if(!(num % j)){
            return;
        } else if(j === Math.floor(num/2 + 1))
        return i;
    }
}).filter(x => x !==undefined)
console.log(primeArr);
//Using forEach and push methods 
 primeArr = [];
numArr.forEach((num,i) => {
    for(let j = 2; j < ((num/2)+1); j++){
        if(!(num % j)){
            break;;
        } else if(j === Math.floor(num/2+1))
            primeArr.push(i);
    }
}) 
console.log(primeArr);
