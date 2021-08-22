import dynamic from "next/dynamic";
import Desktop from "./desktop";
import Mobile from "./mobile";
import {useState} from "react";

const MediaQuery  = dynamic(() => import('react-responsive/src'), { ssr: false });
export default function CartComponent(props) {

    return (
        <>
            <MediaQuery minDeviceWidth={428}>
                {(matches) =>
                    matches ?<Desktop {...props}/>:<Mobile {...props}/>
                }
            </MediaQuery>
        </>);
}
