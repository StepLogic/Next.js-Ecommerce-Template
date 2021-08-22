import {VscLocation} from "react-icons/vsc";
import {AiOutlineMail} from "react-icons/ai";
import {FiPhone} from "react-icons/fi";
import {HiOutlineLocationMarker} from "react-icons/hi";

export default function Desktop(props) {
    return (
        <>
            <div className={"container-fluid"} style={{backgroundColor:"#f5f5f5",marginTop:"4em"}}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <div className={"column"}>
                            <img className={"img-fluid"} src={"/assets/img.png"}
                                 style={{maxWidth:"110px",maxHeight:"42px",marginTop:"2em",marginBottom:"2em"}}/>
                            <div style={{display:"flex",flexDirection:"row",marginTop:"1em"}}>
                             <HiOutlineLocationMarker style={{fontSize:"2.4em",color:"grey"}}/>
                                <span style={{marginTop:'auto',marginBottom:'auto', lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>184 Main Rd E, St Albans
                                    VIC 3021, Australia</span>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",marginTop:"1em"}}>
                                <AiOutlineMail style={{fontSize:"2em",color:"grey"}}/>
                                <span style={{marginTop:'auto',marginBottom:'auto', lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>outline@gmail.com</span>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",marginTop:"1em"}}>
                                <FiPhone style={{fontSize:"2em",color:"grey"}}/>
                                <span style={{marginTop:'auto',marginBottom:'auto', lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>+(233)244909034</span>
                            </div>
                        </div>
                    </div>
                    <div className={"col-4"}>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <span style={{maxWidth:"110px",maxHeight:"42px",marginTop:"2em",marginBottom:"2em"}}>Categories</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>Category One</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>Category One</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>Category One</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>Category One</span>
                        </div>
                    </div>
                    <div className={"col-4"}>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <span style={{maxWidth:"110px",maxHeight:"42px",marginTop:"2em",marginBottom:"2em"}}>Information</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>About Us</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>Terms & Conditions</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>Shipping & Delivery</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>Privacy Policy</span>
                            <span style={{marginTop:"1em", lineHeight:1.75,fontSize:"14px",color:"grey",fontWeight:400}}>FAQs</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </> )
}
