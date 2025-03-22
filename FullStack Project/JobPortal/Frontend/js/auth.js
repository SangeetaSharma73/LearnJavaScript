document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      loginUser();
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      registerUser();
    });
  }
});

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/api/login", {
    // Change this URL based on your backend
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Login Successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "profile.html"; // Redirect to Profile Page
      } else {
        alert("Invalid credentials!");
      }
    })
    .catch((error) => console.error("Login error:", error));
}

function registerUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/api/register", {
    // Change this URL based on your backend
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Registration Successful! Please login.");
        window.location.href = "login.html"; // Redirect to Login Page
      } else {
        alert("Registration failed!");
      }
    })
    .catch((error) => console.error("Registration error:", error));
}
