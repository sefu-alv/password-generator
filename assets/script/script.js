// Assignment code here
// passwordLength variable prompts the user and asks them for their password length
var passwordLength= Number(prompt("how many characters would you like your passowrd to be?","Enter a number between 8 and 128 " ));
//checks to see if password length fits the in criteria boundaries
while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a valid number between 8 and 128.");
  passwordLength = Number(prompt("How many characters would you like your password to be? Enter a number between 8 and 128"));
}
// password nums asks the user if they like their password to contain numbers
var passwordNums = prompt("Would you like your password to contain numbers?");
// while loop checks to see if provided answers fall under the password criteria
while (!passwordNums.includes("yes") && !passwordNums.includes("no")){
  passwordNums = prompt("Would you like your password to contain numbers?" , "yes or no");
}
// password case asks the user if they would like their password to contain uppercase, lowercase or both
var passwordCase = prompt("Would you like your password to contain uppercase, lowercase, or both");
// while loop checks to see if provided answers fall under the password criteria
while (!passwordCase.includes("uppercase") && !passwordCase.includes("lowercase" && !passwordCase.includes("both"))){
  passwordCase = prompt("Would you like your password to contain uppercase, lowercase, or both?");
}
// passwordCharacter variable asks the user if they would like their password to contain special chars
var passwordCharacter = prompt("would your password to include special characters?");
// checks to see if password characters is part of the accepted criteria
while (!passwordCharacter.includes("yes") && !passwordCharacter.includes("no")){
  passwordCharacter = prompt("Would you like your password to special characters?" , "yes or no");
}
// generatePassword 
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
