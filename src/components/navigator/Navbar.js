import './Navbar.scss';
import logo from '../../media/logo-netflix.png'
import profilePic from '../../media/mona.jpeg.crdownload'
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="left">
          <img src={logo} alt="logo" className="logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>

        </div>
        <div className="right">
          <Search className='icon'/>
          <span>KIDS</span>
          <Notifications className='icon'/>
          <img src={profilePic} alt="profile-pic" className='icon'/>

          <div className="profile">
            <ArrowDropDown className='icon'/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  )

}