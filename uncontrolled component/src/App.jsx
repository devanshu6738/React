import { useRef, useState } from "react";

function App() {
  let emailRef=useRef();
  let PasswordRef=useRef();
  function SubmitFrom(event){
    event.preventDefault();
    // console.log(emailRef.current.value);
    // emailRef.current.style.padding="20px" 
    console.log({"email":emailRef.current.value,"password":PasswordRef.current.value});
     
  }
  return(
    <>
     <form action="">
      <input type="text" placeholder="email.." ref={emailRef}/>
      <br />
      <br />
      <input type="password" placeholder="password.." ref={PasswordRef}/>
      <br />
      <br />
      <button onClick={SubmitFrom}>Login</button>
     </form>
    </>
  )
}

export default App
