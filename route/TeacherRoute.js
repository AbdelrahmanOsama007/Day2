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
/**
 * @swagger
 * tags:
 *   name: Teacher
 *   description: Teacher management and authentication
 */

/**
 * @swagger
 * /teacher:
 *   get:
 *     summary: Retrieves a list of all teachers
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: A list of teachers.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *   post:
 *     summary: Creates a new teacher
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       201:
 *         description: The teacher was successfully created.
 *       400:
 *         description: Validation error.
 */

/**
 * @swagger
 * /teacher/{id}:
 *   get:
 *     summary: Retrieves a teacher by ID
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The teacher's ID
 *     responses:
 *       200:
 *         description: Details of a specific teacher.
 *       404:
 *         description: Teacher not found.
 *   patch:
 *     summary: Updates a teacher's information by ID
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The teacher's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: The teacher was successfully updated.
 *       400:
 *         description: Validation error.
 *       404:
 *         description: Teacher not found.
 *   delete:
 *     summary: Deletes a teacher by ID
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The teacher's ID
 *     responses:
 *       200:
 *         description: The teacher was successfully deleted.
 *       404:
 *         description: Teacher not found.
 */

/**
 * @swagger
 * /teacher/login:
 *   post:
 *     summary: Authenticates a teacher and returns a token
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Authentication successful, token returned.
 *       401:
 *         description: Authentication failed.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - subject
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the teacher.
 *         name:
 *           type: string
 *           description: The name of the teacher.
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the teacher.
 *         subject:
 *           type: string
 *           description: The subject the teacher specializes in.
 *         password:
 *           type: string
 *           format: password
 *           description: The password for the teacher (only required for creating a new teacher).
 */
