import Body from "./component/Body"
import NavigationBar from "./component/NavigationBar"
import { Routes,Route } from "react-router-dom"
import ResMenu from "./component/ResMenu"
import { useState } from "react"
function App() {
  const [cord,setCord]=useState({lat:18.9690247,lng:72.8205292})
  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="/resmenu/:id" element={<ResMenu/>}/>
     </Route>
    </Routes>
  )
}

export default App
