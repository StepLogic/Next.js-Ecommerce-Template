import React, {useRef, useState} from "react"
import style from "./index.module.css"
import {FaHeart, FaShoppingBag} from "react-icons/fa";
import {BsHeart} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";

export default function WishListButton(props){
const [show, setShow] = useState(false);
const [target, setTarget] = useState(null);
const ref = useRef(null);

const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
};

return (
    <button className={"btn"} {...props}>
        <div style={{display:'flex',flexDirection:"column",marginTop:"-0.7em"}}>
            <div style={{display:'flex',flexDirection:"row",width:"0.7em"
                ,height:"0.7em",borderRadius:"50%",backgroundColor:"black",position:'relative',top:"0.5em",left:"0.8em",zIndex:3}}>
                <span style={{color:"white",margin:"auto",fontSize:"8px"}}>0</span>
            </div>
            <BsHeart {...props}/>
        </div></button>);
}

