//task_3 before
/*
const arr =  [
    1,
    7,
    5,
    6,
    1,
    6,
    7,
    8,
    11,
    4,
    1,
    6,
    7,
    8,
    9,
    10,
    70,
];
let result=0;
let count=1;
for(i=0; i<arr.length; i++){
    if(arr[i] < arr[i+1]){
        count++;
    }else if(count > result){
        result=count;
        count=1;
    }else{
        count=1;
    }
}
console.log(result)
*/
//task_3 after
function lengthInt(arr){
    let result=0;
    let count=1;
    for(i=0; i<arr.length; i++){
        if(arr[i] < arr[i+1]){
            count++;
        }else if(count > result){
            result=count;
            count=1;
        }else{
            count=1;
        }
    }
    return result;
}
const arr =  [
    1,
    7,
    5,
    6,
    1,
    6,
    7,
    8,
    11,
    4,
    1,
    6,
    7,
    8,
    9,
    10,
    70,
    73,
    74,
    76,
];
let res = lengthInt(arr);
console.log(res)