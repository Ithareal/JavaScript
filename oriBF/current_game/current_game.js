const homeButtonEl = document.getElementById("home-el")
const currentGameEl = document.getElementById("currentgame-el")
const seedGeneratorEl = document.getElementById("seedgenerator-el")
const settingsEl = document.getElementById("settings-el")

homeButtonEl.addEventListener("click", function() {
   location.href = "../front_page/front_page.html"
})

seedGeneratorEl.addEventListener("click", function(){
   location.href = "../seed_generator/seed_generator.html"
})