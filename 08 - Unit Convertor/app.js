const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let btnEl = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")

btnEl.addEventListener("click", function(){
    let inputValue = inputEl.value
    lengthEl.textContent = `${inputValue} meter = ${inputValue * meterToFeet} feet`
    volumeEl.textContent = `${inputValue} liters = ${inputValue * literToGallon} Gallon`
    massEl.textContent = `${inputValue} kilograms = ${inputValue * kiloToPound} pounds`
    
})
    
