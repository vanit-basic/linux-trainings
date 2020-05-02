let arr = [11,13,12,15,16,17,98,65,23,1,6,9,10,11];
let c = 1, max = 1;
for (i=1; i<arr.length; i++){
if(arr[i]>arr[i-1]){
c++; if(c >= max) max = c;
} else c = 1;
}
console.log(max);
