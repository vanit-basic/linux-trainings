/*class Car {
  
	constructor(name, color, year, vin,story) {
	  this.name = name
	  this.color = color
	  this.year = year
	  this.vin = vin
	  this.story = story
	  this.cars = []
  }
  
	addNewCar= (n, c, y, v, s) => {
    this.cars.push({ n, c, y, v, s})
  }
  
  
}
let carsDB = new Car()
function validation() {
	const Name = document.getElementById('nameInput').value
	const Color = document.getElementById('colorInput').value
	const Year = document.getElementById('yearInput').value
	const Vin = document.getElementById('vinInput').value
	const Story = document.getElementById('storyInput').value

	if (Name && Color && Year && Vin) {
		carsDB.addNewCar(name, color, year, vin,story )
	} else {
		alert('Please enter all fields');
		return;
	}
	
}

function submitHandler(event) {
	validation();
}

console.log(carsDB.cars)*/
let apiCall = async (api) => {
  const apiRoot = 'https://69b984ce-c008-4f84-a99d-2e73df46a586.mock.pstmn.io';
  const request = `${apiRoot}${api}`;
  console.log(request);
  let response = await fetch(request);
  let json = await response.json();
  return json;
}

let allCars = apiCall('/CarsList');
console.log(allCars);
let redCars = apiCall('/CarsList?color:red');
console.log(redCars);
let uniqueCar = apiCall('/CarsList?d=5641');
console.log(uniqueCar);
