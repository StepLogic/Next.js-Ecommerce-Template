import Link from "next/link";
import CustomItem from "./navItem";
import UserButton from "../../elements/userButton";
import { Search } from "react-bootstrap-icons";
import SearchButton from "../../elements/searchButton";
import CartButton from "../../elements/cartButton";
import WishListButton from "../../elements/wishListButton";
import CartComponent from "../cartComponent";
import { useState } from "react";
import UserMenu from "./userMenu";
export default function Desktop(props) {
  const [openCart, setOpenCart] = useState(false);
  const [openUserMenu, setUserMenu] = useState(false);
  const handleCartClick = (event) => {
    setOpenCart(!openCart);
  };
  const handleUserClick = (event) => {
    setUserMenu(!openUserMenu);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          zIndex: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          className={"img-fluid"}
          src={"/assets/img.png"}
          style={{
            maxWidth: "95px",
            maxHeight: "38.5px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "0.4em",
            marginBottom: "0.4em",
          }}
        >
          <Link as={`/collection/test`} href={"/collection/[id]"}>
            <CustomItem />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <SearchButton style={{ fontSize: "1.2em" }} />
          <UserButton onClick={handleUserClick} style={{ fontSize: "1.2em" }} />
          <WishListButton style={{ fontSize: "1.2em" }} />
          <CartButton onClick={handleCartClick} style={{ fontSize: "1.2em" }} />
          <CartComponent openCart={openCart} handleClick={handleCartClick} />
          <UserMenu openUserMenu={openUserMenu} handleClick={handleUserClick} />
        </div>
      </div>
    </>
  );
}
