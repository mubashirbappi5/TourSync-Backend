import { Request, Response } from "express";

import httpStatus from 'http-status-codes'
import { userServices } from "./User.service";

const createUser = async (req:Request, res:Response)=>{
    try{

       const user  = await userServices.createUserService(req.body)


        res.status(httpStatus.CREATED).json({message:"User created successfully",user})

    }
    catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:"Internal Server Error",error:err})
        
    }
}

export const  userController = {
    createUser
}