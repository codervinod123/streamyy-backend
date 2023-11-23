import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express";
import connect_DB from "./db/index.js";

dotenv.config({
    path: './.env'
})

const app=express();

connect_DB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT} `);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

