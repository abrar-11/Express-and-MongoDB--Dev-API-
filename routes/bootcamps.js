const express = require("express");
const router = express.Router();

router.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show All Bootcamps" });
});

router.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Show Show Bootcamp ${req.params.id}` });
});

router.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Create a new Bootcamp" });
});

router.put("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({ success: true, msg: "Update a Bootcamp" });
});

router.delete("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({ success: true, msg: "Delete a Bootcamp" });
});

module.exports = router;
