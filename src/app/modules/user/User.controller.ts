import { NextFunction, Request, Response } from "express";

import httpStatus from 'http-status-codes'
import { userServices } from "./User.service";

const createUser = async (req:Request, res:Response,next:NextFunction)=>{
    try{

       const user  = await userServices.createUserService(req.body)


        res.status(httpStatus.CREATED).json({message:"User created successfully",user})

    }
    catch(err){
      next(err)
    }
}

export const  userController = {
    createUser
}