import './Home.scss'
import Navbar from "../navigator/Navbar";
import Featured from "../featured/Featured";

export default function Home() {
  return(
    <div className="home">
      <Navbar/>
      <Featured type="movie"/>
    </div>
  )
}