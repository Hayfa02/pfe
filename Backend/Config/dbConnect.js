const mongoose = require('mongoose');

mongoose.connect('mongodb://root:password@mongo-backend:27017/PFE', { authSource:'PFE', useNewUrlParser: true, useUnifiedTopology: true})
  
mongoose.connection
  .once("open", () => console.log("Successfully connected to the database"))
  .on("erreur", error => {
    console.log("Could not connect to the database. Error..." , error);

  });