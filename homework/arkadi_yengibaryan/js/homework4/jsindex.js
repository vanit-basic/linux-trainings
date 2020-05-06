let cars = [
	{
		id: 0, name: "chevrolet chevelle malibu", color: "red", year: "1970-01-01",
		vin: '4USBT53544LT26841', story: "aaa bbb ccc"
	},
	{
		id: 1, name: "ford torino", color: "blue", year: "1970 - 01 - 01",
		vin: '4USBT53544LT26842', story: 'bbb aaa ccc'
	},
	{
		id: 2, name: "chevrolet impala", color: "green", year: "1970 - 01 - 01",
		vin: '4USBT53544LT26843', story: 'ccc bbb aaa'
	}
];

let form = document.getElementById('form');
let carsList = document.getElementById('carsList');
creatTable(carsList, cars);

form.addEventListener('submit', function () { submitHendler(event) });
function submitHendler(event) {
	event.preventDefault();
	validation();
}

function validation() {
	let name = document.getElementById('name').value;
	let color = document.getElementById('color').value;
	let year = document.getElementById('year').value;
	let vin = document.getElementById('vin').value;
	let story = document.getElementById('story').value;
	let info = document.getElementById('info');

	if (color.length < 2 || year.length < 2 || vin.length < 2 || story.length < 2 || name.length < 2) {
		return info.innerHTML = 'Fill in all the fields!';
	}

	if (searchCarVin(vin).length != 0) {
		return info.innerHTML = 'Such car is already registered';
	}
	addCar(name, color, year, vin, story);
}

function searchCarVin(vin) {
	return cars.filter(car => {
		return car.vin == vin;
	});
}

function addCar(name, color, year, vin, story) {
	let id = cars.length;
	let car = { id: id, name: name, color: color, year: year, vin: vin, story: story };
	cars.push(car);
	creatTable(carsList, cars);
}

carsList.addEventListener('click', createChangeInput);
function createChangeInput(event) {
	let properti = event.target;
	if (properti.tagName == 'TD') {
		let input = document.createElement('input');
		input.value = properti.innerHTML;
		properti.appendChild(input);
		input.addEventListener('keypress', changeCarPropertie);
	}
}

function changeCarPropertie(event) {
	let input = event.target;
	let td = input.closest('td');
	let properti = td.getAttribute('class');
	let tr = input.closest('tr').children;
	let id;

	for (let i = 0; i < tr.length; i++) {
		if (tr[i].getAttribute('class') == 'id') {
			id = tr[i].innerHTML - 1;
		}
	}
	if (event.keyCode == 13) {
		[td.innerHTML, cars[id][properti]] = [input.value, input.value];
	}
}


let search = document.getElementById('search');
search.addEventListener('keyup', searchCar);

function searchCar() {
	let searchtText = search.value;
	let properti = getSearchProperti();

	let searchResult = cars.filter(car => {
		return new RegExp(searchtText, 'i').test(car[properti]);
	});

	let searchResultTable = document.getElementById('searchCarsList');
	creatTable(searchResultTable, searchResult);
}

let properties = document.getElementById('properties');

function getSearchProperti() {
	for (let i = 0; i < properties.length; i++) {
		if (properties[i].selected) {
			return properties[i].value;
		}
	}
}

function creatTable(parent, cars) {
	parent.innerHTML = `<thead>
								<tr>
									<th></th>
									<th>Name</th>
									<th>Color</th>
									<th>Year</th>
									<th>Vin</th>
									<th>Story</th>
								</tr>
							</thead>`;
	for (let i = 0; i < cars.length; i++) {
		parent.innerHTML += `<tr>
								<td class="id">${i + 1}</td>
								<td class="name">${cars[i].name}</td>
								<td class="color">${cars[i].color}</td>
								<td class="year">${cars[i].year}</td>
								<td class="vin">${cars[i].vin}</td>
								<td class="story">${cars[i].story}</td>
							</tr>`;
	}
}