import style from "./index.module.css"
import Desktop from "../../bannerComponent/desktop";
import Mobile from "../../bannerComponent/mobile";
import dynamic from "next/dynamic";
import React, {useState} from "react";
import Link from "next/link";
const MediaQuery  = dynamic(() => import('react-responsive/src'), { ssr: false });
export default function CustomItem(){
    const [textColor,setTextColor]=useState("black")

    return(<>
        <MediaQuery minDeviceWidth={428}>
            {(matches) =>
                matches ?
                    <Link as={`/collections/test`}  href={{pathname:"/collections/[slug]",query:{collection:"test"}}}>
                    <div className={style.menuItem} style={{position:'relative',display:'flex',flexDirection:'column',width:"fit-content"}}>
                    <div style={{display:"flex",flexDirection:"row",width:"2em",height:'1em',backgroundColor:'red'
                        ,position:'absolute',top:"10%",left:"70%",marginBottom:"-1em",borderRadius:"45px"}}>
                        <span style={{margin:'auto',fontSize:10,color:"white"}}>Sale</span>
                    </div>
                    <span style={{fontSize:"14px",fontWeight:"540",padding:"17.5px",lineHeight:1}}
                          >Category</span>
                </div>
                    </Link>:
                    <Link as={`/collections/test`}  href={{pathname:"/collections/[slug]",query:{collection:"test"}}}>
                        <div
                            onMouseEnter={()=>{setTextColor("#56cfe1")}}
                            onMouseLeave={()=>{setTextColor("black")}}
                            className={style.menuItem} style={{position:'relative',display:'flex',flexDirection:'column',width:"fit-content"}}>
                            <div style={{display:"flex",flexDirection:"row",width:"2em",height:'1em',backgroundColor:'red'
                                ,position:'absolute',top:"10%",left:"25%",marginBottom:"-1em",borderRadius:"45px"}}>
                                <span style={{margin:'auto',fontSize:10,color:"white"}}>Sale</span>
                            </div>
                            <span style={{fontSize:"14px",color:textColor,fontWeight:"540",padding:"17.5px",lineHeight:1}}
                            >Category</span>
                        </div>
                    </Link>


            }
        </MediaQuery>

    </>);
}
