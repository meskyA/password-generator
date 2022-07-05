// // Getting DOM elements
// const resultDOM = document.getElementById("result");
// const copybtnDOM = document.getElementById("copy");
// const lengthDOM = document.getElementById("length");
// const uppercaseDOM = document.getElementById("uppercase");
// const lowercaseDOM = document.getElementById("lowercase");
// const numbersDOM = document.getElementById("numbers");
// const symbolsDOM = document.getElementById("symbols");
// const generatebtnDOM = document.getElementById("generate");


// // The Password generating funtion
// function generatebtn {
//   console.log("generate:", generatePassword)

// }
  
// function generatePassword (lower, upper, number, symbol, length) {
//   let generatePassword = '';
  
//   const typesCount = lower+upper+number+symbol;

//   console.log('typesCount:', typesCount);

//   const typesArr = [lower, upper, number, symbol];

//   console.log('typesArr:', typesArr);

//   if (typesCount===0) {
//     return '';
//   }

//   for (let i =0; i < length; i += typesCount){
//     typesArr.forEach(type=> {
//       const funcName = Object.keys(type)[0];
//       console.log('funcName:' , funcName);
      
//       generatePassword += randomFunc [funcName]();
//     })
//   }
//   const finalPassword =(generatePassword.slice(0, length));
//   return finalPassword;

// }
// // Add event listener to generate button
// generateBtn.addEventListener("click",  () => {
//   const length = +length.value;
//   const hasLower = lowercaseDOM;
//   const hasUpper= uppercaseDOM;
//   const hasNumber = numbersDOM;
//   const hasSymbol = symbolsDOM;

//   result.innerText = generatePassword(
//     hasLower, hasUpper, hasNumber, hasSymbol, length);
// });
// // Copy password to clipboard
// clipboardDOM.addEventListener('click', () => {
//   const textarea = document.createElement ('textarea');
//   const password = resultEl.innerText;

//   if(!password) {
//     return;
//   }

//   textarea.value =password;
//   document.body.openChild(textarea);
//   textarea.select();
//   document.execCommand('copy');
//   textarea.remove();
//   alert('Password copied to clipboard!');
// })

// // Generating character codes https://www.asciitable.com
// function getRandomLower () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper () {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

// }
// function getRandomNumber () {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// function getRandomSymbol () {
//   const symbols = "!#$%&*@~";
//   return symbols[Math.floor(Math.random() * symbols.length)];

// }
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
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

var upperArray =["A", "B", "C"]
var lowerArray =["a", "b", "c"]
var numbersArray = ["1", "2", "3"]
var symbolsArray = ["@", "!", "$"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





