let createTableBtn = document.querySelector('#getFieldsSum');
createTableBtn.addEventListener('click', createTable);
let currentGamer = 'X';
// Start: create table

function createTable() {
    let game = document.querySelector('#game');
    let info = document.querySelector('#info');
    let fieldsSum = document.querySelector('#fieldsSum').value;
    currentGamer = 'X';
    document.querySelector('#winerInfo').innerHTML = '';

    if (fieldsSum < 3 || !/[0-9]+/.test(fieldsSum)) {
        info.innerHTML = 'No less than 3!!!';
        return;
    }

    let table = '<table>';
    for (let i = 0; i < fieldsSum; i++) {
        table += '<tr>';
        for (let j = 0; j < fieldsSum; j++) {
            table += '<td class="field"></td>';
        }
        table += '<tr>';
    }
    table += '</table>';
    game.innerHTML = table;

    getFields();
}

// End: create table

// Start: get fields, step func

function getFields() {
    let allFields = document.querySelectorAll('.field');
    for (let i = 0; i < allFields.length; i++) {
        allFields[i].addEventListener('click', step);
    }
}

function step() {
    this.innerHTML = currentGamer;
    this.removeEventListener('click', step);
    if (checkWiner()) {
        document.querySelector('#winerInfo').innerHTML = `Win ${currentGamer}!!!`;
        let allFields = document.querySelectorAll('.field');
        for (let i = 0; i < allFields.length; i++) {
            allFields[i].removeEventListener('click', step);
        }
    }
    if (currentGamer == 'X') {
        currentGamer = '0'
    } else {
        currentGamer = 'X'
    }
}

// End: get fields, step func

// Start: Get col,row,left-right diagonal

function getTwoDimensionalArr() {
    let allFields = document.querySelectorAll('.field');
    let n = Math.sqrt(allFields.length);
    let values = [];
    let result = [];
    for (let i = 0; i < allFields.length; i++) {
        values.push(allFields[i].innerHTML);
    }
    for (let i = 0; i < n; i++) {
        result.push(values.splice(0, n));
    }
    return result;
}

function getCols() {
    let allFields = getTwoDimensionalArr();
    let cols = [];
    for (let i = 0; i < allFields.length; i++) {
        for (let j = 0; j < allFields[i].length; j++) {
            if (cols[j] === undefined) {
                cols[j] = [];
            }
            cols[j][i] = allFields[i][j];
        }
    }

    return cols;
}

function getleftDiagonal() {
    let allFields = getTwoDimensionalArr();
    let allDiagonal = [];
    let n = allFields.length;
    if (n > 5) {
        n = 5;
    }

    for (let i = 0; i < allFields.length; i++) {
        for (let j = 0; j < allFields[i].length; j++) {
            if (allDiagonal[i + j] === undefined) {
                allDiagonal[i + j] = [];
            }
            allDiagonal[i + j].push(allFields[i][j]);
        }
    }

    let diagonal = allDiagonal.filter(e => {
        return e.length >= n;
    });

    return diagonal;
}

function getRightDiagonal() {
    let allFields = getTwoDimensionalArr();
    allFields.map(e => {
        return e.reverse();
    });
    let allDiagonal = [];
    let n = allFields.length;
    if (n > 5) {
        n = 5;
    }

    for (let i = 0; i < allFields.length; i++) {
        for (let j = 0; j < allFields[i].length; j++) {
            if (allDiagonal[i + j] === undefined) {
                allDiagonal[i + j] = [];
            }
            allDiagonal[i + j].push(allFields[i][j]);
        }
    }

    let diagonal = allDiagonal.filter(e => {
        return e.length >= n;
    });

    return diagonal;
}

// End: Get col,row,left-right diagonal

// Start: Check winer

function checkArrRow(arr) {
    let check;
    let n = arr[0].length - 1;
    let winNum = arr[0].length;

    if (winNum > 5) {
        winNum = 5;
        n = 4;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = n; j < arr[i].length; j++) {
            if (arr[i][j] == '') {
                break;
            }
            check = true;
            for (let k = 1; k < winNum; k++) {
                if (arr[i][j] != arr[i][j - k]) {
                    check = false;
                    break;
                }
            }
            if (check) return true;
        }
    }
}

function checkWiner() {
    let row = getTwoDimensionalArr();
    let col = getCols();
    let leftDiagonal = getleftDiagonal();
    let rightDiagonal = getRightDiagonal();

    if (checkArrRow(row) || checkArrRow(col) || checkArrRow(leftDiagonal) || checkArrRow(rightDiagonal)) {
        return true;
    }
}

// End: Check winer

// Start: Restart game

let restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', restart);

function restart() {
    currentGamer = 'X';
    document.querySelector('#winerInfo').innerHTML = '';
    document.querySelector('#game').innerHTML = '';
    createTable();
}

// End: Restart game