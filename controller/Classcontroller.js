getAllclasss = (req, res, next) => {
  res.status(200).json({ message: "Get all class" });
};
getoneclass = (req, res, next) => {
  res.status(200).json({ message: `Get one class with id ${req.params.id}` });
};
deleteclass = (req, res, next) => {
  res
    .status(200)
    .json({ message: `Delete the class with id ${req.params.id}` });
};
addclass = (req, res, next) => {
  const classs = req.body;
  console.log("This is the data", classs);
  //res.send("Data received");
  if (!classs) {
    return res.status(400).json({ message: "No data provided" });
  } else {
    res.status(201).json(classs);
  }
};
editclass = (req, res) => {
  console.log(req.params.id);
  res.status(200).json({ massge: `hello edited id ${req.params}` });
};
getclasschildren = (req, res, next) => {
  res.status(200).json({ massge: "get  class children" });
};
getclasstecher = (req, res, next) => {
  res.status(200).json({ massge: "get  class teacher" });
};

exports = module.exports = {
  getAllclasss,
  getoneclass,
  addclass,
  deleteclass,
  editclass,
  getclasschildren,
  getclasstecher,
};
