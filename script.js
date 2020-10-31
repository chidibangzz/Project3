// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
//Arrayss

//function that generates password
function generatePassword() {
  var passwordChar = [];
 
  var finalPassword= "";
//var welcome = confirm("Would you like a password")


var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "{", "[", "}", "]", ":", ";", "|", "<", ",", ">", "?", "/"];


  var passlength = parseInt(prompt("How many characters would you like to contain"))

  if (passlength < 8 || passlength> 128) {
    alert('Your password must be between 8 and 128 characters')
    return;

} else{alert("your password will be "+passlength+" characters long")} 

  var isSpecialChar = confirm("Would you like special characters?");
  
  var isUpperCase = confirm("Would you like upper case?");

  var isLowerCase = confirm("Would you like lowercase?");

  var isNumberChar = confirm("Would you like numbers?");


// if user doesnt select anything

if(!isLowerCase && !isUpperCase && !isNumberChar && !isSpecialChar){
  alert("You must chose one of the character types to proceed");
  return;
}


//password based on users response
  if( isLowerCase ) {
    for (var i= 0; i<lowerCase.length; i++) {
      passwordChar.push(lowerCase[i]);
    }
  }

  if( isUpperCase ) {
    for (var i= 0; i<upperCase.length; i++) {
      passwordChar.push(upperCase[i]);
    }
  }
  if( isNumberChar ) {
    for (var i= 0; i<numberChar.length; i++) {
      passwordChar.push(numberChar[i]);
    }
  }
  if( isSpecialChar ) {
    for (var i= 0; i<specialChar.length; i++) {
      passwordChar.push(specialChar[i]);
    }
  }

  //rRun a loop for user
  for (var i=0; i<passlength; i++) {
    var index = Math.floor(Math.random()*passwordChar.length);

    finalPassword = finalPassword + passwordChar[index];

  }
  return finalPassword;
}




// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  //if(user wants numbers) {

   





