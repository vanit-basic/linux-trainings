
function polindrom (arr){
    let array =[...String(arr)];
    console.log(array);
    if(array.length % 2 == 0){
        for(let i= 0, j= array.length -1;i< array.length / 2, j>array.length/2; i++, j--){
            if(array[i] == array[j]){
               return true;
            } else {
                break;
                return false;
            }
        }
    } else {
        for(let i= 0, j= array.length -1;i< array.length / 2 -1, j>array.length/2 ; i++, j--){
            if(array[i] == array[j]){
               return true;
            } else {
                break;
                return false;
            }
        }
    }
    return false;
    
}

function test(input, expectid){
    let actual = polindrom(input);
    if (expectid === actual){
            console.log('ok');
    } else {
            console.log('error');
    }
}
test(1234321, true);
test(1234567, false);
test("abcddcba", true);
test("abcdefg", false);

