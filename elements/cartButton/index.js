import React, {useContext, useRef, useState} from "react"
import style from "./index.module.css"
import {FaShoppingBag} from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";
import {ItemsContext} from "../../utils/itemsContext";
import {useSelector} from "react-redux";

export default function CartButton(props){
    const count = useSelector((state) => state.selectedItems)
return (
    <>
        <button className={"btn"} {...props}>
            <div style={{display:'flex',flexDirection:"column",marginTop:"-0.7em"}}>
                <div style={{display:'flex',flexDirection:"row",width:"0.7em"
                    ,height:"0.7em",borderRadius:"50%",backgroundColor:"black",position:'relative',top:"0.5em",left:"0.8em",zIndex:3}}>
                            <span style={{color:"white",margin:"auto",fontSize:"8px"}}>{count.length}</span>
                </div>
                <FiShoppingCart {...props}/>
            </div></button>
    </>

);
}

