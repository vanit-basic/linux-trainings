let router = require('express').Router();


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

router.get('/', (req, res) => {
    res.send(cars);
});

router.get('/:color', (req, res) => {
    
    const color = req.params.color;
    const car = cars.find((item) => item.color == color);
    res.send(cars);
});

router.get('/:model', (req, res) => {
    
    const model = req.params.model;
    const car = cars.find((item) => item.model == model);
    res.send(cars);
});

router.get('/:color/:model', (req, res) => {
    
    const color = req.params.color;
    const model = req.params.model;
    const car = cars.find((item) => item.color == color && item.model == model);
    res.send(cars);
});

router.get('/:vin', (req, res) => {
    const vin = req.params.vin;
    const car = cars.find((item) => item.vin == vin);
    res.send(car);
});
router.post('/', (req, res) => {
    cars.push(req.body);
    res.send(addCar());
});
router.delete('/:vin', (req, res) => {
    const vin = req.params.vin;
    cars = cars.filter((item) => { return item.vin != vin});
    res.send('The car is deleted');
})

module.exports = {
    carsRouter : router
}
