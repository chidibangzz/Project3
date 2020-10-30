// Assignment Code
//Arrayss
//var welcome = confirm("Would you like a password")
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "[", "}", "]", ":", ";", "|", "<", ",", ">", "?", "/"];

function getOptions() {
  var length = parseInt(prompt("How many characters would you like to contain"))

  if (length < 8) {
    alert("password must be 8 characters")
    return
  }

  if (length > 128) {
    alert("password must be less than 128")
  }

  var specialChar = confirm("Would you like special characters?")

  var upperCase = confirm("Would you like upper case?")

  var lowerCase = confirm("Would you like lowercase?")

  var passwordOption = {
    lengthProperty: length,
    charProperty: specialChar,
    upperCaseProperty: upperCase,
    lowerCaseProperty: lowerCase,
    
  }
  return passwordOption




}
 function generatePassword() {
   var pwdOptions = getOptions()
   console.log(pwdOptions)
 }


generatePassword()


//for (var i = 0; i < 9; i++) {
// var randomNumber = number[Math.floor(Math.random() * number.length)];
// console.log(randomNumber);
// }

// for (var l = 0; l < upperCase.length; l++) {
// var upperLetter = upperCase[Math.floor(Math.random() * upperCase.length)];
// console.log(upperLetter);
// }

// for (var k = 0; k < lowerCase.length; k++) {
// var lowerLetter = lowerCase[Math.floor(Math.random() * lowerCase.length)];
// console.log(lowerLetter);
// }

// for (var z = 0; z < specialChar.length; z++) {
//   var specialLetter = specialChar[Math.floor(Math.random() * specialChar.length)];
//   console.log(specialLetter);
// }


//for (var i = 0; i < 26; i++) {
//var randomNumber = number[Math.floor(Math.random() * number.length)];
//console.log(randomNumber[i])

// for (var i = 0; i < 9; i++) {
// var randomNumber = number[Math.floor(Math.random() * number.length)];
//console.log(randomNumber[i])

var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  //if(user wants numbers) {

   // var ramndomCharacter = numbers[randomNumberIndex];
    //password.concat(randomCharacter);










// var passwordlength = 100;








//var lower = text.toLowerCase();

//var upper = text.toUpperCase();







