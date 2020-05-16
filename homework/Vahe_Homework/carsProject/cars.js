let getValue = (id,getValue) => {
	if (getValue === 1) {
		return document.getElementById(id).value.trim();
	} else {
		return document.getElementById(id);
	}
}
let getPostCar = async (api,newCar) => {
	if (newCar === 1){
		const apiRoot = 'http://localhost:8080';
		const request = `${apiRoot}${api}`;
		let response = await fetch(request);
		let dbCars = await response.json();
		return dbCars;
	} else {
		const apiRoot = 'http://localhost:8080';
		const request = `${apiRoot}${api}`;
		console.log(newCar);
		let response = await fetch(request, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(newCar)
		});
		let result = await response.json();
		return result;
	}
};
let addDbCars = async (api) => {
	getPostCar('/dbCars',1).then( dbCars => {
		let origin = getValue('origin');
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
	})
};
addDbCars('/dbCars');
let createNewModel = async () => {
		let origin = getValue('origin');
		let newVin = getValue('newVin',1);
		let newModel = getValue('newModel',1);
		let newYear = getValue('newYear',1);
		let newColor = getValue('newColor',1);
		let newIncident = getValue('newIncident',1);
		if(newVin !== '' || newModel !== '' ||  newYear !== '' ||  newColor !== '' ||  newIncident !== ''){
			let newLastCar = {
				'vin':newVin,
				'model':newModel,
				'year':newYear,
				'color':newColor,
				'incident':newIncident,
			}
		getPostCar('/dbCars/newModel', newLastCar).then( dbCars =>{
				let create  = 
					'<tr>'+
						'<td><input type="submit" value = "Change car" onclick = "newTab('+(dbCars.length-1)+')"></td>'+
						'<td>'+dbCars[dbCars.length-1]['vin']+'</td>'+
						'<td>'+dbCars[dbCars.length-1]['model']+'</td>'+
						'<td>'+dbCars[dbCars.length-1]['year']+'</td>'+
						'<td>'+dbCars[dbCars.length-1]['color']+'</td>'+
						'<td>'+dbCars[dbCars.length-1]['incident']+'</td>'+
					'</tr>';
				origin.innerHTML += create;
			});
		}else{alert('Pups');}	
}
function searchCarProperty(){
	getPostCar('/dbCars',1).then(dbCars => {
		let tableSearch = getValue('searchResult');
		let searchCarProperty = getValue("valueProperty",1).toLowerCase();
		let nameProperty = getValue("nameProperty",1).toLowerCase();
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
	})
}
let index = 0;
function newTab(i){
	changeInfo.style.display = 'block';
	index = i;
}
function changeCar(){
	let arrPropertys = [];
		arrPropertys[0] = getValue('Vin',1);
		arrPropertys[1] = getValue('Model',1);
		arrPropertys[2] = getValue('Year',1);
		arrPropertys[3] = getValue('Color',1);
		arrPropertys[4] = getValue('Incident',1);
	if(arrPropertys[0] === '' || arrPropertys[1] === '' ||  arrPropertys[2] === '' ||  arrPropertys[3] === '' ||  arrPropertys[4] === ''){
		alert('Pups');
		changeInfo.style.display = 'none';
		return;
	}
	let arrPost = [arrPropertys,index];
	console.log(arrPost);
	console.log(getPostCar("/dbCars/change", arrPost));
	getPostCar("/dbCars/change", arrPost).then((arrProperty) => {
		let table = document.body.firstElementChild;
		for(let i = 1;i <= arrProperty.length ;i++){
			table.rows[index+1].cells[i].innerHTML = arrProperty[i-1];
		}
		changeInfo.style.display = 'none';
	})
}