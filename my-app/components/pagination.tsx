import React from 'react'

const Pagination = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <button className='border border-black rounded-lg p-4 text-xl font-bold w-32'>
                Previous
            </button>
            <button className='border border-black rounded-lg p-4 text-xl font-bold w-32'>
                Next
            </button>
        </div>
    </div>
  )
}

export default Pagination