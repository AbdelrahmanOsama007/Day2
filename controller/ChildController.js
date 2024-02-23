
const Child = require("../model/ChildShema");
getAllchilds = (req, res, next) => {
  Child.find({}) //returns a promise
    .then((child) => {
      res.status(200).json(child);
    })
    .catch((error) => {
      next(error);
    });

};
getonechild = (req, res, next) => {
const id = req.params.id;
 Child.findById({ _id: id }) //returns a promise
 .then((child) => {
 //we have to check if the student exists
 if (!child) throw new Error("Id does not exist"); //this will be caught by
 res.status(200).json(child);
 })
 .catch((error) => {
 next(error); //this will be caught by the error middleware
 });

};
deletechild = (req, res, next) => {
 const id = req.params.id;
 Child.findByIdAndDelete({ _id: id }) //returns a promise
   .then((child) => {
     //we have to check if the student exists
     if (!child) throw new Error("Id does not exist"); //this will be caught by
     res.status(200).json(child);
   })
   .catch((error) => {
     next(error); //this will be caught by the error middleware
   });
};
addchild = (req, res, next) => {
  const child = new Child(req.body);
  child
    .save() //returns a promise
    .then((Child) => {
      res.status(201).json({
        message: "Child added successfully",
        child,
      });
    })
    .catch((error) => {
      next(error);
    });
    
};
updateChild = (req, res, next) => {
  const id = req.params.id;
  const updateData = req.body; // Get the update data from the request body

  // Find a child by id and update it with the new data
  // { new: true } option returns the document after update was applied
  Child.findByIdAndUpdate(id, updateData, { new: true })
    .then((updatedChild) => {
      if (!updatedChild) {
        // If no child was found with the given id, throw an error
        throw new Error("Child not found with id " + id);
      }
      // If update operation was successful, send back the updated document
      res.status(200).json(updatedChild);
    })
    .catch((error) => {
      // If an error occurs, pass it to the error-handling middleware
      next(error);
    });
};
exports = module.exports = {
  getAllchilds,
  getonechild,
  addchild,
  deletechild,
  updateChild,
};
