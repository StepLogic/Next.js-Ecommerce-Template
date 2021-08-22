import React, {useEffect, useRef, useState} from "react";
import style from "./index.module.css";
import dynamic from "next/dynamic";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import {Carousel} from "react-bootstrap";

export default function CarouselComponent(props) {
    const [currentImageList,setImageList]=useState(["/assets/headerCarouselImages/l.png",
        "/assets/headerCarouselImages/j.png","/assets/headerCarouselImages/k.png"])
    const [currentIndex,setCurrentIndex]=useState(0);
    let prevIndex=0
    let imageRefs=[]
    let buttonRefs=[]
    const sliderRef=useRef(null);
    const interval=500
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const imageSlider=()=>{
        return (
            <div className={style.carouselIndicators}>
            <Carousel fade controls={false} >
            {currentImageList.map((image,i)=>{
                let value=getRandomInt(2)
                let array=[{display:"flex",flexDirection:"column",marginTop:'auto',marginBottom:'auto',width:"fit-content",marginRight:"auto",marginLeft: "1em", alignItems:"flex-start"},{display:"flex",flexDirection:"column",marginTop:'auto',marginBottom:'auto',width:"fit-content",marginLeft:'auto',alignItems:"flex-end",marginRight: "1em"}]
                let orientation=array[value]
                console.log(value)
                return(
                    <Carousel.Item >
                        <div style={{display:'flex',width:"100%",height:"16em",flexDirection:"column",background:`url(${image})`,
                            backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}>
                            <div style={orientation}>
                                <h3 style={{textTransform:'uppercase',color:'black',fontSize:12,fontWeight:"500",width:"fit-content"}}>new addition</h3>
                                <h2 style={{textTransform:'uppercase',color:'black',fontSize:25,fontWeight:"600",width:"fit-content"}}>new addition</h2>
                                <button className={"btn"} style={{width:150,height:40,paddingRight:"2em",paddingLeft:"2em",paddingTop:"0.5em",paddingBottom:"0.5em"
                                    ,backgroundColor:"black" ,color:"white",fontWeight:"bold",textTransform:"capitalize",fontSize:"0.8em"}}>Explore Now</button>
                            </div>
                        </div>
                    </Carousel.Item>
            )
            })}
            </Carousel>
            </div>
        )



    }
    return (
        <>
            {imageSlider()}
        </>
    );
}
