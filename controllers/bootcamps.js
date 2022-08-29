const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const getAllBootcamps = async (req, res, next) => {
   const bootcamps = await Bootcamp.find();

   res.status(200).json({ success: true, data: bootcamps });
};

const getBootcamp = asyncHandler(async (req, res, next) => {
   if (!req.params.id) {
      res.status(400).json({
         success: false,
         msg: "Please provide Bootcamp Id",
      });
   }

   const bootcamp = await Bootcamp.findById(req.params.id);

   if (!bootcamp) {
      next(err);
   }
   res.status(200).json({
      success: true,
      data: bootcamp,
   });
});

const createBootcamp = asyncHandler(async (req, res, next) => {
   const newbootcamp = await Bootcamp.create(req.body);

   res.status(200).json({ success: true, data: newbootcamp });
});

const editBootcamp = asyncHandler(async (req, res, next) => {
   if (!req.params.id) {
      res.status(400).json({
         success: false,
         msg: "Please provide Bootcamp Id",
      });
   }

   const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
   });

   if (!bootcamp) {
      next(new ErrorResponse("Bootcamp Not Found. Invalid Id", 404));
   }
   res.status(200).json({
      success: true,
      data: bootcamp,
   });
});

const deleteBootcamp = asyncHandler(async (req, res, next) => {
   if (!req.params.id) {
      next(err);
   }

   const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

   if (!bootcamp) {
      next(new ErrorResponse("Bootcamp Not Found. Invalid Id", 404));
   }
   res.status(200).json({
      success: true,
      data: "Bootcamp deleted successfully",
   });
});

module.exports = {
   getAllBootcamps,
   getBootcamp,
   createBootcamp,
   editBootcamp,
   deleteBootcamp,
};
