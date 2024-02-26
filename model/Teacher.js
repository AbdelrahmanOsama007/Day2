const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Define the Teacher schema
const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures that each teacher has a unique email
    },
    yearsOfExperience: {
      type: Number,
      required: false, // This field is not required
    },
    image:{
      type : String,
    },
  },
  { timestamps: true }
);
//UserSchema.plugin(AutoIncrement, { inc_field: "id" });

// Create the model from the schema
const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
