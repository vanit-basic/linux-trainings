function simplenum (arr){

    let array = [...arr];
    let a = [];
    let n = 100;
    for(let i = 0; i<=n ; i++){
        a.push(i);
    }
   
   a[1] = 0;
   
   let i = 2
   while(i<=n){
       if(a[i] != 0){
           let j= i+i;
           while(j<=n){
               a[j] = 0;
               j= j +i;
           }
       }
       i = i + 1;
   }

   a =[...new  Set(a)];
  
   let result = [];
   array.forEach((element) => 
       a.forEach((el) => {
          if(el==element)
          result.push(element) 
        }));
   return result;
}

function test(input, ecspected){
    
    let optimal = simplenum(input);
    if (optimal == ecspected){
        console.log("ok")
    }else {
        console.log("error")
    }
}

test([6, 3, 44, 11, 51, 12], [3, 11, 51])
