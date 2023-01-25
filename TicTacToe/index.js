const slot1 = document.getElementById("slot1")
const slot2 = document.getElementById("slot2")
const slot3 = document.getElementById("slot3")
const slot4 = document.getElementById("slot4")
const slot5 = document.getElementById("slot5")
const slot6 = document.getElementById("slot6")
const slot7 = document.getElementById("slot7")
const slot8 = document.getElementById("slot8")
const slot9 = document.getElementById("slot9")
const slots = [slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9]

let player = true
let symbol = ""

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
        player =! player
    }
    
}
function fillSlot(fillSlot) {
    fillSlot.innerText = symbol
    fillSlot.classList.toggle("clicked")
    console.log(fillSlot.type)
}
