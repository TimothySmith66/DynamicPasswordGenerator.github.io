// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "@", "#", "$", "%", "^", "&", "*", "~", ];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

prompt("How long do you want your password to be?")


prompt(" Password needs atleast one special character" )
prompt("password needs atleast one number")



alert("Your password is " +         + "!")