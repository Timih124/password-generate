
// Enter the user input variables to being the code
var passwordLength;
var confirmNumber;
var confirmCharacter;
var confirmUpperCase;
var confirmLowerCase;

// need to create password values

// name special charcters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// name number characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// name lower case characters
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// name upper case characters
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//console.log(upperCase)

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});


// need to begin the function
function generatePassword() {
  // asking for the users input of password length
  passwordLength = parseInt(prompt("Pick a password from 8 - 128 characters"));
  // if picking no variable
  if (!passwordLength) {
    alert("You need to input a number between 8 - 128");
// if pick a wrong variable
  } else if (passwordLength < 8 && passwordLength > 128){
    passwordLength = parseInt(prompt("It must be between 8 - 128 characters"));
  
} else {

  confirmLowerCase = confirm("Would you like lower case letters");
  confirmUpperCase = confirm("Would you like upper case letters");
  confirmCharacter = confirm("How about some special characters");
  confirmNumber = confirm ("Throw some numbers in there?");

};

// if all negative options are picked
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");

  // pick all four charactesr
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, lowercase, uppercase);
}


// if 3 are confirmed to be picked
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, uppercase);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowercase);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowercase, uppercase);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowercase, uppercase);
    }