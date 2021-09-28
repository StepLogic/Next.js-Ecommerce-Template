import Link from "next/link";
import React, { useState } from "react";
import style from "../../cartComponent/index.module.css";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../../cartComponent/cartItem";
import AuthMenu from "../../authFormComponent/userMenu";
export default function Desktop(props) {
  const [openCart, setOpenCart] = useState(false);
  const handleCartClick = (event) => {
    setOpenCart(!openCart);
  };
  return (
    <>
      <div
        style={
          props.openUserMenu
            ? {
                position: "fixed",
                zIndex: 5,
                width: "100%",
                height: "100%",
                top: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                transition: "0.4s",
              }
            : {
                position: "fixed",
                zIndex: 5,
                width: "0%",
                height: "100%",
                right: 0,
                top: 0,
                transition: "0.4s",
              }
        }
      >
        <div
          className={style.menu}
          style={{
            width: "20%",
            height: "100%",
            opacity: 1,
            overflow: "scroll",
          }}
        >
          <div
            className={"d-flex flex-row p-20"}
            style={{ borderBottom: "1px solid rgb(225, 223, 223)" }}
          >
            <button
              className={"btn"}
              onClick={props.handleClick}
              style={{ marginRight: "auto" }}
            >
              <AiOutlineClose />
            </button>
            <span
              style={{
                fontSize: "16px",
                lineHeight: "1.428em",
                margin: "auto 1em",
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              Login
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <AuthMenu />
          </div>
        </div>
      </div>
    </>
  );
}
