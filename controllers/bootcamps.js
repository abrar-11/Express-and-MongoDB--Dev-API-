const Bootcamp = require("../models/Bootcamp");

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
         res.status(400).json({
            success: false,
            msg: `Invalid Bootcamp Id`,
         });
      }
      res.status(200).json({
         success: true,
         data: bootcamp,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         msg: `Invalid Bootcamp Id`,
      });
   }
};

const createBootcamp = async (req, res, next) => {
   try {
      const newbootcamp = await Bootcamp.create(req.body);

      res.status(200).json({ success: true, data: newbootcamp });
   } catch (err) {
      res.status(500).json({ success: false, data: [] });
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
         res.status(400).json({
            success: false,
            msg: `Invalid Bootcamp Id`,
         });
      }
      res.status(200).json({
         success: true,
         data: bootcamp,
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         msg: `Invalid Bootcamp Id`,
      });
   }
};

const deleteBootcamp = (req, res, next) => {


   if (!req.params.id) {
      res.status(400).json({
         success: false,
         msg: "Please provide Bootcamp Id",
      });
   }

   try {
      const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

      if (!bootcamp) {
         res.status(400).json({
            success: false,
            msg: `Invalid Bootcamp Id`,
         });
      }
      res.status(200).json({
         success: true,
         data: 'Bootcamp deleted successfully',
      });
   } catch (err) {
      res.status(400).json({
         success: false,
         msg: `Invalid Bootcamp Id`,
      });
   }



  
};

module.exports = {
   getAllBootcamps,
   getBootcamp,
   createBootcamp,
   editBootcamp,
   deleteBootcamp,
};
