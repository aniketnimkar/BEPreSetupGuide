const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

// Access your MongoDB connection string from secrets
const mongoURI = process.env['MONGODB']

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })