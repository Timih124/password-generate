// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){ 
   var password.value = ""

   // set password length
  var passwordLength = prompt ("Choose a password from at least 8 chracters to no more than 128 charcters")
   passwordLength = parseInt (passwordLength)

  console.log (passwordLength)

  var checkLowercase
  var checkUppercase
  var checkSpecical
  var checkNumber
   if (passwordLength >=8 && passwordLength <=128){
       console.log ("Success")
      checkLowercase = confirm("Is this lowercase?")
      checkUppercase = confirm("Is this Uppercase")
      checkSpecical = confirm("Is this Special Character")
      checkNumber = confirm ("Is this a number?")

      console.log ("checkLowercase", checkLowercase)

      var userInput = {
        passwordLength: passwordLength,
        containsNums: containsNums,
        containsUpper: containsUpper,
        containsLower: containsLower,
        containsSpecial: containsSpecial
      };
      return userInput;
  
   }
   else {
     alert("invalid entry")
   }
  }

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomPssword (passwordLength)
