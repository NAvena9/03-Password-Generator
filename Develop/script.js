// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();    
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


///variable expression that generates the password 
// const passwordGen = createPassword(selectLenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);


// User input variables, here Im assigning the values 

let passwordArray = [];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let incNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let incSymbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//DEFINING the generate password function
function generatePassword(){
  var passwordString='';

//defining passlenght function expression and creating the conditional for the leght.
  let passLenght = parseInt(prompt('How long do you want the password to be? The password needs to be at least 8 characters and no more than 128.'));
  if (passLenght <8){
      alert ('The password needs to be at least 8 characters. Try again!');
      return;
    }
  if (passLenght > 128){
      alert('The password needs to be less than 128 characters. Try again!');
      return;
    }
  
  //Declare the inputs from user to get booleans with 'confirm' 
  var includeLowerCase = confirm('Click Ok if you want the password to include lowercase letters?');
  var includeUpperCase = confirm('Click Ok if  you want the password to include uppercase letters?');
  var includeNumbers = confirm('Click Ok if you want the password to include numbers?');
  var includeSymbols = confirm('Click Ok if  you want the password to include special-characters/symbols?');

  //Loop to verify the password lenght
      while (includeLowerCase === false && includeUpperCase === false && includeNumbers === false && includeSymbols === false){
    alert('At least one character type should be selected'); 
    return;
  }
  

  //Define an empty array that will store the password characters if the conditions are true
  //with individual pushs was basically adding the entire array of data (looks like its working them as a hole and I thought it was going to be as an object)
  

  if (includeLowerCase){
    for (let i = 0; i < lowerCase.length; i++){   //// this individual loop worked (thanks god for tdebuging on chrome), add it to the entire conditions to see how it behaves
        passwordArray.push(lowerCase[i]);
    }
  }

  if (includeUpperCase){
    for (let i = 0; i < upperCase.length; i++){
      passwordArray.push(upperCase[i]);
    }
  }

  if (includeNumbers){
    for (let i = 0; i < incNumbers.length; i++){
      passwordArray.push(incNumbers[i]);
    }
  }

  if (includeSymbols){
    for (let i = 0; i < incSymbols.length; i++){
      passwordArray.push(incSymbols[i]);
    }
  } 
//This Loop takes the length of my user input password lenght to add a character randomly from the created array.
  var newPassword = '';

for (var i=0; i <= passLenght; i++){
      newPassword = newPassword + passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  return newPassword;
}






