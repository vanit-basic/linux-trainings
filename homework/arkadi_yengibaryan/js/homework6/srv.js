let express = require('express');
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false })
let app = express();

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/*  *Routes  */
carsData = [
    { id: 1, color: 'red', year: '2007', vin: '111' },
    { id: 2, color: 'blue', year: '2009', vin: '222' },
    { id: 3, color: 'green', year: '2010', vin: '333' }
];

app.get('/cars', (req, res) => {
    res.send(carsData);
});

function searchCars(obj) {
    let properti;
    let value;
    for (let k in obj) {
        properti = k;
        value = obj[properti];
    }
    return carsData.filter(car => {
        return car[properti].includes(value);
    });
}

app.get('/search', (req, res) => {
    let car = searchCars(req.query);
    res.send(car);
});

app.get('/add', (req, res) => {
    let newCar = req.query;
    let addCar = { id: carsData.length + 1 };
    for (let properti in newCar) {
        addCar[properti] = newCar[properti];
    }
    carsData.push(addCar);
    res.send({ ok: 'car added' });
});

function searchCarsId(obj) {
    return carsData.filter(car => {
        return car['id'] == obj.id;
    });
}

function getChangeValues(car) {
    let newCar = {};

    for (let properti in car) {
        if (properti != 'id') {
            newCar[properti] = car[properti];
        }
    }

    return newCar;
}

app.get('/change/:id', (req, res) => {
    let car = searchCarsId(req.params);
    car = getChangeValues(car[0]);
    res.send(car);
});

function updateCar(newCar) {
    let id = newCar.id - 1;
    carsData[id] = newCar;
}

app.get('/update', (req, res) => {
    let newCar = req.query;
    updateCar(newCar);
    res.send({ ok: 'car update' });
});

/*  *End routes  */
app.listen(44444);
