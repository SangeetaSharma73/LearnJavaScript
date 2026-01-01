let isLogin = true;

const formTitle = document.getElementById("form-title");
const userForm = document.getElementById("userForm");
const switchLink = document.getElementById("switchLink");
const switchText = document.getElementById("switchText");

switchLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  formTitle.textContent = isLogin ? "Login" : "Signup";
  switchText.innerHTML = isLogin
    ? `Don't have an account? <a href="#" id="switchLink">Sign up</a>`
    : `Already have an account? <a href="#" id="switchLink">Login</a>`;

  document
    .getElementById("switchLink")
    .addEventListener("click", switchLinkClick); // rebind
});

function switchLinkClick(e) {
  e.preventDefault();
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? "Login" : "Signup";
  switchText.innerHTML = isLogin
    ? `Don't have an account? <a href="#" id="switchLink">Sign up</a>`
    : `Already have an account? <a href="#" id="switchLink">Login</a>`;
  document
    .getElementById("switchLink")
    .addEventListener("click", switchLinkClick);
}

document
  .getElementById("switchLink")
  .addEventListener("click", switchLinkClick);

// Form Submit
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (isLogin) {
    const storedUser = JSON.parse(localStorage.getItem(username));
    if (storedUser && storedUser.password === password) {
      alert("Login successful!");
      // redirect or show next screen
    } else {
      alert("Invalid credentials!");
    }
  } else {
    localStorage.setItem(username, JSON.stringify({ password }));
    alert("Signup successful! You can now login.");
    formTitle.textContent = "Login";
    isLogin = true;
    switchText.innerHTML = `Don't have an account? <a href="#" id="switchLink">Sign up</a>`;
    document
      .getElementById("switchLink")
      .addEventListener("click", switchLinkClick);
  }

  userForm.reset();
});
