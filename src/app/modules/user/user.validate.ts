import z from "zod";


export const createUserZodSchema = z.object({
       name: z.string({ error: "Name is required" }).min(3),
        email: z.string({ error: "Email is required" }).email(),
        password: z.string({ error: "Password is required" }).min(6),
        phone: z.string().optional(),
        picture: z.string().optional(),
        address: z.string().optional(),
        isDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        isVerified: z.boolean().optional(),
        role: z.string().optional(),
        auths: z.array(z.string()).optional(),
        bookings: z.array(z.string()).optional(),
        guides: z.array(z.string()).optional()

    }
 

)  