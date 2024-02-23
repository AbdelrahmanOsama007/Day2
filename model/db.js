// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://mongodb://127.0.0.1:27017/pdDB") //returns a promise
//   .then(() => {
//     console.log("Connected to the database");
//     //listen to the server only after connecting to the database has been
//     successful;
//     server.listen(8080, () => {
//       console.log("Server is running on port 8080");
//     });
//   })
//   .catch((error) => {
//     console.log("Error connecting to the database", error);
//   });
// module.exports={mongoose};
// const mongoose = require("mongoose");


const mongoose = require("mongoose");

const connectdb = async (url) => {
  try {
    await mongoose.connect(url, {
     // useNewUrlParser: true,
    //useUnifiedTopology: true,
    });
    console.log("Connected to the database successfully");
  } catch (err) {
    console.log("I come from database" + err);
  }
};

module.exports = connectdb;
