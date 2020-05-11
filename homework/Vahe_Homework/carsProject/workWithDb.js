let dbCars = [	
	{
		'vin':'100',
		'model':'toyota',
		'year':'1990',
		'color':'black',
		'incident':'recessed car'
   },
   {
		'vin':'101',
		'model':'mercedes',
		'year':'1991',
		'color':'silver',
		'incident':'not incidents'
   },
   {
		'vin':'102',
		'model':'bmw',
		'year':'1992',
		'color':'white',
		'incident':'broken car'
   },
   {
		'vin':'103',
		'model':'tesla',
		'year':'2010',
		'color':'green',
		'incident':'not incidents'
   },
   {
		'vin':'104',
		'model':'audi',
		'year':'1992',
		'color':'red',
		'incident':'broken car'
   }
];
addDbCars(dbCars);
function addDbCars(dbCars) {
	let origin = document.getElementById('origin');
	origin.innerHTML += 
			'<tr>'+
				'<th>Change.</th>'+
				'<th>Machine model VIN(vin).</th>'+
				'<th>Machine model(model).</th>'+
				'<th>Machine model year(year).</th>'+
				'<th>Machine model color(color).</th>'+
				'<th>Incidents whit this machine(incident).</th>'+
			'</tr>';
	for(let i = 0;i < dbCars.length;i++){
		let setDb = 
			'<tr>'+
				'<td><input type="submit" value = "Change car" onclick = "newTab(' + i + ')"></td>'+
				'<td>'+dbCars[i]['vin']+'</td>'+
				'<td>'+dbCars[i]['model']+'</td>'+
				'<td>'+dbCars[i]['year']+'</td>'+
				'<td>'+dbCars[i]['color']+'</td>'+
				'<td>'+dbCars[i]['incident']+'</td>'+
			'</tr>';
		origin.innerHTML += setDb;
	}
}
function createNewModel(){
	let origin = document.getElementById('origin');
	let newVin = document.getElementById('newVin').value.trim();
	let newModel = document.getElementById('newModel').value.trim();
	let newYear = document.getElementById('newYear').value.trim();
	let newColor = document.getElementById('newColor').value.trim();
	let newIncident = document.getElementById('newIncident').value.trim();
	if(newVin !== '' || newModel !== '' ||  newYear !== '' ||  newColor !== '' ||  newIncident !== ''){
		let newLastCar = {
			'vin':newVin,
			'model':newModel,
			'year':newYear,
			'color':newColor,
			'incident':newIncident,
		}
		dbCars.push(newLastCar);
		console.log(dbCars.length);
		let lastCar = dbCars.length - 1;
		let create  = 
			'<tr>'+
				'<td><input type="submit" value = "Change car" onclick = "newTab('+lastCar+')"></td>'+
				'<td>'+dbCars[dbCars.length-1]['vin']+'</td>'+
				'<td>'+dbCars[dbCars.length-1]['model']+'</td>'+
				'<td>'+dbCars[dbCars.length-1]['year']+'</td>'+
				'<td>'+dbCars[dbCars.length-1]['color']+'</td>'+
				'<td>'+dbCars[dbCars.length-1]['incident']+'</td>'+
			'</tr>';
		origin.innerHTML += create;
	}else{alert('Pups');}
}

let index = 0;
console.log(index);
let changeInfo = document.getElementById("changeInfo");
function newTab(i){
	changeInfo.style.display = 'block';
	index = i;
}
function changeCar(){
	let arrProperty = [];
		arrProperty[0] = document.getElementById('Vin').value.trim();
		arrProperty[1] = document.getElementById('Model').value.trim();
		arrProperty[2] = document.getElementById('Year').value.trim();
		arrProperty[3] = document.getElementById('Color').value.trim();
		arrProperty[4] = document.getElementById('Incident').value.trim();
		if(arrProperty[0] === '' || arrProperty[1] === '' ||  arrProperty[2] === '' ||  arrProperty[3] === '' ||  arrProperty[4] === ''){
			alert('Pups');
			return;
		}
			dbCars[index]['vin'] = arrProperty[0];
			dbCars[index]['model'] =arrProperty[1];
			dbCars[index]['year'] = arrProperty[2];
			dbCars[index]['color'] = arrProperty[3];
			dbCars[index]['incident'] = arrProperty[4];
			let table = document.body.firstElementChild;
			for(let i = 1;i <= arrProperty.length ;i++){
				table.rows[index+1].cells[i].innerHTML = arrProperty[i-1];
			}
			changeInfo.style.display = 'none';
}
function searchCarProperty(){
	let tableSearch = document.getElementById('searchResult');
	let searchCarProperty = document.getElementById("valueProperty").value.toLowerCase();
	let nameProperty = document.getElementById("nameProperty").value.toLowerCase();
	let namePropertyValue = nameProperty.value;
	if(searchCarProperty.value != ""){
		for(let i = 0; i < dbCars.length; i++){
			let x = dbCars[i][nameProperty];
			switch(x.toLowerCase()){
				case searchCarProperty:
					let searchResult = 
						'<tr>'+
							'<td><input type="submit" value = "Change car" onclick = "newTab('+i+')"></td>'+
							'<td>'+dbCars[i]['vin']+'</td>'+
							'<td>'+dbCars[i]['model']+'</td>'+
							'<td>'+dbCars[i]['year']+'</td>'+
							'<td>'+dbCars[i]['color']+'</td>'+
							'<td>'+dbCars[i]['incident']+'</td>'+
						'</tr>';
					tableSearch.innerHTML+=searchResult;
				default:
				continue;
			}
		}
	}
}