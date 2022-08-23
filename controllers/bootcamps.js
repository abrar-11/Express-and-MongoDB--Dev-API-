const getAllBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show All Bootcamps" });
};

const getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show Bootcamp ${req.params.id}` });
};

const createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create a new Bootcamp" });
};

const editBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Edit Show Bootcamp ${req.params.id}` });
};

const deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
};

module.exports = {
  getAllBootcamps,
  getBootcamp,
  createBootcamp,
  editBootcamp,
  deleteBootcamp,
};
