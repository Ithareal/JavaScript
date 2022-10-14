const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function generatePasswords(){
    let newPassword1 = ""
    let newPassword2 = ""
    newPassword1 += randomToString()
    newPassword2 += randomToString()

    function randomToString(){
        let newPasswordFunction = "" 
        for (let i = 0; i < 16; i++) {
            newPasswordFunction += characters[randomNumber()]
            }
        return newPasswordFunction
    }
    function randomNumber() {
        return Math.floor(Math.random() * characters.length)
    }
    console.log(newPassword1)
    console.log(newPassword2)


    password1El.textContent = newPassword1
    password2El.textContent = newPassword2
}

function copyPassword1() {
    let copyPassword = password1El
    navigator.clipboard.writeText(copyPassword)
}
