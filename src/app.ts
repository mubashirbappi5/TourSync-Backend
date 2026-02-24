
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import dotenv from "dotenv";
import { router } from './app/routes/index';


dotenv.config();


const app = express();

app.use(express.json())
app.use(cors())


app.use("/api/v1",router)
app.get("/",(req:Request, res:Response)=>{
    res.send("Welcome to TourSync API");
})

app.use((err: Error, req: Request,res: Response, next: NextFunction)=>{
    console.error(err.stack);
    res.status(500).json({message:"Internal Server Error",error:err})
    next(err);
})


export default app;

