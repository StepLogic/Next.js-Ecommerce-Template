
import {FiEdit} from "react-icons/fi";
import style from "./index.module.css";
import {RiDeleteBin6Line} from "react-icons/ri";

export default function CheckoutItem(props) {
    return (
        <div style={{display:'flex',flexDirection:'row',padding:"0.5em",borderTop:"1px solid rgb(234, 233, 233)"}}>
            <div  style={{display:"flex",flexDirection:'column',position:'relative',marginRight:"1em"}}>
                <div style={{display:"flex",flexDirection:'row',position:"absolute",top:"-0.4em",right:"-0.4em",zIndex:4,justifyContent:'center'
                ,backgroundColor:'rgba(114,114,114,0.9)',width:"1.6em",height:"1.6em",borderRadius:'50%'}}>
                    <span  style={{color:"white",margin:"auto",fontSize:"0.8571428571em",lineHeight:"1.75em",fontWeight:"500"}}>0</span>
                </div>
            <img src={"/assets/sampleImages/i.png"} style={{width:"64.4px",height:"64.4px"}}/>
            </div>
            <div style={{display:"flex",flexDirection:'column',marginLeft:'2em'}}>
                <span style={{display:"block",fontSize:"14px",lineHeight:"20px"}}>Ridley Waist Pants</span>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"1em"}}>
                <span style={{display:"block",color:"#999",fontSize:"14px",lineHeight:"20px"}}>S</span>
                <span style={{display:"block",color:"#696969",fontSize:"14px",lineHeight:"20px",marginLeft:'auto'}}>$30.00</span>
                </div>
            </div>
        </div>
    );
}
