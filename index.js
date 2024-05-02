const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

require('./db')
const Car = require('./models/car.models')


// // Access your MongoDB connection string from secrets
// const mongoURI = process.env['MONGODB']

// // Use mongoose to connect
// mongoose
//   .connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB')
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error)
//   })

// 

// const carSchema = new mongoose.Schema({
//   make: String,
//   model: String,
//   year: Number,
// })

// const Car = mongoose.model('Car', carSchema)

// 
async function addCarData() {
  const newCar = new Car({
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
  })

  try {
    const savedCar = await newCar.save()
    console.log('Car data saved successfully:', savedCar)
  } catch (error) {
    console.error('Error saving car data:', error)
  }
}

addCarData()

// 
async function addAnotherCarData() {
  const anotherCar = new Car({
    make: 'Honda',
    model: 'Civic',
    year: 2023,
  })

  try {
    const savedAnotherCar = await anotherCar.save()
    console.log('Another car data saved successfully:', savedAnotherCar)
  } catch (error) {
    console.error('Error saving another car data:', error)
  }
}

addAnotherCarData()

// 

async function findAllCars() {
  try {
    const allCars = await Car.find()
    console.log('All cars in the database:', allCars)
  } catch (error) {
    console.error('Error fetching all cars:', error)
  }
}

findAllCars()