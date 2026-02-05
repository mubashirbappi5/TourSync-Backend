
import express, { Request, Response } from "express";


import dotenv from "dotenv";
import { de } from "zod/v4/locales";
dotenv.config();


const app = express();


app.get("/",(req:Request, res:Response)=>{
    res.send("Welcome to TourSync API");
})





export default app;