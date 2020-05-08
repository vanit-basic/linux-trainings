class Cars {
    _carsData = [
        { id: 1, color: 'red', year: '2007', vin: '1' },
        { id: 2, color: 'blue', year: '2009', vin: '2' },
        { id: 3, color: 'green', year: '2010', vin: '3' }
    ];

    getAllCars() {
        return this._carsData;
    }

    addCars(color, year, vin) {
        let id = this._carsData.length + 1;
        this._carsData.push({ id: id, color: color, year: year, vin: vin });
    }

    searchCars(properti, value) {
        return this._carsData.filter(car => {
            return car[properti].includes(value);
        });
    }

    updateCarProperti(values, id) {
        let properties = this.getCarPropertes();
        for (let i = 0; i < properties.length; i++) {
            this._carsData[id][properties[i]] = values[i];
        }
    }

    getCarPropertes() {
        let properties = this.getCarAllPropertes();
        properties.shift();
        return properties;
    }

    getCarAllPropertes() {
        let properties = [];
        let obj = this._carsData[0];
        for (let properti in obj) {
            properties.push(properti);
        }
        return properties;
    }

}

let cars = new Cars;
/*
   *Show all cars
*/
showAllCars(cars.getAllCars(), cars.getCarAllPropertes());

function showAllCars(cars, properties) {
    let allCarsList = document.getElementById('allCarsList');
    let carsListTable = `<thead><tr>`;

    for (let i = 0; i < properties.length; i++) {
        carsListTable += `<th>${properties[i]}</th>`;
    }

    carsListTable += `</tr></thead></tbody>`;

    for (let i = 0; i < cars.length; i++) {
        carsListTable += `<tr>`;
        for (let j = 0; j < properties.length; j++) {
            carsListTable += `<td>${cars[i][properties[j]]}</td>`;
        }
        carsListTable += `</tr>`;
    }

    allCarsList.innerHTML += `</tbody>`;
    allCarsList.innerHTML = carsListTable;
}

/*
    *validation inputs
*/

let form = document.querySelector('#form');
form.addEventListener('submit', function () { submitHendler(event) });
function submitHendler(event) {
    event.preventDefault();
    validation();
}

function validation() {
    let info = document.querySelector('#addInfo');
    let color = document.querySelector('#color').value;
    let year = document.querySelector('#year').value;
    let vin = document.querySelector('#vin').value;

    if (color.length < 2 || year.length < 2 || vin.length < 2) {
        info.innerHTML = "Fill in all the fields!";
        return;
    }
    info.innerHTML = "";
    addCarDb(color, year, vin);
}

/*
    *add car in table and DB
*/

function createAddCarInputs() {
    let propertis = cars.getCarPropertes();

    for (let i = 0; i < propertis.length; i++) {
        let properti = propertis[i];
        form.innerHTML += `<div class="form-group">
                            <input type="text" class="form-control" placeholder="Enter ${properti}" id="${properti}">
                        </div>`;
    }
    form.innerHTML += `<button type="submit" class="btn btn-success mb-3">Add car</button>`;
}
createAddCarInputs();

function addCarDb(color, year, vin) {
    cars.addCars(color, year, vin);
    showAllCars(cars.getAllCars(), cars.getCarAllPropertes());
}

/*
    *Search car
*/

let search = document.querySelector('#search');
search.addEventListener('keyup', searchCars);
createSearchOptions();

function createSearchOptions() {
    let searchProperty = document.querySelector('#searchProperty');
    let properties = cars.getCarPropertes();

    for (let i = 0; i < properties.length; i++) {
        let properti = properties[i];
        searchProperty.innerHTML += `<option value="${properti}">${properti}</option>`;
    }
}

function searchCars() {
    let searchProperty = document.querySelector('#searchProperty');
    let properti;
    for (let i = 0; i < searchProperty.length; i++) {
        if (searchProperty[i].selected) {
            properti = searchProperty[i].value;
        }
    }
    let car = cars.searchCars(properti, search.value);
    showAllCars(car, cars.getCarAllPropertes());
}

/*
    *Update car propertis
*/

let getCarPropertiesBtn = document.querySelector('#getCarProperties');
getCarPropertiesBtn.addEventListener('click', getCarProperties);

function getCarProperties() {
    let cangeCarProperti = document.querySelector('#cangeCarProperti');
    let id = document.querySelector('#id').value - 1;
    let searchInfo = document.querySelector('#searchInfo');
    cangeCarProperti.innerHTML = '';

    if (cars.getAllCars()[id]) {
        let car = cars.getAllCars()[id];
        let properti = cars.getCarPropertes();

        for (let i = 0; i < properti.length; i++) {
            cangeCarProperti.innerHTML += `<div class="form-group">
                                                <input type="text" class="form-control changeValues" 
                                                value="${car[properti[i]]}">
                                            </div>`;
        }
        cangeCarProperti.innerHTML += `<button type="submit" class="btn btn-success mb-3" id="changeCarProperties">
                                            Change car properti
                                        </button>`;
        searchInfo.innerHTML = '';

        let changePropertiesBtn = document.querySelector('#changeCarProperties');
        changePropertiesBtn.addEventListener('click', () => { updateCarProperti(id) });

    } else {
        searchInfo.innerHTML = 'Car is not found';
    }
}

function updateCarProperti(id) {
    let changeValues = [];
    let changeInputs = document.querySelectorAll('.changeValues');
    let cangeCarProperti = document.querySelector('#cangeCarProperti');

    for (let i = 0; i < changeInputs.length; i++) {
        changeValues.push(changeInputs[i].value);
    }

    cars.updateCarProperti(changeValues, id);
    cangeCarProperti.innerHTML = '';
    showAllCars(cars.getAllCars(), cars.getCarAllPropertes());
}