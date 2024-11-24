import { useState } from 'react';
import './App.css'

function App() {
  let [data,SetData]=useState(0)
  function IncreaseVal(){
    // SetData(data++)
    SetData((data)=>data+1)
  }
  function DecreaseVal(){
    //  SetData(data--)
    // SetData((data)=>data-1)
    SetData(--data)
  }
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={IncreaseVal}>Increase</button>
      <h2>{data}</h2>
      <button onClick={DecreaseVal}>Decrease</button>
    </>
  )
}

export default App
