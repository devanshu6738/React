import React, { useContext } from 'react'
import { AddToCart } from './utils/contextApi'
import { Link } from 'react-router-dom'

function Cart() {
    const{cartdata,SetcartData}=useContext(AddToCart)
    console.log(cartdata)
    let TotalPrice=0
    for(let i=0;i<cartdata.length;i++){
      TotalPrice+=cartdata[i].defaultPrice/100  
    }
    if(cartdata.length==0){
      return(
        <div className='w-full flex justify-center items-center flex-col gap-3'>
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" className='w-[300px] pt-20'/>
          <h1 className='text-xl font-bold'>Your cart is empty</h1>
          <p className='text-gray-500'>You can go to home page to view more restaurants</p>
          <Link to={"/"}>
          <div className='px-3 py-2 font-bold text-white bg-[#FF5200]'>
          SEE RESTAURANTS NEAR YOU
          </div>
          </Link>
        </div>
      )
    }
    function AddRemove(i){
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
              <div>
                <h2 className='text-xl font-semibold'>{data.name}</h2>
                <p className='text-lg font-semibold text-green-600'>{data.defaultPrice/100}</p>
              </div>
                <div className='w-[30%] flex flex-col items-end justify-center relative h-full' >
                <img className='w-40 rounded-2xl' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+ data.imageId} alt="" />
                <button onClick={()=>AddRemove(i)} className='bg-red-600 px-8 py-2 rounded-xl  text-white font-bold absolute top-33 left-32'>Remove</button>
              
              </div>
            </div>
             
        ))
      }
      <h1 className='text-xl font-semibold text-green-600'>{(TotalPrice===0)?" ":"Total- ₹"+TotalPrice}</h1>
     
      </div>
    </div>
  )
}

export default Cart
