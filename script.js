//your JS code here. If required.
// script.js
// Get form elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberMeCheckbox = document.getElementById("remember-me");
const submitButton = document.getElementById("submit");
const existingUserButton = document.getElementById("existing");

// Event listener for form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (rememberMeCheckbox.checked) {
    // If "Remember me" is checked, save the username and password in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // If "Remember me" is not checked, remove the stored username and password from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
});

// Event listener for "Login as existing user" button
existingUserButton.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});

// Check if there are saved details in local storage
const savedUsername = localStorage.getItem("username");
if (savedUsername) {
  // If there are saved details, show the "Login as existing user" button
  const existingUserButton = document.createElement("button");
  existingUserButton.id = "existing";
  existingUserButton.textContent = "Login as existing user";
  document.body.appendChild(existingUserButton);
}
