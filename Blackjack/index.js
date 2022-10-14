// https://scrimba.com/learn/learnjavascript/objects-and-functions-c3wWM8fb

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let message = ""
let player = {
    name: "Kim",
    chips: 200
}

let cards = []
let sum = 0

let hasBlackjack = false
let isAlive = false

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}
function renderGame() {

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        console.log(cards[i])
    }
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want a new card?"
    }else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let nextCard = getRandomCard()
        sum += nextCard
        cards.push(nextCard)
        renderGame()
    }
}




