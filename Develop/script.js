//const array for each character type
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const uniqueCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "?", "/"];

//empty array to store user choices
let userChoices = [];
let passwordLength = 0;

//popups to ask user for password criteria
function generatePassword() {
  passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }
  let lowerCaseConfirm = confirm("Would you like to include lowercase letters?");
  let upperCaseConfirm = confirm("Would you like to include uppercase letters?");
  let numbersConfirm = confirm("Would you like to include numbers?");
  let uniqueCharactersConfirm = confirm("Would you like to include special characters?");

  //if statements to push user choices into userChoices array
  if (lowerCaseConfirm) {
    userChoices.push(...lowerCase);
  }
  if (upperCaseConfirm) {
    userChoices.push(...upperCase);
  }
  if (numbersConfirm) {
    userChoices.push(...numbers);
  }
  if (uniqueCharactersConfirm) {
    userChoices.push(...uniqueCharacters);
  }

  //if user does not select any criteria, alert and return
  if (userChoices.length === 0) {
    alert("You must select at least one character type.");
    return;
  }

  //empty string to store password
  let password = "";

  //for loop to randomly select characters from userChoices array
  for (let i = 0; i < passwordLength; i++) {
    password += userChoices[Math.floor(Math.random() * userChoices.length)];
  }

  //return password
  return password;
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
