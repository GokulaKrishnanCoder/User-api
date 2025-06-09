import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const uri = process.env.MongoDB;

const connector = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB successfully');
    }catch (error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if connection fails
    }}
// connector();
export default connector;
