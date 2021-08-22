import Image from "next/image"
import React, {useState} from "react";
import style from "./index.module.css"
import {GrFormNext} from "react-icons/gr";
import {Accordion} from "react-bootstrap";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {FiShoppingCart} from "react-icons/fi";
import CheckoutItem from "../checkOutComponent/checkoutItem";



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

              <div style={{display:"flex",flexDirection:"column",borderRadius:"10px",
                  border:"1px solid rgb(195, 195, 195)",width:"92%",margin:'2em auto'}}>
                  <div style={{display:'flex',flexDirection:"row"
                           ,justifyContent:"space-between",margin:"0.5em 1.2em",
                            color:'#737373',fontSize:'14px'}}>
                      <span>Contact</span>
                      <span>Change to</span>
                  </div>
                  <span style={{borderBottom:"1px solid rgb(195, 195, 195)",padding:'0.2em 0.2em 0.6em 0.2em',width:"92%",margin:"auto",fontSize:'14px'}}>Contact</span>
                  <div style={{display:'flex',flexDirection:"row"
                              ,justifyContent:"space-between",margin:"0.5em 1.2em"
                              ,color:'#737373',fontSize:'14px'}}>
                      <span>Contact</span>
                      <span>Change to</span>
                  </div>
                  <span  style={{fontSize:'14px',padding:'0.2em 0.2em 0.6em 0.2em',width:"92%",margin:"auto"}}>Contact</span>

              </div>
                <div style={{display:"flex",flexDirection:"row",margin:"0.5em 0"}}>
                    <h2 style={{textTransform:"capitalize"
                        ,marginRight:"auto",marginLeft:"1em"
                        ,lineHeight:'1.5em',fontSize:"18px"}}>Shipping Address</h2>
                </div>
                <div style={{display:"flex",flexDirection:"row",borderRadius:"10px",
                    border:"1px solid rgb(195, 195, 195)",width:"92%",margin:'0.5em auto',
                padding:"1em 1.2em"}}>
                 <input type={"radio"}/>
                    <span style={{fontSize:'14px',marginLeft:'1em'}}>Standard</span>
                    <span style={{fontSize:'14px',marginLeft:'auto'}}>$60.00</span>
                </div>
                <button className={style.button} style={{color:"white",backgroundColor:"#197bbd",width:"92%",margin:"1em 1em",borderRadius:"50px",padding:"1em"}}>Continue</button>

            </div>
    </>)

}
