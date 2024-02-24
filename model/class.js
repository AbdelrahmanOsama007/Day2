//const teacher =require('./Teacher');
const mongoose=require( 'mongoose' );
var Schema = mongoose.Schema;
const classSchema = new mongoose.Schema({
  _id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  children: {
    type: [Number],
    ref: "Child",
  },
});
const _class = mongoose.model("class", classSchema);
module.exports=_class;
