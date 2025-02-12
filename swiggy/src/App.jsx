import Body from "./component/Body"
import NavigationBar from "./component/NavigationBar"
import { Routes,Route } from "react-router-dom"
import ResMenu from "./component/ResMenu"
function App() {

  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
      <Route path="/" element={<Body/>}/>
      <Route path="/resmenu" element={<ResMenu/>}/>
     </Route>
    </Routes>
  )
}

export default App
