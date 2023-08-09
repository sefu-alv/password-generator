// Assignment code here
// passwordLength variable prompts the user and asks them for their password length
var passwordLength= Number(prompt("how many characters would you like your passowrd to be?","Enter a number between 8 and 128 " ));
//checks to see if password length fits the in criteria boundaries
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a valid number between 8 and 128.");
  passwordLength = Number(prompt("How many characters would you like your password to be? Enter a number between 8 and 128"));
}
// passwordCharacter variable promts the user and asks them for their desired password criteria 
var passwordCharacter = prompt("would your password to include lowercase, uppercase, numeric, and or special characters?");
// checks to see if password characters is part of the accepted criteria
while (!passwordCharacter.includes("lowercase") && !passwordCharacter.includes("uppercase") && !passwordCharacter.includes("numeric") && !passwordCharacter.includes("special")) {
  alert("Please provide valid password criteria (lowercase, uppercase, numeric, and/or special).");
  passwordCharacter = prompt("Would you like your password to include lowercase, uppercase, numeric, and/or special characters?");
}
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
