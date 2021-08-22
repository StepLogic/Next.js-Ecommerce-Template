import {useEffect, useRef, useState} from "react";
import style from "./index.module.css";
import {FaBars, FaSearch} from "react-icons/fa";
import CartButton from "../../elements/cartButton";
import WishListButton from "../../elements/wishListButton";
import SearchButton from "../../elements/searchButton";
import UserButton from "../../elements/userButton";
import CustomItem from "./navItem";
import Link from "next/link";
import CartComponent from "../cartComponent";
import {AiOutlineClose} from "react-icons/ai";
import {Overlay,Popover} from "react-bootstrap";
import {IoIosArrowUp} from "react-icons/io";
import UserMenu from "./userMenu";
export default function Mobile(){
    const [onSearch,setOnSearch]=useState(false);
    const  searchText=useRef(null);
    const [openMenu,setOpenMenu]=useState(false);
    const [openCart,setOpenCart]=useState(false);
    const [openUserMenu,setUserMenu]=useState(false);
    let ref=useRef();
    const handleSearch=(event)=>{
        setOnSearch(false);
        event.preventDefault();}
    const handleMenuClick=(event)=>{

        setOpenMenu(!openMenu);
    }
    const handleCartClick=(event)=>{
        setOpenCart(!openCart);
    }
    const handleUserClick=(event)=>{
        setUserMenu(!openUserMenu);
    }
    useEffect(()=>{
        if (openMenu && ref.current!=null){
            openMenu? ref.current.focus():null;
        }
        console.log(openCart)
    },[openMenu])
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const refPopover = useRef(null);



        return(<>
            <div className={style.menuContainer} style={{backgroundColor:'white' ,overflow:"hidden",zIndex:5}}>

                    <div  ref={refPopover} className={style.menuHead}>
                        <button className={"btn btn-outline-dark"+style.menuButton} onClick={handleMenuClick}><FaBars/></button>
                        <div className={style.options}>
                            <SearchButton style={{fontSize:"1.2em"}}/>
                            <UserButton onClick={handleUserClick} style={{fontSize:"1.2em"}}/>
                            <WishListButton style={{fontSize:"1.2em"}}/>
                            <CartButton onClick={handleCartClick} style={{fontSize:"1.2em"}}/>
                        </div>

                </div>


                <div className={style.menuOverlay}
                     style={openMenu?{position:"fixed",width:"100%",height:"100%",left:0,top:0,zIndex:4,
                             backgroundColor:"rgba(0,0,0,0.5)",transition:"0.4s"}
                    :{position:"fixed",top:0,zIndex:4,width:"0%",height:"100%",left:0,transition:"0.4s"}} ref={ref}>
                    <div className={style.menu} style={{width:"70%",height:"100%",opacity:1}} >
                        <div className={"d-flex flex-row"}>
                            <button className={"btn"} onClick={handleMenuClick} style={{marginLeft:"auto"}}><AiOutlineClose/></button>
                        </div>
                        <Link as={`/collection/test`} href={"/collection/[id]"}>
                            <CustomItem/>
                        </Link>
                    </div>
                </div>
                <CartComponent  openCart={openCart} handleClick={handleCartClick}/>
                <UserMenu       openUserMenu={openUserMenu} handleClick={handleUserClick}/>
            </div>

        </>);
}
