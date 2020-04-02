function questions() {
	let arr = [];
	arr[0] = prompt('Is JavaScript the same as Java?(yes/no)');
	arr[1] = prompt('How many parameters can be passed to a function?(one/many)');
	arr[2] = prompt('What type of variable?\r let a = \'aa\'');
	return arr;
}

function checkAnswers() {
	let ok = 0;
	let arr = questions();
	if (arr[0].toLowerCase() == 'no') {
		ok++;
	}
	if (arr[1].toLowerCase() == 'many') {
		ok++;
	}
	if (arr[2].toLowerCase() == 'string') {
		ok++;
	}
	return ok;
}

function show() {
	alert('Right answers: ' + checkAnswers());
}

show();