import './Home.scss'
import Navbar from "../navigator/Navbar";
import Featured from "../featured/Featured";
import List from "../list/List";

export default function Home() {
  return(
    <div className="home">
      <Navbar/>
      <Featured type="movie"/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}