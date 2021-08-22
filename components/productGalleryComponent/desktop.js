import style from "./index.module.css"
import {FaStar} from "react-icons/fa";
import {SizeSelector} from "../../elements/sizeSelector";
import {BuyCount} from "../../elements/buyCount";
export default function Desktop(props) {
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
                        <span style={{fontSize:"20px",fontWeight:"bold",marginTop:"0.4em"}}>Test</span>

                        <div style={{display:'flex',flexDirection:"row",marginTop:"1em",marginBottom:"1em"}}>
                            <span style={{color:"#696969",fontSize:'20px'}}>{`$${"40.00"}`}</span>
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
                            <BuyCount cart={false}/>
                            <button className={'btn'} style={{width:'100%',height:'2.6em',borderRadius:"50px"
                                ,backgroundColor:"#56cfe1",fontSize:'14px',fontWeight:'bold',color:'white',marginTop:"1em"}}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
