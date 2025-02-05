import { useEffect, useState } from "react"

function App() {
function SubmitTodo(event){
  event.preventDefault();
  // SetAlltodo(preValue=>[...preValue,Todo])
  if(!Todo.title || !Todo.description){
    return
  }
  SetAlltodo([...Alltodo,Todo])
  SetlocalStore([...Alltodo,Todo])
  getTodoData()
}
function deleteTodo(i){
  let newArry=[...Alltodo]
  newArry.splice(i,1)
  SetlocalStore(newArry)
  getTodoData()
  SetAlltodo(newArry)
  
}
function SetlocalStore(todo){
  localStorage.setItem("todos",JSON.stringify(todo))
}
function getTodoData(){
  let data=JSON.parse(localStorage.getItem("todos")) || []
  SetAlltodo(data);
}
useEffect(()=>{
  getTodoData();
},[])
  const[Alltodo,SetAlltodo]=useState([])
  const[Todo,SetTodo]=useState({title:"",description:""})
  return (
   <div>
     <h1>Todo App</h1>
    <div>
      <input type="text"  placeholder="Title.." onChange={(e)=>SetTodo((preValue)=>({...preValue,title:e.target.value}))}/>
      <br />
      <br />
      <input type="text" placeholder="Description.." onChange={(e)=>SetTodo((preValue)=>({...preValue,description:e.target.value}))}/>
      <br />
      <br />
      <button onClick={SubmitTodo}>AddTodo</button>
    </div>
    <div>
     { Alltodo.map((data,i) =>(
        <div key={i}>
          <p>{i+1}</p>
          <p>{data.title}</p>
          <p>{data.description}</p>
          <button onClick={()=>deleteTodo(i)}>delete</button>
        </div>
      ))}
    </div>
   </div>
  )
}

export default App
