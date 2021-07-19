import './List.scss';
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import ListItem from "../listItems/ListItem";
import {useRef, useState} from "react";

export default function List(){
  const [sliderIndex, setSliderIndex] = useState(0)

  const listRef = useRef()

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if(direction === "right" && sliderIndex > 0){
      setSliderIndex(sliderIndex - 1)
      listRef.current.style.transform = `translate(${230 + distance}px)`;    console.log('right')
    }
    if(direction === "left" && sliderIndex < 5){
      setSliderIndex(sliderIndex - 1)
      listRef.current.style.transform = `translate(${-230 + distance}px)`;
    }

    console.log('distance:', distance)

  }
  return(
    <div className="list">
      <span className="list-title">Continue watching</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="slider right" onClick={() => handleClick("right")}/>
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