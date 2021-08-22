import Image from "next/image"
import {useState} from "react";
import style from "./index.module.css"
import CarouselComponent from "../../elements/carouselComponent";
export default function Mobile(props){
        return(<>
        <section style={{width:"100%",height:'100%',marginTop:"12%"}}>
          <CarouselComponent/>
        </section>
    </>)

}
