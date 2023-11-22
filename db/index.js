import mongoose, { mongo } from "mongoose";
import { DB_name } from "../constants.js";



const connect_DB=async()=>{
    try {
        const connectingInstance=await mongoose.connect("mongodb+srv://vinodpvp9369:4BF5NKWcR8YhRCme@cluster0.fj3v3gb.mongodb.net/youtube");
        console.log("Connected successfully");
    } catch (error) {
          console.log(error)
          process.exit(1);
    }
}

export default connect_DB