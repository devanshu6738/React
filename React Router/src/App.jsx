import { Route, Routes } from "react-router-dom"
import BodyComp from "./component/Body"
import Home from "./component/Home"
import Resume from "./component/Resume"
import About from "./component/About"
import Contact from "./component/Contact"
import Project from "./component/Project"


function App() {

  return (
  <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/" element={<BodyComp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Route>
    <Route path="*" element={<h1>Page Not Found</h1>}/>
  </Routes>
  )
}

export default App
