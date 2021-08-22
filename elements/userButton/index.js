import {FiShoppingCart} from "react-icons/fi";
import React from "react";
import {RiUser3Line} from "react-icons/ri";

export default function UserButton(props){

    return (
       
            <button className={"btn"} {...props}><RiUser3Line {...props}/></button>

    );
}

