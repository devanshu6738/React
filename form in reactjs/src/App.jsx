import { useState } from "react";

function App() {
  const[data,setData]=useState({"email":"","password":""})

  function formSubmit(submit){
     submit.preventDefault();
     console.log(data); 

  }
  function handleForm(event){
    setData((prevData)=>({...prevData,[event.target.name]:event.target.value}))
  }
  return (

 <form action="">
  <input type="text" placeholder="email" onChange={handleForm}
  name="email" 
  value={data.email}
  />
  <br />
  <br />
  <input type="password" placeholder="password" onChange={handleForm} 
  name="password"
  value={data.password}
  />
  <br />
  <br />
  <button onClick={formSubmit}>Login</button>
 </form>
  )
}

export default App
