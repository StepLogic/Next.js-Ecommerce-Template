import style from "./index.module.css"
import {useRef, useState} from "react";
export default function Input(props) {
    const [onFocus,setFocus]=useState(false);
    const [value,setValue]=useState("");
    const handleInputChange=(event)=>{
        let input=event.target.value;
        if(input===""){
            setFocus(false)
        } else {setFocus(true)}
        setValue(input)
    }
    const ref =useRef(null)
    let style=onFocus?{position:"absolute",color:"#737373",fontSize:"0.8em",lineHeight:"1em"
        ,marginLeft:'1.8em',marginTop:"0.4em",top:0,bottom:0,left:0,right:0,textAlign:"left",transition:"0.4s"}:{position:"absolute",color:"#737373",fontSize:"14px",lineHeight:"1em"
        ,marginLeft:'1.6em',marginTop:"1.5em",top:0,bottom:0,left:0,right:0,textAlign:"left",transition:"0.4s"}
    return (
       <>
           <div {...props}>
           <div style={{display:"flex",flexDirection:"column",position:"relative"}}>
               <span onClick={()=>{ref.current.focus()}} style={style}>{props.placeholder}</span>
               <input  ref={ref}
                       value={value}
                       onChange={handleInputChange}
                       type={props.inputType}
                       style={{padding:"1em"}} {...props.required} />
           </div>
           </div>
       </>
    );
}
