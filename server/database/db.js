import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const Username = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async () =>{
    const URL = `mongodb+srv://${Username}:${PASSWORD}@clone-whatsapp.9rgcf.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsapp`
    try{
       await   mongoose.connect(URL)
       console.log("database connected successfully")
    }
    catch(error){
        console.log('error while connecting',error.message);
    }
}

export default connection