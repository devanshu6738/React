import React, { useEffect, useState } from 'react'
import Rescard from './Rescard';

function TopRes({data}) {
  const [value,Setvalue]=useState(0);
  // const [data,Setdata]=useState([])
  function handlePrev(){
    
    value==0?"":Setvalue((next)=>next+20)
    
  }
  function handleNext(){
    value==-400?"":Setvalue((prev)=>prev-20)
  }
  // async function FetchData(){
  //       const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=29.15010&lng=75.71760&carousel=true&third_party_vendor=1")
  //       const result=await data.json();
  //       console.log(result);
        
  //       Setdata(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        
  //       // Setdata(result.data.cards[0].card.card.imageGridCards.info)
  //     }
  //     useEffect(()=>{
  //       FetchData();
  //     },[])
  return (
    <div className='w-full mt-8 mb-12'>
    <div className='w-[82%] mx-auto overflow-x-hidden border-b-1 pb-12 border-gray-200 justify-center'>
      <div className='flex justify-between mt-4'>
      <h1 className='text-2xl font-bold '>Top restaurant chains in Delhi</h1>
      <div className='flex gap-3'>
      <div className=' bg-[#D8D9DA] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer' onClick={handlePrev}>
      <i className="fi fi-rr-arrow-small-left text-2xl"></i>
      </div>
      <div className=' bg-[#D8D9DA] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer' onClick={handleNext}>
      <i className="fi fi-rr-arrow-small-right text-2xl"></i>
      </div>
      </div>
      </div>
    <div className='flex mt-4 gap-6 duration-300' style={{translate:`${value}%`}}>
      {
        data.map(({info,cta:{link}})=>(
     <div className='hover:scale-95 duration-300'>
        <Rescard {...info} link={link}/>
     </div>
        ))
      }
    </div>
    
    </div>
  </div>
  )
}

export default TopRes
