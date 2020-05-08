class Car {
  
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

console.log(carsDB.cars)