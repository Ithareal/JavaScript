const slot1 = document.getElementById("slot1")
const slot2 = document.getElementById("slot2")
const slot3 = document.getElementById("slot3")
const slot4 = document.getElementById("slot4")
const slot5 = document.getElementById("slot5")
const slot6 = document.getElementById("slot6")
const slot7 = document.getElementById("slot7")
const slot8 = document.getElementById("slot8")
const slot9 = document.getElementById("slot9")

// symbol = player ? 'X' : 'O'

const btnReset = document.getElementById("btn1")
const slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9]

const player1Slots = {
    slot : [],
}
const player2Slots = {
    slot: [],
}

let player = true
let symbol = ""
const player1 = "Player"
const player2 = "Computer" 
let currentPlayer = ""

function resetGame() {
    for (i = 0; i < 9 ; i++) {
        slots[i].innerHTML = "-"
    }
}

function renderGame(slot) {
    if (player == true){
        symbol = "X"
    } else {
        symbol = "O"
    }
    console.log(slot)
    if (slot.classList != "clicked") {
        fillSlot(slot)
        if (player == true) {
            currentPlayer = player1Slots
        } else {
            currentPlayer = player2Slots
        }
        console.log(currentPlayer)
        currentPlayer.slot.push(slot.id)
        player =! player
        checkWin()

}

function checkWin() {
    if (
    //horizontal check
    currentPlayer.slot.includes("slot1") &&
    currentPlayer.slot.includes("slot2") &&
    currentPlayer.slot.includes("slot3") ||

    currentPlayer.slot.includes("slot4") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot6") ||

    currentPlayer.slot.includes("slot7") &&
    currentPlayer.slot.includes("slot8") &&
    currentPlayer.slot.includes("slot9") ||

    //vertical check
    currentPlayer.slot.includes("slot1") &&
    currentPlayer.slot.includes("slot4") &&
    currentPlayer.slot.includes("slot7") ||

    currentPlayer.slot.includes("slot2") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot8") ||

    currentPlayer.slot.includes("slot3") &&
    currentPlayer.slot.includes("slot6") &&
    currentPlayer.slot.includes("slot9") ||

    //diagonal check
    currentPlayer.slot.includes("slot1") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot9") ||

    currentPlayer.slot.includes("slot3") &&
    currentPlayer.slot.includes("slot5") &&
    currentPlayer.slot.includes("slot7")
    ) 
    {
        console.log(player1Slots.slot)
        btnReset.textContent = "YOU WIN"
        if (confirm("NEW GAME?")) {
    
        }
    }
}

}
function fillSlot(fillSlot) {
    fillSlot.innerText = symbol
    fillSlot.classList.toggle("clicked")
}
