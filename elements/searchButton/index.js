import {FiShoppingCart} from "react-icons/fi";
import React from "react";
import {RiUser3Line} from "react-icons/ri";
import {IoSearchOutline} from "react-icons/io5";

export default function SearchButton(props){

    return (

        <button className={"btn"} {...props}><IoSearchOutline  {...props}/></button>

    );
}

