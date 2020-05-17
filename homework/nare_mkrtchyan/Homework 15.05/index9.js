let numArr = [3, 9, 23, 15, 31, 48, 34, 75, 2, 16, 98, 102, 32, 1, 9];
//Bubble Sort (using recursion)
let bSort = (numArr) => {
    for(let i = 1; i< numArr.length; i++){
        if(numArr[i - 1] > numArr[i]){
            let c = numArr[i - 1];
            numArr[i - 1] = numArr[i];
            numArr[i] = c;
            
        }
    }
    
    for(let i = 1; i< numArr.length; i++){
        if(numArr[i-1] > numArr[i]) bSort(numArr);
        else if(i === numArr.length - 1) {return numArr;}
    }
}
console.log(bSort(numArr));
 
// sort method
let sort = numArr.sort((a,b) => a-b);
console.log(sort);
