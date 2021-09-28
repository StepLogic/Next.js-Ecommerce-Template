import dynamic from "next/dynamic";
import {BuyCount} from "../../../elements/buyCount";
import {FiEdit} from "react-icons/fi";
import {RiDeleteBin6Line} from "react-icons/ri";
import style from "./index.module.css"
import {useDispatch} from "react-redux";
import {addItem, decreaseQuantity, increaseQuantity, removeItem} from "../../../utils/actions";
import {BiHeart, BiMinus, BiPlus} from "react-icons/bi";
const MediaQuery  = dynamic(() => import('react-responsive/src'), { ssr: false });
export default function CartItem(props) {
    const dispatch = useDispatch()
    let width="95%"
    return (
        <>
        <div {...props} style={{display:'flex',flexDirection:'row',justifyContent:"space-evenly",padding:"0.5em",borderTop:"1px solid rgb(234, 233, 233)"}}>
            <img src={"/assets/sampleImages/i.png"} style={{width:"45%",height:"10em"}}/>
            <div style={{display:"flex",flexDirection:'column'}}>
                <span style={{display:"block",fontSize:"14px",lineHeight:"20px"}}>{props.name}</span>
                <span style={{display:"block",color:"#999",fontSize:"14px",lineHeight:"20px"}}>{props.size}</span>
                <span style={{display:"block",color:"#696969",fontSize:"14px",lineHeight:"20px"}}>{`$${props.price}`}</span>
                <>
                    <div style={{display:'flex',flexDirection:"row",marginTop:"1.6em",marginBottom:"1.6em"}}>
                        <div style={{display:'flex',flexDirection:"row",height:"2.6em",borderRadius:'50px',borderStyle:"solid",borderWidth:"thin",width:width}}>
                            {props.quantity<2?<RiDeleteBin6Line onClick={()=> {
                                    dispatch(removeItem(props))
                                }} style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>
                                :<BiMinus onClick={()=> {
                                    dispatch(decreaseQuantity(props))
                                }} style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>}
                            <span style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}>{props.quantity}</span>
                            <BiPlus onClick={()=> {
                                dispatch(increaseQuantity(props))
                            }} style={{margin:'auto',fontSize:"20px",fontWeight:"bolder"}}/>
                        </div>
                    </div>
                </>
                <div style={{display:'flex',flexDirection:'row',marginTop:"-0.6em",maxWidth:"50%",justifyContent:"space-evenly"}}>
                    <FiEdit className={style.link}/>
                    <RiDeleteBin6Line onClick={()=>{dispatch(removeItem(props))}} className={style.link}/>
                </div>
            </div>
        </div>
        </>);
}
