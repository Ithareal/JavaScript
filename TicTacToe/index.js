const slot1 = document.getElementById("slot1")
const slot2 = document.getElementById("slot2")
const slot3 = document.getElementById("slot3")
const slot4 = document.getElementById("slot4")
const slot5 = document.getElementById("slot5")
const slot6 = document.getElementById("slot6")
const slot7 = document.getElementById("slot7")
const slot8 = document.getElementById("slot8")
const slot9 = document.getElementById("slot9")

let player = true
let symbol = ""

console.log(player)

function renderGame(slot){
    if (player == true){
            symbol = "X"
        } else {
            symbol = "O"
        }
    console.log(slot)
    fillSlot(slot)
    player = !player
}

function fillSlot(fillSlot){
    fillSlot.innerText = symbol
    fillSlot.innerhtml += "full"
}

// symbol = player ? 'X' : 'O'