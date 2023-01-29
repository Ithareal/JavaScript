
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")
const convertInput = document.getElementById("convert-input")

const meterFeet = 3.281
const literGallon = 0.264
const kilogramPound = 2.204

convertBtn.addEventListener("click", function() {
    let input = convertInput.value

    let feet = input*meterFeet
    let meters = input/meterFeet 
    lengthEl.innerText = `${input} meters = ${(feet.toFixed(3))} feet | ${input} feet = ${meters.toFixed(3)} meters`

    let gallons = input*literGallon
    let liters = input/literGallon
    volumeEl.innerText = `${input} liters = ${gallons.toFixed(3)} gallons | ${input} gallons = ${liters.toFixed(3)} liters`

    let pound = input*kilogramPound
    let kilogram = input/kilogramPound
    massEl.innerText = `${input} kilograms = ${pound.toFixed(3)} pounds | ${input} pounds = ${kilogram.toFixed(3)} kilograms`
})