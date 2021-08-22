
import React, {useRef, useState} from "react";
import style from "./index.module.css";
import Input from "../checkoutForm/input";


export default function Desktop(){
    return (
        <>
            <form>
                <Input style={{margin:"1em 0",width:"92%"}} inputType={"text"} placeholder={"Mobile money number"} />
                <button className={style.button+" btn"} style={{color:"white",backgroundColor:"#197bbd",width:"92%",margin:"1em 0em",borderRadius:"50px",padding:"1em"}}>Continue</button>
            </form>
        </>
    );
}
