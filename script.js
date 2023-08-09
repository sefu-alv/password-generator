// Assignment code here
var passwordLength= Number(prompt("how many characters would you like your passowrd to be?","Enter a number between 8 and 128 " ));
var passowrdCharacter = prompt("would your password to include lowercase, uppercase, numeric, and or special characters?")
function generatePassword(){



}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
