 //// task1 ///
let arr = [1, 2, 3, 4, 5, 6, 12, 33 ];
let arr1 = arr.filter(function(i){
return  i % 3 == 0;});

let sum  = arr1.reduce(function(prev, curr){
	return prev + curr; });
alert( sum );

   

///task2//

arr2 = [];
  let arr = [ 1, 2 ,3, 4];
for( let i = 0; i < arr.length; i += 2){
	if(i+1 !== arr.length){
		arr2.push(arr[i+1]);}
	arr2.push(arr[i]);
	}

	alert( arr2);

//task3//

let arr = [ 1, 2 ,10, 11, 12, 4, 5, 12, 4];
let arr1 = [];
let t = 0;
for(i = 0;i < arr.length; i++){
	if(arr[i] < arr[i+1])
t++;
else
	{t++;
	arr1.push(t);
		t = 0;}
}
alert(Math.max(...arr1));

/// task4//

let  arr2 = "Seoul is the capital of the South Korea one of the developed citys";
                let newArr= arr2.split(" ").sort();
let most = [], counter = 0;

newArr.reduce(function(a, b){
	if(a === b) {
		++counter;
		most = [b, counter]; }
	else (counter = 1);
   return b;
});

alert(most[0] + " ( "+most[1]+" times )");











        


