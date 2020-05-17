// import express (after npm install express)
const express = require('express');
const bodyParser = require('body-parser');

const { carsRouter} = require('./cars.js');
// create new express app and save it as "app"

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/cars', carsRouter);
// server configuration
const PORT = 9090;

function addCar() {
	let type = document.getElementById("type").value.trim();
	let model = document.getElementById('model').value.trim();
	let color = document.getElementById("color").value.trim();
	let date = document.getElementById("date").value.trim();
	let vin = document.getElementById("vin").value.trim();
	let accident = document.getElementById("accident").value.trim();
    let car = { 
		"type": type,  
		"model": model, 
		"color": color,
		"date": date,
		"vin": vin,
		"accident": accident
    };
    return car;
}
// create a route for the app


// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
