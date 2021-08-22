import Image from "next/image"
import React, {useState} from "react";
import style from "./index.module.css"
import {GrFormNext} from "react-icons/gr";
import {Accordion} from "react-bootstrap";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {FiShoppingCart} from "react-icons/fi";
import CheckoutItem from "./checkoutItem";
import CheckoutForm from "../checkoutForm";

export default function Mobile(props){
        return(<>
            <div style={{display:'flex',flexDirection:"column"}}>
                <img className={"img-fluid"} src={"/assets/img.png"}
                     style={{maxWidth:"150px",maxHeight:"50px",marginTop:"1em",marginBottom:"1em"}}/>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div style={{display:'flex',flexDirection:'row',}}>
                                <FiShoppingCart  style={{marginRight:"1em",marginTop:"auto",marginBottom:"auto",fontSize:"2em",color:"black"}}/>
                            <div style={{display:"flex",flexDirection:"column"}}>
                            <span>Check Order Summary</span>
                                <span style={{marginTop:"0.2em",fontSize:"1.29em",fontWeight:'500',lineHeight:"1em",color:'#333333'}}>$62.35</span>
                            </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                         <CheckoutItem/>
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
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap",marginTop:"1em",marginLeft:"1.4em"}}>
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
    </>)

}
