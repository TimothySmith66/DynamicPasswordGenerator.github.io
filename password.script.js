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

var options;
//  uppercase 
var toUpper = function (t) {
    return t.toUpperCase();
};
//  uppercase conversion
capitalLetters = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    Ts = generatePassword();
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
        
        confirmNumber = confirm("must contain numbers!");
        confirmCharacter = confirm("must contain atleast one special characters!");
        confirmUppercase = confirm("must contain atleast one Uppercase letters!");
        confirmLowercase = confirm("must contain atleast one Lowercase letters!");
    }; 
    
    //  if the user doesn't use a prompt
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        options = alert("password won't generate without criteria!");

    }
    // the user uses all 4 prompts
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        options = character.concat(numbers, letters, capitalLetters);
    }
    // the user uses 3 prompts
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        options = character.concat(numbers, capitalLetters);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        options = character.concat(numbers, letters);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        options = character.concat(letters, capitalLetters);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        options = numbers.concat(letters, capitalLetters);
    }
    // user chooses 2 prompts
    else if (confirmCharacter && confirmNumber) {
        options = character.concat(numbers);

    } else if (confirmCharacter && confirmLowercase) {
        options = character.concat(letters);

    } else if (confirmCharacter && confirmUppercase) {
        options = character.concat(capitalLetters);
    }
    else if (confirmLowercase && confirmNumber) {
        options = letters.concat(numbers);

    } else if (confirmLowercase && confirmUppercase) {
        options = letters.concat(capitalLetters);

    } else if (confirmNumber && confirmUppercase) {
        options = numbers.concat(capitalLetters);
    }
    // 
    else if (confirmCharacter) {
        options = character;
    }
    else if (confirmNumber) {
        options = numbers;
    }
    else if (confirmLowercase) {
        options = letters;
    }
    // 
    else if (confirmUppercase) {
        options = space.concat(capitalLetters);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickoptions = options[Math.floor(Math.random() * options.length)];
        password.push(pickoptions);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var Ts = password.join("");
    UserInput(Ts);
    return Ts;
}

function UserInput(Ts) {
    document.getElementById("password").textContent = Ts;

}
l

   
   