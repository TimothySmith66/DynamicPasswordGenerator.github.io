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
space = [];

var choices;
//  uppercase 
var toUpper = function (t) {
    return t.toUpperCase();
};
//  uppercase conversion
capitalLetters = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = Ts;
});

//  function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement  
    if (!enter) {
        alert("must input value");
    } else if (enter < 8 || enter > 128) {
        // user input
        // beginning input prompts
        enter = parseInt(prompt("How long do you want your password? must be 8 to 128 characters long."));

    } else {
        
        confirmNumber = confirm("Will this contain numbers!");
        confirmCharacter = confirm("must contain atleast one special characters!");
        confirmUppercase = confirm("must contain atleast one Uppercase letters!");
        confirmLowercase = confirm("must contain atleast one Lowercase letters!");
    }; 

   
   