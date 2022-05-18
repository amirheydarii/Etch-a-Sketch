// DOM, select All element

let containerGrid = document.querySelector(".countainer-ganerate");
let btnBlack = document.querySelector(".btn-black");
let btnRandom = document.querySelector(".btn-random");
let btnClear = document.querySelector(".btn-clear");
let colorPicker = document.querySelector(".color-picker");
let containerSlider = document.querySelector(".slider-container");
let slider = document.querySelector(".slider");
let displayValue = document.querySelector(".display-value");





slider.addEventListener('input' , () => getSlider(slider , displayValue))
slider.onchange = (e) => updateSize(e.target.value)
window.onload = () => squareGnenerator(number)
// logic

let number = 16
function squareGnenerator(slider) {
    containerGrid.style.gridTemplateColumns = `repeat(${slider}, 1fr)`
    containerGrid.style.gridTemplateRows = `repeat(${slider} , 1fr)`

    for (let i = 1; i <= slider * slider; i++) {
        let gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')

        // event listener
        gridElement.addEventListener('mouseover', () => defultColor(gridElement))
        btnClear.addEventListener('click',() => clear(gridElement))
        btnRandom.addEventListener('click', () => randomColor(gridElement))
        btnBlack.addEventListener('click', () => blackColor(gridElement))
        colorPicker.addEventListener('change', () => fovariteColor(gridElement , colorPicker))
        // event listener
        gridElement.style.border = "1px solid #e8e8e8 "
        containerGrid.appendChild(gridElement)
    }
} 

// button and color

function defultColor(gridElement) {
    gridElement.style.backgroundColor = '#000000'
    gridElement.style.border = "none"
}

function clear(gridElement) {
    gridElement.style.backgroundColor = '#fefefe'
    gridElement.style.border = "1px solid #e8e8e8 "
}

function randomColor(gridElement) {
    let randomBetween = (min , max) => 
    min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255)
    let g = randomBetween(0, 255)
    let b = randomBetween(0, 255)
    gridElement.addEventListener('mouseover', () => 
    gridElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`) 
}

function blackColor(gridElement) {
    gridElement.addEventListener('mouseover', () => defultColor(gridElement))
}

function fovariteColor(gridElement , colorPicker) {
    gridElement.addEventListener('mouseover', () => 
    gridElement.style.backgroundColor = `${colorPicker.value}`) 
}

// slider

function getSlider (slider) {
    displayValue.oninput = this.value;
    displayValue.textContent = `${slider.value} × ${slider.value}`
}


function updateSize(value) {
    removeContent()
    squareGnenerator(value)
}


function removeContent() {
    containerGrid.innerHTML = ''
}

