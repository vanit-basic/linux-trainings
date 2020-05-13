let apiCall = async (api) => {
	const apiRoot = 'https://6b375ae7-884b-495a-b69e-1ec2a436df32.mock.pstmn.io';
	const request = `${apiRoot}${api}`;
	try {

	let response = await fetch(request);
	} catch (e) {
        	console.error(e);
	}
	let json = await response.json();
	return json;

}

let allCars = apiCall('/cars');
console.log(allCars);
let Mersedes = apiCall('/cars?model=Mersedes');
console.log(Mersedes);
let redCar = apiCall('/cars?color=red');
console.log(redCar);
let greenAudi = apiCall('/cars?model=Audi&color=green');
console.log(greenAudi);
let blueCar = apiCall('/cars/blue');
console.log(blueCar);
let bmw = apiCall('/cars?model=BMW');
console.log(bmw);
