import mongoose from "mongoose";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

// Ensure URL is defined
const URL = process.env.MONGODB_URL;

if (!URL) {
  console.error("MongoDB URL not found in environment variables");
  process.exit(1); // Exit the application
}


export const mongoDBConnection = async()=>{
   try {
    await mongoose.connect(URL)
    console.log("MongoDB Connected Successfully")
   } catch (error) {
    console.log('error in connection',error.message.toString());
   }
}