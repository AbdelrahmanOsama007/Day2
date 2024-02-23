const express = require("express");
const router = express.Router();
const controller = require("../controller/ChildController");

router.route("/child").get(controller.getAllchilds).post(controller.addchild);
router
  .route("/child/:id")
  .get(controller.getonechild)
  .delete(controller.deletechild)
  .patch(controller.updateChild)
  .post(controller.addchild);
module.exports = router;
