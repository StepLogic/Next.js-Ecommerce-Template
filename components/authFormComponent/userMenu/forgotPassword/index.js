import style from "./index.module.css";
import React from "react";

export default function ForgotPassword(props) {
    return (
       <>
           <div {...props}>
               <div style={{display:'flex',flexDirection:"column"}}>
               <label htmlFor={"email"} style={{margin:"0.5em 0",color:"#878787",lineHeight:2}}>Email</label>
               <input id={"email"} type={"email"} className={"form-control"} required style={{padding:"0.5em",borderRadius:"0"}}/>
               <button  className={style.button+" btn"} style={{color:"white",backgroundColor:"#56cfe1",margin:"1em 1em",borderRadius:"50px",padding:"0.5em"}}>Continue</button>
               <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                                  <span onClick={()=>{
                                      props.setSignin()
                                  }} style={{margin:"0.5em 0",color:"#197bbd",lineHeight:2,textDecoration:"none"}}>Log in</span>
               </div>
               </div>
            </div>
       </>
    );
}
