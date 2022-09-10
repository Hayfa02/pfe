const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:password@mongo-backend:27017/PFE').then(() => {
  console.log("Successfully connected to the database");
})
  .catch((err) => {
    console.log("Could not connect to the database. Error...");
    process.exit();
  });


