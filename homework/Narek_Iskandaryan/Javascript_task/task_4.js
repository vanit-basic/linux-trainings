function primes_nummber(n){
    let result = '';
    const array =[];
    for(y = n; y > 0; y--){
        if(n/2 >= y && Math.sqrt(n) <= y){
            array.push(y)
        }
    };
    for(x = 0; x < array.length; x++){
        if(n % array[x] != 0){
            result =true;
        }else{
            result =false;
            break
        }
    }
    return result
}

function index_primes_nummber(arr){
    let n = arr.length;
    const index = [];
    for( i = 0; i < arr.length; i++){
        if(primes_nummber(arr[i])){
            index.push(i);
        }
    }
    return index;
}          

const arr = [
    3214,
    7647,
    9710,
    11,
    1993,
    170,
    997,
    294, 
    11,
    1
];
const result = index_primes_nummber(arr);
console.log(result);