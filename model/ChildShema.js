const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const myPlaintextPassword = "s0//P4$$w0rD";
// const someOtherPlaintextPassword = "not_bacon";
//const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
// Define the Address sub-schema
const addressSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  password:{
    type:String,
    default:""
  },
  street: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
});

// Define the Child schema with the updated structure
const childSchema = new Schema(
  {
    fullName: {
      // Updated from 'name' to 'fullName'
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
      enum: ["PreKG", "KG1", "KG2"], // Level must be one of these values
    },
    address: addressSchema, // Include Address as a sub-document
    interests: [
      {
        type: String, // Keeping interests as an array of strings
      },
    ],
  },
  { timestamps: true }
);

// childSchema.plugin(autoIncrement, {
//   field: "id",
//   groupBy: "fullName",
//   digits: 1,
//   startAt: 1,
//   incrementBy: 1,
//   unique: true,
// });

// Create the model from the schema
const Child = mongoose.model("Child", childSchema);

module.exports = Child;
