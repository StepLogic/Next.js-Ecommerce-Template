import {useState} from "react";
import {FaStar} from "react-icons/fa";
import {BiHeart} from "react-icons/bi";
import style from "./index.module.css";
import {AiOutlineEye} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";

export default function Mobile(props){
    const [image,setImage]=useState(props?.thumbnails[0])

    function stars(){
        let array=[];
        for(let i=0;i<props.rating;i++){
            array.push(<FaStar style={{color:'yellow'}}/>)
        }
        return array
    }
    return(<>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",maxWidth:"50%"}}>
            <div style={{position:"relative",zIndex:3,top:"2.2em",display:"flex",flexDirection:"row",justifyContent:"space-between",paddingLeft:"5%",paddingRight:"0",maxWidth:"86%"}}>
                <BiHeart style={{marginTop:'auto',fontSize:"1.4em",marginBottom:'auto'}}/>
                <div style={{display:"flex",flexDirection:'row',width:"1.6em",height:"1.6em",borderRadius:"50%",backgroundColor:'#ec3120'}}>
                    <span style={{fontSize:"9px",color:"white",marginTop:'auto',marginBottom:'auto',marginLeft:"auto",marginRight:"auto"}}>-50%</span>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:"row",marginRight:"-1.8em",overflow:'hidden'}}>
                <div className={style.image} style={{position:"relative",backfaceVisibility:"hidden"}}>
                    <img onMouseEnter={()=> {setImage(props?.thumbnails[1])}} onMouseLeave={()=>{setImage(props?.thumbnails[0])}} loading={"lazy"} src={image} alt={`${props.name}-image`}  style={{maxWidth:"100%"}}/>
                </div>
                <div style={{display:'flex',flexDirection:"column",justifyContent:'space-between',height:"80px",backgroundColor:"white",marginTop:'auto',borderRadius:"50px",position:'relative',right:"3em"}}>
                    <div style={{ display:'flex',flexDirection:"row",fontSize:"18px",borderRadius:"50%",backgroundColor:"white",width:"40px",height:"40px"}}>
                        <AiOutlineEye style={{marginTop:'auto',marginBottom:'auto',marginLeft:"auto",marginRight:"auto",fontSize:"18px"}}/>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",fontSize:"18px",backgroundColor:"white",width:"40px",height:"40px",borderRadius:"50%"}}>
                        <FiShoppingCart style={{marginTop:'auto',marginBottom:'auto',marginLeft:"auto",marginRight:"auto",fontSize:"18px"}}/>
                    </div>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",marginTop:"0.5em"}}>
                <span style={{textTransform:"capitalize",fontSize:"16px",fontWeight:"600",fontFamily:"Poppins"}}>{props.name}</span>
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
