let str = "asd fng asd ert fng asd ert fng asd";
let arr = str.split(" ");
let c = 0, max = 0;
for(let i=0; i<arr.length; i++){
for(let j=i+1; j<arr.length; j++){
if(arr[j]===arr[i])
c++;
}
if(c>=max){
max=c;
c=0;
}
}
console.log(max);

