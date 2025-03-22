document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile();

  const uploadForm = document.getElementById("upload-resume-form");
  if (uploadForm) {
    uploadForm.addEventListener("submit", function (event) {
      event.preventDefault();
      uploadResume();
    });
  }
});

function loadUserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("You must be logged in!");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("profile-name").textContent = user.name;
  document.getElementById("profile-email").textContent = user.email;
  if (user.resume) {
    document.getElementById(
      "resume-link"
    ).innerHTML = `<a href="${user.resume}" target="_blank">View Resume</a>`;
  }
}

function uploadResume() {
  const resumeInput = document.getElementById("resume").files[0];
  if (!resumeInput) {
    alert("Please select a file!");
    return;
  }

  const formData = new FormData();
  formData.append("resume", resumeInput);

  fetch("http://localhost:5000/api/upload-resume", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Resume uploaded successfully!");
        localStorage.setItem("user", JSON.stringify(data.user)); // Update user data
        loadUserProfile(); // Refresh profile
      } else {
        alert("Failed to upload resume.");
      }
    })
    .catch((error) => console.error("Upload error:", error));
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
