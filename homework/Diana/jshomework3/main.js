let arr=[1,3,6,7,9,10];

let c = arr.filter(function(item, index){
    if (item % 3 == 0){ 
        return true;
    }
})
console.log(c)

const amount = c.reduce((total, item) => total + item, 0)
console.log(amount)