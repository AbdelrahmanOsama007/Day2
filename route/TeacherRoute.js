const express = require("express");
const router = express.Router();
const controller = require("../controller/teacherController");

router
  .route("/teacher")
  .get(controller.getAllteachers)
  .post(controller.addteacher);
router.route("/teacher/superviosr").get(controller.getAllClasses);
// get teacher by id
router.route("/teacher/login").post();
router
  .route("/teacher/:id")
  .get(controller.getoneteacher)
  .patch(controller.addteacher)
  .post(controller.updateteacher)
  .delete(controller.deleteteacher);

module.exports = router;
