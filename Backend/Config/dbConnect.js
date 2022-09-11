const MongoClient = require('mongodb').MongoClient;
// The default url used to connect to MongoDB is mongodb://[service-name-decribed-in-the-compose-file]:/27017
// In this case, the service name is "database"
const url = 'mongodb://root:password@mongo-backend:27017/PFE';

// Connect to MongoDB
MongoClient.connect(url, (err, client) => {
  if(err){
    throw new Error('Could not connect to the database');
  }

  console.log('Successfully connected to the database');
})