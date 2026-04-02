function showMessage() {
  alert("Welcome! You clicked the button.");
}

function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  if (username === "admin" && password === "1234") {
    message.style.color = "lightgreen";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
}
