document.addEventListener("DOMContentLoaded", function () {
  const jobForm = document.getElementById("post-job-form");

  if (jobForm) {
    jobForm.addEventListener("submit", function (event) {
      event.preventDefault();
      postJob();
    });
  }
});

function postJob() {
  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  fetch("http://localhost:5000/api/post-job", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, company, location, description }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Job posted successfully!");
        window.location.href = "index.html"; // Redirect to home page
      } else {
        alert("Failed to post job.");
      }
    })
    .catch((error) => console.error("Job posting error:", error));
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
