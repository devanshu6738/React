import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'

function ResMenu() {
  const[value,setValue]=useState(0)
  function handleNext(){
    value==180?"":setValue((next)=>next+20)
  }
  function handlePrev(){
    value==0?"":setValue((prev)=>prev-20)
  }
    const {id}=useParams()
    let mainId=id.split("-").at(-1)
    const[menudata,Setmenudata]=useState([])
    const[resInfo,SetresInfo]=useState([])
    const[discountData,setDiscountData]=useState([])
    async function fetchMenu(){
        let data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=683064&catalog_qa=undefined&submitAction=ENTER`)
        let result =await data.json();
        Setmenudata(result.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card)
        SetresInfo(result.data.cards[2].card.card.info)
        setDiscountData(result.data.cards[3].card.card.gridElements.infoWithStyle.offers)
        // Setmenudata(result?.data?.cards[0]?.card?.card?.text)
    }
    useEffect(()=>{
        fetchMenu();
    },[])
  return (
    <div className='w-full'>
      <div className='w-[800px] mx-auto mt-8'>
        <p className='text-gray-500 text-[12px] '><Link to={"/"}><span className='hover:text-black'>Home</span></Link>/ <Link to={"/"}><span className='hover:text-black '>{resInfo.city}</span></Link> / <span className='text-black font-semibold'>{resInfo.name}</span></p>
        <h1 className='pt-10 font-bold text-2xl pl-2'>{resInfo.name}</h1>
        <div className='w-full h-[206px] mt-3 rounded-4xl bg-gradient-to-t from-slate-200/70 p-5'>
        <div className='h-full border border-gray-300 rounded-4xl bg-white px-4 pb-4'>
        <div className='flex gap-2 font-bold p-2'>
        <i class="fi fi-sr-circle-star text-[#14883F] text-xl "></i>
        <span>{resInfo.avgRating}</span>
        <span>({resInfo.totalRatingsString}) •</span>
        <span>{resInfo.costForTwoMessage}</span>
        </div>
        <p className='text-[#FF5200] font-bold text-sm underline'>{resInfo.cuisines?.join(", ")}</p>
        <div className='pt-4 flex w-full gap-2'>
         <div className='flex flex-col items-center justify-center w-[7px]'>
         <div className='w-[7px] h-[7px] bg-[#C4C4C4] rounded-full'></div>
          <div className='h-6 w-[2px] bg-[#C4C4C4]'></div>
          <div className='w-[7px] h-[7px] bg-[#C4C4C4] rounded-full'></div>
         </div>
          <div className='flex flex-col'>
            <div className='flex gap-1'>
            <p className='text-sm font-bold'>Outlet</p> <span className='pb-3 text-sm font-bold text-gray-500'>{resInfo.locality}</span>
            </div>
            <p className='text-sm font-bold'>{resInfo?.sla?.slaString?.toLowerCase()}</p>
          </div>
        </div>
        <hr className='mt-3 text-gray-200'/>
        
        </div>
        </div>
        <div className='flex justify-between mt-6'>
        <h1 className='text-xl font-bold '>Deals for you</h1>
        <div className='flex gap-3'>
        <div className=' bg-[#D8D9DA] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer' onClick={handlePrev}>
        <i className="fi fi-rr-arrow-small-left text-2xl"></i>
        </div>
        <div className=' bg-[#D8D9DA] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer' onClick={handleNext}>
        <i className="fi fi-rr-arrow-small-right text-2xl"></i>
        </div>
        </div>
        
        </div>
        {
          discountData.map((item)=>(
            <Discount data={item}/>
          ))
          
        }
      </div>
    </div>
  )
}
function Discount({data:{info}}){
  return (
    <div>
      hii chai pee lo
    </div>
  )
}

export default ResMenu
