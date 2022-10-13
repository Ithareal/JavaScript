// https://scrimba.com/learn/learnjavascript/use-a-function-to-set-the-card-values-cof624b909c18f35f6c7caa2f

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let message = ""

let firstCard = 0
let secondCard = 0
let sum = 0

let nextCard = 0

let hasBlackjack = false
let isAlive = true

firstCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
secondCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
sum = firstCard + secondCard + nextCard

let cards = [firstCard, secondCard]

function startGame() {
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
    console.log("Drawing a new card from the deck!")
    nextCard = Math.floor(Math.random() * (11 - 2 + 1)) + 2
    sum += nextCard
    cards.push(nextCard)
    console.log(cards)
    renderGame()
}




