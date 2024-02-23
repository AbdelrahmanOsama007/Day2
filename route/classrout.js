const express = require("express");
const router = express.Router();
const controller = require("../controller/Classcontroller");

router.route("/class").get(controller.getAllclasss).post(controller.addclass);
router
  .route("/class/:id")
  .get(controller.getoneclass)
  .patch(controller.addclass)
  .delete(controller.deleteclass)
  .put(controller.editclass);
router
  .route("/classchildren/:id")
  .get(controller.getclasschildren)
  .patch(controller.addclass)
  .delete(controller.deleteclass)
  .put(controller.editclass);
router
  .route("/classteacher/:id")
  .get(controller.getclasstecher)
  .patch(controller.addclass)
  .delete(controller.deleteclass)
  .put(controller.editclass);
  module.exports = router;
