////////////////////  task1  //////////////////////

// let arr=[1,2,3,4,6,9];
// function mysum(arr,number){
//   let sum=0;
//   if(Array.isArray(arr) && typeof(number)=='number' && number!=0){
//     arr.forEach(element => {
//       if (element%number==0) sum+=element;
//     })
//   }
//   return sum;
// }
// console.log(mysum(arr,2));

//////////////////////  task2  ///////////////////////

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach((el,i,arr)=>{
//   if (arr[i+1] && i%2==0) {
//     [arr[i],arr[i+1]]=[arr[i+1],arr[i]];  
//   }
// });
//  console.log(newarr);

/////////////////// task 3 ////////////////////////////
// let arr=[1,2,3,4,1,3,1,2,3,4,5];
// let newarr=[];
// for (let i = arr.length; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     newarr.push(arr.slice(j,i));
//   } 
// }
// console.log(newarr);
// let count=[];
// newarr.forEach((elem,index,arr)=>{
//   let rezult=elem.every((el,i,a)=>{
//     if (a[i+1]) {
//     return a[i]<a[i+1];
//     } else return true; 
//   });
//   if (rezult) {
//     console.log(elem);
//     count.push(elem.length);
//   }
// });
// console.log(Math.max(...count));



////////////// task 3 2 variant/////////////////
// let arr=[1,2,3,4,0,3,1,2,3,4,5,3,2,2,2];
// let newarr=[];
// let start=0;
// for (let i = 0; i < arr.length; i++) {
//   if (i<arr.length-1) {
//     if (arr[i]>=arr[i+1]) {
//       newarr.push(arr.slice(start,i+1).length);
//       start=i+1;
//     }
//   } else if(arr[i-1]>=arr[i]){
//     newarr.push(arr.slice(start,i+1).length);
//   }
// }
// console.log(newarr);
// console.log(Math.max(...newarr));

//////////////   task 4  ///////////////////////
// let text='aaa b bbb aaa b';
// let arrtext=text.split(' ').filter(elem=>{
//   return elem!='';
// });
// let uniqarr=[];
// arrtext.forEach(elem=>{
//   uniqarr.includes(elem)!=true && uniqarr.push(elem);
// });
// uniqarr.forEach(elem => {
//   let count=0;
//   arrtext.forEach(el=>{
//     if(elem==el) {
//       count+=1;
//     }
//   });
//   console.log(elem+":"+count);
// });

//////////////////  task5 palidrom function    //////////////////////
// function palindrom(str){
//   str=str.toLowerCase().replace(/\s/g,'');
//   return str===str.split('').reverse().join('');
// }
// console.log(palindrom('Qaxaq qaxaq'));

///////////////////  task6 anagram function  ////////////////////////
// function Anagram(first,second) {
// 	return second.toLowerCase().split('').sort().join()===first.toLowerCase().split('').sort().join()
// }
// console.log(Anagram('asdfg','asdgf'));


/////// task 7 masivi meji bolor tveri tvanshanneri gumary////////////
// let toStringNumberSum=(arr)=>{
//     let sum=0;
//     [...arr.join('')].forEach(el=>{
//         sum+=+el;
//     });
//     console.log(sum);
// }
// toStringNumberSum([11,22,33]);

///////////// task8 veradarcnum  aparz tvern u parz tveri indexy////////
// let isPrime=(num)=>{
//     for (let i = 2; i <= Math.sqrt(num);) {
//       if (num % i == 0) return false;
//       i == 2 ? i++ : i += 2;
//     }
//     return num>1;
// }
// let primeIndex=(arr)=>{
//     let arrindex=[];
//     arr.forEach((elem,index,arr)=>{
//         if(isPrime(elem)) arrindex.push(index);
//     });
//     return arrindex;
// }


////////////////  task9 pxpxjakajin sortavorum  /////////////////////
// let A=[5,1,3,2,4];
// let puzirok=(arr)=>{
//     for (let j = 0; j < arr.length-1; j++) {
//         for (let i = 0; i < arr.length-1-j; i++) {
//             if(arr[i]>arr[i+1]) [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
//         }
//     }
//     return(arr);
// }
// console.log(puzirok(A));