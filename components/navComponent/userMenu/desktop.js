import Link from "next/link"
import React, {useState} from "react";
import style from "../../cartComponent/index.module.css";
import {AiOutlineClose} from "react-icons/ai";
import CartItem from "../../cartComponent/cartItem";
export default function  Desktop(props){
    const [openCart,setOpenCart]=useState(false);
    const handleCartClick=(event)=>{
        setOpenCart(!openCart);
    }
    return(<>
        <div className={style.menuOverlay}
             style={props.openUserMenu?{position:"fixed",zIndex:4,width:"100%",height:"100%",top:0,right:0
                     ,backgroundColor:"rgba(0,0,0,0.5)",transition:"0.4s"}
                 :{position:"fixed",zIndex:4,width:"0%",height:"100%",right:0,top:0,transition:"0.4s"}}>
            <div className={style.menu} style={{width:"30%",height:"100%",opacity:1,overflow:'scroll'}} >
                <div className={"d-flex flex-row p-20"}>
                    <button className={"btn"} onClick={props.handleClick} style={{marginRight:"auto"}}><AiOutlineClose/></button>
                    <span style={{fontSize:"16px",lineHeight:"20px",margin:'auto 1em'}}>Shopping Cart</span>
                </div>
                <CartItem/>
                <button className={'btn'} style={{width:'70%',height:'2.6em',borderRadius:"50px"
                    ,backgroundColor:"#56cfe1",fontSize:'14px',fontWeight:'bold',color:'white'
                    ,marginLeft:'auto',marginRight:"auto",marginTop:'2em'}}>Check Out</button>

            </div>
        </div>
    </>);
}
