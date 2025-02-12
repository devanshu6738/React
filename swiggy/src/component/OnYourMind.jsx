import React, { useEffect, useState } from 'react'

function OnYourMind({data}) {
    // const[data,setData]=useState([])
    const[value,setValue]=useState(0)
    function handleNext(){
      value==180?"":setValue((next)=>next+20)
    }
    function handlePrev(){
      value==0?"":setValue((prev)=>prev-20)
    }
    
    // async function FetchData(){
    //   const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=29.15010&lng=75.71760&carousel=true&third_party_vendor=1")
    //   const result=await data.json();
    //   // console.log(result.data.cards[0].card.card.imageGridCards.info)
    //   setData(result.data.cards[0].card.card.imageGridCards.info)
    // }
    // useEffect(()=>{
    //   FetchData();
    // },[])
  return (
    <div className='w-full '>
      <div className='w-[82%] mx-auto overflow-x-hidden border-b-1 pb-12 border-gray-200 justify-center'>
        <div className='flex justify-between mt-4'>
        <h1 className='text-2xl font-bold '>What's on your mind?</h1>
        <div className='flex gap-3'>
        <div className=' bg-[#D8D9DA] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer' onClick={handlePrev}>
        <i className="fi fi-rr-arrow-small-left text-2xl"></i>
        </div>
        <div className=' bg-[#D8D9DA] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer' onClick={handleNext}>
        <i className="fi fi-rr-arrow-small-right text-2xl"></i>
        </div>
        </div>
        </div>
      <div 
      style={{translate:`-${value}%`}}
      className={`flex w-full gap-7  duration-1000`}>
        
      {
          data.map((items)=>(
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${items.imageId}`} alt="" className='w-36 mt-4'/>
          ))
      }
      </div>
      </div>
    </div>
  )
}

export default OnYourMind
