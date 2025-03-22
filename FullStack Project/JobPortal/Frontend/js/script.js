const BASE_URL = "http://localhost:5000"; // Change if backend URL is different

// Register User
async function registerUser() {
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  const role = document.getElementById("reg-role").value;
  const profileImage = document.getElementById("reg-profile").files[0];

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("role", role);
  formData.append("profileImage", profileImage);

  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
    window.location.href = "index.html";
  } catch (error) {
    alert("Registration failed!");
  }
}

// Login User
async function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert("Login failed!");
  }
}

// Fetch Jobs
async function fetchJobs() {
  try {
    const res = await fetch(`${BASE_URL}/jobs`);
    const jobs = await res.json();

    const jobList = document.getElementById("jobs-list");
    jobList.innerHTML = "";
    jobs.forEach((job) => {
      jobList.innerHTML += `<div>
                <h4>${job.title}</h4>
                <p>${job.company} - ${job.location}</p>
                <p>${job.description}</p>
                <p>Salary: $${job.salary}</p>
            </div><hr>`;
    });
  } catch (error) {
    alert("Failed to fetch jobs!");
  }
}

// Update Profile Image
async function updateProfile() {
  const profileImage = document.getElementById("update-profile").files[0];

  const formData = new FormData();
  formData.append("profileImage", profileImage);

  try {
    const res = await fetch(`${BASE_URL}/api/auth/update-profile`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  } catch (error) {
    alert("Profile update failed!");
  }
}

// Logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
