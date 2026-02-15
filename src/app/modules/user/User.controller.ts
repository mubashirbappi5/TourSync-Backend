import { Request, Response } from "express";
import { userModel } from "./User.model";
import httpStatus from 'http-status-codes'

const createUser = async (req:Request, res:Response)=>{
    try{

        const {name ,email} = req.body

      const user = await userModel.create({
        name,
        email
      })

        res.status(httpStatus.CREATED).json({message:"User created successfully",user})

    }
    catch(err){
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({message:"Internal Server Error",error:err})
        
    }
}

export const  userController = {
    createUser
}