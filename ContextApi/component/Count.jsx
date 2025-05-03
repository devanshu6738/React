import React, { useContext } from 'react'
import CountContext from '../utils/CountContext'

function Count() {
    let{Countdata,SetCountdata}=useContext(CountContext)
    function Increment(){
        SetCountdata((prev)=>prev+1)
    }
    function Decrement(){
        SetCountdata((prev)=>prev-1)
    }
  return (
      <div>
        <h1>{Countdata}</h1>
            <button onClick={Increment}>Increase</button>
            <button onClick={Decrement}>Decrease</button>
        </div>
  )
}

export default Count
