const userPassword = prompt("Please enter your password:");

const passwordEntered = document.getElementById("password");
const messageParagraph = document.getElementById("message");

if (passwordEntered) {
  passwordEntered.textContent = userPassword;
}

let message;
let color;

if (userPassword.length < 8) {
  message = "Error: Your password is less than 8 characters.";
  color = "red";
} else if (!/[0-9]/.test(userPassword) || !/[A-Z]/.test(userPassword)) {
  message = "Error: Your password must contain at least a number and an uppercase letter.";
  color = "red";
} else {
  message = "Your password is valid!";
  color = "green";
}

if (messageParagraph) {
  messageParagraph.textContent = message;
  messageParagraph.style.color = color;
}
