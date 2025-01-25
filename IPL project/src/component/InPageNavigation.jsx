import React, { useState } from 'react'

function InPageNavigation({team,children}) {
    const[index,setIndex]=useState(0);

  return (  
    <>
    {
    team.map((data,i) => (
    <button onClick={()=>setIndex(i)}>{data}</button>
    ))
   }
    {
      children[index]
    }
    </>
  )
}

export default InPageNavigation
