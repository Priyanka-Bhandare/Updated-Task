import React, { useState, createContext, ReactNode, useContext } from "react";
import Products from "../products";

interface shopContextData {
  cartItems: Record<number, number> | null;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}

const getDefaultCart = (): Record<number, number> => {
  let cart: Record<number, number> = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext<shopContextData | null>(null);

interface ShopContextProviderProps {
  children: ReactNode;
}

export default function ShopContextProvider({
  children,
}: ShopContextProviderProps) {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const Item in cartItems) {
      if (cartItems[Item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(Item));
        totalAmount += cartItems[Item] * (itemInfo?.price || 0);
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = (): number => {
    let totalItems = 0;
    for (const Item in cartItems) {
      if (cartItems[Item] > 0) {
        totalItems += cartItems[Item];
      }
    }
    return totalItems;
  };

  const contextValue: shopContextData = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export const useShopContext = (): shopContextData => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
