function addTable() {
    
}

function addStudent() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let carne = document.getElementById('carne').value;
    let table = document.getElementById('table');
    let row = createRow();
    let columnForName = createColumn();
    let columnForLastname = createColumn();
    let columnForCarne = createColumn();

    //Se agregan los datos a las columnas
    columnForName.textContent = name;
    columnForLastname.textContent = lastname
    columnForCarne.textContent = carne;
    
    row.appendChild(columnForName);
    row.appendChild(columnForLastname);
    row.appendChild(columnForCarne);

    table.appendChild(row);
}

function createRow() {
    let row = document.createElement('tr');
    return row;
}

function createColumn(params) {
    let column = document.createElement('td');
    return column;
}