"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { GetTasks } from '@/actions/getTasks';
import { DeleteTask } from '@/actions/deleteTask';
import { UpdateTask } from '@/actions/updateTask';

type TaskEntries = {
    id:string;
    name:string;
    isCompleted:boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TaskList = () => {
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

    const deletetask = async(id:string) => {
        const remove = await DeleteTask(id)
    }

    const updatetask = async(id:string, isCompleted:boolean) => {
        const remove = await UpdateTask(id, isCompleted)
    }

  return (
    <div>
        <div className='flex flex-col justify-center gap-4'>
            {task.map((item, index)=>(
                <div key={index} className='flex items-center justify-between rounded-lg border border-black p-4 bg-slate-100'>
                <p>{item.name}</p>
                <div className='flex items-center gap-2'>
                    <button className='rounded-lg border border-black bg-green-300 p-2' onClick={()=>{
                         if(item.id){
                            setCompleted(!completed)
                            updatetask(item.id, completed)
                         }
                    }} >Mark as completed</button>
                    <button className='p-2 font-bold text-2xl text-red-600' onClick={()=> item.id && deletetask(item.id)} >X</button>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}


export default TaskList