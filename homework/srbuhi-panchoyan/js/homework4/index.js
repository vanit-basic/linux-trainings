let carlist = [
	{
		"type": "Mercedes",
		"model": "e300",
		"color": "black",
		"date": "1990",
		"vin": "548762",
		"accident": "flood"
	},
	{
		"type": "BMW",
		"model": "X6",
		"color": "white",
		"date": "2010",
		"vin": "5478963",
		"accident": "accident"
        },
	{
		"type": "Audi",
		"model": "a6",
		"color": "greeen",
		"date": "2005",
		"vin": "214789",
		"accident": "other"
        },
	{
		"type": "Opel",
		"model": "Astra G",
		"color": "blue",
		"date": "1998",
		"vin": "987452",
		"accident": "flood"
        },
	{
		"type": "WolksVagen",
		"model": "Golf",
		"color": "red",
		"date": "1995",
		"vin": "6547125",
		"accident": "accident"
        },
	{
		"type": "Mercedes",
		"model": "c200",
		"color": "red",
		"date": "1999",
		"vin": "145789",
		"accident": "other"
        },
	{
		"type": "Mercedes",
		"model": "ML500",
		"color": "blue",
		"date": "2011",
		"vin": "967412",
       		"accident": "flood"
        },
];
let cars = {};

function addCar() {
	let type = document.getElementById("type").value.trim();
	let model = document.getElementById('model').value.trim();
	let color = document.getElementById("color").value.trim();
	let date = document.getElementById("date").value.trim();
	let vin = document.getElementById("vin").value.trim();
	let accident = document.getElementById("accident").value.trim();

	//carlist.find(
	//	{if(cars.vin === vin) alert('This car already exsist')}); 
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

function findCarByType (type) {
	carlist.filter(cars => cars.type === type)
}
function findCarByColor(color) {if (cars.color === color){return car;}}

