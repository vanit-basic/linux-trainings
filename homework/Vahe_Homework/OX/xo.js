	let table = document.getElementById("myTable");
	function checkMove() {
		let flagX;
		let flagO;
		let count = table.getElementsByTagName('tr').length;
		for(let i = 0; i < count; i++){
			let winRowX = true,
			    winColumnX = true,
			    winLeftTopX = true,
			    winLeftBottomX = true;
      
			for(let k = 0; k < count; k++){
				if(table.rows[i].cells[k].innerHTML !== 'X') winRowX = false;
				if(table.rows[k].cells[i].innerHTML !== 'X') winColumnX = false;
				if(table.rows[k].cells[k].innerHTML !== 'X') winLeftTopX = false;
				if(table.rows[count-1-k].cells[k].innerHTML !== 'X') winLeftBottomX = false;
			}
      
			if(winRowX || winColumnX || winLeftTopX || winLeftBottomX){
				flagX = true;
				break;
			}
		}  
		for(let i = 0; i < count; i++){
			let winRowO = true,
			    winColumnO = true,
			    winLeftTopO = true,
			    winLeftBottomO = true;
      
			for(let k = 0; k < count; k++){
				if(table.rows[i].cells[k].innerHTML !== 'O') winRowO = false;
				if(table.rows[k].cells[i].innerHTML !== 'O') winColumnO = false;
				if(table.rows[k].cells[k].innerHTML !== 'O') winLeftTopO = false;
				if(table.rows[count-1-k].cells[k].innerHTML !== 'O') winLeftBottomO = false;
			}
      
			if(winRowO || winColumnO || winLeftTopO || winLeftBottomO){
				flagO = true;
				break;
			}
		} 
		if (flagX) {
			alert(" X Victory");
			location.reload();
		}else if (flagO){ 
			alert(" O Victory")
			location.reload();
		}
	}
	let setTdListeners = function(){
		let testMove = 'x';
		let tds = document.getElementsByTagName('td');
		for(let i = 0; i < tds.length; i++){
			tds[i].addEventListener('click', function(){
			switch(testMove){
				case "x":
					if(event.target.innerHTML === ""){
						event.target.innerHTML = "X";
						testMove = "o";
					}
				break;
				case "o":
					if(event.target.innerHTML === ""){
						event.target.innerHTML = "O";
						testMove = "x";
					}
			}
			checkMove();
			})
		};
	};
	function addTable(){
		let count = document.getElementById('count').value;
		table.innerHTML = '';
		for(let i = 0; i < count; i++){
			let tr = document.createElement('tr');
			for(let k = 0; k < count; k++){
				let td = document.createElement('td');
				tr.appendChild(td);        
			}
		table.appendChild(tr);
		}
		console.log(table);
		setTdListeners();
	}