var myInput = document.getElementById("password");

// Когда пользователь начинает вводить что-то в поле пароля
myInput.onkeyup = function() {
var numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
    myInput.classList.remove("invalid");
    myInput.classList.add("valid");
} else {
    myInput.classList.remove("valid");
    myInput.classList.add("invalid");
}}