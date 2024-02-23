const express = require("express");
const router = express.Router();
const controller = require("../controller/teacherController");

router
  .route("/teacher")
  .get(controller.getAllteachers)
  .post(controller.addTeacher);
router
  .route("/teacher/:id")
  .get(controller.getoneteacher)
  .patch(controller.addTeacher)
  .delete(controller.deleteteacher);
  
router.route("/teacher/superviosr")
module.exports = router;
