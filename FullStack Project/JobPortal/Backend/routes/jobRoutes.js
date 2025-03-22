const express = require("express");
const { postJob, getAllJobs } = require("../controllers/jobController");
const router = express.Router();

router.post("/post-job", postJob);
router.get("/jobs", getAllJobs);

module.exports = router;
