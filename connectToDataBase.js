import mongoose from "mongoose";


const uri = 'mongodb+srv://Gokul:Gokul16@kprcluster.ekfn7.mongodb.net/?retryWrites=true&w=majority&appName=KPRCluster';

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
