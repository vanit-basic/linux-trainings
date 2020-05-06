//task_2 before
/*
const arr2 = [
    2,
    3,
    8,
    5,
    6,
    0,
    8,
    9,
];
const arr3 = arr2.slice(0);
for(i=0; i<arr2.length; i++){
    if(i%2==0){
        arr3[i+1]=arr2[i]
    }else{
        arr3[i-1]=arr2[i]
    }
}
console.log(arr2);
console.log(arr3);
*/
//task_2 after
function elemchange(arr){
    if(arr.length % 2 == 0){
        const result = arr.slice(0);
        for(i=0; i<arr.length; i++){
            if(i%2==0){
                result[i+1]=arr[i]
            }else{
                result[i-1]=arr[i]
            }
        }
        return result;
    }else{
        result = 'Error';
        return result;
    }
}
const arr1 = [
    2,
    3,
    8,
    5,
    6,
    0,
    8,
    9,
];
const arr2 = [
    44,
    6,
    033,
    82,
    92,
    1,
];
const arr3 = [
    32,
    344,
    1,
    821,
    544,
    6,
    033,
    82,
    92,
];
const a = elemchange(arr1);
const b = elemchange(arr2);
const c = elemchange(arr3);
console.log(a,arr1);
console.log(b,arr2);
console.log(c,arr3);