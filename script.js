// Enter the user input variables to being the code
var create;
var confirmNumber;
var confirmSpecial;
var confirmUpperCase;
var confirmLowerCase;

// name special charcters valuves
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// name number characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// create lower case values
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// name upper case characters values
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//console.log(upperCase)

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

var get = document.querySelector("#generate");


// create event listent to set critea to generate password aka gp
get.addEventListener("click", function () {
    gp = generatePassword();
    document.getElementById("password").placeholder = gp;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    create = parseInt(prompt("You need to have a password betwween 8 - 128 characters"));
    // If statemate to create password and see how many characters they like in their password.
    if (!create) {
        alert("Error: You need to submit a number from 8 - 128 to proceed");
    } else if (create < 8 || create > 128) {
        // create prompt to ask user how many characters they link in thie rpassword
        create = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Would you like numbers in your password?");
        confirmSpecial = confirm("How about some special characters?");
        confirmUppercase = confirm("Any BIG letters?");
        confirmLowercase = confirm("What about small letters?");
    };

    // console.log(confirmUppercase)

    // Else if for 4 negative options
    if (!confirmSpecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must select some characters to complete your password!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmSpecial && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = special.concat(number, lowerCase, upperCase);
    }
    // Else if for 3 positive options, 4 different else if statements here.
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = special.concat(number, upperCase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = special.concat(number, lowerCase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = special.concat(lowerCase, upperCase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowerCase, upperCase);
    }
    // Else if for 2 positive options, need to create 6 diffent options
    else if (confirmCharacter && confirmNumber) {
        choices = special.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = special.concat(lowerCase);

    } else if (confirmCharacter && confirmUppercase) {
        choices = special.concat(upperCase);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerCase.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerCase.concat(upperCase);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperCase);
    }
    // Else if for 1 positive option
    else if (confirmSpecial) {
        choices = special;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowerCase;
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

  
    // create random selection for variables to be picked
    for (var i = 0; i < create; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // have the array join passord to create a string
    var gp = password.join("");
    UserInput(gp);
    return gp;
}
// This puts the password value into the textbox
function UserInput(gp) {
    document.getElementById("password").textContent = gp;

}

// get the password to copy to clipboard after click function
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});
