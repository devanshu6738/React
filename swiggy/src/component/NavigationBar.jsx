import React from 'react'

function NavigationBar() {
  return (
    <div className='w-full shadow-md h-20 flex justify-center items-center'>
      <div className='flex w-[82%] justify-between'>
      <div className=' flex items-center gap-7'>
        <img src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png" alt="" className='w-20'/>
        <p className='font-bold border-b-2'>other</p>
        <i className="fi mt-1 fi-rr-angle-small-down text-[#FF5200] text-xl"></i>
      </div>
      <div className='flex items-center gap-12 '>
        <div className='flex gap-2'>
        <i className="fi fi-rr-shopping-bag mt-1"></i>
          <p className='font-semibold'>Swiggy Corporate</p>
        </div>
        <div className='flex gap-2'>
        <i className="fi fi-rr-search mt-1"></i>
          <p className='font-semibold'>Search</p>
        </div>
        <div className='flex gap-2'>
        <i className="fi fi-rr-badge-percent mt-1"></i>
          <p className='font-semibold'>Offers</p>
        </div>
        <div className='flex gap-2'>
        <i className="fi fi-rs-interrogation mt-1"></i>
          <p className='font-semibold'>Help</p>
        </div>
        <div className='flex gap-2'>
        <i className="fi fi-rs-user mt-1"></i>
          <p className='font-semibold'>Sign In</p>
        </div>
        <div className='flex gap-2'>
        <i className="fi fi-br-shopping-cart mt-1"></i>
          <p className='font-semibold'>Cart</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default NavigationBar
