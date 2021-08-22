import {AiOutlineCar} from "react-icons/ai";
import {BiSupport} from "react-icons/bi";
import {RiSecurePaymentLine} from "react-icons/ri";

export default function Mobile(props) {
    return (
        <>
            <div style={{display:"flex",flexDirection:"row",marginRight:"1em",marginLeft:"1em",marginTop:"2em",flexWrap:"wrap",justifyContent:"space-between",}}>
                <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',marginTop:"2em",maxWidth:"100%"}}>
                    <AiOutlineCar style={{fontSize:"4em",color:"#878787",marginRight:"0.5em"}}/>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:'space-between'}}>
                        <h3 style={{textTransform:'uppercase',fontWeight:"600",fontSize:"14px"}}>quick delivery</h3>
                        <p style={{fontSize:"14px",letterSpacing:1.2,lineHeight:1.2,color:"#878787",fontFamily:"Poppins",fontWeight:"bold"}}>Quick delivery to your doorstep immediately</p>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',marginTop:"2em",maxWidth:"100%"}}>
                    <BiSupport style={{fontSize:"4em",color:"#878787",marginRight:"0.5em"}}/>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:'space-between'}}>
                        <h3 style={{textTransform:'uppercase',fontWeight:"600",fontSize:"14px"}}>24/7 Support</h3>
                        <span style={{fontSize:"14px",letterSpacing:1.2,lineHeight:1.2,color:"#878787",fontFamily:"Poppins",fontWeight:"bold"}}>Quick delivery to your doorstep immediately</span>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:'space-between',marginTop:"2em",maxWidth:"100%"}}>
                    <RiSecurePaymentLine style={{fontSize:"4em",color:"#878787",marginRight:"0.5em"}}/>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:'space-between'}}>
                        <h3 style={{textTransform:'uppercase',fontWeight:"600",fontSize:"14px"}}>Secure Payment</h3>
                        <span style={{fontSize:"14px",letterSpacing:1.2,lineHeight:1.2,color:"#878787",fontFamily:"Poppins",fontWeight:"bold"}}>Quick delivery to your doorstep immediately</span>
                    </div>
                </div>
            </div></>
    );
}
