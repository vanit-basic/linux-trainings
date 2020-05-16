let items = document.getElementsByClassName('item');
let num = 2;

//tesnum enq ete num zuyg a player 1 (x) else player2(o)
function changePlayer() {
    let a = num % 2;
    if (a == 0) {
        this.innerHTML = 'x';
        this.classList.remove('player2');
        this.classList.add('player1');
        this.removeEventListener('click', changePlayer);
    }
    else {
        this.innerHTML = 'o';
        this.classList.remove('player1');
        this.classList.add('player2');
        this.removeEventListener('click', changePlayer);
    }
    num++;
}
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', changePlayer);
    items[i].addEventListener('click', gettimer);
}
//let row=[[items[0],items[1],items[2]],[items[3],items[4],items[5]],[items[6],items[7],items[8]]];
//let colum=[[items[0],items[3],items[6]],[items[1],items[4],items[7]],[items[2],items[5],items[8]]];
//let dd=[[items[0],items[4],items[8]],[items[2],items[4],items[6]]];
//let arr=[row,colum,dd];
function gettimer() {
    setTimeout(winner, 500);
}

function restart() {
    for (let i = 0; i < items.length; i++) {
        items[i].innerHTML = '';
        items[i].addEventListener('click', changePlayer);
        //stugum enq ete uni klass player 1 kam 2 jnjum enq et klasy
        if (items[i].classList.contains('player1') == true) {
            items[i].classList.remove('player1');
        }
        if (items[i].classList.contains('player2') == true) {
            items[i].classList.remove('player2');
        }
        if (items[i].classList.contains('player1') == false) {
            items[i].classList.remove('player1');
        }
        if (items[i].classList.contains('player2') == false) {
            items[i].classList.remove('player2');
        }
    }
    // changePlayer();
    num = 2;
}

function nowinner() {
    return [...items].every(elem=>{return elem.innerHTML!==''});
}

function winner() {
    if (items[0].innerHTML == 'x' && items[1].innerHTML == 'x' && items[2].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[3].innerHTML == 'x' && items[4].innerHTML == 'x' && items[5].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[6].innerHTML == 'x' && items[7].innerHTML == 'x' && items[8].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[0].innerHTML == 'x' && items[3].innerHTML == 'x' && items[6].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[1].innerHTML == 'x' && items[4].innerHTML == 'x' && items[7].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[2].innerHTML == 'x' && items[5].innerHTML == 'x' && items[8].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[0].innerHTML == 'x' && items[4].innerHTML == 'x' && items[8].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[2].innerHTML == 'x' && items[4].innerHTML == 'x' && items[6].innerHTML == 'x') {
        alert('ՀԱՂԹԵՑ  X');
        restart();
    }
    else if (items[0].innerHTML == 'o' && items[1].innerHTML == 'o' && items[2].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    else if (items[3].innerHTML == 'o' && items[4].innerHTML == 'o' && items[5].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    else if (items[6].innerHTML == 'o' && items[7].innerHTML == 'o' && items[8].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    else if (items[0].innerHTML == 'o' && items[3].innerHTML == 'o' && items[6].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    else if (items[1].innerHTML == 'o' && items[4].innerHTML == 'o' && items[7].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    else if (items[2].innerHTML == 'o' && items[5].innerHTML == 'o' && items[8].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    else if (items[0].innerHTML == 'o' && items[4].innerHTML == 'o' && items[8].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    else if (items[2].innerHTML == 'o' && items[4].innerHTML == 'o' && items[6].innerHTML == 'o') {
        alert('ՀԱՂԹԵՑ  O');
        restart();
    }
    if(nowinner()) {
        // nowinner();
        alert('Հաղթեց համերաշխությունը');
        restart();
    }
}
