const express = require("express");
const router = express.Router();
const controller = require("../controller/teacherController");
const validator = require("../validator/valdatior")
const {insertValidations,updateValidations} =require("../validator/teachervaldation")

router
  .route("/teacher")
  .get(controller.getAllteachers)
  .post(insertValidations,validator,controller.addteacher);
router.route("/teacher/superviosr").get(controller.getAllClasses);
// get teacher by id
router.route("/teacher/login").post();
router
  .route("/teacher/:id")
  .get(insertValidations,validator,controller.getoneteacher)
  .patch(insertValidations,validator,controller.addteacher)
  .post(insertValidations,validator,controller.updateteacher)
  .delete(controller.deleteteacher);

module.exports = router;
