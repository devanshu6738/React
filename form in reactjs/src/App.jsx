import { useState } from "react";

function App() {
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')

  function formSubmit(submit){
     submit.preventDefault();
     console.log({email,password}); 

  }
  function EmailChange(event){
    setemail(event.target.value)
  }
  function PasswordChange(event){
    setpassword(event.target.value)
  }
  return (

 <form action="">
  <input type="text" placeholder="email" onChange={EmailChange}/>
  <br />
  <br />
  <input type="password" placeholder="password" onChange={PasswordChange}/>
  <br />
  <br />
  <button onClick={formSubmit}>Login</button>
 </form>
  )
}

export default App
