// password criteria will hold all the values needed
var passwordCriteria = {
  passwordLength: null,
  passwordCase: null,
  passwordCharacter: null,
  passwordNums: null,
};
// passwordLength variable prompts the user and asks them for their password length
passwordCriteria.passwordLength = Number(
  prompt(
    "how many characters would you like your passowrd to be?",
    "Enter a number between 8 and 128 "
  )
);
//checks to see if password length fits the in criteria boundaries
while (
  isNaN(passwordCriteria.passwordLength) ||
  passwordCriteria.passwordLength < 8 ||
  passwordCriteria.passwordLength > 128
) {
  alert("Please enter a valid number between 8 and 128.");
  passwordCriteria.passwordLength = Number(
    prompt(
      "How many characters would you like your password to be? Enter a number between 8 and 128"
    )
  );
}
// password nums asks the user if they like their password to contain numbers
passwordCriteria.passwordNums = prompt(
  "Would you like your password to contain numbers?"
);
// while loop checks to see if provided answers fall under the password criteria
while (
  !passwordCriteria.passwordNums.includes("yes") &&
  !passwordCriteria.passwordNums.includes("no")
) {
  passwordCriteria.passwordNums = prompt(
    "Would you like your password to contain numbers?",
    "yes or no"
  );
}
// password case asks the user if they would like their password to contain uppercase, lowercase or both
passwordCriteria.passwordCase = prompt(
  "Would you like your password to contain uppercase, lowercase, or both"
);
// while loop checks to see if provided answers fall under the password criteria
while (
  !passwordCriteria.passwordCase.includes("uppercase") &&
  !passwordCriteria.passwordCase.includes("lowercase") &&
  !passwordCriteria.passwordCase.includes("both")
) {
  passwordCriteria.passwordCase = prompt(
    "Would you like your password to contain uppercase, lowercase, or both?"
  );
}
// passwordCharacter variable asks the user if they would like their password to contain special chars
passwordCriteria.passwordCharacter = prompt(
  "would your password to include special characters?"
);
// checks to see if password characters is part of the accepted criteria
while (
  !passwordCriteria.passwordCharacter.includes("yes") &&
  !passwordCriteria.passwordCharacter.includes("no")
) {
  passwordCriteria.passwordCharacter = prompt(
    "Would you like your password to special characters?",
    "yes or no"
  );
}
// set of variables that will be used for passwords
var upperCase = "ABDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
// generatePassword will generate password
function generatePassword() {
  var password = "";
  // using for loop to set up password
  for (var i = 0; i < passwordCriteria.passwordLength; i++) {
    var passwordContents = "";
    // checks to see if user inputed lowercase, uppercase or both
    if (passwordCriteria.passwordCase === "lowercase") {
      passwordContents += lowerCase;
    } else if (passwordCriteria.passwordCase === "uppercase") {
      passwordContents += upperCase;
    } else {
      passwordContents += upperCase + lowerCase;
    }
    // checks to see if user wants numbers in their password
    if (passwordCriteria.passwordNums === "yes") {
      passwordContents += numbers;
    }
    // checks to see if user wants special chars
    if (passwordCriteria.passwordCharacter === "yes") {
      passwordContents += special;
    }
    //adds combines the strings
    password += passwordContents.charAt(
      Math.floor(Math.random() * passwordContents.length)
    );
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
