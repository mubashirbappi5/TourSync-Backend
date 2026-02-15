
import express, { Request, Response } from "express";
import cors from "cors";

import dotenv from "dotenv";
import { userRoute } from "./app/modules/user/User.route";

dotenv.config();


const app = express();

app.use(express.json())
app.use(cors())


app.use("/api/v1/user",userRoute)
app.get("/",(req:Request, res:Response)=>{
    res.send("Welcome to TourSync API");
})



export default app;

