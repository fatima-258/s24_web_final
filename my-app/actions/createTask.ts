"use server"
import prisma from "@/lib/db"

export const CreateTask = async(name:string, isCompleted:boolean) =>{
    try {
        const res = await prisma.Tasks.create({
            data: {
              name,
              isCompleted
            },
          })
        return res;
    } catch (error) {
        console.log('error in creating task', error)
    }
}