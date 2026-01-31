import {Server  } from "http";
import express from "express";
import mongoose from  "mongoose";





let server :Server;


const app = express();
const startServer =async ()=>{
try {
      await mongoose.connect("mongodb+srv://todotest:6VjC74btjQxT1tk7@cluster0.ig6ro.mongodb.net/TourSync-DB?appName=Cluster0")

    console.log("Connected to MongoDB");   

    server =app.listen(5000,()=>{
        console.log("Server is running on port 5000");

    })

    
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
    
}
}


startServer();