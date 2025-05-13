import React from 'react'
import { useEffect } from 'react'
export const Mymodal = ({CloseModal}) => {
    useEffect(() => {
    document.body.style.overflowY="hidden"
    return ()=>{
        document.body.style.overflowY="scroll"
    }
    }, [])
  return (
    <div>
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/20'onClick={CloseModal}></div>
        <div className='z-10 fixed max-w-[400px] top-[50%] left-[50%] translate-[-50%] bg-white p-2 rounded-md'>
        <h2 className='font-bold'>Stay tuned</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A at ipsum expedita debitis ea natus doloribus nisi laboriosam animi! Aperiam magnam quos temporibus pariatur nemo reprehenderit explicabo fuga possimus. Possimus!
            </p>
            <button className='border p-2 bg-black text-white rounded-md' onClick={CloseModal}>Accept it</button>
            </div>
    </div>
  )
}
