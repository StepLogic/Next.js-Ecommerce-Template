import Image from "next/image"
import React, {useState} from "react";
import style from "./index.module.css"
import Input from "../checkoutForm/input";

export default function Mobile(props){
        return(<>
            <form>
                <Input style={{margin:"1em auto",width:"92%"}} inputType={"text"} placeholder={"Mobile money number"} />
                <button className={style.button+" btn"} style={{color:"white",backgroundColor:"#197bbd",width:"92%",margin:"1em 1em",borderRadius:"50px",padding:"1em"}}>Continue</button>
            </form>
    </>)

}
