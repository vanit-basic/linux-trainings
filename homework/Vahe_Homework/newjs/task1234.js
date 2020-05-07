//task1
let arr1 = [1,2,3,4,5,6,7,8,9];
let sumModTree = (array) => {
	let sum = 0;
	array.forEach(item =>{
		if(item%3 === 0){
			sum += item;					
		}  
	});
    return sum;
};
alert(sumModTree(arr1));
 //task2
let arr2 = [1,2,3,4,5,6,7,8,9];
let sortFunction = (array) => {
    for(i = 0;i < array.length;i++){
        if(i%2 === 0 && i != (array.length -1)){
            let swap = array [i+1];					
            array[i+1] = array[i];
            array[i] = swap;
        }else {
            continue;
        }
    }
};
sortFunction(arr2);
alert(arr2);
//task3
let arr3 = [1,2,3,4,5,0,8,7,5,1,2];
let findMaxLength = (array) =>{
	let intervals = new Array(0);
	let sum = 1;
	for(let i = 0;i < array.length;i++){
		if(array[i] < array[i+1] && array[i+1] >= array[i+2]){
			sum += 1;
			intervals[intervals.length] = sum;
			sum = 1;
		}else if (array[i]> array[i+1] || array[i] === array [i+1]){	
			continue;
		}else if (array[i] < array[i+1]){
			sum += 1;
		}else if ( i+1 === array.length ){
			intervals[intervals.length] = sum;
		}
	}
	return Math.max.apply(null,intervals);
};
alert(findMaxLength(arr3));
//task 4 => 30%
let str = "Жили-были три китайца: Як, Як-цедрак, Як-цедрак-цедрак-цедрони.Жили-были три китайки: Цыпа, Цыпа-дрыпа, Цыпа-дрыпа-дрымпампони.";
	let searchWord = (string) => {
		let arrStr = str.split('');    
		for(let i = 0;i< arrStr.length; i++){
			if(arrStr[i] === ',' || arrStr[i] === ':' || arrStr[i] ==='.' || arrStr[i] === '?' || arrStr [i] === '-'){
				arrStr[i] = ' ';
			}
		}
		alert(arrStr);
		let strTest = arrStr.join("");
		alert(strTest)
		let arrStr1 = strTest.split(' ');
		alert(arrStr1);
	};
searchWord();
