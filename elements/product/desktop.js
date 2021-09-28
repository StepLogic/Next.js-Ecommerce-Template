import CarouselComponent from "../../elements/carouselComponent";
import React, {useRef, useState} from "react";
import style from "./index.module.css";
import {Carousel} from "react-bootstrap";
import {FaStar} from "react-icons/fa";
import {BiHeart} from "react-icons/bi";
import {AiOutlineEye} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import Link from "next/link";
import {addItem} from "../../utils/actions";
import {useDispatch} from "react-redux";
export default function Desktop(props){
    const [image,setImage]=useState(props?.thumbnails[0])
    const [over,setOverlay]=useState(false)
    const [qv,setQv]=useState(false)
    const [ac,setAc]=useState(false)
    const dispatch = useDispatch()
    const ref=useRef(null)

    function stars(){
        let array=[];
        for(let i=0;i<props.rating;i++){
            array.push(<FaStar style={{color:'yellow'}}/>)
        }
        return array
    }
    const overlay=()=>{
        let qvColor=qv?"black":"white"
        let qvContent=qv? <Link as={`/item/test`}  href={{pathname:"/item/[slug]",query:{item:JSON.stringify({...props,quantity:0})}}}>
            <AiOutlineEye  style={{marginTop:'auto',marginBottom:'auto',marginLeft:"auto",marginRight:"auto",fontSize:"18px",color:"white"}}/>
        </Link>: <span style={{margin:'auto'}}>Quick View</span>
        let acColor=ac?"black":"white"
        let acContent=ac?  <FiShoppingCart onClick={()=>{dispatch(addItem({...props}))}} style={{marginTop:'auto',marginBottom:'auto',marginLeft:"auto",marginRight:"auto",fontSize:"18px",color:'white'}}/>
            : <span style={{margin:'auto'}}>Quick Shop</span>


        return(
            <div style={over?{position:'absolute',display:"flex",backgroundColor:"rgba(0,0,0,0.2)",flexDirection:"column",zIndex:3,top:"0", width:"18em",transition:"0.5s ease-in-out"}
                :{maxWidth:"100%",maxHeight:"0px",display:"flex",flexDirection:"column",position:"absolute",top:"-1em"}}
                 onMouseLeave={()=>{setImage(props?.thumbnails[0]);setOverlay(false)}}>
                <div  style={{display:'flex',flexDirection:"row",fontSize:"18px",borderRadius:"50px",backgroundColor:qvColor,width:"50%"
                    ,height:"40px",transition:"0.5s",marginRight:"auto",marginLeft:"auto",marginTop:"7.5em",opacity:1}} onMouseEnter={()=>{setQv(true)}} onMouseLeave={()=>{setQv(false)}}>
                <div style={{display:'flex',flexDirection:"row",margin:"auto"}}>
                    {qvContent}
                </div>
                </div>

                <div style={{marginTop:"1em",marginBottom:"7.5em",display:'flex',flexDirection:"row",fontSize:"18px"
                        ,borderRadius:"50px",backgroundColor:acColor,width:"50%",height:"40px",marginRight:"auto",marginLeft:"auto",opacity:1}} onMouseEnter={()=>{setAc(true)}} onMouseLeave={()=>{setAc(false)}}>
                    <div style={{display:'flex',flexDirection:"row",margin:"auto"}}>
                        {acContent}
                    </div>
                </div>
            </div>
        )
    }
    return(<>
        <div {...props} style={{display:"flex",flexDirection:"column",justifyContent:"space-between",maxWidth:"25%"}}>
            <div style={{position:"relative",zIndex:3,top:"2.2em",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingLeft:"5%",paddingRight:"0",maxWidth:"86%"}}>
                <BiHeart style={{marginTop:'auto',fontSize:"1.4em",marginBottom:'auto'}}/>
                <div style={{display:"flex",flexDirection:'row',width:"1.6em",height:"1.6em",borderRadius:"50%",backgroundColor:'#ec3120'}}>
                    <span style={{fontSize:"9px",color:"white",marginTop:'auto',marginBottom:'auto',marginLeft:"auto",marginRight:"auto"}}>-50%</span>
                </div>
            </div>
            <div style={{display:'flex',position:"relative",flexDirection:"column",overflow:'hidden'}}>
                {overlay()}
                <div className={style.image} style={{position:"relative",backfaceVisibility:"hidden"}}>
                    <img ref={ref} onMouseEnter={()=> {setImage(props?.thumbnails[1]);setOverlay(true)}} loading={"lazy"} src={image} alt={`${props.name}-image`}  style={{maxWidth:"100%"}}/>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",marginTop:"0.5em"}}>
                <Link as={`/item/test`}  href={{pathname:"/item/[slug]",query:{item:"test"}}}>
                <span style={{textTransform:"capitalize",fontSize:"16px",fontWeight:"600",fontFamily:"Poppins"}}>{props.name}</span>
                </Link>
                <span style={{textTransform:"capitalize",fontSize:"14px",color:"#696969",}}><strike>{`$${props.price}`}</strike>    {`$${props.price}`}</span>
                <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between",marginTop:"0.25em"}}>

                    <div style={{display:"flex",flexDirection:'row',width:"16px",
                        height:"16px",borderRadius:"50%",
                        borderStyle:"solid",borderWidth:"1.5px",borderColor:"grey",padding:".5px"}}>
                        <div style={{display:"block"
                            ,width:"12px",height:"12px",borderRadius:"50%",
                            backgroundColor:'#ec3120'
                            ,margin:'auto',marginBottom:'auto',marginLeft:"auto",marginRight:"auto"}}>
                        </div>
                    </div>

                </div>
                {props.colors?null:null}
            </div>
        </div>
    </>)
}
