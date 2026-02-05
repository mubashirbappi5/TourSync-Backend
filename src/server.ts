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

process.on("SIGTERM",()=>{
    console.error("SIGTERM received! Shutting down....");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }

     process.exit(1)
})
process.on("SIGINT",()=>{
    console.error("SIGINT received! Shutting down....");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }

     process.exit(1)
})
process.on("unhandledRejection",()=>{
    console.error("Unhandled Rejection! Shutting down....");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }

     process.exit(1)
})


process.on("uncaughtException",()=>{
    console.error("Uncaught Exception! Shutting down....");
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }

     process.exit(1)
})