const arr = [1,2,3,4,5,6,7,8,9,0,"a", "b", "c", "d","@", "e", "f", "g", "@", "h", "i", "j", "@","k", "l", "m","@", "n", "o", "p", "@", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","@","#"]

let value = document.querySelector(".password");
const btn = document.getElementById("Password_generate");

//let password = ""
btn.addEventListener("click" , function() {
    let securePassword = "";
    let length = 8;
    for(let i=0 ; i<length ; i++){
        securePassword += arr[randomNumber()];
    }
    value.textContent = securePassword;
})

function randomNumber(){
    return Math.floor(Math.random()*arr.length);
};
