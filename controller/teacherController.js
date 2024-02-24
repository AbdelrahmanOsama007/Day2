const Teacher = require("../model/Teacher"); // Adjust the path to your Teacher model
const _class = require("../model/class"); // Adjust the path to your Class model
const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = process.env.SALT_ROUNDS || 10;

const getAllteachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find({});
    res.status(200).json(teachers);
  } catch (error) {
    next(error);
  }
};

const getoneteacher = async (req, res, next) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    next(error);
  }
};

const deleteteacher = async (req, res, next) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res
      .status(200)
      .json({ message: `Teacher with id ${req.params.id} deleted` });
  } catch (error) {
    next(error);
  }
};

const addteacher = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newTeacher = new Teacher({ ...rest, password: hashedPassword });
    const savedTeacher = await newTeacher.save();
    res
      .status(201)
      .json({ message: "Teacher added successfully", teacher: savedTeacher });
  } catch (error) {
    next(error);
  }
};

const updateteacher = async (req, res, next) => {
  try {
    const update = req.body;
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found." });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    next(error);
  }
};

const getAllClasses = async (req, res, next) => {
  try {
    const classes = await _class
      .find({})
      .populate("supervisor")
      .populate("children");
    res.status(200).json(classes);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllteachers,
  getoneteacher,
  addteacher,
  deleteteacher,
  updateteacher,
  getAllClasses,
};
