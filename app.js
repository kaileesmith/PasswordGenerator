// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordopt =[];


var uppercase= ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
var nums = [1, 2, 4, 5, 6, 7, 8, 9, 0]
var symbol = ["@", "$", "!", "(", "^"]
var emoji = ["🕺", "🤗", "🐙", "🦄"]


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("hello")

// My Additions
function generatePassword(){

  var length = parseInt(prompt("How many characters would you like your password to be?"));
  if(length < 8 || length >= 128 || isNaN(length)) {
    alert("Length must be 8-128 characters. How many characters would you like your password to be?")
    generatePassword()
  }
    else {
    
      var upper = confirm("Would you like to use uppercase letters?");
      var lower = confirm("Would you like to use lowercase letters?");
      var numbers = confirm("Would you like to use numbers?");
      var symbols = confirm("Would you like to use special characters?");
      var emojis = confirm("Do you want emojis?");
      
      if (upper) { passwordopt.push(uppercase) }
      if (lower) { passwordopt.push(lowercase) }
      if (numbers){ passwordopt.push(nums) }
      if (symbols) { passwordopt.push(symbol) }
      if (emojis) { passwordopt.push(emoji) }
  
    
    var pw = "";

  
      while (pw.length < length) {
  
        for (var i = 0; i < passwordopt.length; i++) {
          if (pw.length < length) {
            let rand = Math.floor(Math.random() * passwordopt[i].length)
            pw = pw + passwordopt[i][rand]
            }
          }
        }
        console.log(pw)
          password.textContent = pw
        
          // return password
      }
    }
  
    document.querySelector("#password").addEventListener("click", generatePassword)
    generatePassword()