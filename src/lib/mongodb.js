import mongoose from "mongoose";

const connectMongoDB = async () => {
  if(mongoose.connections[0].readyState){
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    return true;
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};

export default connectMongoDB;