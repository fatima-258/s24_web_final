"use server"
import prisma from "@/lib/db"

export const UpdateTask = async(id:string, isCompleted:boolean) =>{
    try {
        const res = await prisma.Tasks.update({
            where: {
              id,
            },
            data: {
             isCompleted,
            },
          })
        return res;
    } catch (error) {
        console.log('error in creating task', error)
    }
}