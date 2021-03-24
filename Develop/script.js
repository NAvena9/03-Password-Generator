// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// ///variable expression that generates the password 
// const passwordGen = createPassword(selectLenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

//NUEVO..
//User input variables, here Im assigning the values direct from the ASCI table ID
var PassLenght;
var passwordArray=[];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var includeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var includeSymbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//defining the generate password function
function generatePassword(){
  var passwordString='';

  //Declare the inputs from user to get booleans with 'confirm'
  
  var includeLowerCase=confirm('Do you want the password to include lowercase letters?');
  var includeUpperCase=confirm('Do you want the password to include uppercase letters?');
  var includeNumbers=confirm('Do you want the password to include numbers?');
  var includeSymbols=confirm('Do you want the password to include special-characters/symbols?');

  //Loop to verify the password lenght
  passLenght = parseInt(prompt('How long do you want the password to be? The password needs to be at least 8 characters and no more than 128.'));
  while (passLenght < 8 || passLenght > 128 || typeof(passLenght) != 'number' || passLenght === null){
    alert ('Input a password lenght. The password needs to be between 8 and 128 characters');
  }


  }










// var selectLenght = prompt('Select a lenght between 8 and 128 characters inclusive');
// var includeLowerCase = prompt('Include Lowercase? ');
// var includeUpperCase = prompt('Include Uppercase? ');
// var includeNumbers = prompt('Include Numbers?');
// var includeSymbols = prompt('include Special Characters?')



// const LOWERCASE_CHAR_CODE = arrayLowtoHigh (65, 90);
// const UPPERCASE_CHAR_CODE = arrayLowtoHigh (97, 122);
// const NUMBERS_CHAR_CODE = arrayLowtoHigh (48, 57);
// const SYMBOL_CHAR_CODE = arrayLowtoHigh (33, 47).concat(arrayLowtoHigh (58, 64)).concat (arrayLowtoHigh (91, 96)).concat(arrayLowtoHigh (123, 126));



// function arrayLowtoHigh (low, high){
//   const array = []
//   for (var i= low; i <= hight; i++){
//     array.push(i);
//   }
//   return array;
// }



