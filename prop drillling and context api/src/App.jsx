import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import userContext from './component/utils/contextApi';

function App() {

let [username,Setusername]=useState("");
 useEffect(()=>{
  let data="Devanshu Gupta";
  Setusername(data)
 },[])
  return (
    
     <userContext.Provider value="Devanshu Gupta">
  <div style={{border:"2px solid black",padding:"20px"}}>
     <h1>App</h1>
     <Grandparent username={username}/>
    
    
    </div>
 </userContext.Provider>
  )
}

export default App

function Grandparent({username}){
  return(
    <div style={{border:"2px solid blue",padding:"20px"}}>
      <h1>Grandparent</h1>
      <Parent name={username}/>
    </div>
  )
}
function Parent({name}){
  return(
    <div style={{border:"2px solid green",padding:"20px"}}>
      <h1>Parent</h1>
      <Child username={name}/>
    </div>
  )
}
function Child({username}){
 let name=useContext(userContext)
  return(
    <div style={{border:"2px solid red",padding:"20px"}}>
    <h1>Child</h1>
    <h1>{username}</h1>
    <h1>{name}</h1>
  </div>
  )
}

// second method

function superchild(){
  return(
    <userContext.Consumer>
      {
        (name)=>{
          console.log(name)
        }
      }
    </userContext.Consumer>
  )
}