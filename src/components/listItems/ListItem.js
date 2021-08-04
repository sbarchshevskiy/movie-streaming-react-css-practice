import './ListItem.scss'
import pulpImage from '../../media/pulp.png'
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAlt, ThumbUpAltOutlined} from "@material-ui/icons";


export default function ListItem(){
  return(
    <div className="list-item">
      <img src={pulpImage}
           alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownAltOutlined/>
        </div>
        <div className="itemInfoTop">
          <spam>1 hour 35 mins</spam>
          <spam className="age-limit">16+</spam>
          <spam>1994</spam>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consectetur doloribus eveniet expedita fugit hic incidunt ipsa, nemo neque nobis obcaecati quidem quis recusandae suscipit ut vel, vitae? Explicabo, quod?
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  )
}