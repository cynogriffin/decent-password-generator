// create variable to hold our set of chosen characters
var characterSet = "";

// function to collect the character sets the user wants to include in the password
var characterSelect = function() {
  // confirm if user wants lowercase characters
  var lowercase = window.confirm("Click OK if you want to include lowercase characters.");

  if (lowercase) {
    characterSet = characterSet.concat("abcdefghijklmnopqrstuvwxyz");
  };

  // confirm if user wants uppercase characters
  var uppercase = window.confirm("Click OK if you want to include uppercase characters.");

  if (uppercase) {
    characterSet = characterSet.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  };

  // confirm if user wants numbers
  var numberChars = window.confirm("Click OK if you want to include numbers.");

  if (numberChars) {
    characterSet = characterSet.concat("0123456789");
  };

  // confirm if user wants special characters
  var special = window.confirm("Click OK if you want to include special characters");

  if (special) {
    characterSet = characterSet.concat("!#$%&()*+,-./:;<=>?@[]|^_`{}~\'\"\\");
  };

  // check to make sure at least one character set was selected
  if (characterSet === "") {
    var noChars = window.confirm("Please select at least one set of characters to include.")

    // if ok, rerun character set selection
    if (noChars) {
      characterSelect();
    } 
    // if cancel, exit the function and alert user
    else {
      window.alert("Please try again when you are ready.");
    };
  };
};

// create function to generate a password based on the user input
var generatePassword = function() {
  // call function to collect the desired length
  var characterLength = passwordLength();

  // call function to select characters
  characterSelect();

  // generate password with given values
  var passwordResult = ""
  for (var i = 0; i < characterLength; i++) {
    passwordResult += characterSet.charAt(Math.floor(Math.random() * characterSet.length))
  };

  return passwordResult;
};

// Collect password length through prompt
var passwordLength = function() {
  // prompt for user to enter length of password
  var characterNumber = window.prompt("How many characters would you like your password to contain?")

  // if the user cancels
  if (!characterNumber) {
    window.alert("Please try again when you are ready.");
  }
  // check if entry is not a number
  else if (isNaN(characterNumber)) {
    window.alert("Please enter a number between 8 and 128.");
    passwordLength();
  } 
  // check if number is between 8 and 128
  else if (characterNumber < 8 || characterNumber > 128) {
    window.alert("Please enter a number between 8 and 128 for a secure password.");
    passwordLength();
  } 
  // if entry is validated, return number for length
  else {
    return characterNumber;
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);