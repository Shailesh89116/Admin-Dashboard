import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext";
import ProductList from "./pages/productList/ProductList";
import OrderList from "./pages/orderList/OrderList";
import SingleOrder from "./pages/singleOrder/SingleOrder";
function App() {


  const {darkMode}= useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "dark"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" btn = "Add User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" btn="Add Product"/>} />
            </Route>
            <Route path="orders">
              <Route index element={<OrderList />} />
              <Route path=":orderId" element={<SingleOrder />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
