function addTableAndFormContainers(){
    let contentContainer = document.getElementById('content-container');
    let formContainer = createFormContainer();
    let tableContainer = createTableContainer();

    //Se elimina el contenido previo
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }

    contentContainer.appendChild(formContainer);
    contentContainer.appendChild(tableContainer);
}


function createFormContainer() {
    let formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    let form = createForm();

    //Se agregan el form al contenedor
    formContainer.appendChild(form);
    return formContainer;
}

function createTableContainer() {
    let tableContainer = document.createElement('div');
    tableContainer.className = 'table-container';
    let table = createTable();

    tableContainer.appendChild(table);
    return tableContainer;
}

function createForm() {
    let form = document.createElement('form');
    let nameInput = createTextInput('name', 'Nombre');
    let lastnameInput = createTextInput('lastname', 'Apellido');
    let carneInput = createTextInput('carne', 'Carné');
    let addButton = createAddButtonInput();

    form.appendChild(nameInput);
    form.appendChild(lastnameInput);
    form.appendChild(carneInput);
    form.appendChild(addButton);

    return form;
}

function createAddButtonInput() {
    let addButtonInput = document.createElement('input');
    addButtonInput.type = 'button';
    addButtonInput.id = 'add-button';
    addButtonInput.onclick = () => {addStudent()};
    addButtonInput.value = 'Guardar';
    return addButtonInput;
}

function createTextInput(id, placeholder) {
    let input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.placeholder = placeholder;
    return input;
}

function createTable() {
    let table = document.createElement('table');
    table.id = 'table'
    let row = createRow();

    let nameTh = createTh('Nombre');
    let lastnameTh = createTh('Apellido');
    let carneTh = createTh('Carné');

    row.appendChild(nameTh);
    row.appendChild(lastnameTh);
    row.appendChild(carneTh);

    table.appendChild(row);

    return table;
}

function createTh(text) {
    let th = document.createElement('th');
    th.textContent = text;
    return th;
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