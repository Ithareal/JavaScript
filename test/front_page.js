// https://orirando.com

let homeButtonEl = document.getElementById("home-el")
let currentGameEl = document.getElementById("currentgame-el")
let seedGeneratorEl = document.getElementById("seedgenerator-el")
let settingsEl = document.getElementById("settings-el")

currentGameEl.addEventListener("click", test)

function test() {
   location.href = "current_game.html"
   console.log("hi")
}