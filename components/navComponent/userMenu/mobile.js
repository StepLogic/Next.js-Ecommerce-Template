import React, {useEffect, useRef, useState} from "react";
import style from "./index.module.css";
import {FaBars, FaSearch} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {Overlay,Popover} from "react-bootstrap";
import {IoIosArrowUp} from "react-icons/io";
import CartItem from "../../cartComponent/cartItem";
import AuthMenu from "../../authFormComponent/userMenu";
export default function Mobile(props){

        return(<>
            <div className={style.menuOverlay}
                 style={props.openUserMenu?{position:"fixed",zIndex:4,width:"100%",height:"100%",top:0,right:0
                         ,backgroundColor:"rgba(0,0,0,0.5)",transition:"0.4s"}
                     :{position:"fixed",zIndex:4,width:"0%",height:"100%",right:0,top:0,transition:"0.4s"}}>
                <div className={style.menu} style={{width:"80%",height:"100%",opacity:1,overflow:'scroll'}} >
                    <div className={"d-flex flex-row p-20"} style={{borderBottom:"1px solid rgb(225, 223, 223)"}}>
                        <button className={"btn"} onClick={props.handleClick} style={{marginRight:"auto"}}><AiOutlineClose/></button>
                        <span style={{fontSize:"16px",lineHeight:"1.428em",
                            margin:'auto 1em',textTransform:"uppercase",fontWeight:"500"}}>Login</span>
                    </div>
                    <div style={{display:'flex'}}>
                        <AuthMenu/>
                    </div>

                </div>
            </div>
              </>);
}
