let table = document.getElementById("myTable");
let tbody = table.createTBody();
let tr;
let td;
function createTable() {
   let nOfRow = prompt("Input number of rows");
	let nOfCol = prompt("Input number of columns");
	for(let i = 0; i < nOfRow; i++){
		tr = tbody.insertRow();
		for(let j = 0 ; j < nOfCol; j++){
			td = tr.insertCell().innerText = `Row-${i} Column-${j}`;
		}
	}
}
