//const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose");
// The default url used to connect to MongoDB is mongodb://[service-name-decribed-in-the-compose-file]:/27017
// In this case, the service name is "database"
//const url = 'mongodb://root:password@mongo-backend:27017/';

// Connect to MongoDB
/**MongoClient.connect(url, (err, client) => {
  if(err){
    throw new Error('Could not connect to the database');
  }

  console.log('Successfully connected to the database');
})
**/
const _database = 'mongodb://root:password@mongo-backend:27017/PFE?authSource=admin';
mongoose.connect(_database, {
    useNewUrlParser: true
})
.then(() => console.log('Connected to MongoDB ...'))
.catch(err => console.error('Could not connect to MongoDB:‌', err));