var passLength = document.getElementById("pass-length")
var securePass = document.getElementById("generatedPassword")
var submit = document.querySelector("#submit");

var specialChars = "!@#$%^&*()-+>";
var numericChars = "1234567890";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = lowerCaseChars.toUpperCase();
var allChars = "";

var elements = document.getElementById('form-container');

var boxes = elements.getElementsByTagName('input');

for (var i = 0; i < boxes.length; i++) {
    if ( boxes[i].type === 'checkbox' ) {
        boxes[i].onclick = updateallChars;
    }
}

function updateallChars(){
    if(this.checked){
        allChars += this.value
        console.log(allChars)
    }else{
        allChars -= this.value
        console.log(allChars)
    }
    
}

submit.addEventListener("click", function(event){
    event.preventDefault()
    var password = "";
    if((allChars != "") && (passLength.value >= 8 && passLength.value <= 128 )){
        securePass.textContent = ""
        for(var i = 0; i< passLength.value; i++){
            var j = Math.floor(Math.random() * allChars.length)
            password += allChars.charAt(j);
        }
        securePass.textContent = password;
    }else if(passLength.value < 8 || passLength.value > 128){
        alert("Preferred password length must be between 8 and 128 characters")
        return;
    }else{
        alert("Please check atleast one of the password generation criteria")
        return;
    }
})

