import Body from "./component/Body"
import NavigationBar from "./component/NavigationBar"
import { Routes,Route } from "react-router-dom"
import ResMenu from "./component/ResMenu"
import { useEffect, useState } from "react"
import { AddToCart, Coordinate } from "./component/utils/contextApi"
import Cart from "./component/cart"
function App() {
  const [cord,setCord]=useState({lat:18.9690247,lng:72.8205292})
  const [cartdata,SetcartData]=useState([])
  function GetDataLocal(){
    let data=JSON.parse(localStorage.getItem("cartData")) || []
    SetcartData(data)
  }
  useEffect(()=>{
    GetDataLocal()
  },[])
  return (

    <AddToCart.Provider value={{cartdata,SetcartData}}>
    <Coordinate.Provider value={{cord,setCord}}>
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="/resmenu/:id" element={<ResMenu/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<h1>page not found</h1>}/>
     </Route>
    </Routes>
    </Coordinate.Provider>
    </AddToCart.Provider>
  )
}

export default App
