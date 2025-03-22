document.addEventListener("DOMContentLoaded", function () {
  fetchJobs();
});

function fetchJobs() {
  fetch("http://localhost:5000/api/jobs")
    .then((response) => response.json())
    .then((data) => {
      const jobContainer = document.getElementById("job-listings");
      jobContainer.innerHTML = "";

      if (data.length === 0) {
        jobContainer.innerHTML = "<p>No jobs available.</p>";
        return;
      }

      data.forEach((job) => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
                    <h3>${job.title}</h3>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p>${job.description}</p>
                    <button onclick="applyJob('${job.id}')">Apply</button>
                `;
        jobContainer.appendChild(jobCard);
      });
    })
    .catch((error) => console.error("Error fetching jobs:", error));
}

function applyJob(jobId) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Please login first!");
    window.location.href = "login.html";
    return;
  }

  fetch("http://localhost:5000/api/apply-job", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ jobId, userId: user.id }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert("Applied successfully!");
      } else {
        alert("Failed to apply.");
      }
    })
    .catch((error) => console.error("Application error:", error));
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}
