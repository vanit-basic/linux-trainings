function my_reduce(arr){
    const arr1 = arr
    .join('')
    .split('')
    .reduce((x,y) => x + Number(y),0);
    return arr1;
}

const arr = [
    123,
    32,
    57
];
result = my_reduce(arr);
console.log(result)