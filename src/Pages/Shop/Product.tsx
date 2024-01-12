import React, { useContext } from "react";
import "./Shop.css";
import { useShopContext } from "../../Context/shop-context";

interface ProductProps {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ data }) => {
  const { id, image, title, description, price } = data;
  const { addToCart, cartItems } = useShopContext();
  const cartItemAmount = cartItems ? cartItems[id] : 0;

  return (
    <div
      className="card shadow-sm p-3 bg-white rounded"
      style={{ width: "19rem", border: "none", height: "520px" }}
    >
      <img
        src={image}
        className="card-img-top shadow-lg mb-2 p-3 bg-white rounded"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
          <p className="pt-3">
            <b>Rs. {price}</b>
          </p>
        </p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
};

export default Product;
