import CarouselComponent from "../../elements/carouselComponent";
import React, { useMemo, useRef, useState } from "react";
import style from "./index.module.css";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";

export default function Desktop(props) {
  const count = useSelector((state) => state.selectedItems);
  const cartItems = useMemo(() => {
    return count.map((value, i) => {
      return <CartItem {...value} key={value.name + "_" + i} />;
    });
  }, [count]);
  return (
    <>
      <div
        style={
          props.openCart
            ? {
                position: "fixed",
                zIndex: 4,
                width: "100%",
                height: "100%",
                top: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                transition: "0.4s",
              }
            : {
                position: "fixed",
                zIndex: 4,
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
          <div className={"d-flex flex-row p-20"}>
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
                lineHeight: "20px",
                margin: "auto 1em",
              }}
            >
              Shopping Cart
            </span>
          </div>
          {cartItems}
          {count.length > 0 ? (
            <button
              className={"btn"}
              style={{
                width: "70%",
                height: "2.6em",
                borderRadius: "50px",
                backgroundColor: "#56cfe1",
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2em",
              }}
            >
              Check Out
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
