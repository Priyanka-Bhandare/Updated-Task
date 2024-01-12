import React, { useContext, ChangeEvent } from "react";
import { useShopContext } from "../../Context/shop-context";

type CartItemProps = {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
};

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { id, image, title, description, price } = data;

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
  } = useShopContext();

  const itemQuantity = cartItems ? cartItems[id] : 0;

  return (
    <div className="cartItem">
      <img src={image} alt={title} />

      <div className="description">
        <p className="TitleFont">
          <b>{title}</b>
        </p>
        <p>Rs. {price * itemQuantity}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={itemQuantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateCartItemCount(Number(e.target.value), id);
            }}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
