import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./utils/CounterSlice";

function App() {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.counter)
  console.log(data.value);
  function handleIncrement(){
    dispatch(increment())
  }
  function handledecrement(){
    dispatch(decrement())
  }
  function handlereset(){
    dispatch(reset())
  }
  
  return (
    <div>
      <h1>devanshu</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handledecrement}>decrement</button>
      <button onClick={handlereset}>reset</button>
      <h1>{data.value}</h1>
    </div>
  )
}

export default App
