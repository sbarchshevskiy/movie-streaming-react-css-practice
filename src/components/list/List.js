import './List.scss';
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import ListItem from "../listItems/ListItem";
import {useRef, useState} from "react";

export default function List(){
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if(direction === "right" && sliderIndex > 0){
      setSliderIndex(sliderIndex - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if(direction === "left" && sliderIndex < 5){
      setSliderIndex(sliderIndex - 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }
  return(
    <div className="list">
      <span className="list-title">Continue watching</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider right"
          onClick={() =>
            handleClick("right")}
          style={{display: !isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
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
        <ArrowForwardIosOutlined className="slider left" onClick={()=> handleClick("left")}/>
      </div>
    </div>
  )
}