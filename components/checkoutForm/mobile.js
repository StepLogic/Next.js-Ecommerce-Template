import Image from "next/image"
import React, {useState} from "react";
import style from "./index.module.css"
import {GrFormNext} from "react-icons/gr";
import {Accordion} from "react-bootstrap";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {FiShoppingCart} from "react-icons/fi";
import CheckoutItem from "../checkOutComponent/checkoutItem";
import PaymentForm from "../paymentForm";
import Input from "./input";
import Selector from "./selector";



export default function Mobile(props){
        return( <>
            <form>
                <div style={{display:"flex",flexDirection:"row",margin:'auto'}}>
                    <h2 style={{textTransform:"capitalize",margin:"auto",lineHeight:'1.5em',fontSize:"18px"}}>contact information</h2>
                    <div style={{display:"flex",flexDirection:"row",margin:"auto"}}>
                        <span style={{fontSize:"14px",color:"#545454",lineHeight:"1.5em",marginRight:"0.2em"}}>Already have account ?</span>
                        <span style={{fontSize:"14px",lineHeight:"1.5em",color:"#56cfe1"}}>Log in</span>
                    </div>
                </div>
                <Input style={{margin:"1em auto",width:"92%"}} inputType={"text"} placeholder={"Email"} />
                <div style={{display:"flex",flexDirection:"row",margin:'1em 0'}}>
                    <h2 style={{textTransform:"capitalize"
                        ,marginRight:"auto",marginLeft:"1em"
                        ,lineHeight:'1.5em',fontSize:"18px"}}>Shipping Address</h2>
                </div>
                <Input style={{margin:"1em auto",width:"92%"}} inputType={"text"} placeholder={"Full name"} required/>
                <Input style={{margin:"1em auto",width:"92%"}} inputType={"text"} placeholder={"Address"} />
                <Input style={{margin:"1em auto",width:"92%"}} inputType={"text"} placeholder={"City"} />
                <Selector style={{margin:"1em auto",width:"92%"}} inputType={"text"} placeholder={"Ghana"} />
                <button className={style.button} style={{color:"white",backgroundColor:"#197bbd",width:"92%",margin:"1em 1em",borderRadius:"50px",padding:"1em"}}>Continue</button>
            </form>
        </>)

}
