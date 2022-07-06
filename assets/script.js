// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Generate passwords with possible characters
function generatePassword() {
  var possibleCharacters =[]
  var finalArray =[]
  var questionlength = prompt ("how many characters? 8 to 128");
  if (questionlength < 8 || questionlength> 128) {
    alert("you must choose a number between 8 and 128")
    return
  }
  var questionuppercase = confirm ("do you want to use uppercase?");
  var questionlowercase = confirm ("do you want to use lowercase?");
  var questionnumbers= confirm ("do you want to use numbers?");
  var questionsymbols = confirm ("do you want to use symbols?");
  
  if (questionuppercase) {
    possibleCharacters = possibleCharacters.concat(upperArray)
  }
  if (questionlowercase) {
    possibleCharacters = possibleCharacters.concat(lowerArray)
  }
  if (questionnumbers) {
    possibleCharacters = possibleCharacters.concat(numbersArray)
  }
  if (questionsymbols) {
    possibleCharacters = possibleCharacters.concat(symbolsArray)
  }
  console.log (possibleCharacters)
  for(var i =0; i<questionlength; i++) {
    var random = Math.floor(Math.random() * possibleCharacters.length)
    finalArray.push(possibleCharacters[random])
  }
  return finalArray.join("")
  
}
// Add character arrays
 // Generating character codes https://www.asciitable.com
var upperArray =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerArray =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "w", "y", "z"]
var numbersArray = ["1", "2", "3", "4", "5", "6", "7","8", "9", "0"]
var symbolsArray = ["@", "!", "$", "%", "#", "^", "*", "+", "~"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





