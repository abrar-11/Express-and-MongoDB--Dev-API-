const express = require("express");
const router = express.Router();
const controller = require("../controllers/bootcamps");

router.get("/", controller.getAllBootcamps);

router
   .route("/")
   .get(controller.getAllBootcamps)
   .post(controller.createBootcamp);

router
   .route("/:id")
   .get(controller.getBootcamp)
   .put(controller.editBootcamp)
   .delete(controller.deleteBootcamp);

module.exports = router;
