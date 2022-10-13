// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards



let numberEl = document.getElementById("number-el")
let sum = 0

function randomNumber() {

    let firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
    let secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
    console.log(firstCard)
    console.log(secondCard)
    sum = firstCard + secondCard + "!"
    numberEl.textContent = sum
    console.log(sum)
}




