import mongoose from 'mongoose';
import dontenv from "dotenv"

  dontenv.config()  

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONN_STRING);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
