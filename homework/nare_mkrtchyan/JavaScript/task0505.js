const cars = [];
function regcar(){
	const name=document.getElementById("nameInput").value.trim();
	const color=document.getElementById("colorInput").value.trim();
	const year=document.getElementById("yearInput").value.trim();
	const VIN=document.getElementById("VINInput").value.trim();
	const accident=document.getElementById("accidentInput").value.trim();
	if (name && color&& year && VIN && accident) {
        	addCar(name, color, year, VIN, accident);
        } else {
        	alert( 'Please enter all fields');
                return;
        }}

function addCar(n,c,d,v,i) {
	const car = {
		"Name": n,
		"Color": c,
		"Year": d,
		"VIN": v,
		"Accidents": i
	};
	info.push(car);
for(let [key,value] of Object.entries(info[info.length-1])){
document.getElementById("info").innerHTML += `${key}: ${value}<br>`;
}
document.getElementById("info").innerHTML += `<hr>`;

	console.log(info);
}
let info = [
	{
		"Name": "Ford Ranger",
		"Color": "black",
		"Year": "1982",
		"VIN": "0125564ig",
		"Incidents": "No"
	},
	{
		"Name": "VW Pickup",
		"Color": "grey",
		"Year": "1982",
		"VIN": "69pijg4562",
		"Incidents": "crash"
	},
	{
		"Name": "Mini Cooper",
		"Color": "Yello",
		"Year": "2019",
		"VIN": "fgh79552ghj",
		"Incidents": "Head-on collision"
	},
	{
		"Name": "Mazda 3",
		"Color": "silver",
		"Year": "2004",
		"VIN": "2354lkjg",
		"Incidents": "fllod"
	},
	{
		"Name": "Toyota Prius",
		"Color": "white",
		"Year": "2001",
		"VIN": "4987lkjh",
		"Incidents": "yes"
	},
]
for(let i=0; i<info.length;i++){
for(let [key,value] of Object.entries(info[i])){
document.getElementById("info").innerHTML += `${key}: ${value}<br>`;
}
document.getElementById("info").innerHTML += `<hr>`;
}
function submitHandler(event) {
	event.preventDefault();
	regcar();
}
/*let colorSearch = (info,color) => {
	let carColor = info.forEach(car => {if(car.Color===color) document.getElementById("s").innerHTML = car})
}*/
/*let nameSearch = (info,name) => {
	let carName = info.forEach(car => {if(car.Name===name) document.getElementById("s").innerHTML = car})
}*/
/*let accidentSearch = (info,accident) => {
	let carAccident = info.forEach(car => {if(car.Accident===color) document.getElementById("s").innerHTML = car})
}*/
/*let yearSearch = (info,year) => {
	let carYear = info.forEach(car => {if(car.Year===year) document.getElementById("s").innerHTML = year})
}*/
