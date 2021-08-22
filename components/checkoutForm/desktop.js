import CarouselComponent from "../../elements/carouselComponent";
import React, {useRef, useState} from "react";
import {Carousel} from "react-bootstrap";
import Link from "next/link";
import Input from "./input";
import Selector from "./selector";
import style from "./index.module.css";


export default function Desktop(){

    return (
        <>
            <form>
                <div style={{display:"flex",flexDirection:"row",margin:'auto'}}>
                    <h2 style={{textTransform:"capitalize",margin:"1em 0",lineHeight:'1.5em',fontSize:"18px"}}>contact information</h2>
                    <div style={{display:"flex",flexDirection:"row",margin:"auto 3.2em auto auto"}}>
                        <span style={{fontSize:"14px",color:"#545454",lineHeight:"1.5em",marginRight:"0.2em"}}>Already have account ?</span>
                        <span style={{fontSize:"14px",lineHeight:"1.5em",color:"#56cfe1"}}>Log in</span>
                    </div>
                </div>
                <Input style={{margin:"1em 0",width:"92%"}} inputType={"text"} placeholder={"Email"} />
                <div style={{display:"flex",flexDirection:"row",margin:'1em 0'}}>
                    <h2 style={{textTransform:"capitalize"
                        ,marginRight:"auto",marginLeft:"0"
                        ,lineHeight:'1.5em',fontSize:"18px"}}>Shipping Address</h2>
                </div>
                <Input style={{margin:"1em 0",width:"92%"}} inputType={"text"} placeholder={"Full name"} required/>
                <Input style={{margin:"1em 0",width:"92%"}} inputType={"text"} placeholder={"Address"} />
                <Input style={{margin:"1em 0",width:"92%"}} inputType={"text"} placeholder={"City"} />
                <Selector style={{margin:"1em 0",width:"92%"}} inputType={"text"} placeholder={"Ghana"} />
                <button className={style.button} style={{color:"white",backgroundColor:"#197bbd",width:"92%",margin:"1em 0",borderRadius:"50px",padding:"1em"}}>Continue</button>
            </form>
        </>
    );
}
