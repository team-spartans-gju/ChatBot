import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


export const connectDB = async() => {
    try {
        const InstanceConnection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        
        console.log(`Mongo DB is Connected Successfully, ${InstanceConnection.connection.host}`);
    } catch (error) {
        console.log(error, "error in connecting the database");
        process.exit(1);
        
    }
}