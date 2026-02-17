import { IUser } from "./User.interface";
import { userModel } from "./User.model";

const createUserService = async(Payload : Partial<IUser>)=>{

 const {name ,email} = Payload
    
      const user = await userModel.create({
        name,
        email
      })

      return user
}


export const userServices =   {
    createUserService 
}