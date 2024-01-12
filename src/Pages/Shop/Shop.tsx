import React from "react";
import Products from "../../products";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle  mb-5">
        <h1>ShopName</h1>
      </div>
      <div className="products">
        {Products.map((val) => {
          return <Product data={val} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
