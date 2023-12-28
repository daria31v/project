import mongoose from 'mongoose'

const connectMongoDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to MongoDB')
    // return true;
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error)
    throw new Error('Error connecting to MongoDB')
  }
}

export default connectMongoDB
