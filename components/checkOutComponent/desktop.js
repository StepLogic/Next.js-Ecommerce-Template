import CarouselComponent from "../../elements/carouselComponent";
import React, {useRef, useState} from "react";
import {Accordion, Carousel} from "react-bootstrap";
import Link from "next/link";
import {FiShoppingCart} from "react-icons/fi";
import CheckoutItem from "./checkoutItem";
import style from "./index.module.css";
import {GrFormNext} from "react-icons/gr";
import CheckoutForm from "../checkoutForm";


export default function Desktop(){
    return (
        <>
            <div style={{display:'flex',flexDirection:"row"}}>
                <div style={{display:'flex',flexDirection:'column',border:"1px solid rgb(230, 228, 228)",width:"60%",padding:"2em 2em 2em 6em"}}>
                    <div style={{display: 'flex', flexDirection: "row"}}>
                        <img className={"img-fluid"} src={"/assets/img.png"}
                             style={{maxWidth:"50%",maxHeight:"50px",marginTop:"1em",marginBottom:"1em",marginRight:'auto'}}/>
                    </div>

                    <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap",marginTop:"1em",marginLeft:"0"}}>
                        <span className={style.link} style={{fontSize:"14px",marginRight:"0.2em"}}>Cart</span>
                        <span style={{fontSize:"14px",marginRight:"0.2em",color:"#696969"}}><GrFormNext/></span>
                        <span className={style.link} style={{fontSize:"14px",marginRight:"0.2em"}}>Information</span>
                        <span style={{fontSize:"14px",marginRight:"0.2em",color:"#696969"}}><GrFormNext/></span>
                        <span className={style.link} style={{fontSize:"14px",marginRight:"0.2em"}}>Shipping</span>
                        <span style={{fontSize:"14px",marginRight:"0.2em",color:"#696969"}}><GrFormNext/></span>
                        <span className={style.link} style={{fontSize:"14px",marginRight:"0.2em"}}>Payment</span>
                    </div>
                    <CheckoutForm/>
                </div>
                <div style={{display:'flex',flexDirection:'column',width:"40%",padding:"4em 6em 2em 2em"}}>
                    <div style={{overflowY:'scroll',display:'flex',maxHeight:"80vh",flexDirection:'column'}}>
                    <CheckoutItem/>
                    <CheckoutItem/>
                    <CheckoutItem/>
                    <CheckoutItem/>
                    <CheckoutItem/>
                    <CheckoutItem/>
                        <CheckoutItem/> <CheckoutItem/> <CheckoutItem/> <CheckoutItem/> <CheckoutItem/>
                    </div>
                    <div style={{display:'flex',flexDirection:"column"
                        ,border:"1px solid rgb(234, 233, 233)",borderLeft:"none",borderRight:"none"}}>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.4em"}}>
                            <span style={{display:"block",color:"#222",fontSize:"14px",lineHeight:"20px"}}>Subtotal</span>
                            <span style={{display:"block",color:"#222",fontSize:"14px",lineHeight:"20px",marginLeft:'auto'}}>$30.00</span>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.4em"}}>
                            <span style={{display:"block",color:"#222",fontSize:"14px",lineHeight:"20px"}}>Shipping</span>
                            <span style={{display:"block",color:"#222",fontSize:"14px",lineHeight:"20px",marginLeft:'auto'}}>$30.00</span>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0.4em"}}>
                            <span style={{display:"block",color:"#222",fontSize:"14px",lineHeight:"20px"}}>Discount</span>
                            <span style={{display:"block",color:"#222",fontSize:"14px",lineHeight:"20px",marginLeft:'auto'}}>$30.00</span>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"1em"}}>
                        <span style={{display:"block",color:"#222",fontSize:"1.1428571429em",lineHeight:"20px"}}>Total</span>
                        <div className={"d-flex flex-row justify-content-between"}>
                            <span style={{display:"block",color:"#717171",margin:"auto 1em",fontSize:"14px",textTransform:"uppercase",lineHeight:"20px",marginLeft:'auto'}}>usd</span>
                            <span style={{display:"block",color:"#222",fontSize:"1.7142857143em",lineHeight:"1em",marginLeft:'auto'}}>$30.00</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
