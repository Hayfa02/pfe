const mongoose = require('mongoose');
import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo-backend:27017/PFE', {user:'root', password:'password', authSource:'PFE', useNewUrlParser: true, useUnifiedTopology: true})
  
mongoose.connection
  .once("open", () => console.log("Successfully connected to the database"))
  .on("erreur", error => {
    console.log("Could not connect to the database. Error..." , error);

  });