import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function NavigationBar() {
  const navItem=[
    {
      image:<i className="fi fi-rr-shopping-bag mt-1"></i>,
      name:"Swiggy Corporate"
    },
    {
      image:<i className="fi fi-rr-search mt-1"></i>,
      name:"Search"
    },
    {
      image:<i className="fi fi-rr-badge-percent mt-1"></i>,
      name:"Offers"
    },
    {
      image:<i className="fi fi-rs-interrogation mt-1"></i>,
      name:"Help"
    },
    {
      image:<i className="fi fi-rs-user mt-1"></i>,
      name:"Sign Ine"
    },
    {
      image:<i className="fi fi-br-shopping-cart mt-1"></i>,
      name:"Cart"
    }
  ]
  return (
    <>
    <div className='w-full shadow-md h-20 flex justify-center items-center '>
      <div className='flex w-[82%] justify-between'>
      <div className=' flex items-center gap-7'>
       <Link to={"/"}>
       <img src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="" className='w-20'/>
       </Link>
        <p className='font-bold border-b-2'>other</p>
        <i className="fi mt-1 fi-rr-angle-small-down text-[#FF5200] text-xl"></i>
      </div>
      <div className='flex items-center gap-12 '>
        {
          navItem.map((data)=>(
            <div className='flex gap-2'>
            {data.image}
            <p className='font-semibold text-gray-600'>{data.name}</p>
          </div>
          ))
        }
      </div>

      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default NavigationBar
