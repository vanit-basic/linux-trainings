let srvConnection = async (api) => {
    try {
        const apiRoot = 'https://58968921-b36d-4b21-b04c-e14d11df0ff5.mock.pstmn.io';
        const request = `${apiRoot}${api}`;
        let response = await fetch(request);
        let json = await response.json();
        return json;
    } catch (e) {
        console.error(e);
    }

}

let allCars = srvConnection('/cars');
console.log(allCars);
let redCar = srvConnection('/cars/red');
console.log(redCar);
let greenCar = srvConnection('/cars?color=green');
console.log(greenCar);
let blueCar = srvConnection('/cars/blue');
console.log(blueCar);