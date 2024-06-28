"use server"
import prisma from "@/lib/db"

export const DeleteTask = async(id:string) =>{
    try {
        const res = await prisma.Tasks.delete({
            where: {
             id,
            },
          })
        return res;
    } catch (error) {
        console.log('error in deleting task', error)
    }
}