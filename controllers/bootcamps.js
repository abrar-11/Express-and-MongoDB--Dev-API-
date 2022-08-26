const Bootcamp = require("../models/Bootcamp");
const getAllBootcamps = (req, res, next) => {
   res.status(200).json({ success: true, msg: "Show All Bootcamps" });
};

const getBootcamp = (req, res, next) => {
   res.status(200).json({
      success: true,
      msg: `Show Bootcamp ${req.params.id}`,
   });
};

const createBootcamp = async (req, res, next) => {
   try {
      const newbootcamp = await Bootcamp.create(req.body);

      res.status(200).json({ success: true, data: newbootcamp });
   } catch (err) {
      res.status(500).json({ success: false, data: [] });
   }
};

const editBootcamp = (req, res, next) => {
   res.status(200).json({
      success: true,
      msg: `Edit Show Bootcamp ${req.params.id}`,
   });
};

const deleteBootcamp = (req, res, next) => {
   res.status(200).json({
      success: true,
      msg: `Delete Bootcamp ${req.params.id}`,
   });
};

module.exports = {
   getAllBootcamps,
   getBootcamp,
   createBootcamp,
   editBootcamp,
   deleteBootcamp,
};
