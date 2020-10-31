// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
//Arrayss
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);
//generateBtn.querySelector.addEventListener("click", generatePassword);
//copyBtn.addEventListerner("click", copyToClipboard);
//function that generates password
function generatePassword() {
  var passwordChar = [];
 
  var finalPassword= [];
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

  var specialChar = confirm("Would you like special characters?");
  

  var upperCase = confirm("Would you like upper case?");

  var lowerCase = confirm("Would you like lowercase?");

  var numberChar = confirm("Would you like numbers?");


// if user doesnt select anything
if(!lowerCase && !upperCase && !numberChar && !specialChar){
  alert("You must chose one of the character types to proceed");
  return;
}


//password based on users response
  if( lowerCase ) {
    for (var i= 0; i<lowerCase.length; i++) {
      passwordChar.push*(lowerCaseChar[i]);
    }
  }

  if( upperCase ) {
    for (var i= 0; i<UpperCaseChar.length; i++) {
      passwordChar.push*(lowerCaseChar[i]);
    }
  }
  if( numberChar ) {
    for (var i= 0; i<numeralChar.length; i++) {
      passwordChar.push*(lowerCaseChar[i]);
    }
  }
  if( specialChar ) {
    for (var i= 0; i<specialChar.length; i++) {
      passwordChar.push*(lowerCaseChar[i]);
    }
  }

  //rRun a loop for user
  for (i=0; i<numberCharPassLength; i++) {
    var index = Math.floor(Math.random()*passwordChar.length);

    finalPassword = finalPassword + passwordChar[index];

  }
  //
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;
    //lengthProperty: length,
    //charProperty: specialChar,
   // upperCaseProperty: upperCase,
    //lowerCaseProperty: lowerCase,
    
}
  //return passwordOption
function copyToClipboard (){

}



 //if ( lowerCase){
//for (var i=0; i<lowerCaseChar.length; i++){
  //passwordChar.push()
//}

 //}

 //Generated password for char based on user response

  //var char = (a + b);
  //console.log(char);
//}
//generatePassword(specialChar,passwordOption);
    



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




// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  

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







