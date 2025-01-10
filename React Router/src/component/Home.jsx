import { Link, Outlet } from "react-router-dom"
function Home(){
    return(
        <div className="w-screen h-screen bg-orange-300">
    <nav className="bg-slate-500 flex justify-evenly h-16 items-center">
        <h1>Logo</h1>
        <div className="flex gap-10">
          <Link to={"/resume"}>
          <p>resume</p>
          </Link>
          <Link to={"/project"}>
          <p>Project</p>
          </Link>
          <Link to={"/about"}>
          <p>Aboutme</p>
          </Link>
          <Link to={"/contact"}>
          <p>Contact</p>
          </Link>
          
        </div>
    </nav>
    <Outlet/>
   </div>
    )
}
export default Home