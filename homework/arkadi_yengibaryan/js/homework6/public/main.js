let apiCall = async (api) => {
    const apiRoot = 'http://localhost:44444';
    const request = `${apiRoot}${api}`;
    let response = await fetch(request);
    let json = await response.json();
    return json;
}

/*
   *Show all cars
*/

function showAllCars(cars) {
    let allCarsList = document.getElementById('allCarsList');
    let properties = [];
    let obj = cars[0];
    for (let properti in obj) {
        properties.push(properti);
    }
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

let drawAllCars = async () => {
    let allCars = await apiCall('/cars');
    showAllCars(allCars);
}

drawAllCars();

/*
   *End show all cars
*/

/*
   *Search car
*/

let search = document.querySelector('#search');
search.addEventListener('keyup', searchCarsUrl);
let getSearchOptionsValues = async () => {
    let allCars = await apiCall('/cars');
    function createSearchOptions(allCars) {
        let searchProperty = document.querySelector('#searchProperty');
        let properties = [];
        for (let properti in allCars) {
            properties.push(properti);
        }
        properties.shift();
        for (let i = 0; i < properties.length; i++) {
            let properti = properties[i];
            searchProperty.innerHTML += `<option value="${properti}">${properti}</option>`;
        }
    }
    createSearchOptions(allCars[0]);
}
getSearchOptionsValues();

function searchCarsUrl() {
    let searchProperty = document.querySelector('#searchProperty');
    let properti;
    for (let i = 0; i < searchProperty.length; i++) {
        if (searchProperty[i].selected) {
            properti = searchProperty[i].value;
        }
    }

    let searchCars = async () => {
        let cars = await apiCall(`/search?${properti}=${search.value}`);
        showAllCars(cars);
    }

    searchCars();
}


/*
   *End search car
*/

/*
   *Add car
*/
let form = document.querySelector('#form');
form.addEventListener('submit', function () { submitHendler(event) });
function submitHendler(event) {
    event.preventDefault();
    validation();
}

let getInputsProperties = async () => {
    let allCars = await apiCall('/cars');
    function createAddCarInputs(allCars) {
        let properties = [];
        for (let properti in allCars) {
            properties.push(properti);
        }
        properties.shift();
        for (let i = 0; i < properties.length; i++) {
            let properti = properties[i];
            form.innerHTML += `<div class="form-group">
                                <input type="text" class="form-control" placeholder="Enter ${properti}" id="${properti}">
                            </div>`;
        }
        form.innerHTML += `<button type="submit" class="btn btn-success mb-3">Add car</button>`;
    }
    createAddCarInputs(allCars[0]);
}

getInputsProperties();

function validation() {
    let errorInfo = document.querySelector('#errorInfo');
    let carAdded = document.querySelector('#carAdded');
    let color = document.querySelector('#color').value;
    let year = document.querySelector('#year').value;
    let vin = document.querySelector('#vin').value;
    carAdded.innerHTML = '';
    if (color.length < 2 || year.length < 2 || vin.length < 2) {
        errorInfo.innerHTML = "Fill in all the fields!";
        return;
    }
    errorInfo.innerHTML = "";
    let addCar = async () => {
        let cars = await apiCall(`/add?color=${color}&year=${year}&vin=${vin}`);
        console.log(cars);
        carAdded.innerHTML = cars['ok'];
    }

    addCar();
    drawAllCars();
}

/*
   *End add car
*/

/*
    *Update car propertis
*/

let getCarPropertiesBtn = document.querySelector('#getCarProperties');
getCarPropertiesBtn.addEventListener('click', getCarProperties);

function getCarProperties() {
    let id = document.querySelector('#id').value;
    let searchInfo = document.querySelector('#searchInfo');

    let searchCarsChange = async () => {
        let car = await apiCall(`/change/${id}`);
        if (Object.keys(car).length > 0) {
            searchInfo.innerHTML = '';
            createChangeInputs(car, id);
        } else {
            searchInfo.innerHTML = 'Car is not defined';
        }
    }

    searchCarsChange();
}

function createChangeInputs(car, id) {
    let changeCarProperti = document.querySelector('#cangeCarProperti');
    changeCarProperti.innerHTML = '';

    for (let properti in car) {
        changeCarProperti.innerHTML += `<div class="form-group">
                                                <input type="text" class="form-control" id="${properti}Update" 
                                                value="${car[properti]}">
                                            </div> `;
    }
    changeCarProperti.innerHTML += `<button type="submit" class="btn btn-success mb-3" id="changeCarProperties">
                                            Change car properti
                                        </button>
                                    <p class="text-danger" id="changeInfo"></p>`;

    let changePropertiesBtn = document.querySelector('#changeCarProperties');
    changePropertiesBtn.addEventListener('click', () => { updateCarProperti(id) });
}

function updateCarProperti(id) {
    let color = document.getElementById('colorUpdate').value;
    let year = document.querySelector('#yearUpdate').value;
    let vin = document.querySelector('#vinUpdate').value;
    let changeInfo = document.querySelector('#changeInfo');
    if (color.length < 2 || year.length < 2 || vin.length < 2) {
        changeInfo.innerHTML = 'Fill in all the fields!';
        return;
    }

    let updateCar = async () => {
        let cars = await apiCall(`/update?id=${id}&color=${color}&year=${year}&vin=${vin}`);
    }

    updateCar();
    let changeCarProperti = document.querySelector('#cangeCarProperti');
    changeCarProperti.innerHTML = '';
    drawAllCars();
}
/*
    * End update car propertis
*/