import React, { useContext } from 'react'
import { AddToCart } from './utils/contextApi'

function Cart() {
    const{cartdata,SetcartData}=useContext(AddToCart)
    console.log(cartdata)
  return (
    <div className='w-full'>
      <div className='w-[70%] mx-auto'>
      {
        cartdata.map((data)=>(
            <div className='flex justify-between my-5 p-2'>
                <h2>{data.name}</h2>
                <img className='w-40 rounded-2xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ data.imageId} alt="" />
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Cart
