function anagram(string_1,string_2){
    string_1 = string_1.toLowerCase();
    string_2 = string_2.toLowerCase();
    let n = string_1.length;
    let n_1 = string_2.length;
    if(n === n_1){
        let result ='';
        for(x = 0; x < n; x++){
            for(y = 0; y < n_1; y++){
                if(string_1[x] === string_2[y]){
                    result = result + string_1[x];
                    break;
                }
            }
        }
        if(result === string_1){
            console.log(`${string_1} anagram for the word ${string_2}`)
        }else{
            console.log(`${string_1} isn't anagram for the word ${string_2}`)
        }
    }else{
        console.log('error')
    }
};

let str1='CoronaVirus';
let str2='Carnivorous';
let result=anagram(str1,str2);