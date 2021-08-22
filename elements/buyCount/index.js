import {useEffect, useRef, useState} from "react";
import style from "./index.module.css";
import {BiHeart, BiMinus, BiPlus} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";
export function BuyCount(props){
    const ref=useRef(null)
    const [count,setCount]=useState(0)
    useEffect(()=>{

    },[])
    let width=props.cart?"90%":"30%"
    return(
      <>
          <div style={{display:'flex',flexDirection:"row",marginTop:"1.6em",marginBottom:"1.6em"}}>
          <div style={{display:'flex',flexDirection:"row",height:"2.6em",borderRadius:'50px',borderStyle:"solid",borderWidth:"thin",width:width}}>
              {props.cart&&count<2?<RiDeleteBin6Line style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>:<BiMinus style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>}
              <span style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}>{count}</span>
                <BiPlus style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>
          </div>
              {props.cart?<></>:   <div style={{display:'flex',flexDirection:"row",marginLeft:'2em',
                  width:'2.6em',height:"2.6em",borderRadius:'50%',borderStyle:"solid",borderColor:"black",borderWidth:"1px"
                  ,marginTop:"auto",marginBottom:'auto'}}>
                  <BiHeart style={{margin:'auto'}}/>
              </div>}

          </div>
      </>
         )
}
