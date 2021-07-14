import './List.scss';
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import ListItem from "../listItems/ListItem";

export default function List(){
  return(
    <div className="list">
      <span className="list-title">Continue watching</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slider left"/>
        <div className="container">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
        </div>
        <ArrowForwardIosOutlined className="slider right"/>
      </div>
    </div>
  )
}