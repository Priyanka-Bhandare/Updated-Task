import React, { useContext } from "react";
import Products from "../../products";
import { useShopContext } from "../../Context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useShopContext();
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="Title">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((val) => {
          if (cartItems && cartItems[val.id] !== 0) {
            return <CartItem key={val.id} data={val} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="total">Total : Rs. {totalAmount} </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="checkout text-success" id="divCenter">
          <h4>Your Cart is Empty</h4>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
