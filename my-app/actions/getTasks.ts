"use server"
import prisma from "@/lib/db"

export const GetTasks = async() =>{
    try {
        const res = await prisma.Tasks.findMany()
        return res;
    } catch (error) {
        console.log('error in getting tasks', error)
    }
}