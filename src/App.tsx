import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import ShopContextProvider from "./Context/shop-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
