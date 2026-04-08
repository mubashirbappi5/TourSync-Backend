import { NextFunction, Request, Response, Router } from "express";
import { userController } from "./User.controller";


import { ZodSchema } from "zod";
import { createUserZodSchema } from "./user.validate";


const router = Router()

const validateRequest = (Zodschema:ZodSchema)=>async (req:Request,res:Response,next:NextFunction)=>{


    
try{
     req.body= await Zodschema.parseAsync(req.body)
 next()

}
catch(error){
    next(error)
}
}

router.post("/register", validateRequest(createUserZodSchema), userController.createUser)

export const userRoute = router