import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: DB_NAME
        });
        console.log(`\n MongoDB connectedd !! DB HOST:
            ${connectionInstance.connection.host}`);
    }catch(error){
        console.error("MONGODB Connection error",error);
        process.exit(1);
        throw error;
    }
}
export default connectDB;