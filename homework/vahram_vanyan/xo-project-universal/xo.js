//n*n chapi xaxadasht
const n=20;
let player=2;
//qani vandak e petq haxtelu hamar
const answerlength=n>=5? 5 : n;
console.log(answerlength);
creatArena(n);

let gamezon=document.getElementById('gamezon');

 function creatArena(n) {
    let gamezon=document.getElementById('gamezon');
	for (let i = 0; i < n; i++) {
		let tr=document.createElement('tr');
		gamezon.appendChild(tr);
		for (let j = 0; j <n; j++) {
			let td=document.createElement('td');
            tr.appendChild(td);
            // td.innerHTML=`${i} : ${j}`;
        }
    }
  }


let alltds=document.getElementsByTagName('td');

function changePlayers() {
    let a = player % 2;
    if (a == 0) {
        this.innerHTML = 'x';
        // this.classList.remove('player2');
        this.classList.add('player1');
        this.removeEventListener('click', changePlayers);
    }
    else {
        this.innerHTML = 'o';
        // this.classList.remove('player1');
        this.classList.add('player2');
        this.removeEventListener('click', changePlayers);
    }
    player++;
}
for (let i = 0; i < alltds.length; i++) {
    alltds[i].addEventListener('click', changePlayers);
    alltds[i].addEventListener('click', getWinner);
}

function getWinner() {
    setTimeout(setWinner, 500);
}

function restart() {
    for (let i = 0; i < alltds.length; i++) {
        alltds[i].innerHTML = '';
        alltds[i].addEventListener('click', changePlayers);
        //stugum enq ete uni klass player 1 kam 2 jnjum enq et klasy
        if (alltds[i].classList.contains('player1')) {
            alltds[i].classList.remove('player1');
        }
        if (alltds[i].classList.contains('player2')) {
            alltds[i].classList.remove('player2');
        }
    }
    // changePlayer();
    player = 2;
}


//   console.log(alltds);
function horizontalArr(arr){
    let masiv=[];
    for (let i = 0; i <n; i++) {
        let row=[];
        for (let j = i*n; j <(1+i)*n; j++) {
            row.push(arr[j].innerHTML);
        }
        masiv.push(row);
        row=[];
    }
    return masiv;
}

// let row=horizontalArr(alltds);
// console.log(row);

function verticalArr(arr){
    let masiv=[];
    for (let i = 0; i <n; i++) {
        let row=[];
        for (let j = i; j <n*n; j+=n) {
            row.push(arr[j].innerHTML);
        }
        masiv.push(row);
        row=[];
    }
    return masiv;
}

// let col=verticalArr(alltds);
// console.log(col);

function DiaganalOne(arr){
    let masiv=[];
    for (let i = 0; i <n; i++) {
        for (let j = 0; j <n; j++) {
            if (masiv[i+j]===undefined) {
                masiv[i+j]=[];
            }
            masiv[i+j].push(arr[i][j]);
        }
    }
    return masiv.filter(elem=> elem.length>=answerlength);
}

// let dd1=DiaganalOne(row);
// console.log(dd1);

function DiaganalTwo(arr){
    let masiv=horizontalArr(arr);
    masiv.map(elem=>elem.reverse());
    return DiaganalOne(masiv);
}

// let dd2=DiaganalTwo(alltds);
// console.log(dd2);

//stexcum enq haxtelu pahy
function setWinner(){
    let row=horizontalArr(alltds);
    getanswer(row,answerlength);
    let col=verticalArr(alltds);
    getanswer(col,answerlength);
    let dd2=DiaganalTwo(alltds);
    getanswer(dd2,answerlength);
    let dd1=DiaganalOne(row);
    getanswer(dd1,answerlength);
}

//stanum enq true patasxany
function getanswer(arr,count) {
    for (let i = 0; i <arr.length; i++) {
        for (let j = 0; j <=arr[i].length-count; j++) {
            let answerX=false;
            let answerO=false;
            answerX=arr[i].slice(j,j+count).every(elem=>{
               return elem=='x';
            });
            answerO=arr[i].slice(j,j+count).every(elem=>{
                return elem=='o';
            });            
            if(answerX){
                alert("haxtec x");
                restart();
                return;
            }
            if(answerO){
                alert("haxtec o");
                restart();
                return;
            }
        }
    }
}



let arr=[0,1,2,3,4,5,6,7,8,9];
let arr2=[0,1,2];
// console.log(arr.join('').includes(arr2.join('')));
// answercounty ktrum a masivy 5 anoc masivneri
function answerCount(arr,count){
    let newarr=[];
    for (let i = 0; i <=arr.length-count; i++) {
    newarr.push(arr.slice(i,i+count));  
    }
    return newarr;
}
console.log(answerCount(arr,5));
