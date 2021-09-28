import style from "./index.module.css"
import {FaStar} from "react-icons/fa";
import {SizeSelector} from "../../elements/sizeSelector";
import {BuyCount} from "../../elements/buyCount";
import {RiDeleteBin6Line} from "react-icons/ri";
import {addItem, decreaseQuantity, increaseQuantity, removeItem} from "../../utils/actions";
import {BiMinus, BiPlus} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useMemo} from "react";
import {AiOutlineEye} from "react-icons/ai";
import Link from "next/link"
export default function Desktop(props) {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.selectedItems)
    console.log(props)
    let width="30%"
   const quantity=useMemo(()=>{
       return count.filter((value,index,arr)=>{
           if(value.name===props.name){
               return value
           }
       })[0].quantity
   },[count])
    return (
        <>
            <div className={"container"}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{display:'flex',flexDirection:"row",width:"100%",marginRight:"0.4em",justifyContent:"center",marginTop:"0.4em"}}>
                            <div style={{display:'flex',flexDirection:'column',position:'relative',maxWidth:`${100/1.05}%`,maxHeight:"8em"}}>
                                <img style={{maxWidth:`100%`,maxHeight:"8em",marginRight:"0.4em"} }src={"/assets/sampleImages/i.png"}/>
                                <div style={{display: 'flex', flexDirection: 'column',maxWidth:"94%",maxHeight:"8em",
                                    position: 'absolute', top: 0, right: 0,left:0,bottom:0,backgroundColor:"rgba(255,255,255,0.5)"}} />
                            </div>
                        </div>

                        <div style={{display:'flex',flexDirection:'column',position:'relative'}}>
                            <div style={{display: 'flex', flexDirection: 'column', position: 'absolute',
                                top:0,right:0,marginRight:"1em",marginTop:"2em",width:"2em",height:"2em"
                                ,borderRadius:"50%",backgroundColor:"red"}}>
                                <span style={{margin:"auto",fontSize:"10px",color:"white"}}>New</span>
                            </div>
                            <img style={{maxWidth:"100%",marginTop:"1em"}} src={"/assets/sampleImages/i.png"}/>
                        </div>

                    </div>

                    <div style={{display:'flex',flexDirection:"column",marginLeft:'2em'}}>
                        <span style={{fontSize:"20px",fontWeight:"bold",marginTop:"0.4em"}}>{props.name}</span>
                        <div style={{display:'flex',flexDirection:"row",marginTop:"1em",marginBottom:"1em"}}>
                            <span style={{color:"#696969",fontSize:'20px'}}>{`$${props.price}`}</span>
                            <div style={{display:'flex',flexDirection:"row",justifyContent:'space-between',marginLeft:'auto'}}>
                                <div style={{display:'flex',flexDirection:"row",marginTop:'auto',marginBottom:'auto'}}>
                                    <FaStar style={{color:"yellow"}}/>
                                </div>
                                <span style={{marginTop:'auto',marginBottom:'auto',fontSize:"15px",letterSpacing:0.6}}>{"(6 reviews)"}</span>
                            </div>
                        </div>

                        <div>
                            <p style={{color:"#878787",fontSize:"15px",letterSpacing:0.6}}>
                                Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.
                            </p>
                        </div>
                        <div>
                            <SizeSelector/>
                        </div>
                        <div>
                            <div style={{display:'flex',flexDirection:"row",marginTop:"1.6em",marginBottom:"1.6em"}}>
                                <div style={{display:'flex',flexDirection:"row",height:"2.6em",borderRadius:'50px',borderStyle:"solid",borderWidth:"thin",width:width}}>
                                    {quantity<2?<RiDeleteBin6Line onClick={()=> {
                                            dispatch(removeItem(props))
                                        }} style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>
                                        :<BiMinus onClick={()=> {
                                            dispatch(decreaseQuantity(props))
                                        }} style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>}
                                    <span style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}>{
                                        quantity
                                    }</span>
                                    <BiPlus onClick={()=> {
                                        dispatch(addItem(props))
                                    }} style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>
                                </div>
                            </div>
                            <Link as={`/checkout/contact`}  href={{pathname:"/checkout",query:{item:JSON.stringify({...props,quantity:0})}}}>
                                <button className={'btn'} style={{width:'100%',height:'2.6em',borderRadius:"50px"
                                    ,backgroundColor:"#56cfe1",fontSize:'14px',fontWeight:'bold',color:'white',marginTop:"1em"}}>Check Out</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
