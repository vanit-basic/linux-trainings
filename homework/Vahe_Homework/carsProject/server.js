const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
	res.header("Access-Control-Request-Method", "GET", "POST" , "DELETE" );
	res.header("Access-Control-Request-Headers" ,"Content-Type", "application/json", "*");
    res.header("Access-Control-Expose-Headers", "*");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "GET,DELETE,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
   next();
});
let dbCars =[
	{"vin":"100","model":"toyota","year":"1990","color":"black","incident":"recessed car"},
	{"vin":"101","model":"mercedes","year":"1991","color":"silver","incident":"not incidents"},
	{"vin":"102","model":"bmw","year":"1992","color":"white","incident":"broken car"},
	{"vin":"103","model":"tesla","year":"2010","color":"green","incident":"not incidents"},
	{"vin":"104","model":"audi","year":"1992","color":"red","incident":"broken car"},
];
app.get('/dbCars',(req,res) =>{
	console.log('aa');
	res.send(dbCars);
});
function deepEqual (obj){
	for(let i = 0; i < dbCars.length; i++){
		console.log(JSON.stringify(dbCars[i]));
		console.log(obj);
		if(JSON.stringify(dbCars[i]) === JSON.stringify(obj)){
			return 0;
		}
	}
	return obj;
}
app.post('/dbCars/change',(req,res) => {
	console.log(req.body);
	const changeCar = req.body;
	const index = changeCar.pop();
	console.log(index);
	console.log(changeCar);
	let newChangeCar = [];
	for(let item in dbCars[index]){
		let i = 0;
		i++;
		dbCars[index][item] = changeCar[0][i];
	}
	newChangeCar = changeCar[0];
	newChangeCar = JSON.stringify(newChangeCar);
	res.send(newChangeCar);
});
app.post('/dbCars/newModel',(req,res) => {
	const newCar = deepEqual(req.body);
	console.log(req.body);
	console.log(newCar);	
	if(newCar === 0){
		res.json(dbCars);
	}else{
		dbCars.push(req.body);
		res.send(dbCars);
	}
});
const port = 8080;
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});