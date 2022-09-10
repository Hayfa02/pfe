/**const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PFE').then(() => {
  console.log("Successfully connected to the database");
})
  .catch((err) => {
    console.log("Could not connect to the database. Error...");
    process.exit();
  });**/


const mongoose = require("mongoose");

// ...

/**const start = async () => {
  try {
    await mongoose.connect(
      'mongodb://root:password@mongo-backend:27017/PFE',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("Successfully connected to the database");
  } catch (error) {
    console.log("Could not connect to the database. Error...");
    console.error(error);
    process.exit(1);
  }
};

start();**/

/**mongoose.connect(
  'mongodb://root:password@mongo-backend:27017/PFE',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).
  catch(error => handleError(error));**/

// Or:
try {
  mongoose.connect('mongodb://root:password@mongo-backend:27017/PFE');
} catch (error) {
  handleError(error);
}