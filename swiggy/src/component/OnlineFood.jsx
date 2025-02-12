import React from 'react'
import Rescard from './Rescard'

function OnlineFood({data}) {
  return (
    <div className='w-full flex justify-center '>
     <div className='w-[82%] border-b border-gray-300 pb-10'>
     <h1 className='text-2xl font-bold'>Restaurants with online food delivery in Delhi</h1>
     <div className='grid grid-cols-4 gap-7 mt-6'>
     {
        data.map(({info})=>(
     <div className='hover:scale-95 duration-300'>
        <Rescard {...info}/>
     </div>
        ))
      }
     </div>
     </div>
    </div>
  )
}

export default OnlineFood
