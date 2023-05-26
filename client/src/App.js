import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import AuthLayout from "./layouts/AuthLayout";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.shop} element={<Shop />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.cart} element={<Cart />} />
          <Route path={ROUTES.checkout} element={<Checkout />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.signup} element={<SignUp />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
