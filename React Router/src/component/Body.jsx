import { useState } from "react"
import { useNavigate } from "react-router-dom";

function BodyComp(){
  const[data,setData]=useState({email:"",password:""})
  let Navigate=useNavigate();
  let DefaultData={
    email:"dev@gmail.com",
    password:"12345678"
  }
  function SubmitForm(e){
    e.preventDefault();
    let{email,password}=data;
    if(email==DefaultData.email && password==DefaultData.password){
      Navigate("/project");
    }else{
      console.log("wroung crendtial");
      
    }
  }
    return(
        <div className="w-screen flex flex-col items-center">
    <form action="" className="flex flex-col w-52 gap-3 mt-32">
      <input type="text" placeholder="email..." onChange={(e)=>setData((Prevalue)=>({...Prevalue,email:e.target.value}))}/>
      <input type="password" placeholder="password..." onChange={(e)=>setData((Prevalue)=>({...Prevalue,password:e.target.value}))}/>
      <button className="w-48 bg-white" onClick={SubmitForm}>Submit</button>
    </form>
   </div>
    )
}
export default BodyComp