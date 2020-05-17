// import express (after npm install express)
const express = require('express');
const bodyParser = require('body-parser');
let cors=require('cors');
// create new express app and save it as "app"
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// server configuration
const PORT = 8080;
let car = [
			{ name:"chevrolet impala",
			  color:"black",
			  year:1970,
			  vin:"ZFA18800004473122",
			  
			},
			{ name:"toyota corona",
			  color:"blue",
			  year:1992,
			  vin:"JT111TJ8007010945",
			  
			},
			{ name:"nissan",
			  color:"white",
			  year:2006,
			  vin:"WP1AB29P66LA68044",
			 
			},
			{ name:"mitsubishi",
			  color:"red",
			  year:2002,
			  vin:"JN1TBNT30U0124100",
			  
			}
];
// create a route for the app
app.get('/car', (req, res) => {
    console.log('aa');
    res.send(car);
});
/*app.get('/cars/:vin', (req, res) => {
    console.log(req.params);
    const vin = req.params.vin;
    console.log('bb ', vin);
    const car = cars.find((item) => item.vin == vin);
    res.send(car);
});*/
app.get('/car/:color', (req, res) => {
    console.log(req.params);
    const color = req.params.color;
    console.log('bb ', color);
    const cars = car.find((item) => item.color ==color);
    res.send(cars);
});
app.post('/car', (req, res) => {
    console.log('cc ', req.body);
    cars.push(req.body);
    res.send('ok');
});
app.delete('/car/:vin', (req, res) => {
    const vin = req.params.vin;
    cars = cars.filter((item) => { return item.vin != vin});
    res.send('ok');
})
// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});