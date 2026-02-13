
export enum role {
    SUPER_ADMIN="ADMIN",
    ADMIN="ADMIN",
    USER="USER",
    GUIDE="GUIDE"
    
}
export interface IUser {
    name:string,
    email:string,
    password?:string,
    phone?:string,
    picture?:string,
    address?:string,
    isDeleted?:string,
    isActive?:string,
    isVerified?:string,
     role:role,
    auth:
   
    bookings?:
    guides?:

}