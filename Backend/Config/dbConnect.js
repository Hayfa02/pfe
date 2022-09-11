const mongoose = require('mongoose');

const server = 'mongo-backend:27017'; // REPLACE WITH YOUR OWN SERVER
//const server1= 'localhost:27017';
const database = 'PFE';          // REPLACE WITH YOUR OWN DB NAME
const user = 'root';
const password = 'password'
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://root:password@mongo-backend:27017/PFE', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        });

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();