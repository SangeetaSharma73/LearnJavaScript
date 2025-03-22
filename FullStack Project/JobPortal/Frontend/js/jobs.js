document.addEventListener("DOMContentLoaded", function () {
  fetchJobs();
});

// Function to fetch jobs from backend API
function fetchJobs() {
  fetch("http://localhost:5000/jobs") // API Call
    .then((response) => response.json())
    .then((jobs) => {
      const jobListings = document.getElementById("job-listings");
      jobListings.innerHTML = "";

      jobs.forEach((job) => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
                    <h3>${job.title}</h3>
                    <p><strong>Company:</strong> ${job.company}</p>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p><strong>Salary:</strong> $${job.salary}</p>
                    <p>${job.description}</p>
                `;

        jobListings.appendChild(jobCard);
      });
    })
    .catch((error) => console.error("Error fetching jobs:", error));
}
