import './Featured.scss';
import image from "../../media/girl_sha_002.jpeg";
import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import baywatch from "../../media/baywatch.png"
export default function Featured({type}) {

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="documentary">Documentary</option>
            <option value="drama">Drama</option>
          </select>
        </div>
      )}

      <img width="100%" src={image} alt="girl-sha"
      />
      <div className="info">
        <img src={baywatch} alt=""
        />
        <span className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}