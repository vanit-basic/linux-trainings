 for (let i = 1971; i <= 2020; i++) {
                let option = document.createElement('option');
                option.innerHTML = i;
                let select = document.getElementById('year');
                select.appendChild(option);
            };

const cars = [
    {
        "Name":"peugeot 504",
        "color":'red',
        "vin":234,
        "Year":"1970",
        "accident":"some text 1"
    },
    {
        "Name":"bmw",
        "color":"blue",
        "vin":764,
        "Year":"2012",
        "accident":"some text 2"
    },
    {
        "Name":"bmw",
        "color":"black",
        "vin":094,
        "Year":"2020",
        "accident":"some text 3"
    },
    {
        "Name":"opel",
        "color":"green",
        "vin":674,
        "Year":"1997",
        "accident":"some text 4"
    },
    {
        "Name":"opel",
        "color":"green",
        "vin":674,
        "Year":"2020",
        "accident":"some text 4"
    },
];

function create_validation() {
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const vin = document.getElementById('vin').value;
    const accident = document.getElementById('accident').value;

    if (name && color && year && vin && accident) {
        addJson(name, color, year, vin, accident);
    } else {
        alert('Please enter all fields');
        return;
    }

}

function addJson(n, c, y, v, a) {
    const user = {
        name: n,
        color: c,
        year: y,
        vin: v,
        accident: a
    };
    cars.push(user);
    showMessageWindow();
}

function showMessageWindow() {
    const modal = document.getElementById('modalWindow');
    const row = document.getElementById('row');
    const p = modal.firstElementChild;
    p.innerHTML = `The car is added`;
    row.style.display = 'none';
    modal.style.display = 'block';
    setTimeout(function (){location.replace('index.html')},5000);
}

function addCar(event) {
    event.preventDefault();
    create_validation();
}
/*function searchCar(event) {
    event.preventDefault();
    search_validation();
}*/


for (let i = 1971; i <= 2020; i++) {
                let option = document.createElement('option');
                option.innerHTML = i;
                let select = document.getElementById('year_1');
                select.appendChild(option);
            };

function search_validation() {
    const name_1 = document.getElementById('name_1').value;
    const vin_1 = document.getElementById('vin_1').value;
    const accident_1 = document.getElementById('accident_1').value;
    const check_1 = document.getElementById('check_1').checked;
    const check_2 = document.getElementById('check_2').checked;

    if (name_1 && check_2 && check_1 && vin_1 && accident_1) {
        const year_1 = document.getElementById('year_1').value;
        const color_1 = document.getElementById('color_1').value;
        addJson_1(name, color_1, year_1, vin, accident);
        console.log(cars)
    } else {
        alert('Please enter all fields');
        return;
    }

}


function addJson_1(n, c, y, v, a) {
    const user = {
        name: n,
        color: c,
        year: y,
        vin: v,
        accident: a
    };
    cars.push(user);
}
function searchCar(event) {
    event.preventDefault();
    search_validation();
}