import { useState } from 'react'
import './App.css'
import Allcards from './component/Allcard'
import {data} from './utilis/data'

function App() {
  const[val,Setval]=useState('')
  const[filterData,SetfilterData]=useState(data)
  function filterHandler(){
    let res=data.filter((item)=>item.title.toLowerCase().includes(val.toLowerCase()))
    SetfilterData(res);
    
  }
  return (
     <div className='bg-[#0B1C2E] text-white p-10 min-h-screen  '>
      <h1 className='text-5xl font-bold'>E-commerce Website</h1>
      <div className='flex gap-2 mt-5'>
        <input type="text" placeholder='Search Products..' onChange={(e)=> Setval(e.target.value)} className='w-96 h-12 text-black outline-none rounded-md p-2'/>
        <button onClick={filterHandler} className='pl-5 pr-5 w-28 bg-white rounded-md text-black'>Search</button>
      </div>
      <Allcards data={filterData}/>
    </div>
  )
}

export default App
