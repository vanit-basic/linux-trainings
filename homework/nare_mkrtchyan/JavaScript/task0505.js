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
		"Incidents": "flood"
	},
	{
		"Name": "Ferrari 458 Italia Speciale",
		"Color": "red",
		"Year": "2013",
		"VIN": "4asdf7lkjh",
		"Incidents": "no"
	},
	{
		"Name": "Toyota Prius",
		"Color": "white",
		"Year": "2001",
		"VIN": "4987lkjh",
		"Incidents": "yes"
	},
	{
		"Name": "Renault Avantime",
		"Color": "blue",
		"Year": "2001",
		"VIN": "96527lkjh",
		"Incidents": "no"
	},
	{
		"Name": "Porsche Carrera GT",
		"Color": "silver",
		"Year": "2003",
		"VIN": "klgd12354kjh",
		"Incidents": "yes"
	},
	{
		"Name": "Ferrari 458 Italia",
		"Color": "red",
		"Year": "2009",
		"VIN": "lkjd2357uyf",
		"Incidents": "crash"
	},
	{
		"Name": "Jaguar F-Pace",
		"Color": "white",
		"Year": "2015",
		"VIN": "4a6n7d312ymu632rr48ay",
		"Incidents": "no"
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
let colorSearch = (info,property) => {
	let carProperty  =info.forEach(car => {
		for(let [key,value] of Object.entries(car)){if(value===property){for(let [key,value] of Object.entries(car))
			document.getElementById("s").innerHTML += `${key}: ${value}<br>`;
		
	document.getElementById("s").innerHTML += `<hr>`}}})}
document.getElementById("btn").onclick = function() {search(info)};
let search = (info) =>{
const property = document.getElementById("search").value.trim();
colorSearch(info,property);
}
