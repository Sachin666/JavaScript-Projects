let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")

function genPassword(){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let pass1 = ""
    let pass2 = ""
    for(let i = 0; i < 15; i++){
        let randomNumber = Math.floor(Math.random() * characters.length)
        pass1 += characters.substring(randomNumber, randomNumber + 1);
        
    } for (let j = 0; j < 15; j++){
        let randomNumber1 = Math.floor(Math.random() * characters.length)
        pass2 += characters.substring(randomNumber1, randomNumber1 + 1);
    }
   document.getElementById("password1").value = pass1
   document.getElementById("password2").value = pass2
}

let clearbtn = document.getElementById("clear1");

clearbtn.addEventListener("click", function(){
  pass1.value = " "
  pass2.value = " "
})
