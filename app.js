// DOM, select All element

let containerGrid = document.querySelector(".countainer-ganerate");
let btnBlack = document.querySelector(".btn-black");
let btnRandom = document.querySelector(".btn-random");
let btnClear = document.querySelector(".btn-clear");
let colorPicker = document.querySelector(".color-picker");
let containerSlider = document.querySelector(".slider-container");
let slider = document.querySelector(".slider");
let displayValue = document.querySelector(".display-value");
let squares = document.querySelectorAll('.grid-element')





slider.addEventListener('input' , () => getSlider(slider , displayValue))
slider.onchange = (e) => updateSize(e.target.value)
window.onload = () => squareGnenerator(number)
// logic

let number = 16

function squareGnenerator(slider) {
    containerGrid.style.gridTemplateColumns = `repeat(${slider}, 1fr)`
    containerGrid.style.gridTemplateRows = `repeat(${slider} , 1fr)`

    for (let i = 1; i <= slider * slider; i++) {
        let square = document.createElement('div')
        square.classList.add('grid-element')
        square.style.border = "1px solid #e8e8e8 "
        containerGrid.appendChild(square)
    }
    return containerGrid
}


function getSlider (slider) {
    displayValue.oninput = this.value;
    displayValue.textContent = `${slider.value} × ${slider.value}`
}

function updateSize(value) {
    containerGrid.innerHTML = ''
    squareGnenerator(value)
}

squares.style.backgroundColor = "#1b2d4a"