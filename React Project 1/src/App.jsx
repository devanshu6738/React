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
    <div>
      <h1>E-commerce Website</h1>
      <div>
        <input type="text" placeholder='Search Products..' onChange={(e)=> Setval(e.target.value)} />
        <button onClick={filterHandler}>Search</button>
      </div>
      <Allcards data={filterData}/>
    </div>
  )
}

export default App
