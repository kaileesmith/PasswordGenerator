// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper= ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
var nums = [1, 2, 4, 5, 6, 7, 8, 9, 0]
var symbols = ["@", "$", "!", "(", "^"]
var emojis = ["😀", "🤗", "😎", "⭐"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);


// My Additions/

var pLength = parseInt(prompt("How many characters would you like your password to be?"));
if(pLength <= 8 || pLength >=128 || isNaN(length)) {
  prompt("Length must be 8-128 characters. How many characters would you like your password to be?")
  } else {
  
    var upper = confirm("Would you like to use uppercase letters?");
    var lower = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");
    var emojis = confirm("Do you want emojis?");

// 
    if (upper) password.push(upper)
    if (lower) password.push(lower)
    if (numbers) password.push(numbers)
    if (symbols) { password.push(symbols) }
    if (emojis) { password.push(emojis) }
// 
    var pw = ""


    while (pw.length < length) {
      for (var i=0; i < pLength.length; i++) {
        if (pw.length < length) {
          let rand = Math.floor(Math.random() * pLength[i].length)
          pw += pLength[i][rand]
        }
      }  
    }
  }
    document.querySelector("#generate").addEventListener("click", generateBtn)



