import {useEffect, useRef, useState} from "react";
import style from "./index.module.css";
export function SizeSelector(props){
    const ref=useRef(null)
    const [size,setSize]=useState("S")
    useEffect(()=>{







    },[])

    return(
      <>
          <div style={{display:'flex',flexDirection:"column"}}>
              <span style={{fontSize:"14px",fontWeight:'700',textTransform:'uppercase'
                  ,marginTop:"1em",marginBottom:"0.5em"}}>Size:{}</span>
              <div style={{display:'flex',flexDirection:'row',marginBottom:'0.5em'}}>
                  <div style={{display:'flex',flexDirection:'row'}}>
                      <div style={{display:'flex',flexDirection:'row',width:"1.5em",height:"1.5em",borderRadius:"50%",backgroundColor:"black"}}>
                          <span style={{margin:'auto',color:"white"}}>{"S"}</span>
                      </div>
                  </div>
              </div>
          </div>
      </>
         )
}
