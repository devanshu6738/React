import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import { AddToCart, Coordinate } from './utils/contextApi'

function NavigationBar() {
  const navItem=[
    {
      image:<i className="fi fi-rr-shopping-bag mt-1"></i>,
      name:"Swiggy Corporate",
      path:"/corporate"
    },
    {
      image:<i className="fi fi-rr-search mt-1"></i>,
      name:"Search",
      path:"/search"
    },
    {
      image:<i className="fi fi-rr-badge-percent mt-1"></i>,
      name:"Offers",
      path:"/offer"
    },
    {
      image:<i className="fi fi-rs-interrogation mt-1"></i>,
      name:"Help",
      path:"help"
    },
    {
      image:<i className="fi fi-rs-user mt-1"></i>,
      name:"Sign In",
      path:"/signin"
    },
    {
      image:<i className="fi fi-br-shopping-cart mt-1"></i>,
      name:"Cart",
      path:"/cart"
    }
  ]
  const[visible,setVisible]=useState(false)
  const[SearchTarget,setSearchTarget]=useState([])
  const[address,Setaddress]=useState("")
    const{setCord}=useContext(Coordinate)  
    const{cartdata,SetcartData}=useContext(AddToCart)
  function handleSearch(){
    console.log("clicked")
    setVisible(prev=> !prev)
  }
  function handleVisibility(){
    setVisible(prev=> !prev)
  }
  async function SearchResult(value){
    if(value==''){
      return
    }
    const res=await fetch(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${value}`);
    const data=await res.json();
    Setaddress(data.data[0].description)
    setSearchTarget(data.data)
  }
  async function fetchLatAndLong(val){
    console.log(val);
    const res=await fetch(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${val}`)
    const data=await res.json();

    setCord({
      lat:data.data[0].geometry.location.lat,
      lng:data.data[0].geometry.location.lng,
    })
    
  }
  return (
    <div className='relative'>
    {visible && <div className='w-full z-40 bg-black/50 h-full absolute'>
       <div className={'text-black bg-white p-10 w-[40%] h-full z-50  flex flex-col absolute duration-300 items-end'}  >
        <p onClick={handleVisibility}><i class="fi fi-rr-cross-small text-3xl"></i></p>
        <div className='w-[70%] flex flex-col gap-5'>
        <input 
    className='w-full px-3 py-4 border border-gray-300 text-gray-600 font-semibold shadow-xl outline-none' 
    type="text" 
    placeholder='Search for area, street name..' onChange={(e)=>SearchResult(e.target.value)}
/>

          <ul>
            {SearchTarget.map((data)=>(
              <li onClick={()=>fetchLatAndLong(data.place_id)}>{data.structured_formatting.main_text} <p className='text-sm opacity-65'>{data.structured_formatting.secondary_text}</p> </li>
            ))}
          </ul>
          <div className='flex w-full p-6 border flex-col'>
            <h1>Get current location</h1>
            <p>using GPS</p>
          </div>
          <div className='flex w-full p-6 border flex-col'>
            <h1>Get current location</h1>
            <p>using GPS</p>
          </div>
          <div>

          </div>
        </div>
       </div>
      </div>}
    <div className='w-full shadow-md h-20 flex justify-center items-center'>
      <div className='flex w-[82%] justify-between'>
      <div className=' flex items-center gap-7'>
       <Link to={"/"}>
       <img src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="" className='w-20'/>
       </Link>
       <div className='flex gap-2 items-center' onClick={handleSearch}>
       <p className='font-bold border-b-2'>other</p>
       <p className='font-semibold text-gray-500 line-clamp-1'>{address}</p>
       <i className="fi mt-1 fi-rr-angle-small-down text-[#FF5200] text-xl"></i>
       </div>
      </div>
    
      <div className='flex items-center gap-12 '>
        {
          navItem.map((data)=>(
           <Link to={data.path}>
            <div className='flex gap-2'>
            {data.image}
            <p className='font-semibold text-gray-600'>{data.name}</p>
            {data.name==="Cart" && <p className='text-[#FF5622] text-md font-semibold '>{(cartdata.length==0?"":cartdata.length)}</p>}
          </div>
           </Link>
          ))
        }
      </div>

      </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default NavigationBar
