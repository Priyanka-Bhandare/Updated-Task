import React, { useContext } from "react";
import { useShopContext } from "../Context/shop-context";

import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import logo from "../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const { cartItems, getTotalCartItems } = useShopContext();
  const totalItems = getTotalCartItems();
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="me-auto ms-5"
          src={logo}
          alt="Company Logo"
          style={{ height: "70px", width: "70px" }}
        />
      </Link>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />{" "}
          {totalItems > 0 ? <> ({totalItems}) </> : <></>}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
