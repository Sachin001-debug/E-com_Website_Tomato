import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const dbUrl = process.env.DB_URL;
const connectDb = async ()=>{
   try{
    await mongoose.connect(dbUrl);
    console.log("Db connected!!")
   }catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }

}
export default connectDb;