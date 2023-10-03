import {User} from "@prisma/client"
import {Course} from "@prisma/client"

export type SafeUser = Omit<User ,"createdAt"| "updatedAt"> & {createdAt:string, updatedAt:string}
//safe user type definition to hide the createdAt and updatedAt fields from the client


export type safeCourse = Omit<Course ,"createdAt"> & {createdAt:string}