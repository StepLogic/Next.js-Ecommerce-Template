import style from "./index.module.css";
import React, {useState} from "react";

export default function SignIn(props) {

    return (
       <>
           <div {...props}>
               <div style={{display:'flex',flexDirection:"column"}}>
               <label htmlFor={"email"} style={{margin:"0.5em 0",color:"#878787",lineHeight:2}}>Email</label>
               <input id={"email"} type={"email"} className={"form-control"} required style={{padding:"0.5em",borderRadius:"0"}}/>
               <label htmlFor={"password"} style={{margin:"0.5em 0",color:"#878787",lineHeight:2}}>Password</label>
               <input id={"password"} type={"password"} className={"form-control"} required style={{padding:"0.5em",borderRadius:"0"}}/>
               <button onClick={()=>{

               }} className={style.button+" btn"} style={{color:"white",backgroundColor:"#56cfe1",margin:"1em 1em",borderRadius:"50px",padding:"0.5em"}}>Continue</button>
               <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
               <span  onClick={()=>{props.setRegister()}} style={{margin:"0.5em 0",color:"#197bbd",lineHeight:2,textDecoration:"none"}}>Create Account</span>
                   <span onClick={()=>{props.setForgotPassword()}} style={{margin:"0.5em 0",color:"#197bbd",lineHeight:2,textDecoration:"none"}}>Forgot Password</span>
               </div>
               </div>
            </div>
       </>
    );
}
