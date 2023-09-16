function changeColor() {
    let body = document.getElementById('general-container');
    setInterval(() => {
        let color = chooseColor();
        console.log(color);
        body.style.backgroundColor = '#'+color;
    },5000);
}

function chooseColor() {
    let value = Math.floor(Math.random() * 16777215).toString(16);
    return value;
}