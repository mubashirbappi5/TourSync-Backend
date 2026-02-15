import { model, Schema } from "mongoose";
import { IAuthProvider, ISActive,  IUser, role, } from "./User.interface";



const AuthProviderSchema = new Schema<IAuthProvider>({
    provider:{type:String,required:true},
    providerId:{type:String,required:true},
},{
    _id:false,
    versionKey:false
})


const userSchema = new Schema<IUser>({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String},
    role: {
        type: String,
        enum: Object.values(role),
        default: role.USER
    },
    phone:{type:String},
    picture:{type:String},
    address:{type:String},
    isDeleted:{type:Boolean,default:false},
    isActive:{
        type: String,
        enum: Object.values(ISActive),
        default: ISActive.ACTIVE
    },
    isVerified:{type:Boolean,default:false},

  auths:{
    type:[AuthProviderSchema],
    required:true,
    }
  



},{
    timestamps:true,
    versionKey:false
})

export const userModel = model<IUser>("User", userSchema)