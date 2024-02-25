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
/**
 * @swagger
 * tags:
 *   name: Class
 *   description: Class management
 */

/**
 * @swagger
 * /class:
 *   get:
 *     summary: Returns a list of all classes
 *     tags: [Class]
 *     responses:
 *       200:
 *         description: The list of the classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 *   post:
 *     summary: Create a new class
 *     tags: [Class]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       201:
 *         description: The class was successfully created
 */

/**
 * @swagger
 * /class/{id}:
 *   get:
 *     summary: Get the class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *     responses:
 *       200:
 *         description: The class description by id
 *       404:
 *         description: The class was not found
 *   patch:
 *     summary: Update a class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: The class was updated
 *       404:
 *         description: The class was not found
 *   delete:
 *     summary: Deletes a class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *     responses:
 *       200:
 *         description: The class was deleted
 *       404:
 *         description: The class was not found
 *   put:
 *     summary: Replace a class by id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: The class was replaced
 *       404:
 *         description: The class was not found
 */

/**
 * @swagger
 * /classchildren/{id}:
 *   get:
 *     summary: Get children of a class by class id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *     responses:
 *       200:
 *         description: A list of children in the class
 *       404:
 *         description: The class was not found
 *   patch:
 *     summary: Add a child to a class by class id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       200:
 *         description: The child was added to the class
 *       404:
 *         description: The class was not found
 *   delete:
 *     summary: Remove a child from a class by class id
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
*/