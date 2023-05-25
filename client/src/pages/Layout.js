import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Contact from "./Contact/index";
import About from "./About/index";
import Shop from "./Shop/index";
import Services from "./Services/index";
import Cart from "./Cart/index";
import Home from "./Home/index";
import Login from "./Login";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SignUp from "./SignUp";
import Checkout from "./Checkout";
function Layout() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
