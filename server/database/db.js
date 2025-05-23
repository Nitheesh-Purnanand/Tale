import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const Username = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
  
const connection = async () =>{
    const MONGODB_URI = "mongodb://127.0.0.1:27017/whatsapp_clone_users";
    const URL = `mongodb+srv://${Username}:${PASSWORD}@clone-whatsapp.9rgcf.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsapp`
    try{
    //    await   mongoose.connect(URL)
    await mongoose.connect(MONGODB_URI, {serverSelectionTimeoutMS: 30000,connectTimeoutMS: 30000,}).then(() => {console.log("Connected to MongoDB successfully");}).catch((err) => {console.error("MongoDB connection error:", err);});

    }
    catch(error){
        console.log('error while connecting',error.message);
    }
}

export default connection