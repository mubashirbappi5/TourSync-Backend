
export enum role {
    SUPER_ADMIN="ADMIN",
    ADMIN="ADMIN",
    USER="USER",
    GUIDE="GUIDE"
    
}

export interface IAuthProvider {
    provider:string,
    providerId:string,



}

export enum ISActive {
    ACTIVE="ACTIVE",
    INACTIVE="INACTIVE",
    BLOCKED="BLOCKED"
}
export interface IUser {
    name:string,
    email:string,
    password?:string,
    phone?:string,
    picture?:string,
    address?:string,
    isDeleted?:string,
    isActive?:ISActive,
    isVerified?:string,
     role:role,
    auths:IAuthProvider[],
   
    bookings?:
    guides?:

}