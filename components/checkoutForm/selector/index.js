import style from "./index.module.css"
import React, {useRef, useState} from "react";
import {GrFormNext} from "react-icons/gr";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
export default function Selector(props) {
    const [onFocus,setFocus]=useState(false);
    const [onExpand,setExpand]=useState(false);
    const [value,setValue]=useState("");
    const handleInputChange=(event)=>{
        let input=event.target.value;
        if(input===""){
            setFocus(false)
            setExpand(false)
        } else {
            setFocus(true)
            setExpand(true);
        }
        setValue(input)
    }
    const ref =useRef(null)
    let overlayStyle=onFocus?{position:"absolute",color:"#737373",fontSize:"0.8em",lineHeight:"1em"
        ,marginLeft:'1.8em',marginTop:"0.4em",top:0,bottom:0,left:0,right:0,textAlign:"left",transition:"0.4s"}:{position:"absolute",color:"#737373",fontSize:"14px",lineHeight:"1em"
        ,marginLeft:'1.6em',marginTop:"1.5em",top:0,bottom:0,left:0,right:0,textAlign:"left",transition:"0.4s"}

    let iconStyle=onExpand?{ fontsize:"1em",color:"#737373",margin:"auto",transform:"rotate(180deg)",transition:"0.4s"}:
        {fontsize:"1em",margin:"auto",color:"#737373",transition:"0.4s"}


    let menuStyle=onExpand?
        {display:"flex",flexDirection:"column",position:"absolute",bottom:0,left:0,right:0,zIndex:5,maxWidth:"100%",maxHeight:'auto',transition:"0.4s"}:
        {display:"flex",flexDirection:"column",position:"absolute",bottom:0,left:0,right:0,maxWidth:"100%",maxHeight:0,transition:"0.4s"}
    return (
       <>
           <div {...props}>
           <div style={{display:"flex",flexDirection:"column",position:"relative"}}>
               <span onClick={()=>{ref.current.focus()}} style={overlayStyle}>{props.placeholder}</span>
               <div style={{height:"1.5em",paddingLeft:"0.4em",paddingRight:"0.4em",
                   position:"absolute", top:0,bottom:0,right:0,
                   marginRight:'0.5em',marginTop:"1em",borderLeft:"1px solid rgb(219, 219, 219)"}}>
                   <div style={iconStyle} onClick={()=>{ ref.current.focus(); setExpand(!onExpand);}}>
                       <AiFillCaretDown />
                   </div>
               </div>
               <input  ref={ref}
                       value={value}
                       onChange={handleInputChange}
                       type={props.inputType}
                       style={{padding:"1em"}} {...props.required} />

               <div className={"bg-primary"} style={menuStyle}>
                   {onExpand? <ul className="list-group">
                       <li className="list-group-item" onClick={()=>{setValue("Cras justo odio");setFocus(true);setExpand(false)}}>Cras justo odio</li>
                   </ul>:<></>}
               </div>

           </div>
           </div>
       </>
    );
}
