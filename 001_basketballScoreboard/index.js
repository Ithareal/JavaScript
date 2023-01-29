let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

let homeScore = 0
let guestScore = 0

function add1Home () {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2Home () {
   homeScore += 2
   homeScoreEl.textContent = homeScore 
}

function add3Home () {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function add1Guest () {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2Guest () {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function add3Guest () {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetGame() {
    homeScoreEl.textContent = 0
    homeScore = 0
    guestScoreEl.textContent = 0
    guestScore = 0
}