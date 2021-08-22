import dynamic from "next/dynamic";
import {BuyCount} from "../../../elements/buyCount";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBin6Line} from "react-icons/ri";
import style from "./index.module.css"
const MediaQuery  = dynamic(() => import('react-responsive/src'), { ssr: false });
export default function CartItem(props) {
    console.log(props.openCart)
    return (
        <>
        <div style={{display:'flex',flexDirection:'row',justifyContent:"space-evenly",padding:"0.5em",borderTop:"1px solid rgb(234, 233, 233)"}}>
            <img src={"/assets/sampleImages/i.png"} style={{width:"45%",height:"10em"}}/>
            <div style={{display:"flex",flexDirection:'column'}}>
                <span style={{display:"block",fontSize:"14px",lineHeight:"20px"}}>Ridley Waist Pants</span>
                <span style={{display:"block",color:"#999",fontSize:"14px",lineHeight:"20px"}}>S</span>
                <span style={{display:"block",color:"#696969",fontSize:"14px",lineHeight:"20px"}}>$30.00</span>
               <BuyCount cart={true}/>
                <div style={{display:'flex',flexDirection:'row',marginTop:"-0.6em",maxWidth:"50%",justifyContent:"space-evenly"}}>
                   <FiEdit className={style.link}/>
                    <RiDeleteBin6Line className={style.link}/>
                </div>
            </div>
        </div>
        </>);
}
