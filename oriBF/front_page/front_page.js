// https://orirando.com

let homeButtonEl = document.getElementById("home-el")
let currentGameEl = document.getElementById("currentgame-el")
let seedGeneratorEl = document.getElementById("seedgenerator-el")
let settingsEl = document.getElementById("settings-el")

currentGameEl.addEventListener("click", function() {
   location.href = "../current_game/current_game.html"
})

seedGeneratorEl.addEventListener("click", function(){
   location.href = "../seed_generator/seed_generator.html"
})