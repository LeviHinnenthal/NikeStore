import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import BannerPrincipal from "./components/BannerPrincipal/BannerPrincipal";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";
import WebFont from "webfontloader";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";
import Summary from "./components/Checkout/Summary";


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lato"],
      },
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={[
                <BannerPrincipal key="1" />,
                <ItemListContainer greeting={"All products"} key="2" />,
              ]}
            />
            <Route path="/shop" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/summary" element={<Summary />} />
            <Route
              path="*"
              element={
                <h1 className="h-[50vh] flex items-center justify-center">
                  404 not found
                </h1>
              }
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
