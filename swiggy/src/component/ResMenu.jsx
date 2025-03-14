import React, { useContext, useEffect, useState } from 'react'
import { useParams ,Link, data} from 'react-router-dom'
import { AddToCart } from './utils/contextApi'

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
    let resChange=mainId.slice(4)
    const[menudata,Setmenudata]=useState([])
    // console.log(menudata)
    const[resInfo,SetresInfo]=useState([])
    // const[currentIdx,SetcurrentIdx]=useState(true)
    const[topPick,setTopPick]=useState(null)
    const[discountData,setDiscountData]=useState([])
    async function fetchMenu(){
        let data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${resChange}&catalog_qa=undefined&submitAction=ENTER`)
        let result =await data.json();
        
        SetresInfo(result.data.cards[2].card.card.info)
        setDiscountData(result.data.cards[3].card.card.gridElements.infoWithStyle.offers)
        let actualData=(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter((data)=>data?.card?.card?.itemCards || data?.card?.card?.categories)
        // console.log(result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
        let actualMenu=result.data.cards[4].groupedCard.cardGroupMap
        Setmenudata(actualData);
        setTopPick(actualData)
        // console.log((result.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter(data=>data.card.card.title))
        // console.log(actualMenu)
    }
    useEffect(()=>{
        fetchMenu();
    },[])
    // function handleToggle(){
    //   SetcurrentIdx(!currentIdx)
    // }
  
  
  return (
    <div className='w-full'>
      <div className='w-[800px] mx-auto mt-8 '>
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
        <div className='flex  w-full overflow-x-hidden gap-4 mt-3'>
        {
          discountData.map((item)=>(
            <Discount data={item}/>
          ))
          
        }
        </div>
        <div className='text-center mt-10 text-sm text-gray-700 font-semibold'>MENU</div>
        <div className='w-full flex mt-4 relative cursor-pointer '>
        <div className='w-full p-3 rounded-2xl font-semibold text-gray-700 bg-gray-100 text-center'>Search for dishes</div>
        <i class="fi fi-rr-search absolute top-3 right-4"></i>
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
        <div>
          {/* <h1>{console.log(topPick[1].card)}</h1> */}
        </div>
        </div>
        
        </div>
      <div>
        {
          menudata.map(({card:{card}})=>(
            <MenuCard card={card} resInfo={resInfo}/>
          ))
        }
        
      </div>
      </div>
      
    </div>
  )
}
function MenuCard({card,resInfo}){
  console.log(resInfo)
  let check=true;
  if(card.type){
    check=false
  }

  const[isOpen,setisOpen]=useState(check)
  function toggleDropdown(){
    setisOpen((prev)=>!prev)
  }
  if(card.itemCards){
    const{itemCards,title}=card
    return(
     <>
      <div>
       <div className='flex justify-between'>
       <h1 className={'font-bold text-'+(card.type ? "lg":"md")}>{title} ({itemCards.length})</h1>
       <i class={"text-2xl fi fi-rr-angle-small-"+(isOpen ? "up":"down")} onClick={toggleDropdown}></i>
       </div>
      {
        isOpen &&  <DetailMenu itemCards={itemCards} resInfo={resInfo}/>
      }
      </div>
      <hr className={'my-5 border-gray-100 border-'+(card.type ? "[10px]":"[8px]" )}/>
     </>
    )
  }else{
    const{title,categories}=card;
    return(
      <div>
        <h1 className='text-lg font-bold'>{card.title}</h1>
        {
          categories.map((data)=>(
            <MenuCard card={data} resInfo={resInfo}/>
          ))
        }
      </div>
    )
  }
  
}
function DetailMenu({itemCards,resinfo}){
  
  return(
    <div className='my-5'>
      {
        itemCards.map(({card:{info}})=>{
          const{name,price,defaultPrice,itemAttribute:{vegClassifier},ratings:{aggregatedRating:{rating,ratingCountV2}},description,imageId}=info
          const[isMore,SetisMore]=useState(true)
          const{cartdata,SetcartData}=useContext(AddToCart)
          function handleAddtoCart(){
            const isAdded=cartdata.find((data)=>data.id===info.id);
            if(!isAdded){
              SetcartData((prev)=>[...prev, info])
              localStorage.setItem("cartData",JSON.stringify([...cartdata,info]))
            }else{
              alert("Already Added")
            }
          }
          return(
           <>
            <div className='flex w-full justify-between min-h-[182px]'>
              <div className='w-[70%]'>
                {
                (vegClassifier=='VEG') ? <img src="https://www.clipartmax.com/png/full/206-2065891_soups-and-salads-veg-logo-png.png" className='w-5'/> : <img src="https://freesvg.org/img/1531813245.png" className='w-5'/> 
                } 
                <h1 className='text-lg font-bold'>{name}</h1>
                <p className='font-semibold'>₹{price/100 || defaultPrice/100  }</p>
                <div className='flex items-center gap-1'><i class="fi fi-ss-star text-green-700 text-sm mt-1"></i> <span>{rating}({ratingCountV2})</span></div>
                <div>
                {
                 isMore?<span className='text-slate-600 font-sm line-clamp-2'>{description}</span>:<span className='text-slate-600 font-sm '>{description}</span>
                }
                <span><button className='font-bold text-slate-600' onClick={()=>SetisMore(!isMore)}>{isMore?"more":"less"}</button></span>  
                </div>
              </div>
              <div className='w-[30%] flex flex-col items-end justify-center relative h-full' >
                <img className='w-40 h-35 rounded-2xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ imageId} alt="" />
                <button onClick={handleAddtoCart} className='bg-white px-11 py-2 rounded-xl border border-gray-300 text-green-600 font-bold absolute top-30 left-24'>ADD</button>
              </div>
            </div>
            <hr className='my-5 text-gray-300'/>
           </>
        )})
      }
    </div>
    )
}
function Discount({data:{info:{header,offerLogo,couponCode}}}){
  return (
      <div className='flex gap-3 items-center min-w-[328px] h-[76px] p-3 border border-gray-300 rounded-3xl'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/"+offerLogo} alt="" className='w-12'/>
      <div className='flex flex-col'>
        <p className='font-bold'>{header}</p>
        <p className='text-gray-600 font-semibold text-sm'>{couponCode}</p>
      </div>
    </div>
  )
}


export default ResMenu
