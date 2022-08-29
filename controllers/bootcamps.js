const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const getAllBootcamps = async (req, res, next) => {
   const bootcamps = await Bootcamp.find();

   res.status(200).json({ success: true, data: bootcamps });
};

const getBootcamp = async (req, res, next) => {
   if (!req.params.id) {
      res.status(400).json({
         success: false,
         msg: "Please provide Bootcamp Id",
      });
   }

   try {
      const bootcamp = await Bootcamp.findById(req.params.id);

      if (!bootcamp) {
         next(err);
      }
      res.status(200).json({
         success: true,
         data: bootcamp,
      });
   } catch (err) {
      next(err);
   }
};

const createBootcamp = async (req, res, next) => {
   try {
      const newbootcamp = await Bootcamp.create(req.body);

      res.status(200).json({ success: true, data: newbootcamp });
   } catch (err) {
      next(err);
   }
};

const editBootcamp = async (req, res, next) => {
   if (!req.params.id) {
      res.status(400).json({
         success: false,
         msg: "Please provide Bootcamp Id",
      });
   }

   try {
      const bootcamp = await Bootcamp.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true, runValidators: true }
      );

      if (!bootcamp) {
         next(new ErrorResponse("Bootcamp Not Found. Invalid Id", 404));
      }
      res.status(200).json({
         success: true,
         data: bootcamp,
      });
   } catch (err) {
      next(err);
   }
};

const deleteBootcamp = async (req, res, next) => {
   if (!req.params.id) {
      next(err);
   }

   try {
      const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

      if (!bootcamp) {
         next(new ErrorResponse("Bootcamp Not Found. Invalid Id", 404));
      }
      res.status(200).json({
         success: true,
         data: "Bootcamp deleted successfully",
      });
   } catch (err) {
      next(err);
   }
};

module.exports = {
   getAllBootcamps,
   getBootcamp,
   createBootcamp,
   editBootcamp,
   deleteBootcamp,
};
