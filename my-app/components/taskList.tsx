import React from 'react'
import { Button } from './ui/button'

const TaskList = () => {
  return (
    <div>
        <div className='flex flex-col justify-center gap-4'>
            <div className='flex items-center justify-between rounded-lg border border-black p-4 bg-slate-100'>
                <p>This is a simple Task...</p>
                <div className='flex items-center gap-2'>
                    <button className='rounded-lg border border-black bg-green-300 p-2' >Mark as completed</button>
                    <button className='p-2 font-bold text-2xl text-red-600' >X</button>
                </div>
            </div>
            <div className='flex items-center justify-between rounded-lg border border-black p-4 bg-slate-100 '>
                <p>This is a simple Task...</p>
                <div className='flex items-center gap-2'>
                    <button className='rounded-lg border border-black bg-green-300 p-2' >Mark as completed</button>
                    <button className='p-2 font-bold text-2xl text-red-600' >X</button>
                </div>
            </div>
            <div className='flex items-center justify-between rounded-lg border border-black p-4 bg-slate-100 '>
                <p>This is a simple Task...</p>
                <div className='flex items-center gap-2'>
                    <button className='rounded-lg border border-black bg-green-300 p-2' >Mark as completed</button>
                    <button className='p-2 font-bold text-2xl text-red-600' >X</button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default TaskList