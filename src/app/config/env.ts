import dotenv from "dotenv";
dotenv.config();


const envVars = {
    port: process.env.PORT || 5000,
    mongoDBUrl: process.env.MONGODB_URL || "",
}

export default envVars;