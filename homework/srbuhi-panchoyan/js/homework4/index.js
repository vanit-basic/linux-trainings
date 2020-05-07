let carlist = [];
let cars = {};

function addCar() {
	let type = document.getElementById("type").value.trim();
	let model = document.getElementById('model').value.trim();
	let color = document.getElementById("color").value.trim();
	let date = document.getElementById("date").value.trim();
	let vin = document.getElementById("vin").value.trim();
	let accident = document.getElementById("accident").value.trim();

	cars = { 
		"type": type,  
		"model": model, 
		"color": color,
		"date": date,
		"vin": vin,
		"accident": accident
	};

	carlist.push(cars);
	for(let [key, value] of Object.entries(carlist[carlist.length- 1])){

	}document.getElementById("p").innerHTML += `${key}: ${value} ` + ",";
	
	console.log(carlist);	
}



function findCarByVin (vin){if (cars.vin === vin){return car;}}

function findCarByAccident (accident) {if (cars.accident === accident){return car;}}

function findCarByType (type) {if (cars.type === type){return car;}}
	


