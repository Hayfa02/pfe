const mongoose = require('mongoose');

const server = 'mongo-backend:27017'; // REPLACE WITH YOUR OWN SERVER
const database = 'PFE';          // REPLACE WITH YOUR OWN DB NAME

mongoose.connect('mongodb://root:password@mongo-backend:27017/PFE', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected!!');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});