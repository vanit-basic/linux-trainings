// import express (after npm install express)
const express = require('express');
const bodyParser = require('body-parser');
// create new express app and save it as "app"
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// server configuration
const PORT = 8080;
let cars = [
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
app.get('/cars', (req, res) => {
    res.send(cars);
});

app.get('/cars/:color', (req, res) => {
    console.log('aa', req.params);
    const color = req.params.color;
    const car = cars.find((item) => item.color == color);
    res.send(cars);
});

app.get('/cars/:vin', (req, res) => {
    const vin = req.params.vin;
    const car = cars.find((item) => item.vin == vin);
    res.send(car);
});
app.post('/cars', (req, res) => {
    cars.push(req.body);
    res.send(addCar());
});
app.delete('/cars/:vin', (req, res) => {
    const vin = req.params.vin;
    cars = cars.filter((item) => { return item.vin != vin});
    res.send('The car is deleted');
})
// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
