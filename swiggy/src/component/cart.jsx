import React, { useContext } from 'react'
import { AddToCart } from './utils/contextApi'

function Cart() {
    const{cartdata,SetcartData}=useContext(AddToCart)
    console.log(cartdata)
    function AddRemove(i){
      console.log(i)
      let newArr=[...cartdata]
      newArr.splice(i,1);
      SetcartData(newArr)
      localStorage.setItem("cartData",JSON.stringify(newArr))
    }
  return (
    <div className='w-full'>
      <div className='w-[60%] mx-auto'>
      {
        cartdata.map((data,i)=>(
            <div className='flex justify-between my-5 p-2'>
                <h2>{data.name}</h2>
                <div className='w-[30%] flex flex-col items-end justify-center relative h-full' >
                <img className='w-40 rounded-2xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ data.imageId} alt="" />
                <button onClick={()=>AddRemove(i)} className='bg-red-600 px-8 py-2 rounded-xl border border-gray-300 text-white font-bold absolute top-31 left-32'>Remove</button>
              </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Cart
