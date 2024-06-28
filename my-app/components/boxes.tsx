"use client"
import { GetTasks } from '@/actions/getTasks';
import React, { useEffect, useState } from 'react'


type TaskEntries = {
    id:string;
    name:string;
    isCompleted:boolean;
    createdAt: Date;
    updatedAt: Date;
}
const Boxes = () => {

    const [task, setTask] = useState<TaskEntries[]>([])
    const [completed, setCompleted] = useState(false)

    useEffect(()=>{
        const getTasks = async() => {
            try {
                const fetch = await GetTasks()
                if(fetch){
                    setTask(fetch)
                }
                else{
                    console.log('unable to fetch tasks')
                }
            } catch (error) {
                console.log(error)
            }
        }
        getTasks();
    },[])

    const countCompletedTask = () => {
        let count = 0
        for (let index = 0; index < task.length; index++) {
            if(task[index].isCompleted===true){
                count= count+1;
            }
        }
        return count
    }

    const countPendingTask = () => {
        let count = 0
        for (let index = 0; index < task.length; index++) {
            if(task[index].isCompleted===false){
                count= count+1;
            }
        }
        return count
    }
  return (
    <div>
        <div className='flex justify-between'>
            <div className='flex flex-col items-center bg-blue-300 border border-black rounded-md p-6 w-40'>
                <p>Total Tasks</p>
                <h1 className='text-5xl font-semibold'>{task.length}</h1>
            </div>
            <div className='flex flex-col items-center bg-green-300 border border-black rounded-md p-6 w-40'>
                <p>Completed                  
                </p>
                <h1 className='text-5xl font-semibold'> {countCompletedTask()}</h1>
            </div>
            <div className='flex flex-col items-center bg-yellow-300 border border-black rounded-md p-6 w-40'>
                <p>Pending</p>
                <h1 className='text-5xl font-semibold'>{countPendingTask()}</h1>
            </div>
        </div>
    </div>
  )
}

export default Boxes