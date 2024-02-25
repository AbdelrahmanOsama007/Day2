const express = require("express");
const router = express.Router();
const controller = require("../controller/ChildController");
const { isAdmin } = require("../midllewares/Authorization");

router
  .route("/child")
  .get(isAdmin, controller.getAllchilds)
  .post(controller.addchild);
router
  .route("/child/:id")
  .all(isAdmin)
  .get(controller.getonechild)
  .delete(controller.deletechild)
  .patch(controller.updateChild)
  .post(controller.addchild);
module.exports = router;
/**
 * @swagger
 * tags:
 *   name: Child
 *   description: Child management
 */

/**
 * @swagger
 * /child:
 *   get:
 *     summary: Returns a list of all children
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The list of the children
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Child'
 *   post:
 *     summary: Create a new child
 *     tags: [Child]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       201:
 *         description: The child was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 */

/**
 * @swagger
 * /child/{id}:
 *   all:
 *     security:
 *       - bearerAuth: []
 *   get:
 *     summary: Get the child by id
 *     tags: [Child]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The child id
 *     responses:
 *       200:
 *         description: The child description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 *       404:
 *         description: The child was not found
 *   delete:
 *     summary: Remove the child by id
 *     tags: [Child]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The child id
 *     responses:
 *       200:
 *         description: The child was deleted
 *       404:
 *         description: The child was not found
 *   patch:
 *     summary: Update the child by id
 *     tags: [Child]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The child id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       200:
 *         description: The child was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 *       404:
 *         description: The child was not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Child:
 *       type: object
 *       required:
 *         - name
 *         - age
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the child
 *         name:
 *           type: string
 *           description: The name of the child
 *         age:
 *           type: integer
 *           description: The age of the child
 *         interests:
 *           type: array
 *           items:
 *             type: string
 *           description: The interests of the child
 *       example:
 *         name: Jane Doe
 *         age: 10
 *         interests: ["Drawing", "Reading"]
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */


