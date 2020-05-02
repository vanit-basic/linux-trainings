let arr = [12,15,16,98,65,23,1,6,9,10,11];
const NewArr = arr.map(number => number);
console.log(NewArr);
let newArr = [];
for (i = 0; i < arr.length; i=i){
newArr = newArr.concat(arr.splice(i,2).reverse());
}
console.log(newArr);
