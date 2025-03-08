import Body from "./component/Body"
import NavigationBar from "./component/NavigationBar"
import { Routes,Route } from "react-router-dom"
import ResMenu from "./component/ResMenu"
import { useState } from "react"
import { Coordinate } from "./component/utils/contextApi"
function App() {
  const [cord,setCord]=useState({lat:18.9690247,lng:72.8205292})
  return (
    <Coordinate.Provider value={{cord,setCord}}>
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="/resmenu/:id" element={<ResMenu/>}/>
     </Route>
    </Routes>
    </Coordinate.Provider>
  )
}

export default App
