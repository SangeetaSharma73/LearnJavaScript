const Job = require("../models/Job");

exports.postJob = async (req, res) => {
  try {
    const { title, description, company, location, salary, recruiterId } =
      req.body;
    const job = new Job({
      title,
      description,
      company,
      location,
      salary,
      recruiterId,
    });
    await job.save();
    res.json({ message: "Job posted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error posting job", error });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving jobs", error });
  }
};
