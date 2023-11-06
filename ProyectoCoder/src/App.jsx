import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListemContainer from "./components/ItemListenContainer/ItemListemContainer";
import Footer from "./components/Footer/Footer";
import ItemCount from "./components/ItemCount/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import BannerPrincipal from "./components/BannerPrincipal/BannerPrincipal";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={[
              <BannerPrincipal key="1" />,
              <ItemListemContainer greeting={"All products"} key="2"/>,
            ]}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListemContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="*"
            element={
              <h1 className="h-[50vh] flex items-center justify-center">
                404 not found
              </h1>
            }
          />
        </Routes>{" "}
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
