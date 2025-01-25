import { Route, Routes } from "react-router-dom"
import Home from "./component/home"
import MatchDetail from "./component/matchdetail"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
      <Route path="/matchdetail/:id" element={<MatchDetail/>}/>
    </Routes>
  )
}

export default App
