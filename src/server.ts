import {Server  } from "http";
import mongoose from  "mongoose";

import dotenv from "dotenv";
import app from "./app";
dotenv.config();




let server :Server;



const startServer =async ()=>{
try {
      await mongoose.connect(process.env.MONGODB_URL as string);

    console.log("Connected to MongoDB");   

    server =app.listen(5000,()=>{
        console.log("Server is running on port 5000");

    })

    
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    
}
}


startServer();