let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("savelead-el")
let leadsEl = document.getElementById("myleads-el")

let myleads = []

buttonEl.addEventListener("click", saveLead)

function saveLead() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    console.log(myleads)
    renderLeads()
}

function renderLeads() {
    leadsEl.innerHTML = ""
    for (i = 0; i < myleads.length; i++) {
        leadsEl.innerHTML += `<li>${myleads[i]}</li>`
    }
}